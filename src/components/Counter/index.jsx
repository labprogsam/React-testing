import React, { useState } from 'react'
import './Counter.css';

function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <div className="counter">
      <p>{count}</p>
      <div className="buttons">
        <button onClick={() => setCounter(count + 1)}>Somar</button>
        <button onClick={() => setCounter(count - 1)}>Subtrair</button>
      </div>
    </div>
  )
}

export default Counter