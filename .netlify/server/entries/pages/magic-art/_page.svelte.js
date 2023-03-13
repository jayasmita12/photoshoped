import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { i as isLoggedin, m as modalClose, g as generateBtn } from "../../../chunks/store.js";
import { H as Heading } from "../../../chunks/Heading.js";
const Images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"max-w-md sm:max-w-screen-lg mx-auto px-4 mt-8 mb-8 font-firasans"}">${``}</main>`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedin;
  $$unsubscribe_isLoggedin = subscribe(isLoggedin, (value) => value);
  let show;
  modalClose.subscribe((value) => {
  });
  generateBtn.subscribe((value) => {
    show = value;
  });
  $$unsubscribe_isLoggedin();
  return `<footer class="${"mx-auto font-firasan text-center"}">
	${!show ? `<div class="${"px-3 pt-3 pb-6 mx-auto bg-white border-2"}"><div class="${"pb-3 "}"><input type="${"text"}" placeholder="${"Type your prompt"}" disabled="${"true"}" class="${"boxshadow rounded-md px-2 py-2 flex w-full bg-[#ddebf0]"}"></div></div>` : ``}

	${show ? `<div class="${"px-3 pt-3 pb-6 mx-auto bg-white border-2"}"><form action="${""}" class="${""}"><div class="${"pb-3 "}"><input type="${"text"}" placeholder="${"Type your prompt"}" class="${"boxshadow rounded-md px-2 py-2 flex w-full bg-[#ddebf0]"}"></div>

			
			<div class="${""}"><div class="${"pt-1"}"><input type="${"text"}" placeholder="${"Negative prompt"}" class="${"boxshadow rounded-md px-2 py-2 w-full bg-[#f1e9e6]"}"></div>
				<div class="${"flex pt-5 gap-x-2"}"><input type="${"number"}" placeholder="${"Seed number"}" class="${"boxshadow rounded-md px-3 py-1 w-full bg-[#ddebf0]"}">
					<select class="${"bg-[#ddebf0] rounded-md px-2 boxshadow"}"><option value="${"Eular"}">Eular</option><option value="${"Homer"}">Homer</option><option value="${"Marge"}">Marge</option><option value="${"Bart"}">Bart</option><option value="${"Lisa"}">Lisa</option><option value="${"Maggie"}">Maggie</option></select>
					<select class="${"bg-[#ddebf0] rounded-md px-2 boxshadow"}"><option value="${"Select Model"}">Select Model</option><option value="${"Homer"}">Homer</option><option value="${"Marge"}">Marge</option><option value="${"Bart"}">Bart</option><option value="${"Lisa"}">Lisa</option><option value="${"Maggie"}">Maggie</option></select></div>
				
				
				<div class="${""}">${validate_component(Button, "Button").$$render($$result, { title: "Generate art" }, {}, {})}</div></div></form></div>` : ``}</footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative "}">${validate_component(Heading, "Heading").$$render($$result, { heading: "Generated art works" }, {}, {})}
	${validate_component(Images, "Images").$$render($$result, {}, {}, {})}
	<div class="${"sticky bottom-0 "}">${validate_component(Input, "Input").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
