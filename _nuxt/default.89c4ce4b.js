import{_ as f}from"./Btn.vue.2a5d5d11.js";import{y as v,a as m,q as h,U as b,a2 as y,E as x,O as k,J as $,o as _,c as w,w as s,T as D,i as u,m as t,k as e,I as l,l as S,j as B,u as T,H as W}from"./entry.a5c858ee.js";import{_ as g}from"./Shape.vue.9767cdc4.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";import H from"./Icon.460ba0b7.js";import{_ as C}from"./FloatingLetter.vue.a9d86f55.js";import z from"./ProseBlockquote.059af26d.js";import"./nuxt-link.561e4542.js";import"./ready.951584b5.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./LetterD.de438a58.js";const I=()=>({showHeader:v(()=>!0,"$1Vz4NDBkXu")}),V=m({name:"DHeader",components:{DShape:g},setup(){const{showHeader:n}=I(),a=h();let c=0,o=!1,r;function p(){r&&clearTimeout(r),o=!0,r=setTimeout(()=>{o=!1},1e3)}function i(){const d=window.scrollY;o||(d>c?n.value=!1:n.value=!0),k(n,()=>{p()}),c=d}return b(()=>{window.addEventListener("scroll",i)}),y(()=>{window.removeEventListener("scroll",i)}),{show:n,shadowColor:x(()=>a.path.startsWith("/blog")?"ss-cyan-300":a.path.startsWith("/projects")?"ss-red-300":a.path.startsWith("/resume")?"ss-blue-300":"ss-neutral-50")}}});const L={key:0},N={class:"w-full h-16 flex justify-evenly items-center overflow-visible"};function E(n,a,c,o,r,p){const i=f,d=$("DShape");return _(),w(D,{name:"header"},{default:s(()=>[n.show?(_(),u("header",L,[t(d,{class:"print:hidden","filter-class":`${n.shadowColor} header__shape-filter`,"shape-class":"bg-black","shape-style":{clipPath:"polygon(10px 0, 0 100%, 100% calc(100% - 10px), 100% 13px)"}},{default:s(()=>[e("div",N,[t(i,{to:"/"},{default:s(()=>[l("Dorich")]),_:1}),t(i,{to:"/projects/"},{default:s(()=>[l("Projects")]),_:1}),t(i,{to:"/blog/"},{default:s(()=>[l("Blog")]),_:1}),t(i,{to:"/resume/"},{default:s(()=>[l("Resume")]),_:1})])]),_:1},8,["filter-class","shape-style"])])):S("",!0)]),_:1})}const F=j(V,[["render",E]]),P={class:"pt-[1rem]"},A={class:"max-w-screen-lg mx-auto p-6"},R={class:"flex flex-col sm:flex-row justify-between gap-4 mb-5"},U={class:"flex items-center gap-2"},q={class:"flex items-center gap-2"},G={class:"flex items-center gap-2"},J={class:"flex items-center gap-2"},M={class:"flex items-end font-serif"},O=e("span",{class:"hidden"},"D",-1),X=m({__name:"DFooter",setup(n){return(a,c)=>{const o=H,r=f,p=C,i=g;return _(),w(i,{tag:"footer",class:"w-full -mt-[1rem] print:hidden","shape-class":"bg-white dark:bg-black","shape-style":{clipPath:"polygon(0 0, 100% 1rem, 100% 100%, 0 100%)"}},{default:s(()=>[e("div",P,[e("div",A,[e("div",R,[t(z,{class:"italic font-serif"},{default:s(()=>[l(" As long as I’m bein’ myself, I’ll always have somewhere I can fit in. ")]),_:1}),e("ul",null,[e("li",null,[t(r,{href:"mailto:dorich2000@gmail.com",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",U,[t(o,{name:"ic:sharp-mail",class:"text-xl"}),l(" dorich2000@gmail.com ")])]),_:1})]),e("li",null,[t(r,{href:"https://github.com/d0rich",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",q,[t(o,{name:"fa6-brands:github",class:"text-xl"}),l(" GitHub ")])]),_:1})]),e("li",null,[t(r,{href:"https://www.linkedin.com/in/d0rich/",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",G,[t(o,{name:"fa6-brands:linkedin",class:"text-xl"}),l(" LinkedIn ")])]),_:1})]),e("li",null,[t(r,{href:"https://d0rich.t.me/",target:"_blank","text-transform":"none","no-rotate":""},{default:s(()=>[e("div",J,[t(o,{name:"fa6-brands:telegram",class:"text-xl"}),l(" Telegram ")])]),_:1})])])]),e("span",M,[t(p,{class:"inline-block w-8 -mx-1","path-class":"fill-black dark:fill-white"}),O,l(" 0rich ")])])])]),_:1},8,["shape-style"])}}}),Y={class:"sections-transition-wrapper"},K=m({__name:"SectionsTransitionWrapper",setup(n){const a=h(),c=x(()=>{if(a.path.startsWith("/projects"))return"sections-transition-wrapper__bar--projects";if(a.path.startsWith("/blog"))return"sections-transition-wrapper__bar--blog";if(a.path.startsWith("/resume"))return"sections-transition-wrapper__bar--resume"});return(o,r)=>(_(),u("div",Y,[e("div",{class:B(["sections-transition-wrapper__bar",T(c)])},null,2)]))}});const Q={id:"default-layout"},Z={class:"fixed w-screen z-50"},ee={class:"pt-20 print:pt-0 min-h-[calc(100vh_-_200px)]"},de=m({__name:"default",setup(n){return(a,c)=>(_(),u("div",Q,[e("div",Z,[t(F,{class:"mx-auto max-w-md sm:max-w-xl"})]),e("main",ee,[W(a.$slots,"default")]),t(X),t(K)]))}});export{de as default};
