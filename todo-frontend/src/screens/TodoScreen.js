import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Block from "../component/container/Block";
import ViewBlock from "../component/container/ViewBlock";
import dateformat from "dateformat";
import './TodoScreen.scss'
import { fetchTodoData } from "../store/todo-actions";
const TodoScreen = () => {
    const [isShow, setisShow] = useState(false)
    const [isShowAdd, setisShowAdd] = useState(false)
    const dispatch = useDispatch()
    // executed whenever user clicks view buttonnp
     useEffect(() => {
        dispatch(fetchTodoData())
    }, [dispatch,isShow])
    const todoList = useSelector(state => state.todo.items)
    console.log(todoList)
    const viewTodoHandler = async (event) => {
        event.preventDefault()
        setisShow(!isShow)
        setisShowAdd(false)
    }
    const addTodoHandler = (event) => {
        // event.preventDefault()
        setisShowAdd(!isShowAdd)
        setisShow(false)

    }
    // when user clicks view View Block will be rendered
    // when user clicks add Block Block will be rendered
    return (
        <Fragment >
            <div className="toDoContainer">
                <button onClick={viewTodoHandler} className="todo-title">View Todo</button>
                <button onClick={addTodoHandler} className="todo-title">Add Todo</button>
                <div className="todo-items-block">
                    {!isShowAdd && isShow && <Fragment>
                        {todoList.map(i => <ViewBlock id={i._id} key={i._id} status={i.status} title={i.title} duedate={dateformat(i.duedate, "yyyy-mm-dd")} description={i.description} />)}</Fragment>}
                    {isShowAdd && !isShow && <Block addEvent={addTodoHandler} operation={'add'} />}
                </div>
            </div>
        </Fragment>

    )
}
export default TodoScreen