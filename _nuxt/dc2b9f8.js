(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{281:function(t,n,e){"use strict";e.r(n);var o=e(44),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"flex items-center justify-between flex-wrap p-2"},[e("div",{staticClass:"font-bold text-2xl mr-16"},[e("NuxtLink",{attrs:{to:"/"}},[t._v(" jovi. ")])],1),t._v(" "),e("div",{staticClass:"lg:flex-grow"},[e("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("\n                home\n            ")])],1),t._v(" "),e("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"/blog"}},[e("NuxtLink",{attrs:{to:"/blog"}},[t._v("\n                posts\n            ")])],1),t._v(" "),e("span",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"/recommendation"}},[e("NuxtLink",{attrs:{to:"/recommendation"}},[t._v("\n                recomendações\n            ")])],1),t._v(" "),e("a",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"#"}},[t._v("\n            ouvindo\n        ")]),t._v(" "),e("a",{staticClass:"block mt-4 md:inline-block md:mt-0 mr-4 underline",attrs:{href:"#"}},[t._v("\n            assistindo\n        ")])])])}),[],!1,null,null,null);n.default=component.exports},284:function(t,n,e){var content=e(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("739d8946",content,!0,{sourceMap:!1})},285:function(t,n,e){"use strict";e(284)},286:function(t,n,e){var o=e(56)((function(i){return i[1]}));o.push([t.i,'/*purgecss start ignore*/\nhr[data-v-77e36f58]{\n  border:1px dashed;\n  opacity:.5;\n  margin-bottom:1rem\n}\nimg[data-v-77e36f58]{\n  float:right\n}\nheader[data-v-77e36f58]{\n  clear:both\n}\nheader[data-v-77e36f58]:after{\n  content:"";\n  display:table;\n  clear:both\n}\n.header-description[data-v-77e36f58]{\n  float:left\n}\n.time-period[data-v-77e36f58]{\n  font-size:12px\n}\n.time-duration[data-v-77e36f58]{\n  opacity:.6\n}\n#tooltip[data-v-77e36f58]{\n  border-left:5px solid indigo;\n  background-color:#fff;\n  border-radius:5px;\n  box-shadow:0 0 3px rgba(0,0,0,.2);\n  padding:1em;\n  box-shadow:0 0 40px 10px rgba(0,0,0,.4)\n}\n\n/*purgecss end ignore*/',""]),o.locals={},t.exports=o},287:function(t,n,e){"use strict";e.r(n);e(45),e(59),e(58);var o=e(314),r=e(316),c={props:["contents"],methods:{hasActivities:function(){return this.contents.activities&&this.contents.activities.length},formatDate:function(t){return t.replace(/-/g,"/")},getFormattedPeriod:function(){var t=this.contents.period,n=t.begin,e=t.end;return"".concat(this.formatDate(n)," - ").concat(this.formatDate(e||"Ongoing"))},getDuration:function(){var t=this.contents.period,n=t.begin,e=t.end,c=Object(o.a)({start:new Date(n),end:e?new Date(e):new Date});return Object(r.a)(c,{format:["years","months"]})}}},l=(e(285),e(44)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return this.contents?e("div",{attrs:{id:"tooltip"}},[e("header",[e("div",{staticClass:"header-description"},[e("div",[e("strong",[t._v(t._s(this.contents.where))])]),t._v(" "),e("div",[t._v(t._s(this.contents.title)+" - "+t._s(this.contents.type))]),t._v(" "),e("div",{staticClass:"time-period"},[t._v("\n        "+t._s(this.getFormattedPeriod())+"\n        "),e("span",{staticClass:"time-duration"},[t._v("("+t._s(this.getDuration())+")")])])]),t._v(" "),this.contents.logoUrl?e("img",{attrs:{src:this.contents.logoUrl}}):t._e()]),t._v(" "),this.hasActivities()?e("hr"):t._e(),t._v(" "),t._l(this.contents.activities,(function(n){return e("ul",{key:n},[e("li",[t._v(t._s(n))])])}))],2):t._e()}),[],!1,null,"77e36f58",null);n.default=component.exports;installComponents(component,{Header:e(281).default})}}]);