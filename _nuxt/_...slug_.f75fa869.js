import{_ as N}from"./AsyncSafeSeoWithOg.vue.157d22a4.js";import{a as P}from"./Index.vue.b5474197.js";import O from"./ContentRenderer.9be17b96.js";import M from"./Icon.460ba0b7.js";import{C as j}from"./Title.18f74b7d.js";import{_ as V}from"./Index.vue.8e65fd24.js";import{_ as q}from"./nuxt-link.561e4542.js";import{a as y,d as A}from"./date.cb5304c9.js";import{a as v,o as i,c,w as m,u as t,m as r,I as B,k as l,t as k,r as E,f as L,i as T,q as Y,E as I,l as h,ak as R}from"./entry.a5c858ee.js";import{_ as G}from"./Error404.412b34d2.js";import{u as w}from"./asyncData.a5ba3e61.js";import{u as H}from"./navigation.96177c08.js";import{q as b}from"./query.ab53016e.js";import{g as W}from"./pagination.cc432e5c.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.d59fb84e.js";import"./preview.7bac60c6.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./Shape.vue.9767cdc4.js";import"./ready.951584b5.js";import"./utils.ba2263d9.js";const z={class:"text-xl font-bold"},F={name:"DLayoutSurroundDocCard"},J=v({...F,props:{doc:{},direction:{}},setup(u){return(o,p)=>{const s=M,n=j,e=V,d=q;return i(),c(d,{to:("addTrailingSlash"in o?o.addTrailingSlash:t(y))(o.doc._path),class:"transition-transform hover:scale-90"},{default:m(()=>[r(e,{dense:""},{default:m(()=>[o.direction==="before"?(i(),c(n,{key:0,class:"[&_h3]:!text-cyan-800"},{default:m(()=>[B(" Older"),r(s,{name:"ic:sharp-arrow-forward-ios"})]),_:1})):(i(),c(n,{key:1,class:"[&_h3]:!text-cyan-800"},{default:m(()=>[r(s,{name:"ic:sharp-arrow-back-ios"}),B("Newer ")]),_:1})),l("h4",z,k(o.doc.title),1),l("p",null,k(o.doc.description),1)]),_:1})]),_:1},8,["to"])}}}),K=v({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(u,{slots:o,attrs:p}){const s=E(!1);return L(()=>{s.value=!0}),n=>{var a;if(s.value)return(a=o.default)==null?void 0:a.call(o);const e=o.fallback||o.placeholder;if(e)return e();const d=n.fallback||n.placeholder||"",f=n.fallbackTag||n.placeholderTag||"span";return T(f,p,d)}}});function Q(u){return u.filter(o=>!!o)}const U={key:0,class:"pb-[50vh] pt-10"},X={class:"blog-article blog-fonts"},Z={class:"mb-10"},tt={key:0},ot={class:"blog-article justify-center grid sm:grid-cols-2 gap-8 items-start my-16"},et={class:"blog-article blog-fonts my-10"},Ct=v({__name:"[...slug]",setup(u){const o=Q(Y().params.slug),{itemsOnPage:p,filter:s}=H(),n=["/blog",...o].join("/"),{data:e}=w(n,async()=>{const a=b("blog",...o).findOne(),S=b().only(["_path","title","description"]).where({...s,_path:/^\/blog/}).findSurround(n,{before:1,after:1}),[g,_]=await Promise.all([a,S]);return{...g,before:_[0],after:_[1]}},"$ij35HG41ph"),{data:d}=w(["blog",...o,"position"].join("/"),()=>{var a;return b("/blog").only("_path").where({...s,date:{$gte:Number((a=e.value)==null?void 0:a.date)}}).find()},{server:!0,transform:a=>a.length,watch:[e]}),f=I(()=>W("/blog",Math.floor((d.value??1)/(p-1)+1)));return(a,S)=>{const g=N,_=P,D=O,C=J,$=K,x=G;return t(e)?(i(),T("div",U,[r(g,{title:t(e).title,description:t(e).description},null,8,["title","description"]),l("div",X,[l("nav",Z,[r(_,{text:"< Back",to:("addTrailingSlash"in a?a.addTrailingSlash:t(y))(t(f))},null,8,["to"])]),t(e).date?(i(),T("time",tt,k(("dateToDayMonthYear"in a?a.dateToDayMonthYear:t(A))(t(e).date)),1)):h("",!0)]),r(D,{value:t(e),tag:"article",class:"blog-article blog-fonts"},null,8,["value"]),l("nav",ot,[t(e).after?(i(),c(C,{key:0,doc:t(e).after,direction:"after"},null,8,["doc"])):h("",!0),t(e).before?(i(),c(C,{key:1,doc:t(e).before,direction:"before"},null,8,["doc"])):h("",!0)]),l("nav",et,[r(_,{text:"< Back",to:("addTrailingSlash"in a?a.addTrailingSlash:t(y))(t(f))},null,8,["to"])]),r($,null,{default:m(()=>[r(t(R),{class:"blog-fonts max-w-screen-md mx-auto px-3 mt-32",identifier:t(e)._path,url:`https://d0rich.me${t(n)}`},null,8,["identifier","url"])]),_:1})])):(i(),c(x,{key:1}))}}});export{Ct as default};