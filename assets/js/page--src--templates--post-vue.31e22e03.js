(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4Brf":function(t,e,n){"use strict";var i=n("I+eb"),r=n("g6v/"),o=n("2oRo"),s=n("4zBA"),a=n("Gi26"),u=n("Fib7"),c=n("OpvP"),d=n("V37c"),f=n("m/L8").f,l=n("6JNq"),h=o.Symbol,p=h&&h.prototype;if(r&&u(h)&&(!("description"in p)||void 0!==h().description)){var g={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=c(p,this)?new h(t):void 0===t?h():h(t);return""===t&&(g[e]=!0),e};l(m,h),m.prototype=p,p.constructor=m;var v="Symbol(test)"==String(h("test")),b=s(p.toString),y=s(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,S=s("".replace),_=s("".slice);f(p,"description",{configurable:!0,get:function(){var t=y(this),e=b(t);if(a(g,t))return"";var n=v?_(e,7,-1):S(e,w,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:m})}},"5Tg+":function(t,e,n){var i=n("tiKp");e.f=i},"BX/b":function(t,e,n){var i=n("xrYK"),r=n("/GqU"),o=n("JBy8").f,s=n("82ph"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"Window"==i(t)?function(t){try{return o(t)}catch(t){return s(a)}}(t):o(r(t))}},"J+we":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("KQm4"),r=(n("pNMO"),n("4Brf"),n("oVuX"),n("ma9I"),n("Kw5r").default.extend({methods:{createMetaInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,n=void 0===e?"":e,r=t.description,o=void 0===r?"":r,s=t.image,a=void 0===s?"":s,u=t.keywords,c=void 0===u?[]:u,d=t.ogTitle,f=void 0===d?n:d,l=t.ogDescription,h=void 0===l?o:l,p=t.ogPath,g=void 0===p?"":p,m=["developer","informational technologies","IT"],v=[{key:"keywords",name:"keywords",content:[].concat(m,Object(i.a)(c)).join(", ")},{key:"og:title",property:"og:title",content:f},{key:"og:url",property:"og:url",content:this.$static.metadata.siteUrl+g}];return o&&v.push({key:"description",name:"description",content:o}),h&&v.push({key:"og:description",property:"og:description",content:h}),a&&v.push({key:"og:image",property:"og:image",content:this.$static.metadata.siteUrl+a},{key:"vk:image",property:"vk:image",content:this.$static.metadata.siteUrl+a}),{title:n,meta:v}}}}))},KQm4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("a3WO");var r=n("BsWD");function o(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},LYHB:function(t,e,n){},Qo9l:function(t,e,n){var i=n("2oRo");t.exports=i},SHZv:function(t,e,n){"use strict";n.r(e);n("2B1R");var i=n("oYx3"),r=n("s2Jo"),o=n("J+we"),s={components:{Disqus:r.a},computed:{breadcrumbs:function(){return[{text:"d0rich",href:i.a.home},{text:"blog",href:i.a.blog()},{text:"posts",disabled:!0},{text:this.$page.post.title,disabled:!0}]}},mixins:[o.a],metaInfo:function(){return this.createMetaInfo({title:this.$page.post.title,description:this.$page.post.summary,keywords:this.$page.post.tags.map((function(t){return t.title})),ogTitle:"Blog Post: ".concat(this.$page.post.title),image:this.$page.post.image,ogPath:this.$page.post.path})}},a=(n("rs6S"),n("KHd+")),u=null,c=n("Kw5r"),d=c.default.config.optionMergeStrategies.computed,f={metadata:{siteUrl:"https://d0rich.github.io"}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=f:(e.__staticData=c.default.observable({data:f}),e.computed=d({$static:function(){return e.__staticData.data}},e.computed))},h=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("v-breadcrumbs",{staticClass:"align-self-start",attrs:{items:t.breadcrumbs}}),n("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.blog(),exact:""}},[n("v-icon",[t._v("\n          mdi-chevron-left\n        ")]),t._v("\n        Back\n      ")],1)],1),n("article",[n("div",{staticStyle:{"max-width":"100%"}},[n("h1",[t._v(t._s(t.$page.post.title)+" ")]),n("p",[t._v("Posted on "+t._s(t.$page.post.date))]),n("v-chip-group",t._l(t.$page.post.tags,(function(e){return n("v-chip",{key:e.id,attrs:{to:e.path}},[t._v("\n            #"+t._s(e.title)+"\n          ")])})),1),n("div",{staticClass:"d-flex justify-center"},[t.$page.post.image?n("v-img",{staticClass:"border-light--primary  my-4",attrs:{eager:"","aspect-ratio":1.5,"min-width":"300px","max-width":"600px",width:"100%",src:t.$page.post.image,alt:t.$page.post.title}}):t._e()],1)],1),n("div",{staticClass:"hr"}),n("VueRemarkContent",{staticClass:"markdown-body mb-8",attrs:{id:"article-area"}}),n("section",{staticClass:"disqus"},[n("Disqus",{attrs:{shortname:"dorich"}})],1)],1)])}),[],!1,null,"12c2acae",null);"function"==typeof u&&u(h),"function"==typeof l&&l(h);e.default=h.exports},"dG/n":function(t,e,n){var i=n("Qo9l"),r=n("Gi26"),o=n("5Tg+"),s=n("m/L8").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||s(e,t,{value:o.f(t)})}},pNMO:function(t,e,n){"use strict";var i=n("I+eb"),r=n("2oRo"),o=n("0GbY"),s=n("K6Rb"),a=n("xluM"),u=n("4zBA"),c=n("xDBR"),d=n("g6v/"),f=n("STAE"),l=n("0Dky"),h=n("Gi26"),p=n("6LWA"),g=n("Fib7"),m=n("hh1v"),v=n("OpvP"),b=n("2bX/"),y=n("glrk"),w=n("ewvW"),S=n("/GqU"),_=n("oEtG"),$=n("V37c"),O=n("XGwC"),C=n("fHMY"),q=n("33Wh"),k=n("JBy8"),j=n("BX/b"),D=n("dBg+"),I=n("Bs8V"),E=n("m/L8"),x=n("0eef"),B=n("82ph"),R=n("busE"),P=n("VpIT"),T=n("93I0"),U=n("0BK2"),A=n("kOOl"),G=n("tiKp"),J=n("5Tg+"),N=n("dG/n"),F=n("1E5z"),K=n("afO8"),V=n("tycR").forEach,z=T("hidden"),Q=G("toPrimitive"),M=K.set,W=K.getterFor("Symbol"),H=Object.prototype,L=r.Symbol,X=L&&L.prototype,Y=r.TypeError,Z=r.QObject,tt=o("JSON","stringify"),et=I.f,nt=E.f,it=j.f,rt=x.f,ot=u([].push),st=P("symbols"),at=P("op-symbols"),ut=P("string-to-symbol-registry"),ct=P("symbol-to-string-registry"),dt=P("wks"),ft=!Z||!Z.prototype||!Z.prototype.findChild,lt=d&&l((function(){return 7!=C(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=et(H,e);i&&delete H[e],nt(t,e,n),i&&t!==H&&nt(H,e,i)}:nt,ht=function(t,e){var n=st[t]=C(X);return M(n,{type:"Symbol",tag:t,description:e}),d||(n.description=e),n},pt=function(t,e,n){t===H&&pt(at,e,n),y(t);var i=_(e);return y(n),h(st,i)?(n.enumerable?(h(t,z)&&t[z][i]&&(t[z][i]=!1),n=C(n,{enumerable:O(0,!1)})):(h(t,z)||nt(t,z,O(1,{})),t[z][i]=!0),lt(t,i,n)):nt(t,i,n)},gt=function(t,e){y(t);var n=S(e),i=q(n).concat(yt(n));return V(i,(function(e){d&&!a(mt,n,e)||pt(t,e,n[e])})),t},mt=function(t){var e=_(t),n=a(rt,this,e);return!(this===H&&h(st,e)&&!h(at,e))&&(!(n||!h(this,e)||!h(st,e)||h(this,z)&&this[z][e])||n)},vt=function(t,e){var n=S(t),i=_(e);if(n!==H||!h(st,i)||h(at,i)){var r=et(n,i);return!r||!h(st,i)||h(n,z)&&n[z][i]||(r.enumerable=!0),r}},bt=function(t){var e=it(S(t)),n=[];return V(e,(function(t){h(st,t)||h(U,t)||ot(n,t)})),n},yt=function(t){var e=t===H,n=it(e?at:S(t)),i=[];return V(n,(function(t){!h(st,t)||e&&!h(H,t)||ot(i,st[t])})),i};(f||(R(X=(L=function(){if(v(X,this))throw Y("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?$(arguments[0]):void 0,e=A(t),n=function(t){this===H&&a(n,at,t),h(this,z)&&h(this[z],e)&&(this[z][e]=!1),lt(this,e,O(1,t))};return d&&ft&&lt(H,e,{configurable:!0,set:n}),ht(e,t)}).prototype,"toString",(function(){return W(this).tag})),R(L,"withoutSetter",(function(t){return ht(A(t),t)})),x.f=mt,E.f=pt,I.f=vt,k.f=j.f=bt,D.f=yt,J.f=function(t){return ht(G(t),t)},d&&(nt(X,"description",{configurable:!0,get:function(){return W(this).description}}),c||R(H,"propertyIsEnumerable",mt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:L}),V(q(dt),(function(t){N(t)})),i({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=$(t);if(h(ut,e))return ut[e];var n=L(e);return ut[e]=n,ct[n]=e,n},keyFor:function(t){if(!b(t))throw Y(t+" is not a symbol");if(h(ct,t))return ct[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),i({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?C(t):gt(C(t),e)},defineProperty:pt,defineProperties:gt,getOwnPropertyDescriptor:vt}),i({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:bt,getOwnPropertySymbols:yt}),i({target:"Object",stat:!0,forced:l((function(){D.f(1)}))},{getOwnPropertySymbols:function(t){return D.f(w(t))}}),tt)&&i({target:"JSON",stat:!0,forced:!f||l((function(){var t=L();return"[null]"!=tt([t])||"{}"!=tt({a:t})||"{}"!=tt(Object(t))}))},{stringify:function(t,e,n){var i=B(arguments),r=e;if((m(e)||void 0!==t)&&!b(t))return p(e)||(e=function(t,e){if(g(r)&&(e=a(r,this,t,e)),!b(e))return e}),i[1]=e,s(tt,null,i)}});if(!X[Q]){var wt=X.valueOf;R(X,Q,(function(t){return a(wt,this)}))}F(L,"Symbol"),U[z]=!0},rs6S:function(t,e,n){"use strict";n("LYHB")},s2Jo:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",r=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],o=["name","button","icon","url","logout","width","height"],s=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],a=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function u(t,e,n,i,r,o,s,a,u,c){"boolean"!=typeof s&&(u=a,a=s,s=!1);var d,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,r&&(f.functional=!0)),i&&(f._scopeId=i),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=d):e&&(d=s?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(f.functional){var l=f.render;f.render=function(t,e){return d.call(e),l(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,d):[d]}return n}var c=u({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return r.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(i);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;s.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),d=u({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(i);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return a((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return a((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function f(t,e){void 0===e&&(e={}),t.component("Disqus",c),t.component("DisqusCount",d),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(f)}}]);