import React from 'react'

export default function Box(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}
