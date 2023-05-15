import{_ as at}from"./AsyncSafeSeoWithOg.vue.de758151.js";import O from"./ContentRenderer.098aa62f.js";import{_ as z}from"./Shape.vue.49cad0ec.js";/* empty css                  */import{_ as Q}from"./LetterD.5843e614.js";import{a as S,o as m,e as x,f as a,C as c,J as P,ag as Z,c as k,w as f,F as R,h as F,i as M,I as rt,k as K,t as V,ah as ct,j as X,v as G,s as ut,q as dt,r as d,u as p,ai as J,aj as gt,b as L,P as pt,D as mt,E as ft}from"./entry.67ff033a.js";/* empty css                    */import{_ as ht,a as _t}from"./Index.vue.41eb5e48.js";import{_ as tt}from"./Btn.vue.8849ba47.js";/* empty css                */import yt from"./Icon.eacb2879.js";import{u as j}from"./asyncData.6d4b17f5.js";import{q as I}from"./query.4da7fb18.js";import{_ as vt}from"./FloatingLetter.vue.0e053f9b.js";/* empty css                           */import{_ as bt}from"./Mask.7daa11f6.js";/* empty css                  */import{_ as et}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as xt}from"./Spinner.vue.987dc16b.js";/* empty css                    */import{C as wt}from"./Title.95f342ed.js";import{_ as $t}from"./Index.vue.75a59906.js";/* empty css                  */import{a as kt}from"./date.8706a179.js";import"./ContentRendererMarkdown.89852535.js";import"./preview.37a9dd86.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./nuxt-link.42d519b2.js";import"./Icon.vue.1c368efd.js";import"./utils.c1ecd4dc.js";/* empty css                 *//* empty css                  */const St=a("use",{id:"d-hypnosis-section",href:"#d-letter"},null,-1),Ct=Z('<use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use>',6),Tt={name:"DAnimationHypnosis"},st=S({...Tt,props:{wigglePeriod:{type:Number,default:10},delay:{type:Number,default:1}},setup(e){return(n,t)=>{const o=Q;return m(),x("svg",{viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",class:"d-animation-hypnosis",style:P({"--d-hypnosis-wiggle-period":e.wigglePeriod+"s","--d-hypnosis-delay":e.delay+"s"})},[a("defs",null,[c(o,{id:"d-letter"}),St]),Ct],4)}}}),Bt=a("use",{id:"d-accordion-section",href:"#d-letter",transform:"scale(0.33)"},null,-1),Pt=Z('<use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use>',6),Dt={name:"DAnimationAccordion"},At=S({...Dt,props:{wigglePeriod:{type:Number,default:10},delay:{type:Number,default:1}},setup(e){return(n,t)=>{const o=Q;return m(),x("svg",{viewBox:"0 0 630 210",xmlns:"http://www.w3.org/2000/svg",class:"d-animation-accordion",style:P({"--d-accordion-wiggle-period":e.wigglePeriod+"s","--d-accordion-delay":e.delay+"s"})},[a("defs",null,[c(o,{id:"d-letter"}),Bt]),Pt],4)}}}),Ht={name:"DActionsFan"},Nt=S({...Ht,props:{actions:{type:Array,default:()=>[]},side:{type:String,default:"left"},filterClass:{type:[String,Object],default:""}},emits:["actionFocus","actionUnfocus","actionChoose"],setup(e){const n={left:{clipPath:"polygon(10px 0, 0 100%, 100% 40%)"},right:{clipPath:"polygon(calc(100% - 10px) 0, 100% 100%, 0 40%)"}};return(t,o)=>{const l=tt,i=z;return m(),k(ct,{name:"actions",tag:"ul",style:P({padding:`${Math.min(e.actions.length*2,15)}rem 0 ${Math.min(e.actions.length*3,15)}rem`})},{default:f(()=>[(m(!0),x(R,null,F(e.actions,(s,r)=>(m(),k(i,{key:s.title,tag:"li",class:M(["w-full transform -my-8",{[s.class??""]:!0,"origin-left":e.side==="right","origin-right":e.side==="left"}]),"filter-class":e.filterClass,style:P({...s.style,"--tw-rotate":`${e.side==="left"?12-r*18:-12+r*18}deg`}),"shape-class":{"dark:bg-neutral-900":!0,[s.shapeClass??""]:!0},"shape-style":{...s.shapeStyle,...e.side==="right"?n.right:n.left}},{default:f(()=>[a("div",{class:M(["px-3 py-2",{"flex justify-end":e.side==="right"}])},[c(l,rt(s.attrs,{tag:"button","no-passive-highlight":"",onClick:u=>t.$emit("actionChoose",s.emit),onMouseenter:u=>t.$emit("actionFocus",s.emit),onTouchstart:u=>t.$emit("actionFocus",s.emit),onFocusin:u=>t.$emit("actionFocus",s.emit),onMouseleave:u=>t.$emit("actionUnfocus",s.emit),onTouchend:u=>t.$emit("actionUnfocus",s.emit),onFocusout:u=>t.$emit("actionUnfocus",s.emit)}),{default:f(()=>[K(V(s.title),1)]),_:2},1040,["onClick","onMouseenter","onTouchstart","onFocusin","onMouseleave","onTouchend","onFocusout"])],2)]),_:2},1032,["filter-class","class","style","shape-class","shape-style"]))),128))]),_:1},8,["style"])}}}),Mt={class:"mbg__relative-container"},It={class:"mbg__layer"},Rt={class:"mbg__content"},Ft={name:"DWrapBackground"},W=S({...Ft,props:{overlayClass:{type:[String,Object],default:""},overlayStyle:{type:Object,default:()=>{}},dotsClass:{type:[String,Object],default:""},dotsStyle:{type:Object,default:()=>{}},dots:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(e){return(n,t)=>(m(),k(ut(e.tag),{class:"mbg__main-container"},{default:f(()=>[a("div",Mt,[a("div",{class:M(["mbg__layer",e.overlayClass]),style:P(e.overlayStyle)},null,6),a("div",It,[X(n.$slots,"svg")]),e.dots?(m(),x("div",{key:0,class:M(["mbg__layer mbg__dots",e.dotsClass]),style:P(e.dotsStyle)},null,6)):G("",!0),a("div",Rt,[X(n.$slots,"default")])])]),_:3}))}}),Y=(e,n,t=500)=>{{let l=t/100;const i=()=>{var s;(s=e.value)!=null&&s.isConnected?n():l>0&&(setTimeout(i,100),l--)};dt(()=>{i()})}},Lt=e=>e!=null&&e.attributes?null:e;function ot(e){return e.map((n,t,o)=>{const l=o.reduce((s,r,u)=>(u>t?s.push(s.at(-1)):s.push(r.left),s),[]);return[...o.reduce((s,r,u)=>(u>t?s.push(s.at(-1)):s.push(r.right),s),[]),...l.reverse()]})}function Ot(e){const n=ot(e),t=n.length,o=n[0].length,l=[];for(let i=0;i<o;i++){const s=[];for(let r=0;r<t;r++)s.push(n[r][i]);l.push(s)}return l}function U(e,n,t,o){const l=Ot(e);for(const i of l){const s=n.createSVGPoint();t.points.appendItem(s),o(s,i)}}function jt(e,n,t){const o=ot(e).at(-1);if(o)for(const l of o){const i=n.createSVGPoint();i.x=l.x,i.y=l.y,t.points.appendItem(i)}}function Wt(e,n,t){const[o,l,i]=[e.value,n.value,t.value];if(!(o&&l&&i))return;const s={scrub:1,start:()=>0,end:()=>window.innerHeight*.5};gsap.fromTo(l,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)"},{scrollTrigger:s,clipPath:"polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)"}),gsap.fromTo(o,{},{scrollTrigger:s,marginBottom:"-75vh"}),gsap.fromTo(i==null?void 0:i.$el,{top:"33%"},{scrollTrigger:s,top:"3%"})}function Yt(e){const[n,t,o,l]=e.value.map(_=>_==null?void 0:_.$el);if(!(t&&n&&o&&l))return;const i=gsap.matchMedia(),s={scrub:1,start:()=>window.innerHeight*.1,end:()=>window.innerHeight*.3},r={scrub:1,start:()=>window.innerHeight*.2,end:()=>window.innerHeight*.4},u={scrub:1,start:()=>window.innerHeight*.4,end:()=>window.innerHeight*.5},g={scrub:1,start:()=>window.innerHeight*.35,end:()=>window.innerHeight*.45};i.add("(max-width: 639px)",()=>{gsap.to(n,{scrollTrigger:s,top:"10%",left:"10%",rotate:354}),gsap.to(t,{scrollTrigger:r,top:"8%",left:"30%",rotate:360}),gsap.to(o,{scrollTrigger:u,top:"10%",left:"50%",rotate:366}),gsap.to(l,{scrollTrigger:g,top:"14%",left:"70%",rotate:354})}),i.add("(min-width: 640px) and (max-width: 767px)",()=>{gsap.to(n,{scrollTrigger:s,top:"15%",left:"70%",rotate:354}),gsap.to(t,{scrollTrigger:r,top:"23%",left:"80%",rotate:360}),gsap.to(o,{scrollTrigger:u,top:"35%",left:"85%",rotate:366}),gsap.to(l,{scrollTrigger:g,top:"50%",left:"85%",rotate:354})}),i.add("(min-width: 768px)",()=>{gsap.to(n,{scrollTrigger:s,top:"15%",left:"60%",rotate:354}),gsap.to(t,{scrollTrigger:r,top:"30%",left:"70%",rotate:360}),gsap.to(o,{scrollTrigger:u,top:"23%",left:"80%",rotate:366}),gsap.to(l,{scrollTrigger:g,top:"50%",left:"73%",rotate:354})})}function Kt(e,n){const[t,o]=[e.value,n.value];!t||!o||U([{left:{x:90,y:0},right:{x:95,y:0}},{left:{x:50,y:33},right:{x:63,y:35}},{left:{x:80,y:58},right:{x:85,y:55}},{left:{x:50,y:100},right:{x:75,y:100}}],t,o,(l,i)=>{gsap.to(l,{keyframes:i,scrollTrigger:{scrub:1,end:()=>window.innerHeight*1,start:()=>window.innerHeight*.3}})})}const Vt={class:"sticky top-0"},zt={class:"absolute inset-0 overflow-hidden"},Gt={id:"home-intro-section"},Ut={class:"relative h-full max-w-7xl mx-auto"},qt={class:"absolute inset-0 text-3xl md:text-4xl"},Et=S({__name:"B1Intro",setup(e){const{data:n}=j(()=>I("/homepage/intro").findOne(),"$3QgC209rPm"),t=d("idle"),o=d([{icon:"ic:sharp-mail",link:"mailto:dorich2000@gmail.com"},{icon:"fa6-brands:linkedin",link:"https://www.linkedin.com/in/d0rich/"},{icon:"fa6-brands:github",link:"https://github.com/d0rich"},{icon:"fa6-brands:telegram",link:"https://d0rich.t.me/"}]),l=[{title:"Sections",emit:"action",attrs:{href:"#sections",noPassiveHighlight:!0}},{title:"Skills",emit:"profi",attrs:{href:"#skills",noPassiveHighlight:!0}},{title:"Story",emit:"idle",attrs:{href:"#story",noPassiveHighlight:!0}}],i=d(null),s=d(null),r=d(null),u=d(null),g=d(null),_=d(null),y=d([]);return Y(i,()=>{Wt(s,r,u),Yt(y),Kt(g,_)}),(w,C)=>{const $=O,B=z,D=st,h=At,A=ht,b=Nt,H=yt,T=tt,lt=W;return p(n)?(m(),x("section",{key:0,ref:v=>{i.value=v},style:{height:"200vh"}},[a("div",Vt,[a("div",{ref:v=>{s.value=v},class:"relative w-screen max-w-full h-screen"},[a("div",{ref:v=>{r.value=v},class:"absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"},null,512),c(B,{ref:v=>{u.value=("componentFromNodeRef"in w?w.componentFromNodeRef:p(Lt))(v)},class:"absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]","shape-class":"intro-shape"},{default:f(()=>[c($,{tag:"div",value:p(n),class:"p-10 text-xl font-serif text-center [&>p>br]:!m-0 [&>p]:!m-0"},null,8,["value"])]),_:1},512)],512),c(lt,{dots:"","dots-style":{clipPath:"polygon(20% 100%, 100% 100%, 100% 0%)"},class:"bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-0 bg-green-900 bg-opacity-90"},{svg:f(()=>[c(D,{class:"absolute landscape:h-full m-auto inset-0","path-class":"fill-white"}),(m(),x("svg",{ref:v=>{g.value=v},height:"100%",width:"100%",class:"absolute inset-0 w-full max-w-6xl mx-auto h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"80 0 20 100",preserveAspectRatio:"xMaxYMax"},[a("polygon",{ref:v=>{_.value=v},class:"fill-white"},null,512)],512)),a("div",zt,[c(h,{class:"absolute bottom-8 -right-20 sm:right-5 -rotate-12 w-[clamp(300px,_33%,_500px)]"})])]),default:f(()=>[a("div",Gt,[a("div",Ut,[c(A,{pose:p(t),"shape-class":"fill-black",class:"absolute self-end h-full -ml-20 sm:ml-auto mt-20 transition-all"},null,8,["pose"]),c(b,{actions:l,side:"right",class:"absolute top-1/2 left-1/3 w-1/2 md:w-1/3 max-w-xs z-10 text-xl md:text-2xl","filter-class":"sharp-shadow ss-br-3 ss-neutral-50",onActionFocus:C[0]||(C[0]=v=>t.value=v)}),a("div",qt,[(m(!0),x(R,null,F(p(o),(v,E)=>(m(),k(B,{key:E,ref_for:!0,ref:it=>{p(y)[E]=it},class:"absolute -top-1/3 left-1/2","shape-class":"d-chip bg-black","filter-class":"sharp-shadow ss-br-2 ss-white"},{default:f(()=>[c(T,{href:v.link,target:"_blank"},{default:f(()=>[c(H,{name:v.icon,class:"m-[0.4em]"},null,8,["name"])]),_:2},1032,["href"])]),_:2},1024))),128))])])])]),_:1},8,["dots-style"])])],512)):G("",!0)}}});function nt(e,n={}){return{top:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().top)??0)+window.scrollY+(n.y?n.y():0)},bottom:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().bottom)??0)+window.scrollY+(n.y?n.y():0)},right:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().right)??0)+window.scrollX+(n.x?n.x():0)},left:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().left)??0)+window.scrollX+(n.x?n.x():0)}}}var N=J.registerPlugin(gt)||J;N.core.Tween;function Xt(e,n){if(!e.value||!n.value)return;const t=nt(e,{y:()=>-window.innerHeight*(1-.35*+(window.innerHeight<window.innerWidth))}),o={scrub:1,start:t.top,end:t.bottom};U([{left:{x:10,y:0},right:{x:13,y:0}},{left:{x:87,y:4},right:{x:90,y:1}},{left:{x:83,y:16},right:{x:87,y:10}},{left:{x:97,y:6},right:{x:94,y:7}},{left:{x:43,y:8},right:{x:50,y:9}},{left:{x:45,y:67},right:{x:57,y:49}},{left:{x:90,y:40},right:{x:85,y:38}},{left:{x:83,y:23},right:{x:72,y:14}},{left:{x:95,y:28},right:{x:98,y:25}},{left:{x:97,y:93},right:{x:99,y:99}},{left:{x:40,y:76},right:{x:30,y:75}},{left:{x:80,y:60},right:{x:95,y:50}},{left:{x:50,y:100},right:{x:75,y:100}}],e.value,n.value,(i,s)=>{N.to(i,{keyframes:s,scrollTrigger:o})})}function Jt(e,n){const[t,o,l]=e.value,i=new IntersectionObserver(s=>{const r=u=>s.some(g=>g.isIntersecting&&g.target===u);r(l)?n.value="resume":r(o)?n.value="blog":r(t)&&(n.value="portfolio")},{rootMargin:"-33% 0% -66% 0%",threshold:0});return t&&i.observe(t),o&&i.observe(o),l&&i.observe(l),()=>{i.disconnect()}}function Qt(e,n){for(const t of n.value){const o=[];o.push(t.children[0]),o.push(...t.children[1].children),N.from(o,{opacity:0,scrollTrigger:{trigger:t,scrub:1,start:"top 90%",end:"center 66%"},stagger:.2})}for(const t of e.value){const o=t.$el;N.set(o,{transform:"perspective(400px)"}),N.from(o,{scrollTrigger:{trigger:o,scrub:1,start:"center 90%",end:"center 66%"},opacity:0,rotateY:-90})}}const Zt={class:"absolute inset-0 overflow-hidden"},te=a("div",{class:"pt-20"},null,-1),ee=a("h1",null,"Sections",-1),se={class:"w-full max-w-6xl mx-auto overflow-hidden"},oe=S({__name:"B2Sections",setup(e){const{data:n}=j(()=>I("/homepage/sections").find(),"$cSPKcZxjNw"),t=L(()=>l.value==="portfolio"?"fill-red-700":l.value==="blog"?"fill-cyan-700":l.value==="resume"?"fill-blue-700":"fill-green-700"),o=d(()=>{}),l=d(null),i=d(null),s=L(()=>{var w;return(w=i.value)==null?void 0:w.$el}),r=d(null),u=d(null),g=d([]),_=d([]),y=d([]);return Y(s,()=>{Xt(r,u),o.value=Jt(g,l),Qt(_,y)}),pt(()=>o.value()),(w,C)=>{const $=vt,B=bt,D=_t,h=O,A=W;return m(),k(A,{id:"sections",ref:b=>{i.value=b},tag:"section",class:"bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-50 bg-neutral-900 bg-opacity-90"},{svg:f(()=>[a("div",Zt,[c($,{class:"absolute w-56 inset-0 left-1/3 mx-auto","path-class":p(t)},null,8,["path-class"]),c($,{class:"absolute w-32 inset-0 bottom-1/2 right-2/3 m-auto","path-class":p(t)},null,8,["path-class"]),c($,{class:"absolute w-52 inset-0 left-1/3 m-auto","path-class":p(t)},null,8,["path-class"]),c($,{class:"absolute w-60 inset-0 bottom-1/3 left-3/4 m-auto","path-class":p(t)},null,8,["path-class"]),c($,{class:"absolute w-48 inset-0 top-1/2 right-1/3 m-auto","path-class":p(t)},null,8,["path-class"]),c($,{class:"absolute w-96 inset-0 top-3/4 left-1/4 m-auto","path-class":p(t)},null,8,["path-class"])]),(m(),x("svg",{ref:b=>{r.value=b},height:"100%",width:"100%",class:"absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"70 0 10 100",preserveAspectRatio:"xMidYMin"},[a("polygon",{ref:b=>{u.value=b},class:M(["transition-colors",p(t)])},null,2)],512))]),default:f(()=>[te,ee,a("div",se,[(m(!0),x(R,null,F(p(n),(b,H)=>(m(),x("div",{key:b._id,ref_for:!0,ref:T=>{p(g)[H]=T},class:"section-description"},[c(B,{ref_for:!0,ref:T=>p(_)[H]=T,mask:b.mask,color:"",class:"section-description__image"},null,8,["mask"]),a("div",{ref_for:!0,ref:T=>p(y)[H]=T,class:"section-description__text"},[c(D,{to:b.link,text:b.title,class:"underline"},null,8,["to","text"]),c(h,{value:b},null,8,["value"])],512)]))),128))])]),_:1},512)}}});function ne(e){const n=e.value,t=gsap.matchMedia();for(let o=0;o<n.length;o++){const l=n[o].$el,i=l.children[0],s=l.children[1],r={scrub:1,start:"top bottom",end:"center 66%"};t.add("(min-width: 768px)",()=>{gsap.from(l.children,{scrollTrigger:{trigger:l,...r},marginLeft:o%2===0?"-100vw":void 0,marginRight:o%2===1?"-100vw":void 0})}),t.add("(max-width: 767px)",()=>{gsap.from(s,{scrollTrigger:{trigger:s,...r},marginLeft:o%2===0?"-100vw":void 0,marginRight:o%2===1?"-100vw":void 0,paddingRight:o%2===0?"100vw":void 0,paddingLeft:o%2===1?"100vw":void 0}),gsap.from(i,{scrollTrigger:{trigger:i,...r},x:o%2===0?"-100vw":"100vw"})})}}const q=e=>(mt("data-v-d8000034"),e=e(),ft(),e),le={class:"relative w-full h-full max-w-3xl mx-auto"},ie=q(()=>a("div",{class:"pt-20"},null,-1)),ae=q(()=>a("h1",null,"Skills",-1)),re={class:"max-w-7xl mx-auto px-3"},ce=q(()=>a("div",{style:{height:"20vh"}},null,-1)),ue=S({__name:"B3Skills",setup(e){const{data:n}=j(()=>I("/homepage/skills").find(),"$zhiTfh2j2t"),t=d(null),o=L(()=>{var s;return(s=t.value)==null?void 0:s.$el}),l=d([]),i=d(null);return Y(o,()=>{ne(l)}),(s,r)=>{const u=st,g=O,_=W;return m(),k(_,{id:"skills",ref:y=>t.value=y,tag:"section",class:"overflow-hidden","overlay-class":"skills__bg-overlay"},{svg:f(()=>[a("div",le,[c(u,{ref:y=>i.value=y,class:"absolute inset-0 mx-auto right-2/3 top-[12%] w-80 -rotate-12"},null,512),c(u,{class:"absolute inset-0 m-auto left-1/4 bottom-64 w-96 rotate-12"}),c(u,{class:"absolute -left-40 bottom-5 w-96"})])]),default:f(()=>[ie,ae,a("div",re,[(m(!0),x(R,null,F(p(n),(y,w)=>(m(),k(g,{key:y._id,ref_for:!0,ref:C=>p(l)[w]=C,tag:"div",class:"skills-group",value:y},null,8,["value"]))),128))]),ce]),_:1},512)}}}),de=et(ue,[["__scopeId","data-v-d8000034"]]),ge=""+new URL("avatar-transparent-frame.5beee051.webp",import.meta.url).href;function pe(e,n,t,o){const[l,i,s]=[n.value,t.value,o.value];if(!l||!i||!s)return;const r=[{left:{x:2,y:0},right:{x:7,y:0}},{left:{x:3,y:10},right:{x:9,y:13}},{left:{x:1,y:20},right:{x:7,y:20}},{left:{x:2,y:30},right:{x:7,y:30}},{left:{x:0,y:36},right:{x:6,y:40}},{left:{x:3,y:47},right:{x:8,y:50}},{left:{x:1,y:64},right:{x:6,y:60}},{left:{x:4,y:70},right:{x:9,y:73}},{left:{x:2,y:80},right:{x:6,y:85}},{left:{x:3,y:92},right:{x:8,y:90}},{left:{x:0,y:100},right:{x:7,y:100}}];jt(r,l,s);const u=nt(e,{y:()=>-window.innerHeight});U(r,l,i,(g,_)=>{gsap.to(g,{keyframes:_,scrollTrigger:{scrub:1,start:u.top,end:u.bottom}})})}const me={class:"sticky top-[25vh] mt-28 w-full h-screen overflow-hidden"},fe={class:"mx-auto max-w-3xl"},he=a("div",{class:"pt-20"},null,-1),_e=a("h1",null,"Story",-1),ye={class:"max-w-7xl px-3 mx-auto -mb-10 sm:-mb-32"},ve={class:"flex items-center justify-center"},be=a("img",{src:ge,class:"character"},null,-1),xe=a("div",{class:"absolute inset-0 bg-white",style:{"clip-path":"var(--shape-bubble--right__outline)"}},null,-1),we={class:"story-blocks__cards"},$e=S({__name:"B4Story",setup(e){const{data:n}=j("homepage",async()=>{const g=I("/homepage/story/intro").findOne(),_=I("/homepage/story/blocks").sort({date:-1}).find(),[y,w]=await Promise.all([g,_]);return{intro:y,blocks:w}}),t=d(null),o=L(()=>{var g;return(g=t.value)==null?void 0:g.$el}),l=d(null),i=d(null),s=d(null),r=d(null),u=d([]);return Y(o,()=>{pe(l,i,s,r)}),(g,_)=>{const y=xt,w=O,C=z,$=wt,B=$t,D=W;return p(n)?(m(),k(D,{key:0,id:"story",ref:h=>t.value=h,tag:"section","overlay-class":"story__bg-overlay"},{svg:f(()=>[a("div",me,[a("div",fe,[c(y,{class:"h-[50vh] -ml-[20vh]"})])])]),default:f(()=>[he,_e,a("div",ye,[a("div",ve,[be,c(C,{class:"bubble-1","shape-class":"bubble-1__shape"},{"bg-overlay":f(()=>[xe]),default:f(()=>[c(w,{value:p(n).intro,tag:"div",class:"bubble-1__text"},null,8,["value"])]),_:1})])]),a("div",{ref:h=>{l.value=h},class:"story-blocks"},[(m(),x("svg",{ref:h=>{i.value=h},height:"100%",width:"100%",class:"story-progress",viewBox:"0 0 10 100"},[a("polygon",{ref:h=>{r.value=h},class:"fill-black"},null,512),a("polygon",{ref:h=>{s.value=h},class:"fill-white"},null,512)],512)),a("div",we,[(m(!0),x(R,null,F(p(n).blocks,(h,A)=>(m(),k(B,{key:h._id,ref_for:!0,ref:b=>p(u)[A]=b,mode:"homepage-story",class:"my-20"},{default:f(()=>[c($,null,{extra:f(()=>[K(V(("dateToMonthYear"in g?g.dateToMonthYear:p(kt))(h.date)),1)]),default:f(()=>[K(" "+V(h.title),1)]),_:2},1024),c(w,{value:h},null,8,["value"])]),_:2},1024))),128))])],512)]),_:1},512)):G("",!0)}}}),ke={},Se={class:"-mt-20"};function Ce(e,n){const t=at,o=Et,l=oe,i=de,s=$e;return m(),x("div",Se,[c(t,{"og-title":"Homepage"}),c(o),c(l),c(i),c(s)])}const ls=et(ke,[["render",Ce]]);export{ls as default};