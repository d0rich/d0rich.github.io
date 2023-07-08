import{_ as $}from"./AsyncSafeSeoWithOg.vue.157d22a4.js";import{_ as T}from"./Mask.846d0fac.js";import{_ as C}from"./Pagination.vue.a9e2792e.js";import D from"./Icon.460ba0b7.js";import{C as S}from"./Chip.93fe0bd4.js";import{_ as N}from"./Shape.vue.9767cdc4.js";import{_ as P}from"./nuxt-link.561e4542.js";import{d as B,a as I}from"./date.cb5304c9.js";import{a as b,o,i as r,m,w as u,k as t,Z as j,I as h,t as c,u as s,F as p,G as _,c as l,q as M,E as V,l as g}from"./entry.a5c858ee.js";import{u as E}from"./asyncData.a5ba3e61.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Btn.vue.2a5d5d11.js";import"./pagination.cc432e5c.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./ready.951584b5.js";const L=t("div",{class:"project-tile__frame--top"},null,-1),Y=t("div",{class:"project-tile__frame--bottom"},null,-1),z={class:"project-tile__link__image-wrapper"},A=t("div",{class:"project-tile__link-image-overlay"},null,-1),F=t("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),W={class:"max-w-2xl mx-auto px-3"},q={style:{padding:"var(--shape-card-padding)"}},G={class:"text-right"},O={class:"font-bold"},R={class:"text-3xl font-bold text-red-200 mb-2"},Z={class:"my-2"},H={class:"text-right mt-3 -mr-5"},J=t("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),K={name:"ProjectsTile"},Q=b({...K,props:{project:{}},setup(k){return(e,i)=>{const a=D,f=S,y=N,d=P;return o(),r("div",{class:"project-tile overflow-x-hidden",style:j({"--page-bg-color":"rgb(23 23 23 / var(--tw-bg-opacity))"})},[L,Y,m(d,{class:"project-tile__link",to:("addTrailingSlash"in e?e.addTrailingSlash:s(I))(e.project.url)},{default:u(()=>[t("div",z,[t("div",{class:"project-tile__link__image",style:j(`background-image: url(${e.project.image});`)},null,4)]),A,F,t("div",W,[m(y,{"shape-class":"bg-black bg-opacity-90","shape-style":"clip-path: var(--shape-card);"},{default:u(()=>[t("div",q,[t("div",G,[h(" Last updated: "),t("time",O,c(("dateToDayMonthYear"in e?e.dateToDayMonthYear:s(B))(e.project.last_updated)),1)]),t("h2",R,c(e.project.title),1),t("p",Z,c(e.project.description),1),t("p",null,[h(" Complexity: "),(o(!0),r(p,null,_(e.project.complexity,n=>(o(),l(a,{key:n,class:"text-red-200",name:"ic:sharp-star"}))),128)),(o(!0),r(p,null,_(5-(e.project.complexity||0),n=>(o(),l(a,{key:n,class:"text-red-200",name:"ic:sharp-star-outline"}))),128))]),t("div",H,[(o(!0),r(p,null,_(e.project.tags,n=>(o(),l(f,{key:n,class:"project-tile__link__tag"},{default:u(()=>[h(" #"+c(n),1)]),_:2},1024))),128))])])]),_:1})]),J]),_:1},8,["to"])],4)}}});const U={class:"pb-[50vh]"},X={class:"relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden"},tt=t("div",{class:"max-w-lg"},[t("h1",{class:"text-6xl sm:text-8xl font-serif mb-5 text-red-300"}," Projects "),t("p",{class:"first-letter:bg-red-600"}," Explore my portfolio of IT projects - a collection of custom documentation websites that showcase my technical skills and expertise in solving complex IT problems with innovative solutions. "),t("p",{class:"first-letter:bg-red-600"}," Browse through for valuable insights into my approach to information technology. ")],-1),et={key:0},ft=b({__name:"[page]",setup(k){const e=M(),i=V(()=>Number(e.params.page||1)),{data:a}=E(`/projects/pages/${i.value}`,()=>$fetch(`/api/projects/${i.value}`));return(f,y)=>{const d=$,n=T,v=C,w=Q;return o(),r("div",U,[m(d,{title:"Projects"}),t("div",X,[tt,m(n,{mask:"spider",color:"",outline:"",class:"h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all"})]),s(a)?(o(),r("section",et,[s(a)._pagesCount>1?(o(),l(v,{key:0,class:"mx-auto my-10 max-w-md","current-page":s(i),"all-pages":s(a)._pagesCount,"base-link":"/projects"},null,8,["current-page","all-pages"])):g("",!0),t("nav",null,[(o(!0),r(p,null,_(s(a).items,x=>(o(),l(w,{key:x.url,project:x},null,8,["project"]))),128))]),s(a)._pagesCount>1?(o(),l(v,{key:1,class:"mx-auto my-10 max-w-md","current-page":s(i),"all-pages":s(a)._pagesCount,"base-link":"/projects"},null,8,["current-page","all-pages"])):g("",!0)])):g("",!0)])}}});export{ft as default};
