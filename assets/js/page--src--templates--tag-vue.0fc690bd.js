(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"20JP":function(t,e,i){},"2hOt":function(t,e,i){"use strict";i("YdIx");var s=i("qa07"),a=i("HIdI"),n=i("ToLJ"),o=i("dWAg"),l=i("8ud9"),r=i("VgeV"),h=i("gNKD"),c=i("2b3T"),u=i("WN+I");const d=Object(u.a)(s.a,a.a,o.a,Object(n.a)("listItemGroup"),Object(l.b)("inputValue"));e.a=d.extend().extend({name:"v-list-item",directives:{Ripple:r.a},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...a.a.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(a.a.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&Object(c.e)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-"+this._uid):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,...this.genAttrs()},i[this.to?"nativeOn":"on"]={...i[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===h.k.enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(i.on=i.nativeOn,delete i.nativeOn);const s=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,i):i,s)}})},"2qYH":function(t,e,i){"use strict";i.r(e);i("ma9I");var s=i("BA+P"),a=i("oYx3"),n={components:{PostCard:s.a},computed:{breadcrumbs:function(){return[{text:"d0rich",href:a.a.home},{text:"blog",href:a.a.blog()},{text:"tags",disabled:!0},{text:this.$page.tag.title,disabled:!0}]}},methods:{changePage:function(t){this.$router.push(a.a.tag(this.$page.tag.title,t))}},metaInfo:function(){return{title:"Tag: ".concat(this.$page.tag.title),meta:[{key:"description",name:"description",content:"All posts of Dorich with tag #".concat(this.$page.tag.title)},{key:"og:title",property:"og:title",content:"Tag: ".concat(this.$page.tag.title," | Dorich")},{key:"og:description",property:"og:description",content:"All posts of Dorich with tag #".concat(this.$page.tag.title)},{key:"og:url",property:"og:url",content:"https://d0rich.github.io/blog/tags/".concat(this.$page.tag.title,"/").concat(this.$page.tag.belongsTo.pageInfo.currentPage>1?this.$page.tag.belongsTo.pageInfo.currentPage+"/":"")},{key:"robots",name:"robots",content:"noindex,follow"}]}}},o=(i("W75e"),i("KHd+")),l=null,r=i("ZUTo"),h=i.n(r),c=i("K8WS"),u=i("gzZi"),d=i("zCDB"),p=i("75rO"),g=i("Ey0z"),v=i("iR7P"),m=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("h1",{staticClass:"mt-7"},[t._v("Blog posts filtered by tag")]),i("div",{staticClass:"hr"}),i("nav",{staticClass:"align-self-start"},[i("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),i("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.blog(),exact:""}},[i("v-icon",[t._v("\n        mdi-chevron-left\n      ")]),t._v("\n      Back\n    ")],1)],1),i("nav",[i("h2",[t._v("Posts tagged "),i("span",{staticClass:"tag-highlight"},[t._v("#"+t._s(t.$page.tag.title))])]),t._l(t.$page.tag.belongsTo.edges,(function(t){return i("post-card",{key:t.node.id,staticClass:"my-2",attrs:{post:t.node}})}))],2),i("nav",[i("v-pagination",{attrs:{length:t.$page.tag.belongsTo.pageInfo.totalPages,value:t.$page.tag.belongsTo.pageInfo.currentPage},on:{input:t.changePage}})],1),i("nav",{staticClass:"align-self-start mt-5"},[i("h2",[t._v("All Tags")]),i("v-chip-group",{attrs:{column:""}},t._l(t.$page.tags.edges,(function(e){return i("v-chip",{key:e.node.id,attrs:{to:e.node.path}},[t._v("\n        #"+t._s(e.node.title)+"\n      ")])})),1)],1)])}),[],!1,null,null,null);"function"==typeof l&&l(m);e.default=m.exports;h()(m,{VBreadcrumbs:c.a,VBtn:u.a,VChip:d.a,VChipGroup:p.a,VIcon:g.a,VPagination:v.a})},"BA+P":function(t,e,i){"use strict";var s={name:"PostCard",props:{post:{type:Object,required:!0}}},a=(i("DQvt"),i("KHd+")),n=i("ZUTo"),o=i.n(n),l=i("rdoz"),r=i("2hOt"),h=i("XSMC"),c=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-list-item",{staticClass:"news-card",style:{paddingLeft:t.post.image?0:void 0},attrs:{to:t.post.path}},[t.post.image?i("v-img",{staticClass:"news-card__image",attrs:{src:t.post.image,alt:t.post.title,eager:"","max-height":"6rem","min-height":"100%","max-width":"10rem"}}):t._e(),i("v-list-item-content",[i("v-list-item-title",[t._v("\n      "+t._s(t.post.title)+"\n    ")]),i("v-list-item-subtitle",{staticClass:"mb-2"},[i("time",{attrs:{datetime:t.post.date}},[t._v(t._s(t.post.date))])]),i("v-list-item-subtitle",[t._v("\n      "+t._s(t.post.summary)+"\n    ")])],1)],1)}),[],!1,null,"28dff6f4",null);e.a=c.exports;o()(c,{VImg:l.a,VListItem:r.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},DQvt:function(t,e,i){"use strict";i("L3nu")},F7OB:function(t,e,i){},L3nu:function(t,e,i){},NAjR:function(t,e,i){},NMP6:function(t,e,i){"use strict";var s=i("Kw5r");e.a=s.default.extend({name:"v-list-item-icon",functional:!0,render:(t,{data:e,children:i})=>(e.staticClass=("v-list-item__icon "+(e.staticClass||"")).trim(),t("div",e,i))})},NUtq:function(t,e,i){},OtDc:function(t,e,i){},W75e:function(t,e,i){"use strict";i("NUtq")},XSMC:function(t,e,i){"use strict";i.d(e,"a",(function(){return L})),i.d(e,"c",(function(){return O})),i.d(e,"b",(function(){return w}));var s=i("gNKD"),a=(i("OtDc"),i("jdmY")),n=a.a.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...a.a.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),o=(i("20JP"),i("nSar")),l=i("2hOt"),r=i("NMP6"),h=i("fiu3"),c=i("2b3T"),u=i("Kw5r"),d=u.default.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(c.e)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}}),p=i("qa07"),g=i("8ud9"),v=i("MgYL"),m=i("VgeV"),b=i("B4nN"),f=i("WN+I");var $=Object(f.a)(h.a,d,p.a,Object(v.a)("list"),g.a).extend().extend({name:"v-list-group",directives:{ripple:m.a},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick(()=>this.isActive=!this.isActive))},genIcon(t){return this.$createElement(o.a,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(r.a,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(l.a,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent(()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},Object(s.j)(this))])},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(r.a,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick(()=>this.isActive=e)},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(b.a,this.genItems())])}}),y=(i("iZzM"),i("YEyi")),I=Object(f.a)(y.a,p.a).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...y.a.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...y.a.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),_=u.default.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:i=[]}){e.staticClass=e.staticClass?"v-list-item__action "+e.staticClass:"v-list-item__action";return i.filter(t=>!1===t.isComment&&" "!==t.text).length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,i)}}),C=(i("NAjR"),i("JLKi")),x=i("ojZx"),B=Object(f.a)(p.a,C.a,x.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(s.e)(this.size),minWidth:Object(s.e)(this.size),width:Object(s.e)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),A=B.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...B.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=B.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});const k=Object(s.f)("v-list-item__action-text","span"),L=Object(s.f)("v-list-item__content","div"),O=Object(s.f)("v-list-item__title","div"),w=Object(s.f)("v-list-item__subtitle","div");l.a,r.a},YdIx:function(t,e,i){},iR7P:function(t,e,i){"use strict";i("F7OB");var s=i("nSar"),a=i("3CKS"),n=i("qa07"),o=i("kKKM"),l=i("2b3T"),r=i("Kw5r");var h,c=i("dWAg"),u=i("WN+I");e.a=Object(u.a)(n.a,(h={onVisible:["init"]},r.default.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){o.a.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){o.a.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(t,e,i){if(this.isIntersecting=i,i)for(let t=0,e=h.onVisible.length;t<e;t++){const e=this[h.onVisible[t]];"function"!=typeof e?Object(l.c)(h.onVisible[t]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})),c.a).extend({name:"v-pagination",directives:{Resize:a.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1==0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:()=>({maxButtons:0,selected:null}),computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2==0?1:0,s=Math.floor(e/2),a=this.length-s+1+i;if(this.value>s&&this.value<a){const t=1,e=this.length,a=this.value-s+2,n=this.value+s-2-i,o=n+1===e-1?n+1:"...";return[1,a-1===t+1?2:"...",...this.range(a,n),o,this.length]}if(this.value===s){const t=this.value+s-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===a){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(a,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];for(let s=t=t>0?t:1;s<=e;s++)i.push(s);return i},genIcon:(t,e,i,a,n)=>t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:a}},[t(s.a,[e])])]),genItem(t,e){const i=e===this.value&&(this.color||"primary"),s=e===this.value,a=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(a,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},iZzM:function(t,e,i){}}]);