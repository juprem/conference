import { ReactNode, useState } from 'react';
import { Button } from 'antd';

interface StateParentsProps {
    children: ReactNode;
}

export function StateParents({ children }: StateParentsProps) {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <Button className="mr-2" onClick={() => setCounter(counter + 1)}>
                Count
            </Button>
            <div className="flex flex-col">
                {children}
                <div>{counter}</div>
            </div>
        </>
    );
}
