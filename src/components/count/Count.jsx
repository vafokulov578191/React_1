import React, {useState} from 'react'
import Main from '../main/Main'
import './counts.css'

function Count() {
    let [count, setCount] = useState(<Main/>)

    function inc() {
        setCount(count += <Main/>)
    }

    function dec() {
        setCount(count -= <Main/>)
    }


  return (
    <div className="count">
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <div className="item">{count}</div>
    </div>
  )
}

export default Count