import { c as create_ssr_component } from "./index2.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  return `

${``}`;
});
export {
  Heading as H
};
