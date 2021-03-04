import React from 'react';
import  './header.css'



const Header = (props) => {

    return (
        <header className="header">
            <h1 className="h1">Todo list</h1>
            <h4 className="info-list">import - {props.important}, done-{props.done}</h4>
        </header>
    )
}

export default Header;