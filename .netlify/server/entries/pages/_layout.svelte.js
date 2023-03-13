import { c as create_ssr_component, b as subscribe, d as add_classes, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { i as isLoggedin, u as user, m as modalClose, g as generateBtn } from "../../chunks/store.js";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<nav class="${"max-w-md sm:max-w-screen-lg mx-auto px-4 mt-3 font-firasans"}"><div class="${"flex flex-row justify-between sm:hidden visible"}"><img src="${"photoshoped-logo.svg"}" alt="${""}">
        <button class="${"btn btn-ghost"}"><img src="${"menubar-icon.svg"}" class="${"w-7"}" alt="${""}"></button></div>

   

    <div class="${"tabs space-x-5 mt-3 text-[#828282] text-base sm:hidden visible"}"><a href="${"/magic-art"}"${add_classes((routeId === "/magic-art" || routeId === "/magic-art-single" ? "tabactive" : "").trim())}>Magic art</a> 
        <a href="${"/your-model"}"${add_classes((routeId === "/your-model" ? "tabactive" : "").trim())}>Your Model</a> 
        <a href="${"/photoMagic"}"${add_classes((routeId === "/photoMagic" || routeId === "/photoMagic/inpainting" || routeId === "/photoMagic/img2img" ? "tabactive" : "").trim())}>Photo Magic</a></div></nav>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<nav class="${"text-right font-firasans "}"><div class="${"w-44"}"><div class="${"mt-5"}"><img src="${"photoshoped-logo.svg"}" class="${"object-none object-right w-full"}" alt="${""}"></div>
        
       <div class="${"flex flex-col justify-between h-[89vh] mt-6"}"><div class="${"space-y-4 flex flex-col mt-3 text-[#828282] text-lg"}"><a href="${"/magic-art"}"${add_classes((routeId === "/magic-art" || routeId === "/magic-art-single" ? "tabactive" : "").trim())}>Magic art</a> 
            <a href="${"/your-model"}"${add_classes((routeId === "/your-model" ? "tabactive" : "").trim())}>Your Model</a> 
            <a href="${"/photoMagic"}"${add_classes((routeId === "/photoMagic" || routeId === "/photoMagic/inpainting" || routeId === "/photoMagic/img2img" ? "tabactive" : "").trim())}>Photo Magic</a></div>
        <div class="${"flex flex-col space-y-6 text-[#828282] text-lg"}"><a href="${"/"}"${add_classes((routeId === "/" ? "tabactive" : "").trim())}>Settings</a>
            <p class="${"text-sm"}">All rights reserved 2023</p></div></div></div></nav>`;
});
const firebaseConfig = {
  apiKey: "AIzaSyC_br_bwSl0qnzQ1SVlbqxAuHsqdIxUXgg",
  authDomain: "photoshoped-2df5a.firebaseapp.com",
  projectId: "photoshoped-2df5a",
  storageBucket: "photoshoped-2df5a.appspot.com",
  messagingSenderId: "813665250847",
  appId: "1:813665250847:web:37aa82a6604e05aec72f2a"
};
initializeApp(firebaseConfig);
getAuth();
new GoogleAuthProvider();
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedin;
  let $$unsubscribe_user;
  $$unsubscribe_isLoggedin = subscribe(isLoggedin, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  modalClose.subscribe((value) => {
  });
  generateBtn.subscribe((value) => {
  });
  $$unsubscribe_isLoggedin();
  $$unsubscribe_user();
  return `<div class="${"modall"}"><div class="${"flex justify-between mb-10"}"><h3 class="${"text-3xl font-bold"}">Signup</h3>
		
		<button class="${"btn btn-ghost"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>
	<div><button class="${"btn generate-btn w-full text-white btn-md text-lg font-normal mt-4 rounded-[4px]"}"><span><img src="${"google.svg"}" class="${"pr-3 w-12"}" alt="${""}"></span>
			Sign up with Google
		</button>

		<h3 class="${"text-center text-xl font-semibold leading-tight my-4"}">Signup now to start creating smart contracts
		</h3>
		<p class="${"text-center font-medium text-[#aca3a3] mb-5 px-5"}">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry&#39;s standard dummy text ever since the 1500
		</p></div>
	</div>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let open;
  modalClose.subscribe((value) => {
    open = value;
  });
  $$unsubscribe_page();
  return `<div class="${"sm:max-w-screen-lg max-w-md mx-auto flex"}"><div class="${"sm:flex sm:visible hidden sticky top-0 h-screen "}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>
	<div class="${"divider sm:divider-horizontal"}"></div>
	<div class="${"flex-grow"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
		${validate_component(Transition, "Transition").$$render($$result, { url: $page.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div></div>

${open ? `<div class="${"modal-wrapper"}">${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}</div>` : ``}`;
});
export {
  Layout as default
};
