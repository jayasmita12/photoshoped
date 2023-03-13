import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { I as ImageInput } from "../../../../chunks/ImageInput.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ImageInput, "ImageInput").$$render(
    $$result,
    {
      title: "Paint on the area you want to change"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
