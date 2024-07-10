import { useEffect, useState } from 'react';
import { Input } from 'antd';

interface ChildProps {
    userId: number;
}

export function Child({ userId }: ChildProps) {
    const [comment, setComment] = useState('');

    useEffect(() => setComment(''), [userId]);

    return (
        <>
            <div>{userId}</div>
            <Input onChange={(e) => setComment(e.target.value)} value={comment} />
            <div>Nouveau commentaire : {comment}</div>
        </>
    );
}
