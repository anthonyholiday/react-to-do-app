import React from "react"
import Item from "./toDoItem.jsx"

export default function ToDoList({ toDoList })  {
    return (
        <ul className="flex flex-col gap-4">
            {
                toDoList.map(item => {
                return <Item key={item.id} title={item.title} id={item.id} />
                })
            }
        </ul>
    )
}