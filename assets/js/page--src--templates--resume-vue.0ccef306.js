(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6yoa":function(t,e,s){"use strict";s.r(e);s("oVuX"),s("2B1R"),s("DQNa");var a={name:"ExpBlock",props:{expNote:{required:!0,type:Object}},methods:{isDate:function(t){return+new Date(t)>0},transformDate:function(t){return new Date(t).toLocaleDateString("en",{month:"long",year:"numeric"})}}},i=(s("IBQW"),s("KHd+")),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border-light--primary time-note"},[s("div",[s("span",{staticClass:"time-note__title"},[t._v(t._s(t.expNote.spec)+" ")]),s("span",{staticClass:"time-note__place"},[t._v(t._s(t.expNote.place))])]),s("div",{staticClass:"time-note__period"},[s("span",[t.isDate(t.expNote.date.begin)?s("time",{attrs:{datetime:t.expNote.date.begin}},[t._v(t._s(t.transformDate(t.expNote.date.begin)))]):s("time",[t._v(t._s(t.expNote.date.begin))])]),t._v("\n    -\n    "),s("span",[t.isDate(t.expNote.date.end)?s("time",{attrs:{datetime:t.expNote.date.end}},[t._v(t._s(t.transformDate(t.expNote.date.end)))]):s("time",[t._v(t._s(t.expNote.date.end))])])]),s("div",{staticClass:"time-note__description"},[s("p",[t._v(t._s(t.expNote.description))]),t.expNote.certificate?s("a",{attrs:{href:t.expNote.certificate,target:"_blank"}},[t._v("Certificate")]):t._e()])])}),[],!1,null,"37e60acb",null).exports,o={name:"SkillsBlock",props:{skillsField:{required:!0,type:Object}}},c=(s("Sk00"),Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border-light--primary skills-note"},[e("h2",[this._v(this._s(this.skillsField.name))]),e("div",[this._v(this._s(this.skillsField.items.join(", ")))])])}),[],!1,null,"7c73a61c",null).exports),r=s("oYx3"),l={name:"Resume",components:{ExpBlock:n,SkillsBlock:c},computed:{breadcrumbs:function(){return[{text:"d0rich",href:r.a.home},{text:"resume",href:r.a.allResume()},{text:this.$page.resume.content.main.spec,disabled:!0}]}},metaInfo:function(){return{title:"".concat(this.$page.resume.content.main.spec," Resume"),meta:[{key:"description",name:"description",content:this.$page.resume.content.main.text},{key:"keywords",name:"keywords",content:this.$page.resume.content.main.spec+", "+this.$page.resume.content.education.history.map((function(t){return t.place})).join(", ")+", "+this.$page.workExp.edges.map((function(t){return t.place})).join(", ")},{key:"og:title",property:"og:title",content:"".concat(this.$page.resume.content.main.spec," Resume | Dorich")},{key:"og:description",property:"og:description",content:this.$page.resume.content.main.text},{key:"og:url",property:"og:url",content:this.$static.metadata.siteUrl+this.$page.resume.path},{key:"og:image",property:"og:image",content:this.$static.metadata.siteUrl+this.$page.resume.image},{key:"vk:image",property:"vk:image",content:this.$static.metadata.siteUrl+this.$page.resume.image}]}}},m=(s("UlOU"),null),d=s("Kw5r"),u=d.default.config.optionMergeStrategies.computed,p={metadata:{siteUrl:"https://d0rich.github.io"}},_=function(t){var e=t.options;e.__staticData?e.__staticData.data=p:(e.__staticData=d.default.observable({data:p}),e.computed=u({$static:function(){return e.__staticData.data}},e.computed))},v=s("ZUTo"),h=s.n(v),g=s("K8WS"),f=s("gzZi"),b=s("Ey0z"),k=s("rdoz"),x=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",[s("nav",t._l(t.$page.allResume.edges,(function(e){return s("v-btn",{key:e.node.id,staticClass:"mx-3 my-2",attrs:{"active-class":"cursor-active-box",to:e.node.path,text:"",outlined:"",large:""}},[s("span",{staticClass:"cursor--on-active"},[t._v(t._s(e.node.title))])])})),1),s("nav",{staticClass:"align-self-start"},[s("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),s("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.allResume(),exact:""}},[s("v-icon",[t._v("\n        mdi-chevron-left\n      ")]),t._v("\n      Back\n    ")],1)],1),s("article",[s("section",{staticClass:"intro"},[s("div",{staticClass:"intro__info"},[s("h1",[t._v("\n          "+t._s(t.$page.resume.content.main.first_name)+" "+t._s(t.$page.resume.content.main.second_name)+" - "+t._s(t.$page.resume.content.main.spec)+"\n        ")]),s("p",[t._v(t._s(t.$page.resume.content.main.text))]),s("address",{staticClass:"contacts"},[s("div",{staticClass:"contact__title"},[t._v("Phone")]),s("div",{staticClass:"contact__info"},[s("a",{attrs:{href:"tel:"+t.$page.resume.content.contacts.phone}},[t._v("\n              "+t._s(t.$page.resume.content.contacts.phone)+"\n            ")])]),s("div",{staticClass:"contact__title"},[t._v("Email")]),s("div",{staticClass:"contact__info"},[s("a",{attrs:{href:"mailto:"+t.$page.resume.content.contacts.email,target:"_blank"}},[t._v("\n              "+t._s(t.$page.resume.content.contacts.email)+"\n            ")])]),s("div",{staticClass:"contact__title"},[t._v("Address")]),s("div",{staticClass:"contact__info"},[t._v(t._s(t.$page.resume.content.contacts.address))]),s("div",{staticClass:"contact__title"},[t._v("Social")]),s("div",[s("v-btn",{attrs:{icon:"",href:"https://github.com/"+t.$page.resume.content.contacts.social.github,target:"_blank"}},[s("v-icon",[t._v("mdi-github")])],1),s("v-btn",{attrs:{icon:"",href:"https://t.me/"+t.$page.resume.content.contacts.social.telegram,target:"_blank"}},[s("v-icon",[t._v("fa-telegram")])],1),s("v-btn",{attrs:{icon:"",href:"https://vk.com/"+t.$page.resume.content.contacts.social.vk,target:"_blank"}},[s("v-icon",[t._v("fa-vk")])],1)],1)])]),s("div",{staticClass:"intro__photo"},[s("v-img",{staticClass:"border-light--primary",attrs:{eager:"",width:"100vw","max-width":"15rem","min-width":"100px","min-height":"100px",src:t.$page.resume.content.main.photo,alt:"Nikolay Dorofeev"}})],1)]),s("div",{staticClass:"hr"}),s("section",{staticClass:"skills"},[s("div",{staticClass:"block__column--text skills__description"},[s("h2",[t._v("Skills")]),s("p",[t._v(t._s(t.$page.resume.content.skills.text))])]),s("div",{staticClass:"block__column--items skills__skills-notes"},t._l(t.$page.resume.content.skills.fields,(function(t){return s("skills-block",{key:t.name,attrs:{"skills-field":t}})})),1)]),s("div",{staticClass:"hr"}),s("section",{staticClass:"block"},[s("div",{staticClass:"block__column--text"},[s("h2",[t._v("Work Experience")])]),s("div",{staticClass:"block__column--items time-notes"},t._l(t.$page.workExp.edges,(function(t,e){return s("exp-block",{key:e,attrs:{"exp-note":t.node}})})),1)]),s("div",{staticClass:"hr"}),s("section",{staticClass:"block"},[s("div",{staticClass:"block__column--text"},[s("h2",[t._v("Education")]),s("p",[t._v(t._s(t.$page.resume.content.education.text))])]),s("div",{staticClass:"block__column--items time-notes"},t._l(t.$page.resume.content.education.history,(function(t,e){return s("exp-block",{key:e,attrs:{"exp-note":t}})})),1)])])])}),[],!1,null,"fdedc730",null);"function"==typeof m&&m(x),"function"==typeof _&&_(x);e.default=x.exports;h()(x,{VBreadcrumbs:g.a,VBtn:f.a,VIcon:b.a,VImg:k.a})},"77tl":function(t,e,s){},DQNa:function(t,e,s){var a=s("4zBA"),i=s("busE"),n=Date.prototype,o=a(n.toString),c=a(n.getTime);"Invalid Date"!=String(new Date(NaN))&&i(n,"toString",(function(){var t=c(this);return t==t?o(this):"Invalid Date"}))},IBQW:function(t,e,s){"use strict";s("77tl")},K8WS:function(t,e,s){"use strict";s("q9PU");var a=s("HIdI"),i=s("WN+I"),n=Object(i.a)(a.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:s}=this.generateRouteLink();return t("li",[t(e,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),o=s("gNKD"),c=Object(o.f)("v-breadcrumbs__divider","li"),r=s("dWAg");e.a=Object(i.a)(r.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,s=[];for(let a=0;a<this.items.length;a++){const i=this.items[a];s.push(i.text),e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(n,{key:s.join("."),props:i},[i.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},Sk00:function(t,e,s){"use strict";s("q7wJ")},UlOU:function(t,e,s){"use strict";s("z9K6")},q7wJ:function(t,e,s){},q9PU:function(t,e,s){},z9K6:function(t,e,s){}}]);