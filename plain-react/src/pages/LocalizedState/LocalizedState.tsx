import { Tabs, TabsProps } from 'antd';
import { Outlet, useNavigate } from '@tanstack/react-router';

const items: TabsProps['items'] = [
    {
        key: '/localized-state/none-localized-state',
        label: 'None local state',
    },
    {
        key: '/localized-state/correct-localized-state',
        label: 'Local State',
    },
];

export function LocalizedState() {
    const navigate = useNavigate();

    return (
        <>
            <Tabs items={items} onChange={(key) => navigate({ to: key })} />
            <Outlet />
        </>
    );
}
