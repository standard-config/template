import { expect, test } from 'vitest';
import template from './index.ts';

test('is defined', () => {
	expect(template).toMatchSnapshot();
});
