import { AutoRouter } from 'itty-router';

const router = AutoRouter();

router.get('/worker', () => 'Hello World!');

export default { ...router };
