import { images } from "./todoData";
import Header from "./Header";
import Body from "./Body";
import "./todo.css";
import { useState, useEffect } from "react";

const TodoApp = () => {
    const [day, setDay] = useState(images[1]);
    const [image, setImage] = useState(images[3]);
    const [colors, setColors] = useState(false);
    const [todoItems, setTodoItems] = useState(null);

    const handleDay = () => {
        if (window.innerWidth > 800){
            if (day === images[0]) {
                setDay(images[1]);
                setImage(images[2]);
                setColors(false);
              } else {
                setDay(images[0]);
                setImage(images[4]);
                setColors(true);
              }
        } else {
            if (day === images[0]) {
                setDay(images[1]);
                setImage(images[3]);
                setColors(false);
              } else {
                setDay(images[0]);
                setImage(images[5]);
                setColors(true);
              }
        }
    };

    useEffect(()=>{
        fetch("http://localhost:8000/todoData")
          .then(res => {
            return res.json();
          })
          .then(data => {
            setTodoItems(data);
          })
        
    }, [])

    useEffect(()=>{
        if (window.innerWidth > 800){
            setImage(images[2]);
        } else {
            setImage(images[3]);
        }
        window.addEventListener("resize", ()=>{
            if (window.innerWidth > 800){
                if (day === images[0]) {
                    setDay(images[1]);
                    setImage(images[2]);
                    setColors(false);
                  } else {
                    setDay(images[0]);
                    setImage(images[4]);
                    setColors(true);
                  }
            } else {
                if (day === images[0]) {
                    setDay(images[1]);
                    setImage(images[3]);
                    setColors(false);
                  } else {
                    setDay(images[0]);
                    setImage(images[5]);
                    setColors(true);
                  }
            }
        })
          
    }, [])

    
    const handleCheck = (id)=>{
        console.log("Phone");
        
        // setTodoItems(() => {
        //     const updatedTodo = todoItems.map(todo => {
        //         if (todo.id === id){
        //             todo.completed = !todo.completed;
        //         }
        //         return todo;
        //     })
        //     return {
        //         todoItems: updatedTodo
        //     }
        // })
       
    }

    const handleActive = ()=>{
        fetch("http://localhost:8000/todoData")
          .then(res => {
            return res.json();
          })
          .then(data => {
            const todoLeft = data.filter(todo => {
                return !todo.check;
            })
            setTodoItems(todoLeft);
          })
    }
    const handleCompleted = ()=>{
        fetch("http://localhost:8000/todoData")
          .then(res => {
            return res.json();
          })
          .then(data => {
            const todoLeft = data.filter(todo => {
                return todo.check;
            })
            setTodoItems(todoLeft);
          })
    }
    const handleAllTodo = ()=>{
        fetch("http://localhost:8000/todoData")
          .then(res => {
            return res.json();
          })
          .then(data => {
            setTodoItems(data);
          })
    }

    // const handleDelete = (check) => {
      // todoItems.filter(todo => {
      //   return todo.check;
      // })
  //     fetch("http://localhost:8000/todoData/" + check, {
  //         method: "DELETE"
  //     }).then(()=>{
  //         window.location.reload();
  //     })
  // }

  return (
    <div className="Todo-page" style={{background: colors ? "hsl(235, 21%, 11%)"  : "hsl(236, 33%, 92%)"}}>
        <div className="background"><img src={image} alt="Background-image"/></div>
        <main>
          <Header handleDay={handleDay} day={day} colors={colors} handleCheck={handleCheck} />
          {todoItems && <Body todoItems={todoItems} colors={colors} handleActive={handleActive} handleCompleted={handleCompleted} handleAllTodo={handleAllTodo} />}
        </main>
    </div>
  )
}

export default TodoApp