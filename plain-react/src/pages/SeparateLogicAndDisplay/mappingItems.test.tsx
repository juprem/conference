import { describe, expect, it, test } from 'vitest';
import { mappingLogic } from './mappingItems.ts';
import { render } from '@testing-library/react';
import { SeparateLogicAndDisplay } from './SeparateLogicAndDisplay.tsx';

const data = [
    { age: 10, name: 'John', id: '1' },
    { age: 20, name: 'Jack', id: '2' },
    { age: 30, name: 'Jayce', id: '3' },
];

const expectedData = [
    { color: 'red', name: 'John', id: '1' },
    { color: 'orange', name: 'Jack', id: '2' },
    { color: 'yellow', name: 'Jayce', id: '3' },
];

test('mappingItems should set color correctly', () => {
    const mappedItems = mappingLogic(data);

    expect(mappedItems).toStrictEqual(expectedData);
});

// can be done with storybook
describe('SeparateLogicAndDisplay', () => {
    it('renders without crashing', () => {
        const { container } = render(<SeparateLogicAndDisplay data={data} />);
        expect(container.children.item(0)?.textContent).toBe('red');
        expect(container.children.item(1)?.textContent).toBe('orange');
        expect(container.children.item(2)?.textContent).toBe('yellow');
    });
});
