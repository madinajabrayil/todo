import React, {useState} from 'react';
import './AddTodo.css';
import { connect } from 'react-redux'
import { addTodos } from "../../redux/reducer";

const AddTodo = (props) => {
    
    console.log("props",props);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [startDate, setStartDate] = useState("");
    const [priority, setPriority] = useState("");
    const [user, setUser] = useState("");

    const add = () => {
       
        if (title === "" || description === "" ||deadline==="" || startDate==="" ) {
          alert("Input is Empty. Please select all of them");
        } else {
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item:  [title,description,deadline,startDate,priority,user]
           
          });
          setTitle("");
          setDescription("");
          setDeadline("");
          setStartDate("");
          setPriority("");
          setUser("")
        }
     }; 

    
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
       
    };
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };
    const handleChangeDeadline = (e) => {
        setDeadline(e.target.value);
    };
    const handleChangeStartDate= (e) => {
        setStartDate(e.target.value);
    };
    const handleChangePriority= (e) => {
        setPriority(e.target.value);
    };
    const handleChangeUser= (e) => {
        setUser(e.target.value);
    };

    return (
        <div className='detail-page'>   
           <i className="fas fa-times close"  onClick={()=> props.click()} ></i>

            <div className="detail">
                <form >
                    {/* <TaskInfo/> */}
                    <div className="task-info">
                        <div className="task-title">
                            <input type="text" 
                             className="task-title-input"
                             placeholder="Untitled"
                             onChange={(e) => handleChangeTitle(e)}
                             value={title}
                             />
                        </div>
                        <div className="task-desc">
                            <textarea name="task-desc"
                             id="task-desc" 
                             cols="90" 
                             rows="2" 
                             placeholder="Enter description.."  
                             onChange={(e) => handleChangeDescription(e)}
                             value={description}
                            ></textarea>
                        </div>
                    </div>

                    {/* <PriorityTask/> */}
                    <div className="priority">
                            <div className="priority-title">
                                <i className="fas fa-caret-down"></i>
                                <span>Priority</span>
                                
                            </div>
                            <div className="priority-status">
                       
                                <select name="priority" id="priority"  value={priority} onChange={(e) => handleChangePriority(e)}>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                     </div>

                    {/* <StartDate/> */}
                    <div className="startdate">
                        <div className="startdate-title">
                            <i className="far fa-clock"></i>
                            <span>Start Date</span>
                        </div>
                        <div className="date">
                            <input type="date"  
                            className="startdate-input"
                            onChange={(e) => handleChangeStartDate(e)}
                            value={startDate}/>
                        </div>
                    </div>

                    {/* <Deadline/> */}
                    <div className="deadline">
                        <div className="deadline-title">
                            <i className="far fa-calendar-alt"></i>
                            <span>Deadline</span>
                        </div>
                        <div className="date">
                            <input type="date" 
                             className="date-input"
                             onChange={(e) => handleChangeDeadline(e)}
                             value={deadline}/>
                        </div>
                    </div>

                    {/* <User/> */}
                    <div className="user">
                        <div className="user-title">
                            <i className="far fa-user"></i>
                            <span>Assign</span>
                           
                        </div>
                        <div className="select-user">
                      
                            <select name="user" id="user" defaultValue="Madina Jabrail" onChange={(e) => handleChangeUser(e)} value={user}>
                                <option >Madina Jabrail</option>
                                 <option >Sara Ali</option>
                                 <option>John Wick</option>
                           
                            </select>
                        </div>
                    </div> 

                    <div className="detail-btns">
                        <button className="save detail-btn"  onClick={(e) =>{e.preventDefault(); add()}} >Save</button>
                        <button className="cancel detail-btn"  onClick={(e)=>{e.preventDefault();props.click()} } >Cancel</button>
                    </div>
                </form>
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
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);