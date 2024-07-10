import { useState } from 'react';
import { Button } from 'antd';

export function UseStateImpossible() {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <div>
            <h2>Des useState impossible</h2>
            <Button onClick={() => setSuccess(!success)}>En succès</Button>
            <Button onClick={() => setError(!error)}>En erreur</Button>
            <div className="mt-4">
                {error && <div>Il y a une erreur</div>}
                {success && <div>C'est en succès</div>}
            </div>
        </div>
    );
}
