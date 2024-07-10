import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { SideBar } from '../components/SideBar/SideBar.tsx';
import { Content } from '../components/Content.tsx';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: RootComponent,
});

export function RootComponent() {
    return (
        <>
            <SideBar />
            <Content>
                <Outlet />
            </Content>
        </>
    );
}
