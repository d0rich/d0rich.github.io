import{a as k,l as A,p as b,K as N,r as B,b as o,A as C,L as D,u as e,o as r,e as w,i as m,c as z,s as q,t as E,J as F}from"./entry.7fd2b9f3.js";import{I as H,l as J}from"./Icon.vue.facf12c0.js";import{_ as K}from"./_plugin-vue_export-helper.c27b6911.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const L=["width","height"],$=k({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(_){var y;let c,v;const i=_,S=A(),s=b();(y=s==null?void 0:s.nuxtIcon)!=null&&y.aliases;const p=N("icons",()=>({})),h=B(!1),a=o(()=>{var t;return(((t=s.nuxtIcon)==null?void 0:t.aliases)||{})[i.name]||i.name}),f=o(()=>{var t;return(t=p.value)==null?void 0:t[a.value]}),l=o(()=>S.vueApp.component(a.value)),n=o(()=>{var d,I,g;if(!i.size&&typeof((d=s.nuxtIcon)==null?void 0:d.size)=="boolean"&&!((I=s.nuxtIcon)!=null&&I.size))return;const t=i.size||((g=s.nuxtIcon)==null?void 0:g.size)||"1em";return String(Number(t))===t?`${t}px`:t}),u=o(()=>{var t;return((t=s==null?void 0:s.nuxtIcon)==null?void 0:t.class)??"icon"});async function x(){var t;l.value||(t=p.value)!=null&&t[a.value]||(h.value=!0,p.value[a.value]=await J(a.value).catch(()=>{}),h.value=!1)}return C(()=>a.value,x),!l.value&&([c,v]=D(()=>x()),c=await c,v()),(t,d)=>e(h)?(r(),w("span",{key:0,class:m(e(u)),width:e(n),height:e(n)},null,10,L)):e(f)?(r(),z(e(H),{key:1,icon:e(f),class:m(e(u)),width:e(n),height:e(n)},null,8,["icon","class","width","height"])):e(l)?(r(),z(q(e(l)),{key:2,class:m(e(u)),width:e(n),height:e(n)},null,8,["class","width","height"])):(r(),w("span",{key:3,class:m(e(u)),style:F({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},E(_.name),7))}}),P=K($,[["__scopeId","data-v-e610b8e3"]]);export{P as default};