/**
 * Example export from the template package.
 */
export default function standardize(value: string): string {
	if (value.length === 0) {
		return value;
	}

	return value.trim();
}
