import { expect, test } from 'vite-plus/test';
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
