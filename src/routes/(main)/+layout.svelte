<svelte:head>
	<link rel="stylesheet" href="/src/styles/layouts/_mainGrid.scss">
</svelte:head>

<div class="mainGridLayout">
	<div class="grid_item header">
		<header class="mainGrid__item item_1">
			<PageNavBar items={pageNavBarItems} />
		</header>
	</div>

	<div class="grid_item nav">
		<nav class="mainGrid__item item_2">
			<NavigationBar />
		</nav> 
	</div>

	<div class="grid_item main">
		<main class="mainGrid__item item_3">
			<slot />
		</main>
	</div>
</div>

<script>
    import NavigationBar from "$lib/navigationBar/+page.svelte";
	import PageNavBar from '$lib/pageNavBar/+page.svelte';
	import { pageNavStore } from "/src/store";

	let pageNavBarItems;
	$: pageNavBarItems = $pageNavStore;

</script>
