import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoData, deleteTodoData, updateTodoData } from '../../store/todo-actions'
import './Block.scss'
const Block = (props) => {
    const dispatch=useDispatch()
    const [title,setTitle]=useState(props.title)
    const [description,setDescription]=useState(props.description)
    const [dueDate,setdueDate]=useState(props.duedate)
    const displayStyle=props.operation==='view'?'block-container':'add-item'
    const titleHandler=(event)=>{
        event.preventDefault()
        setTitle(event.target.value)
    }
    const descriptionHandler=(event)=>{
        event.preventDefault()
        setDescription(event.target.value)
    }
    const dateHandler=(event)=>{
        event.preventDefault()
        setdueDate(event.target.value)
    }
    const editHandler=(event)=>{
        event.preventDefault()
        dispatch(updateTodoData({_id:props.id,title:title,description:description,duedate:dueDate,role:'updateItem'}))
        // setTitle('')
        // setDescription('')
        // setdueDate('')
    }
    const deleteHandler=(event)=>{
        event.preventDefault()
        dispatch(deleteTodoData(props.id))
        setTitle('')
        setDescription('')
        setdueDate('')
    }
    const addHandler=(event)=>{
        event.preventDefault()
        dispatch(addTodoData({title:title,description:description,duedate:dueDate}))
        setTitle('')
        setDescription('')
        setdueDate('')
        props.addEvent()
    }
    return (
        <div className={displayStyle}>
            <form >
                <div className="form-row input-title" >
                    <div className="form-group col-md-12">
                        <label for="inputTitle4">Title</label>
                        <input type="text" className="form-control" onChange={titleHandler} value={title} id="inputTitle4" placeholder="Title" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputDescription">Description</label>
                    <textarea className="form-control" value={description} onChange={descriptionHandler} id="inputDescription" rows="3"></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label for="inputDueDate4">Due Date</label>
                        <input type="date" value={dueDate} onChange={dateHandler} className="form-control" id="inputDueDate4" placeholder="Due Date" />
                    </div>
                </div>
                <div className='footer-button-block'>
                    {props.operation==='view'&&<button type="button" onClick={editHandler} className="btn btn-success">Edit Todo</button>}
                    {props.operation==='view'&&<button type="button" onClick={deleteHandler} className="btn btn-danger">Delete Todo</button>}
                    {props.operation==='add'&&<button type="button" onClick={addHandler} className="btn btn-danger">Add Todo</button>}
                </div>
            </form>
        </div>
    )
}
export default Block