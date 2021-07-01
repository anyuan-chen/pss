import React from 'react'
/*
    This is a person component designed for usage on the "meet our team section of the page"
    Example can be found in /pages/meetttheteam.js

    Props:
        name - name of person
        imgUrl - imgur url of photo
        desc - description of person
*/
export default function person(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img href = {props.imgUrl}></img>
            <p>{props.desc}</p>
        </div>
    )
}
