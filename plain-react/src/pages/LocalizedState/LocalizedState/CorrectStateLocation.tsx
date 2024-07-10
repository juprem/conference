import { Counter } from '../../../components/Counter/Counter.tsx';
import { SlowComponent } from '../SlowComponent.tsx';

export function CorrectStateLocation() {
    return (
        <>
            <Counter />
            <SlowComponent milis={100000} />
        </>
    );
}
