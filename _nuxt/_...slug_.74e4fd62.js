import{_ as f}from"./Index.ab2877b8.js";import h from"./ContentRenderer.1324a561.js";import{u as l,q as c}from"./query.3ff84557.js";import{a as v,l as n,b as s,o as a,e as r,u as o,f as y,H as B,t as b,a3 as i,c as k}from"./entry.975c889e.js";import{u as C}from"./seo.8a0c1283.js";import{g as D,a as P,b as T}from"./blog.6987c9d8.js";import{d as M}from"./date.8706a179.js";import"./nuxt-link.34041125.js";/* empty css                  */import"./ContentRendererMarkdown.b31da741.js";import"./index.a6ef77ff.js";import"./utils.4b982728.js";const N={class:"pb-[50vh] pt-10"},O={key:0,class:"blog-article"},j={key:0},z=v({__name:"[...slug]",setup(x){const{data:e}=l(n().path,()=>c(n().path).findOne(),"$ij35HG41ph");C({title:s(()=>{var t;return(t=e.value)==null?void 0:t.title}),description:s(()=>{var t;return(t=e.value)==null?void 0:t.description})});const{itemsOnPage:_}=T(),m=D(),{data:p}=l(n().path+"/position",()=>{var t;return c("/blog").only("_path").where({...m,date:{$gte:(t=e.value)==null?void 0:t.date}}).find()},{server:!0,transform:t=>t.length,watch:[e]}),u=s(()=>P("/blog",Math.floor((p.value??1)/_+1)));return(t,V)=>{const d=f,g=h;return a(),r("div",N,[o(e)?(a(),r("div",O,[y("nav",null,[B(d,{text:"< Back",to:o(u)},null,8,["to"])]),o(e).date?(a(),r("time",j,b(("dateToDayMonthYear"in t?t.dateToDayMonthYear:o(M))(o(e).date)),1)):i("",!0)])):i("",!0),o(e)?(a(),k(g,{key:1,value:o(e),tag:"article",class:"blog-article"},null,8,["value"])):i("",!0)])}}});export{z as default};
