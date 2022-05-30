import React, { useState } from 'react';

interface User {
    name: string,
    job: string
}
const Counter = () => {
    const [counter, setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
    const handleIncrease = (): void => {
        setCount(counter + 1);
    }
    const handleUserSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: "tanver",
            job: "dev"
        }
        setUser(userData);
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