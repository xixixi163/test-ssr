import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/h3/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/devalue/index.js';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/destr/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/klona/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/defu/dist/defu.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/scule/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/radix3/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/pathe/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/unhead/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/yiqian/Desktop/my-study/nuxt/test-ssr/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> footer </div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Footer = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><header>header</header>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CezlTm-z.mjs.map
