import React from "react"
import Item from "./toDoItem.jsx"

export default function ToDoList({ toDo, deleteToDo })  {
    return (
        <ul className="flex flex-col gap-4">
            {
                toDo.map(item => {
                return <Item key={item.id} title={item.title} id={item.id} deleteToDo={deleteToDo}/>
                })
            }
        </ul>
    )
}