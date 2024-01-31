import React from "react";
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

// import AppHello from './components/Hello/hello.js'
import './assets/main.css';
import CounterClass from "./CounterClass";
import CounterFn from "./CounterFn";
import UserCard from "./UserCard";


ReactDom.render(
   <div className='some'>
       <h2> Hello</h2>
       <hr/>
       <h3>Class max=10</h3>
          <CounterClass  max={10} />
       <hr/>
          <CounterFn min={0} max={10} />
       <hr/>
       <UserCard name="Kostya" text="Hi there!"/>
       <UserCard name="Igor" text="Hi!"/>
       <UserCard name="Ivan" text="There!"/>
       <hr/>
       <div>Text</div>
   </div>,
    // Куда записываем
    document.querySelector('.app')
)

// ReactDom.render(
//    <div>Hello</div>,
//     // Куда записываем
//     document.querySelector('.app')
// )

// Что происходит в render
// React.createElement('div', {}, [
//     ['Hello']
// ])

// function UserCard(props){
// function UserCard({ name, text }){
//     return (
//         // React.create Fragment
//         <>
//             <div className='card'>
//             {/*<h3>{props.name}</h3>*/}
//             <h3>{name}</h3>
//             <hr/>
//             <div>{text}</div>
//             </div>
//             <hr/>
//         </>
//     )
// }