import { useState } from 'react'
import addToDo from "./functions.jsx"

function App() {
  return (
      <main className="bg-black">
        <div className="mx-40 py-80">
          <div className="max-w-7xl">
            <div className="todo-app-wrapper flex flex-col items-center justify-items-stretch w-100%">
              <h1 className="text-center mb-16">React ToDo App by Tony</h1>
              <div className="flex gap-8">
                <input id="todo-input" type="text" className="bg-white text-black"/>
                <button onClick={addToDo}>Add ToDo</button>
              </div>
              <div id="todo-list-wrapper">

              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default App
