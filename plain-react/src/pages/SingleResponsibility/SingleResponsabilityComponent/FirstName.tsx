import { useState } from 'react';
import { Input } from 'antd';

export function FirstName() {
    const [firstName, setFirstName] = useState('');

    return (
        <div className="flex flex-col">
            <span>Prénom : {firstName}</span>
            <Input className="w-40" onChange={(e) => setFirstName(e.target.value)} />
        </div>
    );
}
