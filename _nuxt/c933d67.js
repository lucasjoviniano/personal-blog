(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4],{281:function(t,e,n){"use strict";n.r(e);var r=n(44),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex items-center justify-between flex-wrap p-2"},[n("div",{staticClass:"font-bold text-2xl mr-16"},[n("NuxtLink",{attrs:{to:"/"}},[t._v(" jovi. ")])],1),t._v(" "),n("div",{staticClass:"lg:flex-grow"},[n("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline"},[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n                home\n            ")])],1),t._v(" "),n("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"/blog"}},[n("NuxtLink",{attrs:{to:"/blog"}},[t._v("\n                posts\n            ")])],1),t._v(" "),n("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"/recommendation"}},[n("NuxtLink",{attrs:{to:"/recommendation"}},[t._v("\n                recomendações\n            ")])],1),t._v(" "),n("a",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"#"}},[t._v("\n            ouvindo\n        ")]),t._v(" "),n("a",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"#"}},[t._v("\n            assistindo\n        ")])])])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r=n(44),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-8 bg-gray-100 bg-cover bg-repeat h-full md:h-screen"},[n("Header"),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(281).default})},318:function(t,e,n){"use strict";n.r(e);var r=n(6),l=(n(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("recommendations").sortBy("createdAt","asc").fetch();case 3:return r=e.sent,e.abrupt("return",{recommendations:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("pt-br",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Default",[n("div",[n("ul",{staticClass:"p-16"},t._l(t.recommendations,(function(e){return n("li",{key:e.slug},[n("nuxt-link",{attrs:{to:{name:"rec-slug",params:{slug:e.slug}}}},[n("div",[n("h2",{staticClass:"text-xl"},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(t.formatDate(e.date)))])])])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Default:n(282).default})}}]);