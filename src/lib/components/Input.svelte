<script>
	import { bounceOut, quadIn, quintOut } from "svelte/easing";
	import { fly, slide } from "svelte/transition";
	import Button from "./Button.svelte";
	import {modalClose,generateBtn,isLoggedin} from "../../store.js"
	let isAuth = false
	let show;
	let close;
   	
	modalClose.subscribe((value)=>{
    	close=value
	})
	generateBtn.subscribe((value)=>{
		show = value
	})

	const handleClick =()=>{
		generateBtn.update(()=>{
			return true
		})
	}
	const genertae = ()=>{
		if(!$isLoggedin){
			generateBtn.update(()=>{
				return true
			})
			console.log("authentication failed")
			modalClose.update(()=>{
				return true
    	    })
		}
		else if($isLoggedin){
			generateBtn.update(()=>{
				return false
			})
			console.log("Auth success")
		}
	}
</script>




<footer class="mx-auto font-firasan text-center">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	{#if !show}
		<div class="px-3 pt-3 pb-6  mx-auto bg-white border-2" on:click={handleClick}>
			<div class="pb-3 ">
				<input
					type="text"
					placeholder="Type your prompt"
					disabled=true
					class="boxshadow rounded-md px-2 py-2 flex  w-full bg-[#ddebf0]"
				/>
			</div>
		</div>
		{/if}

	{#if show}
	<div class="px-3 pt-3 pb-6  mx-auto bg-white border-2" in:fly={{y:40 , duration:1000 , easing:quintOut}} out:slide>
		
		<form action=""  class="">
			<div class="pb-3 ">
				<input
					type="text"
					placeholder="Type your prompt"
					class="boxshadow rounded-md px-2 py-2 flex  w-full bg-[#ddebf0]"
				/>
			</div>

			<!-- collase content -->
			<div class="">
				<div class="pt-1">
					<input
						type="text"
						placeholder="Negative prompt"
						class="boxshadow  rounded-md px-2 py-2 w-full bg-[#f1e9e6]"
					/>
				</div>
				<div class="flex  pt-5 gap-x-2">
					<input
						type="number"
						placeholder="Seed number"
						class="boxshadow rounded-md  px-3 py-1 w-full  bg-[#ddebf0]"
					/>
					<select class=" bg-[#ddebf0] rounded-md px-2 boxshadow">
						<option>Eular</option>
						<option>Homer</option>
						<option>Marge</option>
						<option>Bart</option>
						<option>Lisa</option>
						<option>Maggie</option>
					</select>
					<select class="bg-[#ddebf0] rounded-md px-2 boxshadow">
						<option>Select Model</option>
						<option>Homer</option>
						<option>Marge</option>
						<option>Bart</option>
						<option>Lisa</option>
						<option>Maggie</option>
					</select>
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<div class="" on:click={genertae}>
					<Button title="Generate art"/>
				</div>	
				
			</div>
		</form>
	</div>
	{/if}
</footer>

