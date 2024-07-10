import { useState } from 'react';
import { Button } from 'antd';

export function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <Button onClick={() => setCounter((prev) => prev + 1)}>Count</Button>
            <div>{counter}</div>
        </>
    );
}
