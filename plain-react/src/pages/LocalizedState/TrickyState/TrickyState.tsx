import { useState } from 'react';
import { Button } from 'antd';
import { SlowComponent } from '../SlowComponent.tsx';

export function TrickyState() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className="flex flex-col">
                <Button className="mr-2" onClick={() => setCounter(counter + 1)}>
                    Count
                </Button>
                <div className="flex flex-col">
                    <SlowComponent milis={100000} />
                    <div>{counter}</div>
                </div>
            </div>
        </>
    );
}
