import React from "react"

export default function Item( {title, id, deleteToDo} )  {

    return (
        <li className="bg-slate-700 flex flex-row justify-between items-stretch w-full rounded rounded-lg min-h-16 text-lg">
            <p className="px-4 py-4 w-3/4">{title}</p>
            <a className="bg-slate-800 flex flex-col items-center justify-center w-1/4" onClick={() => deleteToDo(id)}>Delete</a>
        </li>
    )
}