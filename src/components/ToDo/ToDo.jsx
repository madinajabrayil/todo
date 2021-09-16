import React, {useState,useRef} from 'react';
import './ToDo.css';
import Item from './Item/Item';
import AddTodo from '../AddTodo/AddTodo';
import { connect } from "react-redux";
import {addTodos} from "../../redux/reducer";

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

const ToDo = (props) => {

    // drop
    const drop = e =>{
        e.preventDefault();

        const item_id = e.dataTransfer.getData('item_id');
        const item = document.getElementById(item_id);

        item.style.display = 'block';
        e.target.appendChild(item);
    }

    const dragOver = e =>{  
        e.preventDefault();
    }



    const modal_toggle_el =  useRef(null);
    const modal_content_el = useRef(null);
    clickOutSideRef( modal_content_el,modal_toggle_el);
    const closeMenu = () =>{
        modal_content_el.current.classList.remove('active')
    } 
  
    
    const status = [       
             { 
                "statusclass":" status-todo",
                "statusname":"To Do",
                "icon":"fas fa-list status-icon",
                "addicon":"fas fa-plus add-new--icon"
                
            }, { 
                "statusclass":"status-inprogress",
                "statusname":"In Progress",
                "icon":"fas fa-spinner status-icon", 
                "addicon":"fas fa-plus add-new--icon"
                
            }, { 
                "statusclass":"status-done",
                "statusname":"Done",
                "icon":"fas fa-check status-icon", 
                "addicon":"fas fa-plus add-new--icon"
                
            }
        
        ]
    return (
        <div className='todo'>
            <button className="add-new-btn" ref={modal_toggle_el}>New</button>
            <div className="line"></div>
            <div className="todo-status" id={props.id} onDrop={drop} onDragOver={dragOver}>
            <div className="todo-status-item status-no">
                    <div className="list-title">
                        <span> <i className="fas fa-inbox status-icon"></i> No Status</span>
                    </div>
                    <div  ref={modal_content_el}></div>
                     <AddTodo click = {closeMenu}/>

                    {/* Items */}
                    <div className="todo-items">                      
                    {props.todos.map((item) => {
                        return (
                            <Item
                            id={`item-${item.id}`}
                            key={item.id}
                            item={item}
                            />                        
                        );
                    })}
                    </div>

            </div>
        {
            status.map((item,index)=>(
                <div className={`todo-status-item ${item.statusclass}`} key={index}>
                    <div className="list-title">
                        <span> <i className={item.icon}></i> {item.statusname}</span>
                    </div>
                    <div  ref={modal_content_el}></div>
                     <AddTodo click = {closeMenu}/>

                    {/* Items */}
                    <div className="todo-items">
                       
                    </div>
                 </div>
            ))
        }
              
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),     
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

