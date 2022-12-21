const Todo = require('../model/todo.js');
const itemService = require('../service/item.js')
const { validationResult } = require('express-validator/check');
exports.getItems = (req, res, next) => {
    itemService.getItems(req, res).catch(err => {
        next(err)
    })
}
exports.createItem = (req, res, next) => {
    const errors = validationResult(req);
    // handling I/p  validation errors
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    itemService.createItem(req, res).catch(err => {
        next(err)
    })
}
// update Item controller
exports.updateItem = (req, res, next) => {
    itemService.updateItem(req, res).catch(err => {
        next(err)
    })
}
// delete Item controller
exports.deleteItem = (req, res, next) => {
    itemService.deleteItem(req, res).catch(err => {
        next(err)
    })
}
// exports.getItems = (req, res, next) => {
//     Todo.find().then(items => {
//         res.status(200)
//             .json({
//                 message: 'Fetched Items successfully.',
//                 items: items
//             });
//     }
//     ).catch(err => {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     });
// };
// exports.createItem = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         const error = new Error('Validation failed, entered data is incorrect.');
//         error.statusCode = 422;
//         throw error;
//     }
//     const title = req.body.title
//     const description = req.body.description
//     const newTodo = new Todo({
//         title: title,
//         description: description
//     }
//     )
//     newTodo.save().then(result => {
//         res.status(200)
//             .json({
//                 message: 'Created Item successfully.',
//                 items: result
//             });
//     }).catch(err => {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     });
// }

// exports.updateItem = (req, res, next) => {
//     const title = req.body.title
//     const description = req.body.description
//     const userId = req.body._id
//     Todo.findById(userId).then(item => {
//         item.title = title
//         item.description = description
//         item.save().then(result => {
//             res.status(200)
//                 .json({
//                     message: 'Updated Item successfully.',
//                     items: result
//                 });
//         }).catch(err => {
//             const error = new Error('Error in Updating Item')
//             error.statusCode = 500
//             throw error
//         })
//     }).catch(err => {
//         const not_found_error = new Error('Item not found in DataBase')
//         not_found_error.statusCode = 404
//         throw not_found_error
//     }).catch(err => {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     });;
// }

// exports.deleteItem = (req, res, next) => {
//     const itemId = req.query.itemId;
//     // console.log(req)
//     // console.log(itemId)
//     Todo.findById(itemId).then(result => {
//         if (!result) {
//             const not_found_error = new Error('Item not found in DataBase')
//             not_found_error.statusCode = 404
//             throw not_found_error
//         }
//         return Todo.findByIdAndRemove(itemId)
//     })
//         .then(result => {
//             res.status(200).json({ message: 'Deleted Item.' });
//         }).catch(err => {
//             if (!err.statusCode) {
//                 err.statusCode = 500;
//             }
//             next(err);
//         });;
// }
