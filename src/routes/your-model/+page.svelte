<script>
	import MainModal from "./MainModal.svelte";
	import StepProcess from "./StepProcess.svelte";
	import Dropbox from "./Dropbox.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<div class="">
	<Heading heading="Generated art works"/>
	<MainModal/>
	<StepProcess/>
	<Dropbox/>
	<div class="sticky bottom-4 max-w-md sm:max-w-screen-lg mx-auto px-4 z-10">
        <Button title="Create your model"/>
    </div>
</div>