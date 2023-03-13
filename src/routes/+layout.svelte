<script>
	import '../app.css';
	import {page} from "$app/stores"
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Modal from '$lib/components/Modal.svelte';
  	import {modalClose} from "../store.js"
	import Transition from '$lib/components/Transition.svelte';
  	let open ;
  	modalClose.subscribe ((value)=>{
    	open = value
  	})
</script>



<div class="sm:max-w-screen-lg max-w-md mx-auto flex">
	<div class="sm:flex sm:visible hidden  sticky top-0 h-screen ">
		<Sidebar />
	</div>
	<div class="divider sm:divider-horizontal" />
	<div class="flex-grow">
		<Navbar />
		<Transition url={$page.url}>
			<slot />
		</Transition>
	</div>
</div>

{#if open}
<div class="modal-wrapper">
	<Modal />
</div>
{/if}
