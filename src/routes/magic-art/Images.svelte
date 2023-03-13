<script>
    // import { Router, Route, Link } from "svelte-navigator";
    import {fade} from "svelte/transition"
    import {onMount} from "svelte"
    let show = false
    onMount(()=>{
        show = true
    })
</script>

<main class="max-w-md sm:max-w-screen-lg mx-auto px-4 mt-8  mb-8 font-firasans">
    {#if show}
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3" >
        {#each Array(14) as _ ,i}
          <div class="w-full h-36 lg:h-56 bg-[#F2F2F2] cursor-pointer" in:fade={{delay:150 * i}}>
            <a href="/magic-art-single"><img src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" class="w-full h-full" alt=""></a>
            </div>
        {/each}
    </div>
    {/if}
</main>