import { ReactNode } from 'react';

interface ContentProps {
    children: ReactNode;
}

export function Content({ children }: ContentProps) {
    return <div className="w-full h-full ml-52">{children}</div>;
}
