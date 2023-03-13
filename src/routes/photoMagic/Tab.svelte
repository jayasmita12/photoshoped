<script>
    import { page } from "$app/stores"
    console.log($page)
    $: routeId = $page.route.id

</script>


<nav class="max-w-md  px-[15px] font-firasans mt-6 mb-5">
    <div class="flex gap-x-3">
       <a href="/photoMagic/inpainting"><div class:photomagic-tab-active={routeId === "/photoMagic/inpainting"}>Inpaint</div></a> 
       <a href="/photoMagic/img2img"><div class:photomagic-tab-active={routeId === "/photoMagic/img2img"}>Img2Img</div></a> 
    </div>
</nav>
