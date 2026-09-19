/**
 * Entry point of this Cloudflare Worker!
 */

import { AutoRouter } from 'itty-router';
import { env } from 'cloudflare:workers';

const router = AutoRouter();

router.get('/worker', async () => 'Hello World!');

export default { ...router };
// export default {
// 	/**
// 	 * This is the standard fetch handler for a Cloudflare Worker
// 	 *
// 	 * @param {Request} request - The request submitted to the Worker from the client
// 	 * @param {Env} env - The interface to reference bindings declared in wrangler.jsonc
// 	 * @param {ExecutionContext} ctx - The execution context of the Worker
// 	 * @returns {Promise<Response>} The response to be sent back to the client
// 	 */
// 	async fetch(request, env, ctx) {
// 		// Create a stub to open a communication channel with the Durable Object
// 		// instance named "foo".
// 		//
// 		// Requests from all Workers to the Durable Object instance named "foo"
// 		// will go to a single remote Durable Object instance.
// 		const stub = env.MY_DURABLE_OBJECT.getByName('foo');

// 		// Call the `sayHello()` RPC method on the stub to invoke the method on
// 		// the remote Durable Object instance.
// 		const greeting = await stub.sayHello('world');

// 		return new Response(greeting);
// 	}
// };
