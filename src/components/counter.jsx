import React, { useState } from 'react';

// Counter Component
export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div >
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} className='border rounded bg-gray-300 w-8 h-8 m-1 py-2'>+</button>
      <button onClick={() => setCount(count - 1)} className='border rounded bg-gray-300 w-8 h-8 m-1 py-2'>-</button>
    </div>
  );
}
// Form Component
export function NameForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState(""); //this single quotes means we set string type value in it
  const handleSubmit = (e) => {
    e.target.value; // this is used to target for just 1 input
    setSubmittedName(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='bg-gray-200 border rounded-md py-1 px-2' type="submit">Submit</button>
      </form>
      {submittedName ? <p>Hello, {submittedName}!</p>: ""}  
    </div>
  );
}
