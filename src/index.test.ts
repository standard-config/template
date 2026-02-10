import { expect, test } from 'vitest';
import * as exports from './index.ts';

test('exposes correct public API', () => {
	expect({ ...exports }).toStrictEqual({
		default: expect.any(Function),
	});
});

test('normalizes the given value', () => {
	const standardize = exports.default;

	expect(standardize('')).toBe('');
	expect(standardize('value')).toMatchSnapshot();
});
