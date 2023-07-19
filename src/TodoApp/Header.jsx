import { useState } from "react"

const Header = ({handleDay, day, colors}) => {
    const [todo, setTodo] = useState("");

    const formStyle = {
        background: colors ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)"
    }
    const radioStyle = {
        borderColor: colors ? "hsl(235, 19%, 35%)" : "hsl(233, 11%, 84%)"
    }

    const handleChange = (e)=>{
        setTodo(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const item = {todo, ...{"check": false}}

        fetch("http://localhost:8000/todoData", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(()=>{
            window.location.reload();
        })
        setTodo("");   
    }

  return (
    <>
      <header>
        <h1>TODO</h1>
        <img src={day} alt="Day/Time" onClick={handleDay} style={{cursor: "pointer"}}/>
      </header>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div className="radio" style={radioStyle}></div>
        <input type="text" value={todo} onChange={handleChange} placeholder="Create a new todo..."/>
      </form>
    </>
  )
}

export default Header