import { c as create_ssr_component, e as escape } from "./index2.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<button class="${"btn generate-btn w-full text-white btn-sm text-lg font-normal mt-4 rounded-[4px]"}">${escape(title)}</button>`;
});
export {
  Button as B
};
