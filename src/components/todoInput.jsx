import React from "react"

export default function ToDoInput() {
    return (
        <div className="flex gap-8">
            <input id="todo-input" type="text" className="bg-white text-black"/>
            <button onClick={() => (console.log("Hello"))}>Add ToDo</button>
      </div>
    )
}