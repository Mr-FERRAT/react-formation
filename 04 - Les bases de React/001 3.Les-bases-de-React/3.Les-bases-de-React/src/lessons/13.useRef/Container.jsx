import { useRef, useState } from "react"

// 1. Isoler une valeur parmi les mises à jour
// 2. Sélectionner un élément 

export default function Container() {

  const [state, setState] = useState (0)
  const countRef = useRef(0)
  
  function handlCountRef(){
    countRef.current++

    console.log(txtRef.current)
    console.log(document.querySelector(".txt"))
  }


  const txtRef = useRef()
  console.log(txtRef)
  
  return (
    <div>
      <h1>Le hook useRef</h1>
      <p>Valeur de state {state}</p>
      <p>Valeur de la ref {countRef.current}</p>
      <button onClick={handlCountRef}>Incrémenter la ref</button>
      <button onClick={() => setState(state + 1)}>Incrémenter la ref</button>

      <p className="txt" ref={txtRef}>Lorem ipsum dolor sit amet.</p>
      
    </div>
  )
}
