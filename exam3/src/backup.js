import { useState } from "react";

const App = () => {
  const [btnStatus, setBtnStatus] = useState(false);
  const [temp, setTemp] = useState(1);
  const [className, setClassName] = useState("btn-active");
  const [btnColor1, setBtnColor1] = useState("grey");
  const [btnColor2, setBtnColor2] = useState("lightGrey");
  const [btnColor3, setBtnColor3] = useState("lightGrey");
  const [disabled, setDisabled] = useState(false);

  function changeBtnColor1() {
    const cl = btnStatus ? "grey" : "lightGrey";
    setBtnColor1(cl);
  }
  function changeBtnColor2() {
    const cl = btnStatus ? "grey" : "lightGrey";
    setBtnColor2(cl);
  }
  function changeBtnColor3() {
    const cl = btnStatus ? "grey" : "lightGrey";
    setBtnColor3(cl);
  }

  function changeBtnClassName() {
    const cn = btnStatus ? "btn-active" : "btn";
    setClassName(cn);
  }

  function clickHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    if (id === "n1") {
      setTemp(1);

      setBtnStatus(!btnStatus);
      changeBtnClassName();
      changeBtnColor1();
      setDisabled(true);
    }
    if (id === "n2") {
      setTemp(2);
      setBtnStatus(!btnStatus);
      changeBtnClassName();
      changeBtnColor2();
    }
    if (id === "n3") {
      setTemp(3);
      setBtnStatus(!btnStatus);
      changeBtnClassName();
      changeBtnColor3();
    }
  }

  return (
    <div className="tabs">
      <button
        tilte="Section title 1"
        className={className}
        id="n1"
        onClick={clickHandler}
        style={{ backgroundColor: btnColor1 }}
        disabled={disabled}
      >
        Section tilte 1
      </button>
      <button
        tilte="Section title 2"
        className={className}
        id="n2"
        onClick={clickHandler}
        style={{ backgroundColor: btnColor2 }}
        disabled={disabled}
      >
        Section tilte 2
      </button>
      <button
        tilte="Section title 3"
        className={className}
        id="n3"
        onClick={clickHandler}
        style={{ backgroundColor: btnColor3 }}
        disabled={disabled}
      >
        Section tilte 3
      </button>
      <div className="view">Content of section {temp}</div>
    </div>
  );
};

export default App;
