import { useState } from 'react';
import { Button, Input } from 'antd';

export function MultipleResponsibility() {
    const [counter, setCounter] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-2">
                <Button className="mr-2" onClick={() => setCounter(counter + 1)}>
                    Count
                </Button>
                <div>{counter}</div>
            </div>
            <div className="flex flex-col">
                <span>Prénom : {firstName}</span>
                <Input className="w-40" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="flex flex-col">
                <span>Nom : {lastName}</span>
                <Input className="w-40" onChange={(e) => setLastName(e.target.value)} />
            </div>
        </div>
    );
}
