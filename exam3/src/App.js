import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Aa(props) {
  const { children } = props;

  //const [isDisabled, setIsDisabled] = useState(false);

  function createE(id) {
    //   // if (!fort) {
    const cc = document.createElement("div");
    cc.setAttribute("id", `content${id}`);
    cc.className = "view";
    cc.innerText = `Content of section ${Number(id) + 1}`;
    const bb = document.querySelector(".tabs");
    bb.append(cc);
    //   // }
  }

  function clickHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log("id = ", id);
    const currentClickedBtn = document.getElementById(id);
    currentClickedBtn.setAttribute("disabled", "");

    createE(id);

    const allBtnElements = document.getElementsByClassName("btn"); //htmlcollection
    const allBtnElementsArray = Array.from(allBtnElements); //array
    console.log("sssaaaa = ", allBtnElementsArray);
    allBtnElementsArray.forEach((btnElement) => {
      console.log("btn element id = ", btnElement.id);

      if (btnElement.id !== id) {
        btnElement.removeAttribute("disabled");
        const aa = `content${btnElement.id}`;
        console.log("aa = ", aa);
        const viewElement = document.getElementById(aa);
        if (viewElement !== null) {
          viewElement.remove();
        }
        console.log("ppp = ", viewElement);
        // viewElement.remove();
      }

      // if (btnElement.id !== id) {
      //   // btnElement.removeAttribute("disabled");
      //   currentClickedBtn.setAttribute("disabled", false);
    });
  }

  // console.log("props  = ", props);
  return (
    <div className="tabs">
      {props.children.map((child, index) => {
        // console.log("child.props.title = ", child.props.title);
        let element = (
          <button className="btn" key={index} id={index} onClick={clickHandler}>
            {child.props.title}
          </button>
        );

        let returnEle;

        child.props.title ? (returnEle = element) : (returnEle = <></>);
        return returnEle;
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
      <button title="a4" />
    </Aa>
  );
};

export default App;
