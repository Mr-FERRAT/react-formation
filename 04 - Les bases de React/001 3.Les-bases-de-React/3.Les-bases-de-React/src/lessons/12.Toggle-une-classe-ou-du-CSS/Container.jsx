import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [darkMode, setDarkMode] = useState(false) 

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenue sur NotesMania</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias saepe optio, repellat alias cum enim inventore, debitis officia aperiam consequatur repudiandae quibusdam quam eius.</p>

      <button
      onClick={() => setDarkMode(!darkMode)}
      >Activer le {darkMode ? "Light mode" : "Dark mode"}</button>
    </div>
  )
}
