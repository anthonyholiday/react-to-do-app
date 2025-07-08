import { useState } from 'react'
import ToDoInput from "./components/todoInput.jsx"
import ToDoList from "./components/toDoList.jsx"

function App() {
  return (
      <main>
        <div className="mx-40 py-80">
          <div className="max-w-7xl">
            <div className="todo-app-wrapper flex flex-col items-center justify-items-stretch w-100% gap-8">
              <ToDoInput />
              <ToDoList />
            </div>
          </div>
        </div>
      </main>
  )
}

export default App
