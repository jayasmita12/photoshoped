<script>
    import {fly} from "svelte/transition"
    import {bounceOut, quadIn, quintIn, quintOut} from "svelte/easing"
    export let url = url;
</script>

{#key url}
<div in:fly={{y:-50,duration:300 , delay:200 ,easing:quadIn}} out:fly={{y:50,duration:20}} >
    <slot/>
</div>
{/key}