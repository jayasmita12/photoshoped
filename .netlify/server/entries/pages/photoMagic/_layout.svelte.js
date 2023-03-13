import { c as create_ssr_component, b as subscribe, d as add_classes, v as validate_component } from "../../../chunks/index2.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { p as page } from "../../../chunks/stores.js";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<nav class="${"max-w-md px-[15px] font-firasans mt-6 mb-5"}"><div class="${"flex gap-x-3"}"><a href="${"/photoMagic/inpainting"}"><div${add_classes((routeId === "/photoMagic/inpainting" ? "photomagic-tab-active" : "").trim())}>Inpaint</div></a> 
       <a href="${"/photoMagic/img2img"}"><div${add_classes((routeId === "/photoMagic/img2img" ? "photomagic-tab-active" : "").trim())}>Img2Img</div></a></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Heading, "Heading").$$render($$result, { heading: "Magically change your photos" }, {}, {})}
	${validate_component(Tab, "Tab").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
