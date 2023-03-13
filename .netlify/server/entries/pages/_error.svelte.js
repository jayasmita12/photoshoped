import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div><h1>404</h1>
      <h1>${escape($page.error.message)}</h1></div>`;
});
export {
  Error as default
};
