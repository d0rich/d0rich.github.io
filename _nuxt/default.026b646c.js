import{_ as f}from"./Btn.vue.db237c0a.js";import{l as v,d as m,m as h,U as b,P as y,D as x,V as $,X as k,b as _,B as w,w as s,T as D,c as u,g as t,e,A as l,f as B,n as S,C as T,L as W}from"./entry.8b155df3.js";import{_ as g}from"./Shape.vue.e2fbcf6d.js";import{_ as C}from"./_plugin-vue_export-helper.c27b6911.js";import j from"./Icon.9d5c917b.js";import{_ as H}from"./FloatingLetter.vue.0c5a52fb.js";import V from"./ProseBlockquote.a42c9d29.js";import"./nuxt-link.2f2dac3f.js";import"./ready.9af0e460.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./LetterD.f66086cf.js";const z=()=>({showHeader:v(()=>!0,"$1Vz4NDBkXu")}),L=m({name:"DHeader",components:{DShape:g},setup(){const{showHeader:n}=z(),a=h();let c=0,o=!1,r;function p(){r&&clearTimeout(r),o=!0,r=setTimeout(()=>{o=!1},1e3)}function i(){const d=window.scrollY;o||(d>c?n.value=!1:n.value=!0),$(n,()=>{p()}),c=d}return b(()=>{window.addEventListener("scroll",i)}),y(()=>{window.removeEventListener("scroll",i)}),{show:n,shadowColor:x(()=>a.path.startsWith("/blog")?"ss-cyan-300":a.path.startsWith("/projects")?"ss-red-300":a.path.startsWith("/resume")?"ss-blue-300":"ss-neutral-50")}}});const I={key:0},N={class:"w-full h-16 flex justify-evenly items-center overflow-visible"};function P(n,a,c,o,r,p){const i=f,d=k("DShape");return _(),w(D,{name:"header"},{default:s(()=>[n.show?(_(),u("header",I,[t(d,{class:"print:hidden","filter-class":`${n.shadowColor} header__shape-filter`,"shape-class":"bg-black","shape-style":{clipPath:"polygon(10px 0, 0 100%, 100% calc(100% - 10px), 100% 13px)"}},{default:s(()=>[e("div",N,[t(i,{to:"/"},{default:s(()=>[l("Dorich")]),_:1}),t(i,{to:"/projects/"},{default:s(()=>[l("Projects")]),_:1}),t(i,{to:"/blog/"},{default:s(()=>[l("Blog")]),_:1}),t(i,{to:"/resume/"},{default:s(()=>[l("Resume")]),_:1})])]),_:1},8,["filter-class","shape-style"])])):B("",!0)]),_:1})}const A=C(L,[["render",P]]),E={class:"pt-[1rem]"},F={class:"max-w-screen-lg mx-auto p-6"},R={class:"flex flex-col sm:flex-row justify-between gap-4 mb-5"},U={class:"flex items-center gap-2"},X={class:"flex items-center gap-2"},G={class:"flex items-center gap-2"},M={class:"flex items-center gap-2"},Y={class:"flex items-end font-serif"},q=e("span",{class:"hidden"},"D",-1),J=m({__name:"DFooter",setup(n){return(a,c)=>{const o=j,r=f,p=H,i=g;return _(),w(i,{tag:"footer",class:"w-full -mt-[1rem] print:hidden","shape-class":"bg-white dark:bg-black","shape-style":{clipPath:"polygon(0 0, 100% 1rem, 100% 100%, 0 100%)"}},{default:s(()=>[e("div",E,[e("div",F,[e("div",R,[t(V,{class:"italic font-serif"},{default:s(()=>[l(" As long as I’m bein’ myself, I’ll always have somewhere I can fit in. ")]),_:1}),e("ul",null,[e("li",null,[t(r,{href:"mailto:dorich2000@gmail.com",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",U,[t(o,{name:"ic:sharp-mail",class:"text-xl"}),l(" dorich2000@gmail.com ")])]),_:1})]),e("li",null,[t(r,{href:"https://github.com/d0rich",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",X,[t(o,{name:"fa6-brands:github",class:"text-xl"}),l(" GitHub ")])]),_:1})]),e("li",null,[t(r,{href:"https://www.linkedin.com/in/d0rich/",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",G,[t(o,{name:"fa6-brands:linkedin",class:"text-xl"}),l(" LinkedIn ")])]),_:1})]),e("li",null,[t(r,{href:"https://d0rich.t.me/",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",M,[t(o,{name:"fa6-brands:telegram",class:"text-xl"}),l(" Telegram ")])]),_:1})])])]),e("span",Y,[t(p,{class:"inline-block w-8 -mx-1","path-class":"fill-black dark:fill-white"}),q,l(" 0rich ")])])])]),_:1},8,["shape-style"])}}}),K={class:"sections-transition-wrapper"},O=m({__name:"SectionsTransitionWrapper",setup(n){const a=h(),c=x(()=>{if(a.path.startsWith("/projects"))return"sections-transition-wrapper__bar--projects";if(a.path.startsWith("/blog"))return"sections-transition-wrapper__bar--blog";if(a.path.startsWith("/resume"))return"sections-transition-wrapper__bar--resume"});return(o,r)=>(_(),u("div",K,[e("div",{class:S(["sections-transition-wrapper__bar",T(c)])},null,2)]))}});const Q={id:"default-layout"},Z={class:"fixed w-screen z-50"},ee={class:"pt-20 print:pt-0 min-h-[calc(100vh_-_200px)]"},de=m({__name:"default",setup(n){return(a,c)=>(_(),u("div",Q,[e("div",Z,[t(A,{class:"mx-auto max-w-md sm:max-w-xl"})]),e("main",ee,[W(a.$slots,"default")]),t(J),t(O)]))}});export{de as default};