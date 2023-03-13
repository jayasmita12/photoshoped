<script>
     import { page } from "$app/stores"
    $: routeId = $page.route.id
</script>


<nav class="max-w-md sm:max-w-screen-lg mx-auto px-4 mt-3 font-firasans">
    <div class="flex flex-row justify-between sm:hidden visible">
        <img src="photoshoped-logo.svg" alt="">
        <button class="btn btn-ghost">
            <img src="menubar-icon.svg" class="w-7" alt="">
        </button>
    </div>

   

    <div class="tabs space-x-5  mt-3 text-[#828282] text-base sm:hidden visible">
        <a href="/magic-art" class:tabactive = {routeId === "/magic-art" || routeId === "/magic-art-single"} >Magic art</a> 
        <a href="/your-model" class:tabactive = {routeId === "/your-model"} >Your Model</a> 
        <a href="/photoMagic" class:tabactive = {routeId === "/photoMagic" || routeId === "/photoMagic/inpainting" || routeId === "/photoMagic/img2img"} >Photo Magic</a>
      </div>
</nav>