import{_ as N}from"./AsyncSafeSeoWithOg.vue.434e3ce8.js";import{_ as P}from"./Index.vue.79d17cd1.js";import O from"./ContentRenderer.253cdbf2.js";import M from"./Icon.9d5c917b.js";import{C as j}from"./Title.c4daa426.js";import{_ as A}from"./Index.vue.eb02fb36.js";import{_ as V}from"./nuxt-link.2f2dac3f.js";import{a as y,d as E}from"./date.cb5304c9.js";import{d as v,b as l,B as c,w as m,C as t,g as r,A as B,e as i,t as k,r as L,o as R,c as T,m as Y,D as q,f as h,E as G}from"./entry.8b155df3.js";import{_ as H}from"./Error404.51a3c805.js";import{u as D}from"./asyncData.efe7da25.js";import{u as I}from"./navigation.643deeb9.js";import{q as b}from"./query.16443e70.js";import{g as W}from"./pagination.cc432e5c.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.vue.86906e95.js";import"./preview.f8eb3a52.js";import"./Shape.vue.e2fbcf6d.js";import"./ready.9af0e460.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const z={class:"text-xl font-bold"},F={name:"DLayoutSurroundDocCard"},J=v({...F,props:{doc:{},direction:{}},setup(u){return(e,p)=>{const s=M,n=j,o=A,d=V;return l(),c(d,{to:("addTrailingSlash"in e?e.addTrailingSlash:t(y))(e.doc._path),class:"transition-transform hover:scale-90"},{default:m(()=>[r(o,{dense:""},{default:m(()=>[e.direction==="before"?(l(),c(n,{key:0,class:"[&_h3]:!text-cyan-800"},{default:m(()=>[B(" Older"),r(s,{name:"ic:sharp-arrow-forward-ios"})]),_:1})):(l(),c(n,{key:1,class:"[&_h3]:!text-cyan-800"},{default:m(()=>[r(s,{name:"ic:sharp-arrow-back-ios"}),B("Newer ")]),_:1})),i("h4",z,k(e.doc.title),1),i("p",null,k(e.doc.description),1)]),_:1})]),_:1},8,["to"])}}}),K=v({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(u,{slots:e,attrs:p}){const s=L(!1);return R(()=>{s.value=!0}),n=>{var a;if(s.value)return(a=e.default)==null?void 0:a.call(e);const o=e.fallback||e.placeholder;if(o)return o();const d=n.fallback||n.placeholder||"",f=n.fallbackTag||n.placeholderTag||"span";return T(f,p,d)}}});function Q(u){return u.filter(e=>!!e)}const U={key:0,class:"pb-[50vh] pt-10"},X={class:"blog-article blog-fonts"},Z={class:"mb-10"},tt={key:0},et={class:"blog-article justify-center grid sm:grid-cols-2 gap-8 items-start my-16"},ot={class:"blog-article blog-fonts my-10"},Ct=v({__name:"[...slug]",setup(u){const e=Q(Y().params.slug),{itemsOnPage:p,filter:s}=I(),n=["/blog",...e].join("/"),{data:o}=D(n,async()=>{const a=b("blog",...e).findOne(),C=b().only(["_path","title","description"]).where({...s,_path:/^\/blog/}).findSurround(n,{before:1,after:1}),[g,_]=await Promise.all([a,C]);return{...g,before:_[0],after:_[1]}},"$ij35HG41ph"),{data:d}=D(["blog",...e,"position"].join("/"),()=>{var a;return b("/blog").only("_path").where({...s,date:{$gte:Number((a=o.value)==null?void 0:a.date)}}).find()},{server:!0,transform:a=>a.length,watch:[o]}),f=q(()=>W("/blog",Math.floor((d.value??1)/(p-1)+1)));return(a,C)=>{const g=N,_=P,w=O,S=J,$=K,x=H;return t(o)?(l(),T("div",U,[r(g,{title:t(o).title,description:t(o).description},null,8,["title","description"]),i("div",X,[i("nav",Z,[r(_,{text:"< Back",to:("addTrailingSlash"in a?a.addTrailingSlash:t(y))(t(f))},null,8,["to"])]),t(o).date?(l(),T("time",tt,k(("dateToDayMonthYear"in a?a.dateToDayMonthYear:t(E))(t(o).date)),1)):h("",!0)]),r(w,{value:t(o),tag:"article",class:"blog-article blog-fonts"},null,8,["value"]),i("nav",et,[t(o).after?(l(),c(S,{key:0,doc:t(o).after,direction:"after"},null,8,["doc"])):h("",!0),t(o).before?(l(),c(S,{key:1,doc:t(o).before,direction:"before"},null,8,["doc"])):h("",!0)]),i("nav",ot,[r(_,{text:"< Back",to:("addTrailingSlash"in a?a.addTrailingSlash:t(y))(t(f))},null,8,["to"])]),r($,null,{default:m(()=>[r(t(G),{class:"blog-fonts max-w-screen-md mx-auto px-3 mt-32",identifier:t(o)._path,url:`https://d0rich.me${t(n)}`},null,8,["identifier","url"])]),_:1})])):(l(),c(x,{key:1}))}}});export{Ct as default};
