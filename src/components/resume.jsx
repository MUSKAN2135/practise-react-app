import React from 'react'

export default function Resume(props) {
    return (
        <div>
            <h3>{props.first}</h3>
            <p>Date: {props.second}</p>
            <p>Designation: {props.third}</p>
            <p>Company: {props.fourth}</p>
            <p>Work: {props.fifth}</p>
        </div>
    )
}
