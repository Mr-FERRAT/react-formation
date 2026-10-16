import { useState, useRef } from "react"
import "./Container.css"

export default function Container() {

  const [state, setState] = useState("")
  
  function handleInput (e){
    setState(e.target.value)
  }

  const emailRef = useRef()

  function handleSubmit(e){
    e.preventDefault()

    console.log(state)
    console.log(emailRef.current.value)
  }
  
  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Votre pseudo</label>
        <input 
        onChange={handleInput}
        value={state}
        type="text"
        id="pseudo"
         />
         {/* {!state && <p>Veuillez remplir cet input</p>} */}
         <label htmlFor="email">Votre email</label>
         <input  
         ref={emailRef}
         type="email" 
         id="email"/>

         <button>Envoyer</button>
      </form>
      <p>Votre pseudo : {state}</p>
    </div>
  )
}
