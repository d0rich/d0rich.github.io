import{_ as $}from"./AsyncSafeSeoWithOg.vue.de758151.js";import{_ as C}from"./Mask.7daa11f6.js";import{_ as D}from"./Pagination.vue.dad3692a.js";import T from"./Icon.eacb2879.js";import{C as N}from"./Chip.6c035541.js";import{_ as P}from"./Shape.vue.49cad0ec.js";/* empty css                  */import{_ as B}from"./nuxt-link.42d519b2.js";import{d as S}from"./date.8706a179.js";import{a as k,o as e,e as r,C as u,w as h,f as t,J as b,k as g,t as p,u as a,F as m,h as _,c as l,W as M,b as V,v as f}from"./entry.67ff033a.js";/* empty css                 */import{u as I}from"./asyncData.6d4b17f5.js";/* empty css                 */import"./_plugin-vue_export-helper.c27b6911.js";import"./Btn.vue.8849ba47.js";/* empty css                */import"./utils.9962b8d6.js";import"./Icon.vue.1c368efd.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";/* empty css                 */const L=t("div",{class:"project-tile__frame--top"},null,-1),W=t("div",{class:"project-tile__frame--bottom"},null,-1),Y={class:"project-tile__link__image-wrapper"},z=t("div",{class:"project-tile__link-image-overlay"},null,-1),A=t("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),E={class:"max-w-2xl mx-auto px-3"},F={style:{padding:"var(--shape-card-padding)"}},J={class:"text-right"},O={class:"font-bold"},R={class:"text-3xl font-bold text-red-200 mb-2"},q={class:"my-2"},G={class:"text-right mt-3 -mr-5"},H=t("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),K={name:"ProjectsTile"},Q=k({...K,props:{project:null},setup(o){return(c,i)=>{const s=T,x=N,y=P,d=B;return e(),r("div",{class:"project-tile overflow-x-hidden",style:b({"--page-bg-color":"rgb(23 23 23 / var(--tw-bg-opacity))"})},[L,W,u(d,{class:"project-tile__link",to:o.project.url},{default:h(()=>[t("div",Y,[t("div",{class:"project-tile__link__image",style:b(`background-image: url(${o.project.image});`)},null,4)]),z,A,t("div",E,[u(y,{"shape-class":"bg-black bg-opacity-90","shape-style":"clip-path: var(--shape-card);"},{default:h(()=>[t("div",F,[t("div",J,[g(" Last updated: "),t("time",O,p(("dateToDayMonthYear"in c?c.dateToDayMonthYear:a(S))(o.project.last_updated)),1)]),t("h2",R,p(o.project.title),1),t("p",q,p(o.project.description),1),t("p",null,[g(" Complexity: "),(e(!0),r(m,null,_(o.project.complexity,n=>(e(),l(s,{key:n,class:"text-red-200",name:"ic:sharp-star"}))),128)),(e(!0),r(m,null,_(5-(o.project.complexity||0),n=>(e(),l(s,{key:n,class:"text-red-200",name:"ic:sharp-star-outline"}))),128))]),t("div",G,[(e(!0),r(m,null,_(o.project.tags,n=>(e(),l(x,{key:n,class:"project-tile__link__tag"},{default:h(()=>[g(" #"+p(n),1)]),_:2},1024))),128))])])]),_:1})]),H]),_:1},8,["to"])],4)}}}),U={class:"pb-[50vh]"},X={class:"relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden"},Z=t("div",{class:"max-w-lg"},[t("h1",{class:"text-6xl sm:text-8xl font-serif mb-5 text-red-300"}," Projects "),t("p",{class:"first-letter:bg-red-600"}," Explore my portfolio of IT projects - a collection of custom documentation websites that showcase my technical skills and expertise in solving complex IT problems with innovative solutions. "),t("p",{class:"first-letter:bg-red-600"}," Browse through for valuable insights into my approach to information technology. ")],-1),tt={key:0},jt=k({__name:"[page]",setup(o){const c=M(),i=V(()=>Number(c.params.page||1)),{data:s}=I(`/projects/pages/${i.value}`,()=>$fetch(`/api/projects/${i.value}`));return(x,y)=>{const d=$,n=C,v=D,w=Q;return e(),r("div",U,[u(d,{title:"Projects"}),t("div",X,[Z,u(n,{mask:"spider",color:"",outline:"",class:"h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all"})]),a(s)?(e(),r("section",tt,[a(s)._pagesCount>1?(e(),l(v,{key:0,class:"mx-auto my-10 max-w-md","current-page":a(i),"all-pages":a(s)._pagesCount,"base-link":"/projects"},null,8,["current-page","all-pages"])):f("",!0),t("nav",null,[(e(!0),r(m,null,_(a(s).items,j=>(e(),l(w,{key:j.url,project:j},null,8,["project"]))),128))]),a(s)._pagesCount>1?(e(),l(v,{key:1,class:"mx-auto my-10 max-w-md","current-page":a(i),"all-pages":a(s)._pagesCount,"base-link":"/projects"},null,8,["current-page","all-pages"])):f("",!0)])):f("",!0)])}}});export{jt as default};