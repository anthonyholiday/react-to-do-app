import React from "react"
import Item from "./toDoItem.jsx"

export default function ToDoList(props)  {
    const [toDoList, setToDoList] = React.useState([
        {
            title: "this is an item"
        },
        {
            title: "this is another item #2"
        },
        {
            title: "this is #3"
        }
    ])
    return (
        <ul className="flex flex-col gap-4">
            {
                toDoList.map(item => {
                return <Item title={item.title} />
                })
            }
        </ul>
    )
}