import { Counter } from '../../components/Counter/Counter.tsx';
import { FirstName } from './SingleResponsabilityComponent/FirstName.tsx';
import { LastName } from './SingleResponsabilityComponent/LastName.tsx';

export function SingleResponsability() {
    return (
        <div className="flex flex-col gap-1">
            <Counter />
            <FirstName />
            <LastName />
        </div>
    );
}
