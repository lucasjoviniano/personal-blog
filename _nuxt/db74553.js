(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4],{281:function(t,n,e){"use strict";e.r(n);var r=e(44),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"flex items-center justify-between flex-wrap p-2"},[e("div",{staticClass:"font-bold text-2xl mr-16"},[e("NuxtLink",{attrs:{to:"/"}},[t._v(" jovi. ")])],1),t._v(" "),e("div",{staticClass:"lg:flex-grow"},[e("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("\n                home\n            ")])],1),t._v(" "),e("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"/blog"}},[e("NuxtLink",{attrs:{to:"/blog"}},[t._v("\n                posts\n            ")])],1),t._v(" "),e("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"/recommendations"}},[e("NuxtLink",{attrs:{to:"/recommendations"}},[t._v("\n                recomendações\n            ")])],1),t._v(" "),e("a",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"#"}},[t._v("\n            ouvindo\n        ")]),t._v(" "),e("a",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"#"}},[t._v("\n            assistindo\n        ")])])])}),[],!1,null,null,null);n.default=component.exports},282:function(t,n,e){"use strict";e.r(n);var r=e(44),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"p-8 bg-gray-100 bg-cover bg-repeat h-full md:h-screen"},[e("Header"),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(281).default})},290:function(t,n,e){var content=e(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("92bc02f0",content,!0,{sourceMap:!1})},295:function(t,n,e){"use strict";e(290)},296:function(t,n,e){var r=e(56)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.nuxt-content p{\n  padding:1rem\n}\n.nuxt-content h1{\n  font-size:2.25rem;\n  line-height:2rem;\n  padding:1rem;\n  font-weight:700\n}\n.nuxt-content ol{\n  list-style-type:disc;\n  list-style-position:inside;\n  padding:1rem\n}\n.nuxt-content p>img{\n  display:block;\n  margin-left:auto;\n  margin-right:auto;\n  width:50%;\n  max-width:500px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},320:function(t,n,e){"use strict";e.r(n);var r=e(6),l=(e(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,n.next=3,e("recommendations",r.slug).fetch();case 3:return l=n.sent,n.abrupt("return",{recommendation:l});case 5:case"end":return n.stop()}}),n)})))()}}),o=(e(295),e(44)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Default",[e("article",[e("h2",{staticClass:"text-4xl my-8"},[t._v(t._s(t.recommendation.title))]),t._v(" "),e("nuxt-content",{attrs:{document:t.recommendation}})],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Default:e(282).default})}}]);