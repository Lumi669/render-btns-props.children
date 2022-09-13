import React, { useState } from "react";

function Aa(props) {
  console.log("props  = ", props);
  return (
    <div className="tabs">
      {props.children.map((child, index) => {
        console.log("child.props.title = ", child.props.title);
        return (
          <button className="btn" key={index} id={index}>
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
