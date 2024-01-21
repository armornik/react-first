import React from "react";
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import AppHello from './components/Hello/hello.js'
import './assets/main.css';


document.addEventListener('DOMContentLoaded', function () {
    new Timer('.test', 100);

    ReactDom.render(
        <>
            <AppHello/>
            <AppHello name="Kostya"/>
        </>,
        // Куда записываем
        document.querySelector('.app')
    )
})

class Timer{
    constructor(selector, time) {
        this.el = document.querySelector(selector);
        this.time = time;
        this.interval = null;
        this.render();
        this.start();
    }

    tick(){
        this.time--;
        this.render();

        if(this.time <= 0){
            this.stop();
        }
    }

    start(){
        this.interval = window.setInterval(() => this.tick(), 1000);
    }

    stop(){
        window.clearInterval(this.interval);
    }

    render(){
        this.el.innerHTML=this.time;
    }
}