import {IoCloseOutline} from "react-icons/io5";
import Footer from "./Footer"

const Body = (props) => {
    const {colors, todoItems, handleCheck, handleActive, handleCompleted, handleAllTodo} = props;

    let span = document.querySelectorAll(".todos span");

    span.forEach(x => {
        x.addEventListener("mouseover", function(){
            x.style.borderColor = "hsl(192, 100%, 67%)"
        })
    })
    span.forEach(x => {
        x.addEventListener("mouseout", function(){
            x.style.borderColor = colors ? "hsl(235, 19%, 35%)" : "hsl(233, 11%, 84%)" ;
        })
    })
    const handleDelete = (id) => {
        fetch("http://localhost:8000/todoData/" + id, {
            method: "DELETE"
        }).then(()=>{
            window.location.reload();
        })
    }
   
    const bodyStyles = {
        boxShadow: colors ? "0px 15px 15px -5px, 0px 0px 15px -5px" : "0px 15px 15px -5px hsla(280, 87%, 65%, 0.4), 0px 0px 15px -5px hsla(280, 87%, 65%, 0.6)"
    }
  return (
    <>
    <div className="body" style={bodyStyles}>
        {todoItems.map(item =>{
            return(
                <div className='todo-item' key={item.id} style={{background: colors ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)", color: colors ? "hsl(233, 11%, 84%)" : "hsl(233, 14%, 35%)", borderBottom: colors ? "1px solid hsl(235, 19%, 35%)" : "1px solid hsl(233, 11%, 84%)"}}>
                    <div className='todos'>
                        <div className="circle">
                          <input type="checkbox" checked={item.check} onChange={()=>handleCheck}/>
                          <span style={{borderColor: colors ? "hsl(235, 19%, 35%)" : "hsl(233, 11%, 84%)"}}><img src="icon-check.svg" alt="check" /></span>
                        </div>
                        <small style={{marginLeft: 30}}>{item.todo}</small>
                    </div>
                    <IoCloseOutline onClick={()=>handleDelete(item.id)} className="close" style={{color: colors ? "hsl(235, 19%, 35%)" : "hsl(233, 11%, 84%)", cursor: "pointer"}} />
                </div>
            )
        })}
        <Footer colors={colors} todoItems={todoItems} handleActive={handleActive} handleCompleted={handleCompleted} handleAllTodo={handleAllTodo} />
    </div>
    <p className="reorder" style={{color: colors ? "hsl(235, 19%, 35%)" : "hsl(234, 11%, 52%)"}}>Drag and drop to reorder list</p>
    </>
  )
}

export default Body