import { AutoRouter, text } from 'itty-router';
import { notify } from './utils';
import { env } from 'cloudflare:workers';

const router = AutoRouter();

router.get('/worker', async () => {
  await notify('/worker');
  return 'Hello World!';
});

// Cloudflare Fake Scheduled Task Handler
if (typeof import.meta.env.DEV !== 'undefined') {
  router.get('/__scheduled', async (request, env, ctx) => {
    const cron = new URL(request.url).searchParams.get('cron') ?? '0 * * * *';
    await scheduled({ cron, scheduledTime: Date.now() }, env, ctx);
    return text(`scheduled() exécuté pour cron: ${cron}`, { status: 200 });
  });
}

// Cloudflare Scheduled Task Handler
const scheduled = async (controller, env, ctx) => {
  switch (controller.cron) {
    case '0 * * * *': // Every hour
      ctx.waitUntil(runHourlyTask(env));
      break;
    default:
      console.log(`Triggered cron: ${controller.cron}`);
  }
};

async function runHourlyTask(env) {
  await notify('Running hourly maintenance...');
  console.log('Running hourly maintenance...');
}

export default { scheduled, ...router };
