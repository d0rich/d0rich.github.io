(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1tub":function(t,e,n){"use strict";n.r(e);var i=n("KQm4"),r=(n("ma9I"),n("2B1R"),n("oYx3")),o=n("s2Jo"),s=n("J+we"),a={name:"Project",components:{Disqus:o.a},computed:{breadcrumbs:function(){return[{text:"d0rich",href:r.a.home},{text:"portfolio",href:r.a.portfolio()},{text:"projects",href:r.a.projects()},{text:this.$page.project.title,disabled:!0}]}},mixins:[s.a],metaInfo:function(){return this.createMetaInfo({title:this.$page.project.title,description:this.$page.project.summary,keywords:[].concat(Object(i.a)(this.$page.project.tags.map((function(t){return t.title}))),Object(i.a)(this.$page.project.technologies.map((function(t){return t.title})))),ogTitle:"IT Project: ".concat(this.$page.project.title),image:this.$page.project.image,ogPath:this.$page.project.path})}},c=(n("TESj"),n("7uw+")),u=null,d=n("oCYn"),f=d.default.config.optionMergeStrategies.computed,l={metadata:{siteUrl:"https://d0rich.github.io"}},h=function(t){var e=t.options;e.__staticData?e.__staticData.data=l:(e.__staticData=d.default.observable({data:l}),e.computed=f({$static:function(){return e.__staticData.data}},e.computed))},p=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"align-self-start"},[n("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),n("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.projects(),exact:""}},[n("v-icon",[t._v("\n          mdi-chevron-left\n        ")]),t._v("\n        Back\n      ")],1)],1),n("article",[n("div",{staticStyle:{"max-width":"100%"}},[n("h1",[t._v(t._s(t.$page.project.title)+" ")]),n("p",[t._v("Posted on "+t._s(t.$page.project.date))]),n("v-chip-group",t._l(t.$page.project.tags,(function(e){return n("v-chip",{key:e.id,attrs:{to:e.path}},[t._v("\n            #"+t._s(e.title)+"\n          ")])})),1),n("div",{staticClass:"d-flex justify-center"},[t.$page.project.image?n("v-img",{staticClass:"border-light--primary my-4",attrs:{eager:"","aspect-ratio":1.5,"min-width":"300px","max-width":"600px",width:"90vw",src:t.$page.project.image,alt:t.$page.project.title}}):t._e()],1)],1),n("div",{staticClass:"hr"}),n("div",{staticClass:"markdown-body"},[n("VueRemarkContent",{staticClass:"mb-8",attrs:{id:"article-area"}}),t.$page.project.related.length?n("h2",[t._v("Related links")]):t._e(),n("div",{staticClass:"row row--dense mt-2 mb-5"},t._l(t.$page.project.related,(function(e){return n("div",{key:e.href,staticClass:"col-lg-4 col-sm-6 col-12"},[n("v-list-item",{staticClass:"v-sheet--outlined rounded text-decoration-none",attrs:{href:e.href,target:"_blank"}},[e.icon?n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                  "+t._s(e.title)+"\n                ")])],1)],1)],1)})),0),n("h2",[t._v("Built with")]),n("nav",{staticClass:"tech-container"},t._l(t.$page.project.technologies,(function(e){return n("v-btn",{key:e.id,staticClass:"mx-4 my-2",attrs:{outlined:"",text:"",large:"",to:e.path}},[t._v("\n            "+t._s(e.title)+"\n          ")])})),1),n("section",{staticClass:"disqus my-4"},[n("Disqus",{attrs:{shortname:"dorich"}})],1)],1)])])}),[],!1,null,"99772928",null);"function"==typeof u&&u(p),"function"==typeof h&&h(p);e.default=p.exports},"4Brf":function(t,e,n){"use strict";var i=n("I+eb"),r=n("g6v/"),o=n("2oRo"),s=n("4zBA"),a=n("Gi26"),c=n("Fib7"),u=n("OpvP"),d=n("V37c"),f=n("m/L8").f,l=n("6JNq"),h=o.Symbol,p=h&&h.prototype;if(r&&c(h)&&(!("description"in p)||void 0!==h().description)){var g={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=u(p,this)?new h(t):void 0===t?h():h(t);return""===t&&(g[e]=!0),e};l(m,h),m.prototype=p,p.constructor=m;var v="Symbol(test)"==String(h("test")),y=s(p.toString),b=s(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,_=s("".replace),S=s("".slice);f(p,"description",{configurable:!0,get:function(){var t=b(this),e=y(t);if(a(g,t))return"";var n=v?S(e,7,-1):_(e,w,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:m})}},"5Tg+":function(t,e,n){var i=n("tiKp");e.f=i},"BX/b":function(t,e,n){var i=n("xrYK"),r=n("/GqU"),o=n("JBy8").f,s=n("82ph"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"Window"==i(t)?function(t){try{return o(t)}catch(t){return s(a)}}(t):o(r(t))}},"J+we":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("KQm4"),r=(n("pNMO"),n("4Brf"),n("oVuX"),n("ma9I"),n("oCYn").default.extend({methods:{createMetaInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,n=void 0===e?"":e,r=t.description,o=void 0===r?"":r,s=t.image,a=void 0===s?"":s,c=t.keywords,u=void 0===c?[]:c,d=t.ogTitle,f=void 0===d?n:d,l=t.ogDescription,h=void 0===l?o:l,p=t.ogPath,g=void 0===p?"":p,m=["developer","informational technologies","IT"],v=[{key:"keywords",name:"keywords",content:[].concat(m,Object(i.a)(u)).join(", ")},{key:"og:title",property:"og:title",content:f},{key:"og:url",property:"og:url",content:this.$static.metadata.siteUrl+g}];if(o&&v.push({key:"description",name:"description",content:o}),h&&v.push({key:"og:description",property:"og:description",content:h}),a){var y=a.src||a;v.push({key:"og:image",property:"og:image",content:this.$static.metadata.siteUrl+y},{key:"vk:image",property:"vk:image",content:this.$static.metadata.siteUrl+y})}return{title:n,meta:v}}}}))},KQm4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("a3WO");var r=n("BsWD");function o(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Qo9l:function(t,e,n){var i=n("2oRo");t.exports=i},TESj:function(t,e,n){"use strict";n("x6dy")},"dG/n":function(t,e,n){var i=n("Qo9l"),r=n("Gi26"),o=n("5Tg+"),s=n("m/L8").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||s(e,t,{value:o.f(t)})}},pNMO:function(t,e,n){"use strict";var i=n("I+eb"),r=n("2oRo"),o=n("0GbY"),s=n("K6Rb"),a=n("xluM"),c=n("4zBA"),u=n("xDBR"),d=n("g6v/"),f=n("STAE"),l=n("0Dky"),h=n("Gi26"),p=n("6LWA"),g=n("Fib7"),m=n("hh1v"),v=n("OpvP"),y=n("2bX/"),b=n("glrk"),w=n("ewvW"),_=n("/GqU"),S=n("oEtG"),j=n("V37c"),C=n("XGwC"),$=n("fHMY"),O=n("33Wh"),q=n("JBy8"),k=n("BX/b"),x=n("dBg+"),I=n("Bs8V"),D=n("m/L8"),E=n("0eef"),R=n("82ph"),B=n("busE"),T=n("VpIT"),P=n("93I0"),U=n("0BK2"),A=n("kOOl"),G=n("tiKp"),J=n("5Tg+"),N=n("dG/n"),F=n("1E5z"),Q=n("afO8"),V=n("tycR").forEach,z=P("hidden"),K=G("toPrimitive"),M=Q.set,W=Q.getterFor("Symbol"),X=Object.prototype,Y=r.Symbol,L=Y&&Y.prototype,H=r.TypeError,Z=r.QObject,tt=o("JSON","stringify"),et=I.f,nt=D.f,it=k.f,rt=E.f,ot=c([].push),st=T("symbols"),at=T("op-symbols"),ct=T("string-to-symbol-registry"),ut=T("symbol-to-string-registry"),dt=T("wks"),ft=!Z||!Z.prototype||!Z.prototype.findChild,lt=d&&l((function(){return 7!=$(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=et(X,e);i&&delete X[e],nt(t,e,n),i&&t!==X&&nt(X,e,i)}:nt,ht=function(t,e){var n=st[t]=$(L);return M(n,{type:"Symbol",tag:t,description:e}),d||(n.description=e),n},pt=function(t,e,n){t===X&&pt(at,e,n),b(t);var i=S(e);return b(n),h(st,i)?(n.enumerable?(h(t,z)&&t[z][i]&&(t[z][i]=!1),n=$(n,{enumerable:C(0,!1)})):(h(t,z)||nt(t,z,C(1,{})),t[z][i]=!0),lt(t,i,n)):nt(t,i,n)},gt=function(t,e){b(t);var n=_(e),i=O(n).concat(bt(n));return V(i,(function(e){d&&!a(mt,n,e)||pt(t,e,n[e])})),t},mt=function(t){var e=S(t),n=a(rt,this,e);return!(this===X&&h(st,e)&&!h(at,e))&&(!(n||!h(this,e)||!h(st,e)||h(this,z)&&this[z][e])||n)},vt=function(t,e){var n=_(t),i=S(e);if(n!==X||!h(st,i)||h(at,i)){var r=et(n,i);return!r||!h(st,i)||h(n,z)&&n[z][i]||(r.enumerable=!0),r}},yt=function(t){var e=it(_(t)),n=[];return V(e,(function(t){h(st,t)||h(U,t)||ot(n,t)})),n},bt=function(t){var e=t===X,n=it(e?at:_(t)),i=[];return V(n,(function(t){!h(st,t)||e&&!h(X,t)||ot(i,st[t])})),i};(f||(B(L=(Y=function(){if(v(L,this))throw H("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,e=A(t),n=function(t){this===X&&a(n,at,t),h(this,z)&&h(this[z],e)&&(this[z][e]=!1),lt(this,e,C(1,t))};return d&&ft&&lt(X,e,{configurable:!0,set:n}),ht(e,t)}).prototype,"toString",(function(){return W(this).tag})),B(Y,"withoutSetter",(function(t){return ht(A(t),t)})),E.f=mt,D.f=pt,I.f=vt,q.f=k.f=yt,x.f=bt,J.f=function(t){return ht(G(t),t)},d&&(nt(L,"description",{configurable:!0,get:function(){return W(this).description}}),u||B(X,"propertyIsEnumerable",mt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Y}),V(O(dt),(function(t){N(t)})),i({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=j(t);if(h(ct,e))return ct[e];var n=Y(e);return ct[e]=n,ut[n]=e,n},keyFor:function(t){if(!y(t))throw H(t+" is not a symbol");if(h(ut,t))return ut[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),i({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?$(t):gt($(t),e)},defineProperty:pt,defineProperties:gt,getOwnPropertyDescriptor:vt}),i({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:yt,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(w(t))}}),tt)&&i({target:"JSON",stat:!0,forced:!f||l((function(){var t=Y();return"[null]"!=tt([t])||"{}"!=tt({a:t})||"{}"!=tt(Object(t))}))},{stringify:function(t,e,n){var i=R(arguments),r=e;if((m(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(g(r)&&(e=a(r,this,t,e)),!y(e))return e}),i[1]=e,s(tt,null,i)}});if(!L[K]){var wt=L.valueOf;B(L,K,(function(t){return a(wt,this)}))}F(Y,"Symbol"),U[z]=!0},s2Jo:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",r=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],o=["name","button","icon","url","logout","width","height"],s=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],a=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function c(t,e,n,i,r,o,s,a,c,u){"boolean"!=typeof s&&(c=a,a=s,s=!1);var d,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,r&&(f.functional=!0)),i&&(f._scopeId=i),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=d):e&&(d=s?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(f.functional){var l=f.render;f.render=function(t,e){return d.call(e),l(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,d):[d]}return n}var u=c({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return r.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(i);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;s.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),d=c({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(i);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return a((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return a((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function f(t,e){void 0===e&&(e={}),t.component("Disqus",u),t.component("DisqusCount",d),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(f)},x6dy:function(t,e,n){}}]);