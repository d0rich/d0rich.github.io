import{_ as D}from"./AsyncSafeSeoWithOg.vue.da5bc87d.js";import{_ as B}from"./Mask.63b95b4f.js";import{_ as N}from"./Pagination.vue.898744e5.js";import{C as S}from"./Chip.1ea68d37.js";import{_ as M}from"./nuxt-link.8762e0db.js";import{_ as V}from"./Shape.vue.45546b1d.js";import{a as W,d as q}from"./date.15a11437.js";import{a as y,o as a,c as r,w as l,f as t,C as p,u as o,t as _,e as d,F as b,h as v,k as L,W as P,b as Y,v as g}from"./entry.d136969d.js";import A from"./ContentList.5a31cbed.js";import{u as F}from"./asyncData.d51c9f4c.js";import{u as O}from"./navigation.61b4cff8.js";import{q as z}from"./query.7f659d51.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.03382b98.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./Btn.vue.f2053727.js";import"./pagination.cc432e5c.js";import"./ContentQuery.e8a8b213.js";import"./utils.0a571ef8.js";import"./preview.49e7d1ee.js";const E={class:"relative w-full h-full overflow-hidden"},H=["src"],Q={class:"p-2"},R={class:"text-right font-bold"},j={class:"text-3xl font-bold text-cyan-200 mb-2"},G={class:"text-right mt-3 -mr-5"},I=y({__name:"Tile",props:{article:{}},setup(x){return(e,i)=>{const n=S,c=M,s=V;return a(),r(s,{class:"blog-tile","shape-class":"blog-tile__shape"},{"shape-content":l(()=>[t("div",E,[t("img",{class:"blog-tile__image",src:e.article.image},null,8,H)])]),default:l(()=>[p(c,{to:("addTrailingSlash"in e?e.addTrailingSlash:o(W))(e.article._path),class:"block",style:{padding:"var(--shape-card--dense__padding)"}},{default:l(()=>[t("div",Q,[t("div",R,[t("time",null,_(("dateToDayMonthYear"in e?e.dateToDayMonthYear:o(q))(e.article.date)),1)]),t("h2",j,_(e.article.title),1),t("p",null,_(e.article.description),1),t("div",G,[(a(!0),d(b,null,v(e.article.tags,m=>(a(),r(n,{key:m,class:"blog-tile__link__tag"},{default:l(()=>[L(" #"+_(m),1)]),_:2},1024))),128))])])]),_:1},8,["to"])]),_:1})}}});const J={class:"mb-96"},K={class:"relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden"},U=t("div",{class:"max-w-lg"},[t("h1",{class:"text-6xl sm:text-8xl font-serif mb-5 text-cyan-300"},"Blog"),t("p",{class:"first-letter:bg-cyan-600"}," Welcome to my blog! Here you will find news, articles, and insights related to software development, programming languages, technology trends, and more. My goal is to provide informative and engaging content that is useful for developers of all levels. ")],-1),X={key:0},Z={class:"max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 px-2 md:px-6"},xt=y({__name:"[page]",setup(x){const e=P(),i=Y(()=>Number(e.params.page||1)),{itemsOnPage:n,filter:c}=O(),{data:s}=F(`blog/pages-count/${n}`,()=>z("/blog/").only("_path").where(c).find(),{server:!0,transform:u=>Math.ceil(u.length/n)}),m={path:"/blog",without:["excerpt","body"],where:c,limit:n,skip:(i.value-1)*n,sort:[{date:-1}]};return(u,tt)=>{const k=D,w=B,h=N,C=I,$=A;return a(),d("div",J,[p(k,{title:"Blog"}),t("div",K,[U,p(w,{mask:"owl",color:"",outline:"",class:"h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all"})]),o(s)?(a(),d("section",X,[o(s)>1?(a(),r(h,{key:0,class:"mx-auto my-10 max-w-md","current-page":o(i),"all-pages":o(s),"base-link":"/blog"},null,8,["current-page","all-pages"])):g("",!0),t("nav",Z,[p($,{query:m},{default:l(({list:T})=>[(a(!0),d(b,null,v(T,f=>(a(),r(C,{key:f._path,article:f},null,8,["article"]))),128))]),_:1})]),o(s)>1?(a(),r(h,{key:1,class:"mx-auto my-10 max-w-md","current-page":o(i),"all-pages":o(s),"base-link":"/blog"},null,8,["current-page","all-pages"])):g("",!0)])):g("",!0)])}}});export{xt as default};
