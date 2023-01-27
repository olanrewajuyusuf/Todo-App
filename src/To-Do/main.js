import Todo from "./todoData";
import "./todo.css";
import { useState } from "react";

function Main({ day, handleDay, colors }) {
  const [todo, setTodo] = useState("");
  const [mark, setMark] = useState(true);
  const [todoItems, setTodoItems] = useState(Todo);

  // Handlesubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      setTodoItems((todoItems) => {
        return [...todoItems, { id: new Date().getTime().toString(), todo }];
      });
      setTodo("");
    }
  };
  console.log(todoItems.length);
  // Function to remove todo-list
  const removeTodo = (id) => {
    setTodoItems(
      todoItems.filter((item) => {
        return item.id !== id;
      })
    );
  };
  // const figure = document.querySelectorAll("figure");
  const handleMarked = () => {
    if (mark) {
      setMark(false);
    } else {
      setMark(true);
    }
  };

  const handleline = () => {
    todoItems.forEach((item) => {
      console.log(item);
      // item.styles[todo].color = "red";
      if (item) {
        console.log(styles.todo.color);
        styles["todo"].color = "white";
      }
    });
  };
  const styles = {
    bg: {},
    rad: {},
    line: {},
    todo: { padding: "10px 0" },
  };

  if (colors) {
    styles["bg"].background = "hsl(0, 0%, 98%)";
    styles["rad"].border = "1px solid hsl(236, 33%, 92%)";
    styles["line"].borderBottom = "1px solid hsl(236, 33%, 92%)";
  } else {
    styles["bg"].background = "hsl(233, 14%, 35%)";
    styles["rad"].border = "1px solid hsl(234, 11%, 52%)";
    styles["line"].borderBottom = "1px solid hsl(234, 11%, 52%)";
  }
  // const bg = {
  //   background: colors ? "hsl(0, 0%, 98%)" : "hsl(233, 14%, 35%)",
  // };
  // const rad = {
  //   border: colors
  //     ? "1px solid hsl(236, 33%, 92%)"
  //     : "1px solid hsl(234, 11%, 52%)",
  // };
  // const line = {
  //   borderBottom: colors
  //     ? "1px solid hsl(236, 33%, 92%)"
  //     : "1px solid hsl(234, 11%, 52%)",
  // };
  const fig = {
    border: colors
      ? "1px solid hsl(236, 33%, 92%)"
      : "1px solid hsl(234, 11%, 52%)",
    // border: mark || "none",
    background:
      mark || "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
    width: mark || 30,
    height: mark || 30,
  };

  return (
    <main>
      <header>
        <h1>TODO</h1>
        <div onClick={handleDay}>
          <img src={day} alt="#" />
        </div>
      </header>
      <form onSubmit={handleSubmit} style={styles.bg}>
        <div className="radio" style={styles.rad}></div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Create a new todo"
        />
      </form>
      <article style={styles.bg}>
        {todoItems.map((list) => {
          return (
            <section key={list.id} style={styles.line}>
              <div className="section">
                <figure onClick={handleMarked} style={fig}>
                  <img
                    src="todo-img\icon-check.svg"
                    alt=""
                    style={{ display: mark && "none" }}
                  />
                </figure>
                <p style={styles.todo} onClick={handleline}>
                  {list.todo}
                </p>
              </div>
              <img
                src="todo-img\icon-cross.svg"
                alt=""
                className="cross"
                onClick={() => removeTodo(list.id)}
              />
            </section>
          );
        })}
        <div className="foot">
          <p>
            <span>{todoItems.length}</span> items left
          </p>
          <p>Clear completed</p>
        </div>
      </article>
      <footer style={styles.bg}>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </footer>
      <div className="reorder">
        <p>Drag and drop to reorder list</p>
      </div>
    </main>
  );
}

export default Main;
