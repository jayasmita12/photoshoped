<script>
	import { modalClose, generateBtn ,isLoggedin , user } from '../../store.js';
	import {  auth, googleProvider } from '../../firebase.js';
    import { signInWithPopup } from 'firebase/auth'
	let open, show;
    modalClose.subscribe((value) => {
		open = value;
	});
	generateBtn.subscribe((value) => {
		show = value;
	});

	const handlemodalclose = () => {
		modalClose.update(() => {
            return false
		});
		generateBtn.update(() => {
           return false
		});
	};

	const signInWithGoogle = async() => {
        try{
            const res = await signInWithPopup(auth , googleProvider)
            console.log(res.user)
            $user = res.user
            $isLoggedin = true
            modalClose.update(() => {
                return false
            });
            generateBtn.update(() => {
                return false;
            });
        }
        catch(err){
            console.error(err)
        }
	};
	
</script>

<div class="modall">
	<div class="flex justify-between mb-10">
		<h3 class="text-3xl font-bold">Signup</h3>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<button class="btn btn-ghost" on:click={handlemodalclose}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
	</div>
	<div>
		<button
			class="btn generate-btn w-full text-white btn-md text-lg font-normal mt-4 rounded-[4px]"
            on:click={signInWithGoogle}
            >
			<span>
				<img src="google.svg" class="pr-3 w-12" alt="" />
			</span>
			Sign up with Google
		</button>

		<h3 class="text-center text-xl font-semibold leading-tight my-4">
			Signup now to start creating smart contracts
		</h3>
		<p class="text-center font-medium text-[#aca3a3] mb-5 px-5">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500
		</p>
	</div>
	<!-- <div class="text-right">
        <button class="btn" on:click={handleSubmit}>Submit</button>
    </div> -->
</div>
