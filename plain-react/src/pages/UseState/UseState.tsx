import { Items, TabsCustomWithOutlet } from '../../components/TabsCustomWithOutlet.tsx';

const items: Items[] = [
    {
        key: '/use-state/impossible-use-state',
        label: 'Impossible useState',
    },
    {
        key: '/use-state/refactored-use-state',
        label: 'Refactored useState',
    },
];

export function UseState() {
    return <TabsCustomWithOutlet items={items} />;
}
