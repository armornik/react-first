// { useState } - хук
import React, { useState } from "react";
import PropTypes from 'prop-types';


function CounterFn ({min, max}) {

    // Вызываем хук useState с инициализированным значением 1, который возвращает массив разбираемый с помощью
    // деструктуризации (значение инициализированное, и функцию для изменения значения)
    let [current, setCurrent] = useState(1);

    function dic(){
            if (min < current ) {
                setCurrent(current - 1)

        }
    }    function inc(){
            if (max > current ) {
                setCurrent(current + 1)

        }
    }

    return <div>
        <button type="button" onClick={ dic }>-</button>
        <span>{ current }</span>
        <button type="button" onClick={ inc }>+</button>
    </div>
}

//  let [current, setCurrent] = useState(1);
// Без деструктуризации:
// let some = useState(1);
// let current = some[0];
// let  setCurrent = some[1];


CounterFn.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
};

export default CounterFn
