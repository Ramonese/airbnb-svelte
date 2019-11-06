<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`houses/${params.id}.json`)
		const data = await res.json()
		if (res.status === 200) {
			return { house: data }
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let house
</script>

<svelte:head>
	<title>{house.title}</title>
</svelte:head>
