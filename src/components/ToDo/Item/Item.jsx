import React,{useRef} from 'react';
import './Item.css';
import AddTodo  from '../../AddTodo/AddTodo'

const clickOutSideRef = (content_ref,toggle_ref) =>{
    document.addEventListener('click',(e)=>{
        //user click toggle
        if(toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('active')
        } else{
            //user click outside toggle and content
            if(content_ref.current && content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Item = (props) => {

    const {item} = props;
    const inputRef = useRef(true);
    
    // drag
    const dragStart = e=>{
        const target = e.target;
        e.dataTransfer.setData('item_id',target.id )

    }

    const dragOver = e =>{
        e.stopPropagation();
    }

    const modal_toggle_el =  useRef(null);
    const modal_content_el = useRef(null);
   
    clickOutSideRef( modal_content_el,modal_toggle_el);
    const closeMenu = () => modal_content_el.current.classList.remove('active')

    return (
        <div>
            <div className='item' id={`item_id ${props.id}`} draggable={true} onDragStart={dragStart} onDragOver={dragOver} >
                    <div className="todo-item" ref={modal_toggle_el}  >
                        <p className="title"> <i className="far fa-file-alt file-icon" ></i> {item.item[0]}</p>
                        <p className="title">{item.item[1]}</p>
                        <p className="date-time"><i className="far fa-clock"></i>{item.item[2]}</p>
                        <p className="date-time"><i className="far fa-calendar-alt"></i>{item.item[3]}</p>
                        <p className="priority-st">{item.item[4]}</p>
                        <p className="user"><i className="far fa-user"></i>{item.item[5]}</p>               
                    </div>
                <div  ref={modal_content_el} ></div>
                <AddTodo click = {closeMenu}/>
             </div>
        </div>
       
    )
}

 export default Item;