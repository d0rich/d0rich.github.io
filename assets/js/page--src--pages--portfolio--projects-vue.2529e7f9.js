(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0If4":function(t,e,r){"use strict";var o={name:"ProjectBlock",props:{project:{required:!0,type:Object}}},n=(r("Ag4P"),r("V3zW"),r("7uw+")),i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-block"},[r("v-card",{attrs:{to:t.project.path}},[t.project.image?r("v-img",{attrs:{height:"200px",src:t.project.image,alt:t.project.title,eager:""}}):t._e(),r("v-card-title",{staticClass:"project-block__title"},[t._v(t._s(t.project.title))]),r("v-card-subtitle",[r("time",{attrs:{datetime:t.project.date}},[t._v(t._s(t.project.date))])]),t.project.tags.length>0?r("v-divider"):t._e(),t.project.tags.length>0?r("v-card-text",t._l(t.project.tags,(function(e){return r("v-chip",{key:e.id,staticClass:"ma-1"},[t._v("\n        #"+t._s(e.title)+"\n      ")])})),1):t._e()],1)],1)}),[],!1,null,"2a45b2e4",null);e.a=i.exports},"4Brf":function(t,e,r){"use strict";var o=r("I+eb"),n=r("g6v/"),i=r("2oRo"),a=r("4zBA"),c=r("Gi26"),s=r("Fib7"),u=r("OpvP"),f=r("V37c"),l=r("m/L8").f,p=r("6JNq"),d=i.Symbol,g=d&&d.prototype;if(n&&s(d)&&(!("description"in g)||void 0!==d().description)){var v={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(g,this)?new d(t):void 0===t?d():d(t);return""===t&&(v[e]=!0),e};p(h,d),h.prototype=g,g.constructor=h;var m="Symbol(test)"==String(d("test")),y=a(g.toString),b=a(g.valueOf),j=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),_=a("".slice);l(g,"description",{configurable:!0,get:function(){var t=b(this),e=y(t);if(c(v,t))return"";var r=m?_(e,7,-1):w(e,j,"$1");return""===r?void 0:r}}),o({global:!0,forced:!0},{Symbol:h})}},"5Tg+":function(t,e,r){var o=r("tiKp");e.f=o},Ag4P:function(t,e,r){"use strict";r("cOgh")},"BX/b":function(t,e,r){var o=r("xrYK"),n=r("/GqU"),i=r("JBy8").f,a=r("82ph"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"Window"==o(t)?function(t){try{return i(t)}catch(t){return a(c)}}(t):i(n(t))}},"Eq+B":function(t,e,r){"use strict";r.r(e);var o=r("oYx3"),n=r("0If4"),i=r("J+we"),a={name:"Projects",components:{ProjectBlock:n.a},data:function(){return{breadcrumbs:[{text:"d0rich",href:o.a.home},{text:"portfolio",href:o.a.portfolio()},{text:"projects",href:o.a.projects(),disabled:!0}]}},methods:{changePage:function(t){this.$router.push(o.a.projects(t))}},mixins:[i.a],metaInfo:function(){return this.createMetaInfo({title:"Projects",description:"Projects of Dorich, software developer",ogTitle:"Portfolio by Dorich",ogPath:"/portfolio/projects/".concat(this.$page.projects.pageInfo.currentPage>1?this.$page.projects.pageInfo.currentPage+"/":"")})}},c=(r("Ku2i"),r("7uw+")),s=null,u=r("oCYn"),f=u.default.config.optionMergeStrategies.computed,l={metadata:{siteUrl:"https://d0rich.github.io"}},p=function(t){var e=t.options;e.__staticData?e.__staticData.data=l:(e.__staticData=u.default.observable({data:l}),e.computed=f({$static:function(){return e.__staticData.data}},e.computed))},d=Object(c.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-center mt-7"},[t._v("Projects")]),r("div",{staticClass:"hr"}),r("nav",{staticClass:"align-self-start"},[r("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),r("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.portfolio(),exact:""}},[r("v-icon",[t._v("\n        mdi-chevron-left\n      ")]),t._v("\n      Back\n    ")],1)],1),r("nav",{staticClass:"repos-container"},t._l(t.$page.projects.edges,(function(t){return r("ProjectBlock",{key:t.node.id,attrs:{project:t.node}})})),1),r("nav",{staticClass:"text-center mt-4"},[r("v-pagination",{attrs:{length:t.$page.projects.pageInfo.totalPages,value:t.$page.projects.pageInfo.currentPage},on:{input:t.changePage}})],1),r("nav",{staticClass:"align-self-start mt-5"},[r("h2",[t._v("All Tags")]),r("v-chip-group",{attrs:{column:""}},t._l(t.$page.tags.edges,(function(e){return r("v-chip",{key:e.node.id,attrs:{to:e.node.path}},[t._v("\n        #"+t._s(e.node.title)+"\n      ")])})),1)],1),r("nav",{staticClass:"align-self-start mt-4"},[r("h2",[t._v("All Technologies")]),r("v-chip-group",{attrs:{column:""}},t._l(t.$page.technologies.edges,(function(e){return r("v-chip",{key:e.node.id,attrs:{to:e.node.path}},[t._v("\n        "+t._s(e.node.title)+"\n      ")])})),1)],1)])}),[],!1,null,"7e7ae0c8",null);"function"==typeof s&&s(d),"function"==typeof p&&p(d);e.default=d.exports},"J+we":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r("KQm4"),n=(r("pNMO"),r("4Brf"),r("oVuX"),r("ma9I"),r("oCYn").default.extend({methods:{createMetaInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"":e,n=t.description,i=void 0===n?"":n,a=t.image,c=void 0===a?"":a,s=t.keywords,u=void 0===s?[]:s,f=t.ogTitle,l=void 0===f?r:f,p=t.ogDescription,d=void 0===p?i:p,g=t.ogPath,v=void 0===g?"":g,h=["developer","informational technologies","IT"],m=[{key:"keywords",name:"keywords",content:[].concat(h,Object(o.a)(u)).join(", ")},{key:"og:title",property:"og:title",content:l},{key:"og:url",property:"og:url",content:this.$static.metadata.siteUrl+v}];if(i&&m.push({key:"description",name:"description",content:i}),d&&m.push({key:"og:description",property:"og:description",content:d}),c){var y=c.src||c;m.push({key:"og:image",property:"og:image",content:this.$static.metadata.siteUrl+y},{key:"vk:image",property:"vk:image",content:this.$static.metadata.siteUrl+y})}return{title:r,meta:m}}}}))},KQm4:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var o=r("a3WO");var n=r("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Ku2i:function(t,e,r){"use strict";r("rgum")},Qo9l:function(t,e,r){var o=r("2oRo");t.exports=o},V3zW:function(t,e,r){"use strict";r("fdDS")},cOgh:function(t,e,r){},"dG/n":function(t,e,r){var o=r("Qo9l"),n=r("Gi26"),i=r("5Tg+"),a=r("m/L8").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});n(e,t)||a(e,t,{value:i.f(t)})}},fdDS:function(t,e,r){},pNMO:function(t,e,r){"use strict";var o=r("I+eb"),n=r("2oRo"),i=r("0GbY"),a=r("K6Rb"),c=r("xluM"),s=r("4zBA"),u=r("xDBR"),f=r("g6v/"),l=r("STAE"),p=r("0Dky"),d=r("Gi26"),g=r("6LWA"),v=r("Fib7"),h=r("hh1v"),m=r("OpvP"),y=r("2bX/"),b=r("glrk"),j=r("ewvW"),w=r("/GqU"),_=r("oEtG"),O=r("V37c"),S=r("XGwC"),k=r("fHMY"),P=r("33Wh"),x=r("JBy8"),B=r("BX/b"),I=r("dBg+"),$=r("Bs8V"),C=r("m/L8"),D=r("0eef"),T=r("82ph"),A=r("busE"),E=r("VpIT"),G=r("93I0"),J=r("0BK2"),K=r("kOOl"),N=r("tiKp"),W=r("5Tg+"),M=r("dG/n"),R=r("1E5z"),V=r("afO8"),U=r("tycR").forEach,Y=G("hidden"),q=N("toPrimitive"),z=V.set,Q=V.getterFor("Symbol"),X=Object.prototype,F=n.Symbol,L=F&&F.prototype,H=n.TypeError,Z=n.QObject,tt=i("JSON","stringify"),et=$.f,rt=C.f,ot=B.f,nt=D.f,it=s([].push),at=E("symbols"),ct=E("op-symbols"),st=E("string-to-symbol-registry"),ut=E("symbol-to-string-registry"),ft=E("wks"),lt=!Z||!Z.prototype||!Z.prototype.findChild,pt=f&&p((function(){return 7!=k(rt({},"a",{get:function(){return rt(this,"a",{value:7}).a}})).a}))?function(t,e,r){var o=et(X,e);o&&delete X[e],rt(t,e,r),o&&t!==X&&rt(X,e,o)}:rt,dt=function(t,e){var r=at[t]=k(L);return z(r,{type:"Symbol",tag:t,description:e}),f||(r.description=e),r},gt=function(t,e,r){t===X&&gt(ct,e,r),b(t);var o=_(e);return b(r),d(at,o)?(r.enumerable?(d(t,Y)&&t[Y][o]&&(t[Y][o]=!1),r=k(r,{enumerable:S(0,!1)})):(d(t,Y)||rt(t,Y,S(1,{})),t[Y][o]=!0),pt(t,o,r)):rt(t,o,r)},vt=function(t,e){b(t);var r=w(e),o=P(r).concat(bt(r));return U(o,(function(e){f&&!c(ht,r,e)||gt(t,e,r[e])})),t},ht=function(t){var e=_(t),r=c(nt,this,e);return!(this===X&&d(at,e)&&!d(ct,e))&&(!(r||!d(this,e)||!d(at,e)||d(this,Y)&&this[Y][e])||r)},mt=function(t,e){var r=w(t),o=_(e);if(r!==X||!d(at,o)||d(ct,o)){var n=et(r,o);return!n||!d(at,o)||d(r,Y)&&r[Y][o]||(n.enumerable=!0),n}},yt=function(t){var e=ot(w(t)),r=[];return U(e,(function(t){d(at,t)||d(J,t)||it(r,t)})),r},bt=function(t){var e=t===X,r=ot(e?ct:w(t)),o=[];return U(r,(function(t){!d(at,t)||e&&!d(X,t)||it(o,at[t])})),o};(l||(A(L=(F=function(){if(m(L,this))throw H("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,e=K(t),r=function(t){this===X&&c(r,ct,t),d(this,Y)&&d(this[Y],e)&&(this[Y][e]=!1),pt(this,e,S(1,t))};return f&&lt&&pt(X,e,{configurable:!0,set:r}),dt(e,t)}).prototype,"toString",(function(){return Q(this).tag})),A(F,"withoutSetter",(function(t){return dt(K(t),t)})),D.f=ht,C.f=gt,$.f=mt,x.f=B.f=yt,I.f=bt,W.f=function(t){return dt(N(t),t)},f&&(rt(L,"description",{configurable:!0,get:function(){return Q(this).description}}),u||A(X,"propertyIsEnumerable",ht,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:F}),U(P(ft),(function(t){M(t)})),o({target:"Symbol",stat:!0,forced:!l},{for:function(t){var e=O(t);if(d(st,e))return st[e];var r=F(e);return st[e]=r,ut[r]=e,r},keyFor:function(t){if(!y(t))throw H(t+" is not a symbol");if(d(ut,t))return ut[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),o({target:"Object",stat:!0,forced:!l,sham:!f},{create:function(t,e){return void 0===e?k(t):vt(k(t),e)},defineProperty:gt,defineProperties:vt,getOwnPropertyDescriptor:mt}),o({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:yt,getOwnPropertySymbols:bt}),o({target:"Object",stat:!0,forced:p((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(j(t))}}),tt)&&o({target:"JSON",stat:!0,forced:!l||p((function(){var t=F();return"[null]"!=tt([t])||"{}"!=tt({a:t})||"{}"!=tt(Object(t))}))},{stringify:function(t,e,r){var o=T(arguments),n=e;if((h(e)||void 0!==t)&&!y(t))return g(e)||(e=function(t,e){if(v(n)&&(e=c(n,this,t,e)),!y(e))return e}),o[1]=e,a(tt,null,o)}});if(!L[q]){var jt=L.valueOf;A(L,q,(function(t){return c(jt,this)}))}R(F,"Symbol"),J[Y]=!0},rgum:function(t,e,r){}}]);