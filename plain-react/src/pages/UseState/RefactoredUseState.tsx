import { useState } from 'react';
import { Button, Spin } from 'antd';

type Status = 'error' | 'success' | 'pending';

export function RefactoredUseState() {
    const [status, setStatus] = useState<Status>('pending');

    return (
        <div>
            <Button onClick={() => setStatus('success')}>Succès</Button>
            <Button onClick={() => setStatus('error')}>Erreur</Button>
            {status === 'pending' && <Spin />}
            {status === 'success' && <div>Succès</div>}
            {status === 'error' && <div>Erreur</div>}
        </div>
    );
}
