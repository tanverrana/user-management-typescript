import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCount] = useState(0)
    const handleIncrease = (): void => {
        setCount(counter + 1);
    }
    return (
        <div>
            <h2>This is Counter</h2>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>

        </div>
    );
};

export default Counter;