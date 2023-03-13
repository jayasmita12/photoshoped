<script>
	import SubButton from "$lib/components/SubButton.svelte";
    import {fly,fade} from "svelte/transition"
    import {onMount} from "svelte"
   
</script>


<main class="max-w-md sm:max-w-screen-sm  mx-auto px-4 text-center font-firasans mt-6">
    <div>
        
        <h1 class="text-2xl font-medium leading-tight">Generate stunning photos from models trained by you</h1>
        <p class="leading-tight my-4 text-[#7A7A7A] px-5">Train your own model and create stunning photos using simple prompts.</p>
        <div class="flex gap-x-3 justify-center">
            <div class="text-[#D59C2D] bg-[#F2F2F2] rounded-md px-3 cursor-pointer">How it's work</div>
            <div class="text-[#749CB0] bg-[#F2F2F2] rounded-md px-8 cursor-pointer">FAQ</div>
        </div>
      
    </div>

    <div class="flex my-5 space-x-4  justify-between">
        <div>
            <p class="italic text-sm text-left">From few photos</p>
            <div class="mt-3 grid grid-cols-2 gap-x-2 gap-y-1" >
                {#each Array(6) as _ }
                   
                    <div class="bg-[#F2F2F2] w-12 sm:w-16 h-10 sm:h-14 rounded-lg" >
                        <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594__480.jpg" class="w-full h-full rounded-lg " alt="" >
                    </div>
                   
                {/each}
            </div>
        </div>
        <div class="flex justify-center items-center pt-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#B5C8D2] w-6" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </div>
        <div>
            <p class="italic text-sm text-left">Generate 100s of photos</p>
            <div class="mt-3 grid grid-cols-4 gap-x-2 gap-y-1">
                {#each Array(12) as _}
              
                    <div class="bg-[#F2F2F2] w-12 sm:w-16 h-10 sm:h-14 rounded-lg ">
                        <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594__480.jpg" class="w-full h-full rounded-lg " alt="">
                    </div>
                   
                {/each}
            </div>
        </div>
    </div>

    <div class="carousel space-x-3 mt-5">
        {#each Array(12) as _}
            <SubButton smalltitle="Dogs"/>
        {/each}
    </div>
</main>