import{_ as B}from"./AsyncSafeSeoWithOg.vue.6e19e8bd.js";import{_ as N}from"./Mask.aeee0f84.js";import{_ as M}from"./Pagination.vue.83844e8d.js";import{C as T}from"./Chip.f5365126.js";import{_ as S}from"./nuxt-link.f6fbd9f8.js";import{_ as V}from"./Shape.vue.d7b2081d.js";import{a as y,o as e,c as r,w as l,f as t,C as d,t as p,u as o,e as u,F as b,h as v,k as Y,Y as q,b as L,v as g}from"./entry.938a03d5.js";import{d as P}from"./date.8706a179.js";import W from"./ContentList.8780832e.js";import{u as A}from"./asyncData.6d3538bc.js";import{u as F}from"./navigation.e744be44.js";import{q as O}from"./query.4cfd976f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.bfb81cc1.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./Btn.vue.85bc68b9.js";import"./utils.9962b8d6.js";import"./ContentQuery.a6260737.js";import"./utils.06eddbbc.js";import"./preview.e7a6f6bd.js";const z={class:"relative w-full h-full overflow-hidden"},E=["src"],H={class:"p-2"},Q={class:"text-right font-bold"},R={class:"text-3xl font-bold text-cyan-200 mb-2"},j={class:"text-right mt-3 -mr-5"},G=y({__name:"Tile",props:{article:null},setup(a){return(i,c)=>{const n=T,m=S,s=V;return e(),r(s,{class:"blog-tile","shape-class":"blog-tile__shape"},{"shape-content":l(()=>[t("div",z,[t("img",{class:"blog-tile__image",src:a.article.image},null,8,E)])]),default:l(()=>[d(m,{to:a.article._path,class:"block",style:{padding:"var(--shape-card--dense__padding)"}},{default:l(()=>[t("div",H,[t("div",Q,[t("time",null,p(("dateToDayMonthYear"in i?i.dateToDayMonthYear:o(P))(a.article.date)),1)]),t("h2",R,p(a.article.title),1),t("p",null,p(a.article.description),1),t("div",j,[(e(!0),u(b,null,v(a.article.tags,_=>(e(),r(n,{key:_,class:"blog-tile__link__tag"},{default:l(()=>[Y(" #"+p(_),1)]),_:2},1024))),128))])])]),_:1},8,["to"])]),_:1})}}}),I={class:"mb-96"},J={class:"relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden"},K=t("div",{class:"max-w-lg"},[t("h1",{class:"text-6xl sm:text-8xl font-serif mb-5 text-cyan-300"},"Blog"),t("p",{class:"first-letter:bg-cyan-600"}," Welcome to my blog! Here you will find news, articles, and insights related to software development, programming languages, technology trends, and more. My goal is to provide informative and engaging content that is useful for developers of all levels. ")],-1),U={key:0},X={class:"max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 px-2 md:px-6"},bt=y({__name:"[page]",setup(a){const i=q(),c=L(()=>Number(i.params.page||1)),{itemsOnPage:n,filter:m}=F(),{data:s}=A(`blog/pages-count/${n}`,()=>O("/blog/").only("_path").where(m).find(),{server:!0,transform:h=>Math.ceil(h.length/n)}),_={path:"/blog",without:["excerpt","body"],where:m,limit:n,skip:(c.value-1)*n,sort:[{date:-1}]};return(h,Z)=>{const k=B,w=N,f=M,C=G,$=W;return e(),u("div",I,[d(k,{title:"Blog"}),t("div",J,[K,d(w,{mask:"owl",color:"",outline:"",class:"h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all"})]),o(s)?(e(),u("section",U,[o(s)>1?(e(),r(f,{key:0,class:"mx-auto my-10 max-w-md","current-page":o(c),"all-pages":o(s),"base-link":"/blog"},null,8,["current-page","all-pages"])):g("",!0),t("nav",X,[d($,{query:_},{default:l(({list:D})=>[(e(!0),u(b,null,v(D,x=>(e(),r(C,{key:x._path,article:x},null,8,["article"]))),128))]),_:1})]),o(s)>1?(e(),r(f,{key:1,class:"mx-auto my-10 max-w-md","current-page":o(c),"all-pages":o(s),"base-link":"/blog"},null,8,["current-page","all-pages"])):g("",!0)])):g("",!0)])}}});export{bt as default};