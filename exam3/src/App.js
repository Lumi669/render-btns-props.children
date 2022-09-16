function Aa(props) {
  const { children } = props;

  //create view ('view' is the className) element for the clicking button
  function createE(id) {
    const cc = document.createElement("div");
    cc.setAttribute("id", `content${id}`);
    cc.className = "view";
    cc.innerText = `Content of section ${Number(id) + 1}`;
    const bb = document.querySelector(".tabs");
    bb.append(cc);
  }

  function clickHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    const currentClickedBtn = document.getElementById(id);
    currentClickedBtn.setAttribute("disabled", "");
    currentClickedBtn.setAttribute("className", "btn-active");
    currentClickedBtn.className = "btn-active";

    createE(id);

    //get all the button elements
    const allBtnElements = document.getElementsByTagName("button"); //htmlcollection
    const allBtnElementsArray = Array.from(allBtnElements); //array

    //check if not the current clicking button, then remove disabled and remove its corresponding view element
    allBtnElementsArray.forEach((btnElement) => {
      if (btnElement.id !== id) {
        btnElement.removeAttribute("disabled");
        btnElement.className = "btn";

        const idOfViewElement = `content${btnElement.id}`;
        const viewElement = document.getElementById(idOfViewElement);
        if (viewElement !== null) {
          viewElement.remove();
        }
      }
    });
  }

  return (
    <div className="tabs">
      {children.map((child, index) => {
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
