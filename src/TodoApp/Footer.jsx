
const Footer = ({colors, todoItems, handleActive, handleCompleted, handleAllTodo}) => {
    let foot = document.querySelectorAll(".foot p");
    let completed = document.querySelector("footer .completed");

    const todoLeft = todoItems.filter(todo => {
        return !todo.check;
    })
    const todoDone = todoItems.filter(todo => {
        return todo.check;
    })

    let color = "";
    let cream = "";
    let allLen = todoItems.length;
    let leftLen = todoLeft.length;
    let doneLen = todoDone.length;
    if (allLen > leftLen && allLen > doneLen){
        color = true;
    }
    else {
        color = false;
    }
    // if (allLen !== leftLen){
    //     cream = true;
    // }
    // else {
    //     cream = false;
    // }
    const style = {
        color: color ? "hsl(220, 98%, 61%)" : colors ? "hsl(235, 19%, 35%)" : "hsl(234, 11%, 52%)"
    }

    foot.forEach(x =>{
        x.addEventListener("mouseover", function(){
            x.style.color = color ? "hsl(220, 98%, 61%)" : !colors ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)";
        })
    })
    foot.forEach(x =>{
        x.addEventListener("mouseout", function(){
            x.style.color = color ? "hsl(220, 98%, 61%)" : !colors ? "hsl(234, 11%, 52%)" : "hsl(235, 19%, 35%)";
        })
    })

    // completed.addEventListener("click", function(check){
    //     todoItems.filter(todo => {
    //         return todo.check;
    //     })
    //     fetch("http://localhost:8000/todoData/" + check, {
    //         method: "DELETE"
    //     }).then(()=>{
    //         console.log("removed");
    //     })
    // })
    const deleteCompleted = (check) => {
        // const todoDone = todoItems.filter(todo => {
        //     return todo.check;
        // })
        fetch("http://localhost:8000/todoData/" + check, {
            method: "DELETE"
        }).then(()=>{
            console.log("removed");
        })
    }

    // onClick={()=>deleteCompleted()}

  return (
    <>
    <footer style={{background: colors ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)", color: colors ? "hsl(235, 19%, 35%)" : "hsl(234, 11%, 52%)"}}>
        <small><span>{todoLeft.length}</span> Items left</small>
        <div className="foot" style={{background: colors ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)"}}>
            <p style={style} onClick={handleAllTodo}>All</p>
            <p className="active" style={{color: cream ? "blue" : !colors ? "hsl(234, 11%, 52%)" : "hsl(235, 19%, 35%)"}} onClick={handleActive}>Active</p>
            <p className="complete" >Completed</p>
        </div>
        <small >Clear Completed</small>
    </footer>
    </>
  )
}

export default Footer