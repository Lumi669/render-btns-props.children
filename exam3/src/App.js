import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Aa(props) {
  function clickHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log("id = ", id);
    const cc = document.createElement("div");
    cc.innerText = `Content of section ${id}`;
    const bb = document.querySelector(".tabs");
    bb.appendChild(cc);
  }

  console.log("props  = ", props);
  return (
    <div className="tabs">
      {props.children.map((child, index) => {
        console.log("child.props.title = ", child.props.title);
        return (
          <button
            className="btn"
            key={index}
            id={index + 1}
            onClick={clickHandler}
          >
            {child.props.title}
          </button>
        );
      })}
    </div>
  );
}

const App = () => {
  return (
    <Aa>
      <button title="a1" />
      <button title="a2" />
      <button title="a3" />
    </Aa>
  );
};

export default App;
