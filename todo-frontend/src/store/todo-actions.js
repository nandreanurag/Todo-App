import { todoActions } from './index.js'


// created a fetch action which returns a dispatch func
// called when ever user clicks view todo button
export const fetchTodoData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8081/todo/items')
            console.log(response)
            // handling api errors
            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }
            const data = await response.json()
            console.log(data)
            return data
        }
        try {
            const todoData = await fetchData()
            // dispatch event to store
            dispatch(todoActions.replaceTodo({
                items: todoData.items || []
            }))
        } catch (error) {
            // dispatch(uiActions.showNotification({
            //     status: 'error',
            //     title: 'Error!',
            //     message: 'fetching cart data Failed!'
            // }))
        }


    }
}
// created a addTodo action which returns a dispatch func
// called when ever user clicks add todo button
export const addTodoData = (item) => {
    return async dispatch => {
        const addData = async () => {
            // console.log(item._id)
            console.log({ _id: item._id, title: item.title, description: item.description, duedate: item.duedate })
            const itemObj = { title: item.title.trim(), description: item.description, duedate: item.duedate,status:false }
            const response = await fetch('http://localhost:8081/todo/items',
                { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(itemObj) })
            console.log(response)
            if (!response.ok) {
                throw new Error('Could not update todo Item!')
            }
            const data = await response.json()
            console.log(data)
            return data
        }
        try {
            const todoData = await addData()
            dispatch(todoActions.addItemToTodo({ items: todoData.items || [] }))
        } catch (error) {
            // dispatch(uiActions.showNotification({
            //     status: 'error',
            //     title: 'Error!',
            //     message: 'fetching cart data Failed!'
            // }))
        }


    }
}

// created a update action which returns a dispatch func
// called when ever user clicks edit todo button
export const updateTodoData = (item) => {
    return async dispatch => {
        const updateData = async () => {
            // console.log(item._id)
            // console.log({_id:item._id,title:item.title,description:item.description,duedate:item.duedate})
            const itemObj = { role:item.role, item: { _id: item._id, status:item.status, title: item.title, description: item.description, duedate: item.duedate } }
            //console.log(itemObj)
            const response = await fetch('http://localhost:8081/todo/items',
                { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(itemObj) })
            console.log(response)
            if (!response.ok) {
                throw new Error('Could not update todo Item!')
            }
            const data = await response.json()
            console.log(data)
            return data
        }
        try {
            const todoData = await updateData()
            dispatch(todoActions.updateItemInTodo({ items: todoData.items || [] }))
        } catch (error) {
            // dispatch(uiActions.showNotification({
            //     status: 'error',
            //     title: 'Error!',
            //     message: 'fetching cart data Failed!'
            // }))
        }


    }
}

// created a delete action which returns a dispatch func
// called when ever user clicks delete todo button
export const deleteTodoData = (id) => {
    return async dispatch => {
        const deleteData = async () => {
            const response = await fetch('http://localhost:8081/todo/items?itemId=' + id, { method: 'DELETE' })
            console.log(response)
            if (!response.ok) {
                throw new Error('Could not delete todo Item!')
            }
            const data = await response.json()
            console.log(data)
            return data
        }
        try {
            const todoData = await deleteData()
            dispatch(todoActions.removeItemFromTodo({ id: id }))
        } catch (error) {
            // dispatch(uiActions.showNotification({
            //     status: 'error',
            //     title: 'Error!',
            //     message: 'fetching cart data Failed!'
            // }))
        }


    }
}