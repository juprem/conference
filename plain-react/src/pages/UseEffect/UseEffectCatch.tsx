import { Items, TabsCustomWithOutlet } from '../../components/TabsCustomWithOutlet.tsx';

const items: Items[] = [
    {
        key: '/use-effect/reset-without-key',
        label: 'Reset with use effect',
    },
    {
        key: '/use-effect/reset-with-key',
        label: 'Reset with key',
    },
];

export function UseEffectCatch() {
    return <TabsCustomWithOutlet items={items} />;
}
