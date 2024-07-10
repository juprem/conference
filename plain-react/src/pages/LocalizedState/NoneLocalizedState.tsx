import { useState } from 'react';
import { Button } from 'antd';
import { SlowComponent } from './SlowComponent.tsx';

export function NoneLocalizedState() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <Button onClick={() => setCounter((prev) => prev + 1)}>Count</Button>
            <div>{counter}</div>
            <SlowComponent milis={100000} />
        </>
    );
}
