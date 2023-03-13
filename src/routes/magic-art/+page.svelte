<script>
	import Images from "./Images.svelte";
	import Input from "$lib/components/Input.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>


<div class="relative ">
	<Heading heading="Generated art works"/>
	<Images/>
	<div class="sticky bottom-0 ">
		<Input/>
	</div>	
</div>