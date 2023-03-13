<script>
	import Comments from "$lib/components/Comments.svelte";
	import SubButton from "$lib/components/SubButton.svelte"; 
</script>


<main class="max-w-md sm:max-w-screen-lg mx-auto px-[15px] mt-8 mb-20 font-firasans">
    <div class="w-full h-auto bg-[#F2F2F2]">
        <img src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" class="w-full h-full" alt="">
    </div>
    <div class="flex justify-between  mt-4">
        <button class="text-[#889CA8] rounded-md px-1 text-sm bg-[#F6F6F6]">Prompt</button>
        <div class="text-white">
            <SubButton smalltitle="Copy"/>
            <SubButton smalltitle="Remix"/>
        </div>
    </div>
    <p class="text-[#7A7A7A] text-base leading-tight my-3">This is a prompt that generated this above image using one or the global or personal AI model.</p>

    <div class="flex gap-x-2 text-center">
        <div class="bg-[#F0F0F0] basis-1/4 rounded-md">0</div>
        <div class="bg-[#F0F0F0] basis-1/4 rounded-md" ></div>
        <div class="bg-[#F0F0F0] basis-1/2 rounded-md"></div>
    </div>

   <Comments/>
</main>