import React from 'react'
import Link from 'next/link'
export default function Box(props) {
    return (
        <div className="flex flex-col items-center h-96 bg-green-dark justify-around">
            <h1 className="text-white font-bold text-3xl">{props.title}</h1>
            <p className="text-white px-32">{props.body}</p>
            <Link href="/aboutPublicSpeaking">
                <a className="text-white underline">Learn More</a>
            </Link>
        </div>
    )
}
