import React from "react"

export default function Image(props) {
    return <img src={props.image} className="rounded rounded-full w-56 h-56 object-cover shadow-md"/>
}