import { expect, test } from 'vitest';

import { classnames } from './classnames';

test('должно вернуться name table-class color-green mg-left', () => {
    expect(classnames(
        'name',
        { 'table-class': true },
        ['color-green', 'mg-left'],
    )).toBe('name color-green mg-left table-class');
});

test('функция работает в другом порядке', () => {
    expect(classnames(
        'name',
        { 'table-class': true },
        ['color-green', 'mg-left'],
    )).not.toBe('table-class name mg-left color-green');
});
