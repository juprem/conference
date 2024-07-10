interface SlowComponentProps {
    milis: number;
}

export function SlowComponent({ milis }: SlowComponentProps) {
    const x = Array.from({ length: milis }, (_, i) => i);

    return (
        <>
            Very Slow Component
            {x.map((it) => (
                <div key={it} />
            ))}
        </>
    );
}
