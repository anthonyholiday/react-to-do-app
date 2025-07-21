import React from "react"

export default function Item( {title, id, deleteToDo} )  {

    return (
        <li className="bg-slate-700 flex flex-row justify-between items-stretch w-full rounded rounded-lg lg:min-h-16 lg:text-lg overflow-hidden shadow-md border transition ease-in duration-200 border-slate-700 hover:border-slate-500">
            <p className="px-4 py-4 w-3/4 uppercase">{title}</p>
            <a className="bg-slate-800 flex flex-col items-center justify-center w-1/4" onClick={() => deleteToDo(id)}>Delete</a>
        </li>
    )
}