import { useState } from 'react';
import { Input } from 'antd';

export function LastName() {
    const [lastName, setLastName] = useState('');

    return (
        <div className="flex flex-col">
            <span>Nom : {lastName}</span>
            <Input className="w-40" onChange={(e) => setLastName(e.target.value)} />
        </div>
    );
}
