import { FileRoutesByPath, Outlet, useNavigate } from '@tanstack/react-router';
import { Tabs } from 'antd';

export interface Items {
    key: keyof FileRoutesByPath;
    label: string;
}
interface TabsCustomWithOutletProps {
    items: Items[];
}

export function TabsCustomWithOutlet({ items }: TabsCustomWithOutletProps) {
    const navigate = useNavigate();

    return (
        <>
            <Tabs className="w-fit" items={items} onChange={(key) => navigate({ to: key })} />
            <Outlet />
        </>
    );
}
