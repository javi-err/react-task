import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <button className="btn">Add task</button>
        </div>
    )
}

export default Header