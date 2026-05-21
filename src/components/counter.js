import {useState} from "react";

export function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>Count={count}</h2>

            <CounterButton
                label="-1"
                onClick={decrement}
                disabled={count === 0}
            />

            <CounterButton
                label="+1"
                onClick={increment}
            />

            <CounterButton
                label="Reset"
                onClick={reset}
            />

        </div>
    );
}

function CounterButton({ label, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
}

