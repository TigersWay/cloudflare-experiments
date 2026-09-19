import { exports } from 'cloudflare:workers';
import { describe, it, expect } from 'vitest';

describe('Worker', () => {
	it('Responds with "Hello World!"', async () => {
		const response = await exports.default.fetch('http://example.com/worker');
		// expect(await response.json()).toMatchInlineSnapshot(`"Hello World!"`);
		expect(await response.json()).toStrictEqual('Hello World!');
	});

	it('Anything else with 404/Not Found', async () => {
		const response = await exports.default.fetch('http://example.com/anything');
		expect(response.status).toBe(404);
		expect(await response.json()).toStrictEqual({ status: 404, error: 'Not Found' });
	});
});
