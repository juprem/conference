import { SlowComponent } from '../SlowComponent.tsx';
import { StateParents } from './StateParents.tsx';

export function TrickyState() {
    return (
        <div className="flex flex-col">
            <StateParents>
                <SlowComponent milis={100000} />
            </StateParents>
        </div>
    );
}
