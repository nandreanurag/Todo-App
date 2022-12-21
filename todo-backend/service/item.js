const moment = require('moment/moment.js');
const Todo = require('../model/todo.js');
exports.getItems = async (req, res) => {
    try {
        // fecthing records from underlying DB
        await Todo.find().then(items => {
            res.status(200)
                .json({
                    message: 'Fetched Items successfully.',
                    items: items
                });
        })
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        throw new Error(err)
    }
};

exports.createItem = async (req, res) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const duedate = moment(req.body.duedate, "YYYY-MM-DD") //moment("12-25-1995", "MM-DD-YYYY");
        const newTodo = new Todo({
            title: title,
            description: description,
            duedate: duedate
        }
        )
        // creating a new Todo Item
        await newTodo.save().then(result => {
            res.status(200)
                .json({
                    message: 'Created Item successfully.',
                    items: result
                });
        })
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        throw new Error(err)
    }
}
exports.updateItem = async (req, res) => {
    try {
        const title = req.body.item.title
        const description = req.body.item.description
        const userId = req.body.item._id
        const role = req.body.role
        const status = req.body.item.status
        // checking if given id is present in underlying DB
        await Todo.findById(userId).then(item => {
            // updating Item if it is present in underlying DB
            if (role === 'updateItem') {
                const duedate = moment(req.body.item.duedate, "YYYY-MM-DD")
                item.title = title
                item.description = description
                item.duedate = duedate
            }
            else if(role === 'updateStatus'){
                item.status = status
            }
            item.save().then(result => {
                res.status(200)
                    .json({
                        message: 'Updated Item successfully.',
                        items: result
                    });
            }).catch(err => {
                const error = new Error('Error in Updating Item')
                error.statusCode = 500
                throw error
            })
        }).catch(err => {
            // handling errors
            const not_found_error = new Error('Item not found in DataBase')
            not_found_error.statusCode = 404
            throw not_found_error
        })
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        throw new Error(err)
    }
}

exports.deleteItem = async (req, res) => {
    try {
        const itemId = req.query.itemId;
        // console.log(itemId)
        // checking if given id is present in underlying DB
        await Todo.findById(itemId).then(result => {
            if (!result) {
                const not_found_error = new Error('Item not found in DataBase')
                not_found_error.statusCode = 404
                throw not_found_error
            }
            // deleteing item if exists in underlying DB
            return Todo.findByIdAndRemove(itemId)
        }).then(result => {
            res.status(200).json({ message: 'Deleted Item.' });
        })
    }
    catch (err) {
        // handling errors
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        throw new Error(err)
    }
}