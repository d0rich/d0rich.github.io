import{u as f}from"./asyncData.3159d74a.js";import{H as v,_ as d,a as l,$ as _,b as g,K as h,Z as y,M as p}from"./entry.d0fa8d7e.js";import{q as w,h as m,e as C,j as $}from"./query.ea9e0d1f.js";import{_ as N}from"./nuxt-link.e399568f.js";import{w as c,s as P,u as j,a as T}from"./utils.9d0e11ed.js";/* empty css                    *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                 */import"./Icon.vue.c3646457.js";/* empty css                  *//* empty css                 *//* empty css                *//* empty css                                      *//* empty css                 *//* empty css                     *//* empty css                    *//* empty css                  *//* empty css                            *//* empty css                   *//* empty css                      *//* empty css                            *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                   *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                 *//* empty css                       *//* empty css                  *//* empty css                  *//* empty css                    */import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const b=async i=>{const{content:t}=v().public;typeof(i==null?void 0:i.params)!="function"&&(i=w(i));const o=i.params(),e=t.experimental.stripQueryParameters?c(`/navigation/${`${m(o)}.${t.integrity}`}/${C(o)}.json`):c(`/navigation/${m(o)}.${t.integrity}.json`);if(P())return(await d(()=>import("./client-db.5e1cb1ee.js"),["./client-db.5e1cb1ee.js","./entry.d0fa8d7e.js","./entry.7960dee1.css","./utils.9d0e11ed.js","./query.ea9e0d1f.js"],import.meta.url).then(r=>r.generateNavigation))(o);const a=await $fetch(e,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(o),previewToken:j("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const $t=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=_(i),o=g(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!o.value&&h("dd-navigation").value){const{navigation:a}=T();return{navigation:a}}const{data:e}=await f(`content-navigation-${m(o.value)}`,()=>b(o.value));return{navigation:e}},render(i){const t=y(),{navigation:o}=i,e=r=>p(N,{to:r._path},()=>r.title),a=(r,s)=>p("ul",s?{"data-level":s}:null,r.map(n=>n.children?p("li",null,[e(n),a(n.children,s+1)]):p("li",null,e(n)))),u=r=>a(r,0);return t!=null&&t.default?t.default({navigation:o,...this.$attrs}):u(o)}});export{$t as default};
