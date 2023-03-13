<script>
	import Button from '$lib/components/Button.svelte';
	export let title
</script>

<main class="max-w-md sm:max-w-screen-lg mx-auto px-4 font-firasans">
	<div
		class="sm:w-[60%] mx-auto bg-[#f0f0f0] h-[70vh] flex flex-col text-center justify-center items-center"
		id="dragger-box"
	>
		<input type="file" id="file" name="" class="invisible" />
		<label for="file" class="text-[#71A0C2]" id="fileInput">
			+ Drop Photos
			<p class="text-[#ADADAD] text-sm px-5" id="drag-text">
				You can modify your image with just text prompt upload a photo and see yourself
			</p>
		</label>
	</div>

	<h2 class="text-lg font-semibold mt-5">
		{title}
	</h2>

	<p class="text-[#9A9A9A] text-sm">Use the input filed to update your image</p>
	<div class="carousel space-x-3 mt-5 mb-3 text-center">
		{#each Array(6) as _}
			<div class="carousel-item rounded-full flex justify-center w-[60%] bg-[#EEEEEE]">01</div>
		{/each}
	</div>

	<div class="mb-8 sticky bottom-2 bg-white">
		<input
			type="text"
			placeholder="Type Your Prompt"
			class="boxshadow rounded-md  px-3 py-1 w-full  bg-[#F8FDFF]"
		/>
		<Button title="See magic"/>
	</div>
</main>
