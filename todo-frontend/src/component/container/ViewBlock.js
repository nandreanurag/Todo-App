import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodoData } from '../../store/todo-actions'
import Block from './Block'
import './ViewBlock.scss'
const ViewBlock = (props) => {
    const [isShow, setisShow] = useState(false)
    const [isMarkShow, setisMarkShow] = useState(props.status)
    const viewBlockStyle=!isShow?'view-block-container backgroundColor-block':'view-block-container heightwidthBlock' // logic to induce dynamic styling
    const dispatch=useDispatch()
    const displayHandler = (event) => {
        event.preventDefault()
        setisShow(!isShow)
    }
    // mark as complete handler
    const markCompleteHandler=(event)=>{
        event.preventDefault(event)
        setisMarkShow(!isMarkShow)
        dispatch(updateTodoData({_id:props.id,title:props.title,description:props.description,duedate:props.dueDate,status:!isMarkShow ,role:'updateStatus'}))
        
    }
    return (
        <Fragment>
            <div className={viewBlockStyle} >
                {!isShow &&
                    <div className='title-block'>
                        {isMarkShow&&<img style={{height:'30px' ,width:'30px'}} src="Icons/check-mark.png"/>}
                        <em style={{textDecoration:isMarkShow?'line-through':''}}>{props.title}</em>
                        {<button className='button-45' onClick={markCompleteHandler} type='button'>Mark as Complete</button>}
                    </div>
                }
                {!isMarkShow&&<button className='button-85' onClick={displayHandler} type='button'>View</button>}
                {isShow && !isMarkShow&& <Block operation={'view'} id={props.id} key={props.key} duedate={props.duedate} title={props.title} description={props.description} />}
            </div>
        </Fragment>

    )
}
export default ViewBlock