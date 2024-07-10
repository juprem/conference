import { useState } from 'react';
import { Button } from 'antd';
import { Child } from './Child.tsx';

export function ParentComponent() {
    const [userId, setUserId] = useState(0);

    return (
        <>
            <Button onClick={() => setUserId((prev) => prev + 1)}>{userId}</Button>
            <Child userId={userId} />
        </>
    );
}
