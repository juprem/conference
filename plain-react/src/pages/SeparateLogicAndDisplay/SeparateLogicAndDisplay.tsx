import { color, Item, MappedItem } from './model.ts';

export function SeparateLogicAndDisplay({ data }: { data: Item[] }) {
    function mappingLogic(items: Item[]): MappedItem[] {
        return items.map((item) => {
            const { name, age, id } = item;

            return {
                id,
                name,
                color: color.get(age) ?? 'green',
            } satisfies MappedItem;
        });
    }

    return (
        <>
            {mappingLogic(data).map((item) => (
                <div key={item.id}>{item.color}</div>
            ))}
        </>
    );
}
