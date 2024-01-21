import React from "react";

export default function ({ name = 'user'}){
    return <div className='box'>
        <h2 className='alert'>Hello, {name}</h2>
        <p>Welcome to site!</p>
    </div>
}

// Преобразовывает ReactDom plugin
// React.createElement('h2', {className: "box" }, ['Hello'])