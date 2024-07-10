import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ZodError } from 'zod';
import { QueryClient } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen.ts';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error: Error) => {
                if (error instanceof ZodError) {
                    return false;
                }
                return failureCount < 3;
            },
            throwOnError: (error: Error) => error instanceof ZodError,
            refetchOnWindowFocus: false,
        },
    },
});

const router = createRouter({
    routeTree,
    context: {
        queryClient: queryClient,
        breadcrumbs: '/',
    },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
