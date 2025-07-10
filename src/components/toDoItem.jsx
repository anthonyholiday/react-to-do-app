import React from "react"

export default function Item( {title, id, deleteToDo} )  {

    return (
        <li className="px-8 py-4 bg-slate-700 flex flex-row justify-between w-100 rounded rounded-lg">
            <p>{title}</p>
            <a onClick={() => deleteToDo(id)}>Delete</a>
        </li>
    )
}