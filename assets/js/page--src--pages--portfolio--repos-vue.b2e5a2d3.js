(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0If4":function(t,e,r){"use strict";var a={name:"ProjectBlock",props:{project:{required:!0,type:Object}}},o=(r("Ag4P"),r("V3zW"),r("7uw+")),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-block"},[r("v-card",{attrs:{to:t.project.path}},[t.project.image?r("v-img",{attrs:{height:"200px",src:t.project.image,alt:t.project.title,eager:""}}):t._e(),r("v-card-title",{staticClass:"project-block__title"},[t._v(t._s(t.project.title))]),r("v-card-subtitle",[r("time",{attrs:{datetime:t.project.date}},[t._v(t._s(t.project.date))])]),t.project.tags.length>0?r("v-divider"):t._e(),t.project.tags.length>0?r("v-card-text",t._l(t.project.tags,(function(e){return r("v-chip",{key:e.id,staticClass:"ma-1"},[t._v("\n        #"+t._s(e.title)+"\n      ")])})),1):t._e()],1)],1)}),[],!1,null,"2a45b2e4",null);e.a=s.exports},Ag4P:function(t,e,r){"use strict";r("cOgh")},"KY+X":function(t,e,r){"use strict";r("R51C")},R51C:function(t,e,r){},V3zW:function(t,e,r){"use strict";r("fdDS")},WQKC:function(t,e,r){"use strict";r.r(e);r("2B1R");var a=r("oYx3"),o=r("0If4"),s=r("cGfh"),i={name:"Repositories",components:{GitHubRepository:r("aDWY").a,ProjectBlock:o.a},data:function(){return{breadcrumbs:[{text:"d0rich",href:a.a.home},{text:"portfolio",href:a.a.portfolio()},{text:"repositories",href:a.a.repositories(),disabled:!0}]}},computed:{repos:function(){return this.$page.repos.edges.map((function(t){return t.node}))}},methods:{changePage:function(t){this.$router.push(a.a.repositories(t))}},mixins:[s.a],metaInfo:function(){return this.createMetaInfo({title:"Repositories",description:"Relevant repositories of Dorich, software developer",ogTitle:"Repositories by Dorich",ogPath:"/portfolio/repos/".concat(this.$page.repos.pageInfo.currentPage>1?this.$page.repos.pageInfo.currentPage+"/":"")})}},n=(r("XkQV"),r("7uw+")),c=null,l=r("oCYn"),p=l.default.config.optionMergeStrategies.computed,u={metadata:{siteUrl:"https://d0rich.github.io"}},d=function(t){var e=t.options;e.__staticData?e.__staticData.data=u:(e.__staticData=l.default.observable({data:u}),e.computed=p({$static:function(){return e.__staticData.data}},e.computed))},g=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-center mt-7"},[t._v("Repositories")]),r("div",{staticClass:"hr"}),r("nav",{staticClass:"align-self-start"},[r("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),r("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.portfolio(),exact:""}},[r("v-icon",[t._v("\n        mdi-chevron-left\n      ")]),t._v("\n      Back\n    ")],1)],1),r("nav",{staticClass:"repos-container"},t._l(t.repos,(function(t){return r("GitHubRepository",{key:t.id,attrs:{repo:t}})})),1),r("nav",{staticClass:"text-center mt-4"},[r("v-pagination",{attrs:{length:t.$page.repos.pageInfo.totalPages,value:t.$page.repos.pageInfo.currentPage},on:{input:t.changePage}})],1)])}),[],!1,null,"46c2d6d2",null);"function"==typeof c&&c(g),"function"==typeof d&&d(g);e.default=g.exports},XkQV:function(t,e,r){"use strict";r("k/mb")},aDWY:function(t,e,r){"use strict";var a=r("oCYn").default.extend({name:"GitHubRepository",props:{repo:{type:Object,required:!0}},methods:{getOwnerType:function(t){return"Organization"===t?"Org":t}}}),o=(r("KY+X"),r("7uw+")),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"github-repo pa-2",attrs:{outlined:"",rounded:""}},[r("div",{staticClass:"d-flex flex-column"},[r("div",{staticClass:"github-repo__name"},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-book")]),r("a",{staticClass:"font-weight-black github-repo__link",attrs:{href:t.repo.html_url,target:"_blank"}},[t._v(t._s(t.repo.name))]),t.repo.releases.length?r("v-chip",{staticClass:"ml-1",attrs:{"x-small":"",href:t.repo.releases[0].html_url,target:"_blank"}},[t._v("\n        "+t._s(t.repo.releases[0].tag_name)+"\n      ")]):t._e()],1),r("div",{staticClass:"text-subtitle-1 text--secondary my-1",domProps:{textContent:t._s(t.repo.description)}}),r("v-spacer"),r("div",{staticClass:"mt-2 text--secondary d-flex"},[t.repo.language?r("span",{staticClass:"d-flex align-center mr-2"},[r("v-icon",{attrs:{small:"",color:t.repo.language.color}},[t._v("mdi-circle")]),t._v(t._s(t.repo.language.name)+"\n      ")],1):t._e(),t.repo.stargazers_count?r("span",{staticClass:"d-flex align-center mr-2"},[r("v-icon",{attrs:{small:""}},[t._v("mdi-star")]),t._v(t._s(t.repo.stargazers_count)+"\n      ")],1):t._e(),"d0rich"!==t.repo.owner.login?r("v-chip",{attrs:{outlined:"",href:t.repo.owner.html_url,target:"_blank"}},[r("v-avatar",{attrs:{left:""}},[r("v-img",{attrs:{src:t.repo.owner.avatar_url}})],1),t._v("\n        "+t._s(t.getOwnerType(t.repo.owner.type))+": "+t._s(t.repo.owner.login)+"\n      ")],1):t._e()],1)],1),t.repo.language?r("div",{staticClass:"pl-3"},[r("v-avatar",{attrs:{tile:""}},[r("g-image",{attrs:{src:t.repo.language.icon}})],1)],1):t._e()])}),[],!1,null,"7b2f9373",null);e.a=s.exports},cGfh:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("7Ql6"),o=function(t,e,r){if(r||2===arguments.length)for(var a,o=0,s=e.length;o<s;o++)!a&&o in e||(a||(a=Array.prototype.slice.call(e,0,o)),a[o]=e[o]);return t.concat(a||Array.prototype.slice.call(e))},s=Object(a.b)({methods:{createMetaInfo:function(t){var e=void 0===t?{}:t,r=e.title,a=void 0===r?"":r,s=e.description,i=void 0===s?"":s,n=e.image,c=void 0===n?"":n,l=e.keywords,p=void 0===l?[]:l,u=e.ogTitle,d=void 0===u?a:u,g=e.ogDescription,f=void 0===g?i:g,v=e.ogPath,m=void 0===v?"":v,h=[{key:"keywords",name:"keywords",content:o(o([],["developer","informational technologies","IT"],!0),p,!0).join(", ")},{key:"og:title",property:"og:title",content:d},{key:"og:url",property:"og:url",content:this.$static.metadata.siteUrl+m}];if(i&&h.push({key:"description",name:"description",content:i}),f&&h.push({key:"og:description",property:"og:description",content:f}),c){var _=c.src||c;h.push({key:"og:image",property:"og:image",content:this.$static.metadata.siteUrl+_},{key:"vk:image",property:"vk:image",content:this.$static.metadata.siteUrl+_})}return{title:a,meta:h}}}})},cOgh:function(t,e,r){},fdDS:function(t,e,r){},"k/mb":function(t,e,r){}}]);