<script>
	import { ModeWatcher } from 'mode-watcher';
	import ModeToggle from '$lib/components/ModeToggle.svelte';

	import favicon from '$assets/favicon.svg';
	import { name, version } from '../package.json';
</script>

<svelte:head>
	<title>{name} v{version}</title>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<ModeWatcher />

<header class="mb-4 flex justify-end gap-4 border-b border-border p-2">
	<ModeToggle />
</header>

<h1>Hello World!</h1>
