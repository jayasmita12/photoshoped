import { c as create_ssr_component, e as escape } from "./index2.js";
const SubButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { smalltitle } = $$props;
  if ($$props.smalltitle === void 0 && $$bindings.smalltitle && smalltitle !== void 0)
    $$bindings.smalltitle(smalltitle);
  return `<button class="${"btn generate-btn btn-xs font-extralight rounded-[4px] px-4 "}">${escape(smalltitle)}</button>`;
});
export {
  SubButton as S
};
