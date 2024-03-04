import React, {useState} from 'react'

// functional components
export default function Counter() {
    const [count, setCount] = useState(0)

    function increment()
    {
        setCount(count + 1)
    }

    function decrement()
    {
        setCount(count - 1)
    }

    return (
        <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-md bg-green-500 text-white" onClick={increment}></button>
                <span>{count}</span>
            <button className="px-4 py-2 rounded-md bg-red-500 text-white" onClick={decrement}></button>
        </div>
    )
}