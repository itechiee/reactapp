import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted or count changed', count);
        return() => console.log('cleanup useEffect');
    });

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;