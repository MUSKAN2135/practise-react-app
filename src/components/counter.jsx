import React, { useState } from 'react';

// Counter Component
export default function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    return (
        <div className='text-center my-3'>
            <h2 className='py-3'>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} className='border rounded bg-gray-300 w-8 h-8 m-1 py-2'>+</button>
            <button onClick={() => setCount(count - 1)} className='border rounded bg-gray-300 w-8 h-8 m-1 py-2'>-</button>
        </div>
    );
}
// Form Component
export function NameForm() {
    const [myName, setmyName] = useState("");
    const handleChange = (e) => { //this handlechange means update the state on every keystroke when user add inputs in input field
        setmyName(e.target.value);
    };
    const handleSubmit = () => {// when data submit it shows alert
        alert(`Hello, ${myName}!`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={myName}
                    onChange={handleChange}
                    required
                    className='border-1 border-gray-500 rounded-sm mr-3 pl-2'
                />
                <button
                    type="submit"
                    className="bg-gray-200 border rounded-md py-1 px-2"> Submit
                </button>
            </form>
        </div>
    );
}

