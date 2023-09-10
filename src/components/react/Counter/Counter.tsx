/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import './Counter.css'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [min, setMin] = useState(0)
    const [step, setStep] = useState(1)

    const handleIncrement = () => {
        setCount(count + step)
    }

    const handleDecrement = () => {
        if (count > min) {
            setCount(count - step)
        }
    }

    return (
        <div className="reactDivContainer">
            <button className="reactButton" onClick={handleDecrement}>
                -
            </button>
            <span>{count}</span>
            <button className="reactButton" onClick={handleIncrement}>
                +
            </button>
        </div>
    )
}
