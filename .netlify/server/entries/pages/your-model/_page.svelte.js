import { c as create_ssr_component, f as each, v as validate_component } from "../../../chunks/index2.js";
import { S as SubButton } from "../../../chunks/SubButton.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { B as Button } from "../../../chunks/Button.js";
const MainModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"max-w-md sm:max-w-screen-sm mx-auto px-4 text-center font-firasans mt-6"}"><div><h1 class="${"text-2xl font-medium leading-tight"}">Generate stunning photos from models trained by you</h1>
        <p class="${"leading-tight my-4 text-[#7A7A7A] px-5"}">Train your own model and create stunning photos using simple prompts.</p>
        <div class="${"flex gap-x-3 justify-center"}"><div class="${"text-[#D59C2D] bg-[#F2F2F2] rounded-md px-3 cursor-pointer"}">How it&#39;s work</div>
            <div class="${"text-[#749CB0] bg-[#F2F2F2] rounded-md px-8 cursor-pointer"}">FAQ</div></div></div>

    <div class="${"flex my-5 space-x-4 justify-between"}"><div><p class="${"italic text-sm text-left"}">From few photos</p>
            <div class="${"mt-3 grid grid-cols-2 gap-x-2 gap-y-1"}">${each(Array(6), (_) => {
    return `<div class="${"bg-[#F2F2F2] w-12 sm:w-16 h-10 sm:h-14 rounded-lg"}"><img src="${"https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594__480.jpg"}" class="${"w-full h-full rounded-lg "}" alt="${""}">
                    </div>`;
  })}</div></div>
        <div class="${"flex justify-center items-center pt-8"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"fill-[#B5C8D2] w-6"}" viewBox="${"0 0 448 512"}"><path d="${"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"}"></path></svg></div>
        <div><p class="${"italic text-sm text-left"}">Generate 100s of photos</p>
            <div class="${"mt-3 grid grid-cols-4 gap-x-2 gap-y-1"}">${each(Array(12), (_) => {
    return `<div class="${"bg-[#F2F2F2] w-12 sm:w-16 h-10 sm:h-14 rounded-lg "}"><img src="${"https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594__480.jpg"}" class="${"w-full h-full rounded-lg "}" alt="${""}">
                    </div>`;
  })}</div></div></div>

    <div class="${"carousel space-x-3 mt-5"}">${each(Array(12), (_) => {
    return `${validate_component(SubButton, "SubButton").$$render($$result, { smalltitle: "Dogs" }, {}, {})}`;
  })}</div></main>`;
});
const StepProcess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"max-w-md sm:max-w-screen-lg mx-auto px-4 text-center font-firasans"}"><div class="${"bg-[#EDF5F9] py-6 px-7 rounded-2xl my-5"}"><p class="${"leading-tight text-[#7A7A7A]"}">You will get your own model and you can use to create stunning photos of yourself using text promotes only.</p>
        <ul class="${"steps steps-horizontal my-4 space-x-2"}"><li class="${"step step-success "}"><h3>Upload your photos</h3>
                <p class="${"text-xs"}">Step 1</p></li>
            <li class="${"step"}"><h3>Wait for the training</h3>
                <p class="${"text-xs"}">Step 2</p></li>
            <li class="${"step"}"><h3>Get your Photos</h3>
                <p class="${"text-xs"}">Step 3</p></li></ul></div>
     <button class="${"px-4 border-4 border-dotted rounded-lg text-[#EBC08D] mb-9"}">See more</button></main>`;
});
const Dropbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"max-w-md sm:max-w-screen-lg mx-auto px-4 font-firasans mb-5 "}"><div class="${"w-full bg-[#f0f0f0] h-[15vh] flex flex-col text-center rounded-2xl justify-center border-4 border-dotted items-center"}"><input type="${"file"}" id="${"file"}" name="${""}" class="${"invisible"}">
        <label for="${"file"}" class="${"text-[#71A0C2]"}">+ Drop Photos
        </label>
        <p class="${"text-[#ADADAD] text-sm px-5 pb-4"}">Upload 20-24 photos of clearly visible subject with various angles</p></div></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${""}">${validate_component(Heading, "Heading").$$render($$result, { heading: "Generated art works" }, {}, {})}
	${validate_component(MainModal, "MainModal").$$render($$result, {}, {}, {})}
	${validate_component(StepProcess, "StepProcess").$$render($$result, {}, {}, {})}
	${validate_component(Dropbox, "Dropbox").$$render($$result, {}, {}, {})}
	<div class="${"sticky bottom-4 max-w-md sm:max-w-screen-lg mx-auto px-4 z-10"}">${validate_component(Button, "Button").$$render($$result, { title: "Create your model" }, {}, {})}</div></div>`;
});
export {
  Page as default
};
