<script>
	import Heading from "$lib/components/Heading.svelte";
	import Tab from "./Tab.svelte";

</script>

<div>
	<Heading heading="Magically change your photos"/>
	<Tab/>
	<slot></slot>
</div>