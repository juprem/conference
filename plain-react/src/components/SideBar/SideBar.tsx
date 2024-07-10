import { FileRoutesByPath, Link } from '@tanstack/react-router';

interface LinkStructure {
    label: string;
    path: keyof FileRoutesByPath;
}

const menu: LinkStructure[] = [
    { label: 'UseState', path: '/use-state/impossible-use-state' },
    { label: 'Local State', path: '/localized-state/none-localized-state' },
    { label: 'UseEffect', path: '/use-effect/reset-without-key' },
    { label: 'Single Responsability', path: '/single-responsibility' },
];

export function SideBar() {
    return (
        <div className="absolute h-full w-48 bg-neutral-900 text-white flex flex-col gap-3 pl-3">
            <Link to="/">Conférence</Link>
            <div className="flex flex-col">
                {menu.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        activeProps={{
                            className: 'text-amber-400',
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
