import { useState } from "react"
const Counter = () => {

    const [count,setCount] = useState(0)
    return (
        <div className="counter">
            <div>
                <h1>{count}</h1>
                <div className="buttons">
                <button onClick={()=>{setCount((count) =>(count + 1))}}>+</button>
                <button onClick={()=>{setCount(0)}}>Reset</button>
                <button onClick={()=>{setCount((count) =>(count - 1))}}>-</button>
                </div>

            </div>
            
        </div>
    )
}

export default Counter
