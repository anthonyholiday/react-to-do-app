import React from "react"

export default function Item( {title, id} )  {
    return (
        <li className="px-8 py-4 bg-slate-700 flex flex-row justify-between w-100">
            <p>{title}</p>
            <a onClick={() => console.log(id)}>Delete</a>
        </li>
    )
}