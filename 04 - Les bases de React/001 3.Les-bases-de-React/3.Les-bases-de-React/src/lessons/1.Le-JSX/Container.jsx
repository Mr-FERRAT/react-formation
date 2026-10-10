import React from "react";

function Container() {

  const txt = "Test"

  function handleClick(e,id){
    console.log("Click",e , id)
  }
  
  return(
  <div>
    <p>Lorem ipsum dolor sit amet.</p>
    <ul className="list">
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
    <button>Valider</button>
    <p>{10+10}</p>
    <p>"ab" + "c"</p>
    <p>{"Le chat saute !".toUpperCase()}</p>
    <p>{txt}</p>
    <p>{[1,2,3,"a"]}</p>
    <p>{[<span>Hello World</span>]}</p>
    <input type="text" />
    <hr />
    <img src="" alt="" />

    <p className="txt">Lorem ipsum dolor sit amet.</p>
    <label htmlFor=""></label>

    <button className="btn" onClick={e => handleClick(e,500)}>Click</button>
  </div>
  )
}

export default Container