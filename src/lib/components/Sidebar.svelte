<script>
    import { page } from "$app/stores"
    $: routeId = $page.route.id
</script>



<nav class="text-right font-firasans ">
    <div class="w-44">
        <div class="mt-5">
            <img src="photoshoped-logo.svg" class="object-none object-right w-full" alt="">
        </div>
        
       <div class="flex flex-col justify-between h-[89vh] mt-6">    
        <div class="space-y-4 flex flex-col mt-3 text-[#828282] text-lg">
            <a href="/magic-art" class:tabactive = {routeId === "/magic-art" || routeId === "/magic-art-single"} >Magic art</a> 
            <a href="/your-model" class:tabactive = {routeId === "/your-model"} >Your Model</a> 
            <a href="/photoMagic" class:tabactive = {routeId === "/photoMagic" || routeId === "/photoMagic/inpainting" || routeId === "/photoMagic/img2img"} >Photo Magic</a>
        </div>
        <div class="flex flex-col space-y-6 text-[#828282] text-lg">
            <a href="/" class:tabactive = {routeId === "/"}>Settings</a>
            <p class="text-sm">All rights reserved 2023</p>
        </div>
    </div> 
    </div>
 
</nav>