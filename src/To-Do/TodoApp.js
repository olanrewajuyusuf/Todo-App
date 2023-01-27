import Main from "./main";
import "./todo.css";
import { useState } from "react";

const images = [
  "icon-sun.svg",
  "icon-moon.svg",
  "bg-mobile-light.jpg",
  "bg-mobile-dark.jpg",
];

function TodoApp() {
  const [day, setDay] = useState(images[1]);
  const [image, setImage] = useState(images[2]);
  const [colors, setColors] = useState(true);
  // const [bgcolor, setBgcolor] = useState(true);

  const handleDay = () => {
    if (day === images[1]) {
      setDay(images[0]);
      setImage(images[3]);
      setColors(false);
      // setBackground("hsl(235, 21%, 11%)");
      // setBgcolor("hsl(233, 14%, 35%)");
    } else {
      setDay(images[1]);
      setImage(images[2]);
      setColors(true);
      // setBackground("hsl(0, 0%, 98%)");
      // setBgcolor("hsl(0, 0%, 98%)");
    }
  };
  return (
    <>
      <div className="bg-img">
        <img src={image} alt="#" />
      </div>
      <div
        className="container"
        style={{
          background: colors ? "hsl(0, 0%, 98%)" : "hsl(235, 21%, 11%)",
        }}
      >
        <Main day={day} handleDay={handleDay} colors={colors} />
      </div>
    </>
  );
}

export default TodoApp;
