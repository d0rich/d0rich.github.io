import{_ as at}from"./AsyncSafeSeoWithOg.vue.da5bc87d.js";import O from"./ContentRenderer.2729dd63.js";import{_ as z}from"./Shape.vue.45546b1d.js";import{_ as Q}from"./LetterD.c020c155.js";import{a as S,o as p,e as w,f as a,C as c,J as P,ah as Z,c as $,w as m,F,h as R,i as M,I as rt,k as K,t as V,ai as ct,j as X,v as G,s as ut,q as dt,r as d,u as g,aj as J,ak as gt,b as L,P as _t,D as pt,E as mt}from"./entry.d136969d.js";import{_ as ft,a as ht}from"./Index.vue.8e0876dd.js";import{_ as tt}from"./Btn.vue.f2053727.js";import yt from"./Icon.03382b98.js";import{u as j}from"./asyncData.d51c9f4c.js";import{q as I}from"./query.7f659d51.js";import{_ as vt}from"./FloatingLetter.vue.619429f5.js";import{_ as bt}from"./Mask.63b95b4f.js";import{a as xt,b as wt}from"./date.15a11437.js";import{_ as et}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as kt}from"./Spinner.vue.b4bed8c1.js";import{C as $t}from"./Title.1203453e.js";import{_ as St}from"./Index.vue.87afeef6.js";import"./ContentRendererMarkdown.f41360e0.js";import"./preview.49e7d1ee.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./nuxt-link.8762e0db.js";import"./utils.0a571ef8.js";function st(e){return e.map((n,t,o)=>{const l=o.reduce((s,r,u)=>(u>t?s.push(s.at(-1)):s.push(r.left),s),[]);return[...o.reduce((s,r,u)=>(u>t?s.push(s.at(-1)):s.push(r.right),s),[]),...l.reverse()]})}function Tt(e){const n=st(e),t=n.length,o=n[0].length,l=[];for(let i=0;i<o;i++){const s=[];for(let r=0;r<t;r++)s.push(n[r][i]);l.push(s)}return l}function U(e,n,t,o){const l=Tt(e);for(const i of l){const s=n.createSVGPoint();t.points.appendItem(s),o(s,i)}}function Ct(e,n,t){const o=st(e).at(-1);if(o)for(const l of o){const i=n.createSVGPoint();i.x=l.x,i.y=l.y,t.points.appendItem(i)}}function ot(e,n={}){return{top:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().top)??0)+window.scrollY+(n.y?n.y():0)},bottom:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().bottom)??0)+window.scrollY+(n.y?n.y():0)},right:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().right)??0)+window.scrollX+(n.x?n.x():0)},left:()=>{var t;return(((t=e.value)==null?void 0:t.getBoundingClientRect().left)??0)+window.scrollX+(n.x?n.x():0)}}}const Bt=a("use",{id:"d-hypnosis-section",href:"#d-letter"},null,-1),Pt=Z('<use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use>',6),Dt={name:"DAnimationHypnosis"},nt=S({...Dt,props:{wigglePeriod:{type:Number,default:10},delay:{type:Number,default:1}},setup(e){return(n,t)=>{const o=Q;return p(),w("svg",{viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",class:"d-animation-hypnosis",style:P({"--d-hypnosis-wiggle-period":e.wigglePeriod+"s","--d-hypnosis-delay":e.delay+"s"})},[a("defs",null,[c(o,{id:"d-letter"}),Bt]),Pt],4)}}});const At=a("use",{id:"d-accordion-section",href:"#d-letter",transform:"scale(0.33)"},null,-1),Ht=Z('<use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use>',6),Nt={name:"DAnimationAccordion"},Mt=S({...Nt,props:{wigglePeriod:{type:Number,default:10},delay:{type:Number,default:1}},setup(e){return(n,t)=>{const o=Q;return p(),w("svg",{viewBox:"0 0 630 210",xmlns:"http://www.w3.org/2000/svg",class:"d-animation-accordion",style:P({"--d-accordion-wiggle-period":e.wigglePeriod+"s","--d-accordion-delay":e.delay+"s"})},[a("defs",null,[c(o,{id:"d-letter"}),At]),Ht],4)}}});const It={name:"DActionsFan"},Ft=S({...It,props:{actions:{type:Array,default:()=>[]},side:{type:String,default:"left"},filterClass:{type:[String,Object],default:""}},emits:["actionFocus","actionUnfocus","actionChoose"],setup(e){const n={left:{clipPath:"polygon(10px 0, 0 100%, 100% 40%)"},right:{clipPath:"polygon(calc(100% - 10px) 0, 100% 100%, 0 40%)"}};return(t,o)=>{const l=tt,i=z;return p(),$(ct,{name:"actions",tag:"ul",style:P({padding:`${Math.min(e.actions.length*2,15)}rem 0 ${Math.min(e.actions.length*3,15)}rem`})},{default:m(()=>[(p(!0),w(F,null,R(e.actions,(s,r)=>(p(),$(i,{key:s.title,tag:"li",class:M(["w-full transform -my-8",{[s.class??""]:!0,"origin-left":e.side==="right","origin-right":e.side==="left"}]),"filter-class":e.filterClass,style:P({...s.style,"--tw-rotate":`${e.side==="left"?12-r*18:-12+r*18}deg`}),"shape-class":{"dark:bg-neutral-900":!0,[s.shapeClass??""]:!0},"shape-style":{...s.shapeStyle,...e.side==="right"?n.right:n.left}},{default:m(()=>[a("div",{class:M(["px-3 py-2",{"flex justify-end":e.side==="right"}])},[c(l,rt(s.attrs,{tag:"button","no-passive-highlight":"",onClick:u=>t.$emit("actionChoose",s.emit),onMouseenter:u=>t.$emit("actionFocus",s.emit),onTouchstart:u=>t.$emit("actionFocus",s.emit),onFocusin:u=>t.$emit("actionFocus",s.emit),onMouseleave:u=>t.$emit("actionUnfocus",s.emit),onTouchend:u=>t.$emit("actionUnfocus",s.emit),onFocusout:u=>t.$emit("actionUnfocus",s.emit)}),{default:m(()=>[K(V(s.title),1)]),_:2},1040,["onClick","onMouseenter","onTouchstart","onFocusin","onMouseleave","onTouchend","onFocusout"])],2)]),_:2},1032,["filter-class","class","style","shape-class","shape-style"]))),128))]),_:1},8,["style"])}}});const Rt={class:"mbg__relative-container"},Lt={class:"mbg__layer"},Ot={class:"mbg__content"},jt={name:"DWrapBackground"},W=S({...jt,props:{overlayClass:{type:[String,Object],default:""},overlayStyle:{type:Object,default:()=>{}},dotsClass:{type:[String,Object],default:""},dotsStyle:{type:Object,default:()=>{}},dots:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(e){return(n,t)=>(p(),$(ut(e.tag),{class:"mbg__main-container"},{default:m(()=>[a("div",Rt,[a("div",{class:M(["mbg__layer",e.overlayClass]),style:P(e.overlayStyle)},null,6),a("div",Lt,[X(n.$slots,"svg")]),e.dots?(p(),w("div",{key:0,class:M(["mbg__layer mbg__dots",e.dotsClass]),style:P(e.dotsStyle)},null,6)):G("",!0),a("div",Ot,[X(n.$slots,"default")])])]),_:3}))}});const Y=(e,n,t=500)=>{{let l=t/100;const i=()=>{var s;(s=e.value)!=null&&s.isConnected?n():l>0&&(setTimeout(i,100),l--)};dt(()=>{i()})}},Wt=e=>e!=null&&e.attributes?null:e;function Yt(e,n,t){const[o,l,i]=[e.value,n.value,t.value];if(!(o&&l&&i))return;const s={scrub:1,start:()=>0,end:()=>window.innerHeight*.5};gsap.fromTo(l,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)"},{scrollTrigger:s,clipPath:"polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)"}),gsap.fromTo(o,{},{scrollTrigger:s,marginBottom:"-75vh"}),gsap.fromTo(i==null?void 0:i.$el,{top:"33%"},{scrollTrigger:s,top:"3%"})}function Kt(e){const[n,t,o,l]=e.value.map(h=>h==null?void 0:h.$el);if(!(t&&n&&o&&l))return;const i=gsap.matchMedia(),s={scrub:1,start:()=>window.innerHeight*.1,end:()=>window.innerHeight*.3},r={scrub:1,start:()=>window.innerHeight*.2,end:()=>window.innerHeight*.4},u={scrub:1,start:()=>window.innerHeight*.4,end:()=>window.innerHeight*.5},_={scrub:1,start:()=>window.innerHeight*.35,end:()=>window.innerHeight*.45};i.add("(max-width: 639px)",()=>{gsap.to(n,{scrollTrigger:s,top:"10%",left:"10%",rotate:354}),gsap.to(t,{scrollTrigger:r,top:"8%",left:"30%",rotate:360}),gsap.to(o,{scrollTrigger:u,top:"10%",left:"50%",rotate:366}),gsap.to(l,{scrollTrigger:_,top:"14%",left:"70%",rotate:354})}),i.add("(min-width: 640px) and (max-width: 767px)",()=>{gsap.to(n,{scrollTrigger:s,top:"15%",left:"70%",rotate:354}),gsap.to(t,{scrollTrigger:r,top:"23%",left:"80%",rotate:360}),gsap.to(o,{scrollTrigger:u,top:"35%",left:"85%",rotate:366}),gsap.to(l,{scrollTrigger:_,top:"50%",left:"85%",rotate:354})}),i.add("(min-width: 768px)",()=>{gsap.to(n,{scrollTrigger:s,top:"15%",left:"60%",rotate:354}),gsap.to(t,{scrollTrigger:r,top:"30%",left:"70%",rotate:360}),gsap.to(o,{scrollTrigger:u,top:"23%",left:"80%",rotate:366}),gsap.to(l,{scrollTrigger:_,top:"50%",left:"73%",rotate:354})})}function Vt(e,n){const[t,o]=[e.value,n.value];!t||!o||U([{left:{x:90,y:0},right:{x:95,y:0}},{left:{x:50,y:33},right:{x:63,y:35}},{left:{x:80,y:58},right:{x:85,y:55}},{left:{x:50,y:100},right:{x:75,y:100}}],t,o,(l,i)=>{gsap.to(l,{keyframes:i,scrollTrigger:{scrub:1,end:()=>window.innerHeight*1,start:()=>window.innerHeight*.3}})})}const zt={class:"sticky top-0"},Gt={class:"absolute inset-0 overflow-hidden"},Ut={id:"home-intro-section"},qt={class:"relative h-full max-w-7xl mx-auto"},Et={class:"absolute inset-0 text-3xl md:text-4xl"},Xt=S({__name:"B1Intro",setup(e){const{data:n}=j(()=>I("/homepage/intro").findOne(),"$3QgC209rPm"),t=d("idle"),o=d([{icon:"ic:sharp-mail",link:"mailto:dorich2000@gmail.com"},{icon:"fa6-brands:linkedin",link:"https://www.linkedin.com/in/d0rich/"},{icon:"fa6-brands:github",link:"https://github.com/d0rich"},{icon:"fa6-brands:telegram",link:"https://d0rich.t.me/"}]),l=[{title:"Sections",emit:"action",attrs:{href:"#sections",noPassiveHighlight:!0}},{title:"Skills",emit:"profi",attrs:{href:"#skills",noPassiveHighlight:!0}},{title:"Story",emit:"idle",attrs:{href:"#story",noPassiveHighlight:!0}}],i=d(null),s=d(null),r=d(null),u=d(null),_=d(null),h=d(null),y=d([]);return Y(i,()=>{Yt(s,r,u),Kt(y),Vt(_,h)}),(b,T)=>{const k=O,B=z,D=nt,f=Mt,A=ft,x=Ft,H=yt,C=tt,lt=W;return g(n)?(p(),w("section",{key:0,ref:v=>{i.value=v},style:{height:"200vh"}},[a("div",zt,[a("div",{ref:v=>{s.value=v},class:"relative w-screen max-w-full h-screen"},[a("div",{ref:v=>{r.value=v},class:"absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"},null,512),c(B,{ref:v=>{u.value=("componentFromNodeRef"in b?b.componentFromNodeRef:g(Wt))(v)},class:"absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]","shape-class":"intro-shape"},{default:m(()=>[c(k,{tag:"div",value:g(n),class:"p-10 text-xl font-serif text-center [&>p>br]:!m-0 [&>p]:!m-0"},null,8,["value"])]),_:1},512)],512),c(lt,{dots:"","dots-style":{clipPath:"polygon(20% 100%, 100% 100%, 100% 0%)"},class:"bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-0 bg-green-900 bg-opacity-90"},{svg:m(()=>[c(D,{class:"absolute landscape:h-full m-auto inset-0","path-class":"fill-white"}),(p(),w("svg",{ref:v=>{_.value=v},height:"100%",width:"100%",class:"absolute inset-0 w-full max-w-6xl mx-auto h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"80 0 20 100",preserveAspectRatio:"xMaxYMax"},[a("polygon",{ref:v=>{h.value=v},class:"fill-white"},null,512)],512)),a("div",Gt,[c(f,{class:"absolute bottom-8 -right-20 sm:right-5 -rotate-12 w-[clamp(300px,_33%,_500px)]"})])]),default:m(()=>[a("div",Ut,[a("div",qt,[c(A,{pose:g(t),"shape-class":"fill-black",class:"absolute self-end h-full -ml-20 sm:ml-auto mt-20 transition-all"},null,8,["pose"]),c(x,{actions:l,side:"right",class:"absolute top-1/2 left-1/3 w-1/2 md:w-1/3 max-w-xs z-10 text-xl md:text-2xl","filter-class":"sharp-shadow ss-br-3 ss-neutral-50",onActionFocus:T[0]||(T[0]=v=>t.value=v)}),a("div",Et,[(p(!0),w(F,null,R(g(o),(v,E)=>(p(),$(B,{key:E,ref_for:!0,ref:it=>{g(y)[E]=it},class:"absolute -top-1/3 left-1/2","shape-class":"d-chip bg-black","filter-class":"sharp-shadow ss-br-2 ss-white"},{default:m(()=>[c(C,{href:v.link,target:"_blank"},{default:m(()=>[c(H,{name:v.icon,class:"m-[0.4em]"},null,8,["name"])]),_:2},1032,["href"])]),_:2},1024))),128))])])])]),_:1},8,["dots-style"])])],512)):G("",!0)}}});var N=J.registerPlugin(gt)||J;N.core.Tween;function Jt(e,n){if(!e.value||!n.value)return;const t=ot(e,{y:()=>-window.innerHeight*(1-.35*+(window.innerHeight<window.innerWidth))}),o={scrub:1,start:t.top,end:t.bottom};U([{left:{x:10,y:0},right:{x:13,y:0}},{left:{x:87,y:4},right:{x:90,y:1}},{left:{x:83,y:16},right:{x:87,y:10}},{left:{x:97,y:6},right:{x:94,y:7}},{left:{x:43,y:8},right:{x:50,y:9}},{left:{x:45,y:67},right:{x:57,y:49}},{left:{x:90,y:40},right:{x:85,y:38}},{left:{x:83,y:23},right:{x:72,y:14}},{left:{x:95,y:28},right:{x:98,y:25}},{left:{x:97,y:93},right:{x:99,y:99}},{left:{x:40,y:76},right:{x:30,y:75}},{left:{x:80,y:60},right:{x:95,y:50}},{left:{x:50,y:100},right:{x:75,y:100}}],e.value,n.value,(i,s)=>{N.to(i,{keyframes:s,scrollTrigger:o})})}function Qt(e,n){const[t,o,l]=e.value,i=new IntersectionObserver(s=>{const r=u=>s.some(_=>_.isIntersecting&&_.target===u);r(l)?n.value="resume":r(o)?n.value="blog":r(t)&&(n.value="portfolio")},{rootMargin:"-33% 0% -66% 0%",threshold:0});return t&&i.observe(t),o&&i.observe(o),l&&i.observe(l),()=>{i.disconnect()}}function Zt(e,n){for(const t of n.value){const o=[];o.push(t.children[0]),o.push(...t.children[1].children),N.from(o,{opacity:0,scrollTrigger:{trigger:t,scrub:1,start:"top 90%",end:"center 66%"},stagger:.2})}for(const t of e.value){const o=t.$el;N.set(o,{transform:"perspective(400px)"}),N.from(o,{scrollTrigger:{trigger:o,scrub:1,start:"center 90%",end:"center 66%"},opacity:0,rotateY:-90})}}const te={class:"absolute inset-0 overflow-hidden"},ee=a("div",{class:"pt-20"},null,-1),se=a("h1",null,"Sections",-1),oe={class:"w-full max-w-6xl mx-auto overflow-hidden"},ne=S({__name:"B2Sections",setup(e){const{data:n}=j(()=>I("/homepage/sections").find(),"$cSPKcZxjNw"),t=L(()=>l.value==="portfolio"?"fill-red-700":l.value==="blog"?"fill-cyan-700":l.value==="resume"?"fill-blue-700":"fill-green-700"),o=d(()=>{}),l=d(null),i=d(null),s=L(()=>{var b;return(b=i.value)==null?void 0:b.$el}),r=d(null),u=d(null),_=d([]),h=d([]),y=d([]);return Y(s,()=>{Jt(r,u),o.value=Qt(_,l),Zt(h,y)}),_t(()=>o.value()),(b,T)=>{const k=vt,B=bt,D=ht,f=O,A=W;return p(),$(A,{id:"sections",ref:x=>{i.value=x},tag:"section",class:"bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-50 bg-neutral-900 bg-opacity-90"},{svg:m(()=>[a("div",te,[c(k,{class:"absolute w-56 inset-0 left-1/3 mx-auto","path-class":g(t)},null,8,["path-class"]),c(k,{class:"absolute w-32 inset-0 bottom-1/2 right-2/3 m-auto","path-class":g(t)},null,8,["path-class"]),c(k,{class:"absolute w-52 inset-0 left-1/3 m-auto","path-class":g(t)},null,8,["path-class"]),c(k,{class:"absolute w-60 inset-0 bottom-1/3 left-3/4 m-auto","path-class":g(t)},null,8,["path-class"]),c(k,{class:"absolute w-48 inset-0 top-1/2 right-1/3 m-auto","path-class":g(t)},null,8,["path-class"]),c(k,{class:"absolute w-96 inset-0 top-3/4 left-1/4 m-auto","path-class":g(t)},null,8,["path-class"])]),(p(),w("svg",{ref:x=>{r.value=x},height:"100%",width:"100%",class:"absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"70 0 10 100",preserveAspectRatio:"xMidYMin"},[a("polygon",{ref:x=>{u.value=x},class:M(["transition-colors",g(t)])},null,2)],512))]),default:m(()=>[ee,se,a("div",oe,[(p(!0),w(F,null,R(g(n),(x,H)=>(p(),w("div",{key:x._id,ref_for:!0,ref:C=>{g(_)[H]=C},class:"section-description"},[c(B,{ref_for:!0,ref:C=>g(h)[H]=C,mask:x.mask,color:"",class:"section-description__image"},null,8,["mask"]),a("div",{ref_for:!0,ref:C=>g(y)[H]=C,class:"section-description__text"},[c(D,{to:("addTrailingSlash"in b?b.addTrailingSlash:g(xt))(x.link),text:x.title,class:"underline"},null,8,["to","text"]),c(f,{value:x},null,8,["value"])],512)]))),128))])]),_:1},512)}}});function le(e){const n=e.value,t=gsap.matchMedia();for(let o=0;o<n.length;o++){const l=n[o].$el,i=l.children[0],s=l.children[1],r={scrub:1,start:"top bottom",end:"center 66%"};t.add("(min-width: 768px)",()=>{gsap.from(l.children,{scrollTrigger:{trigger:l,...r},marginLeft:o%2===0?"-100vw":void 0,marginRight:o%2===1?"-100vw":void 0})}),t.add("(max-width: 767px)",()=>{gsap.from(s,{scrollTrigger:{trigger:s,...r},marginLeft:o%2===0?"-100vw":void 0,marginRight:o%2===1?"-100vw":void 0,paddingRight:o%2===0?"100vw":void 0,paddingLeft:o%2===1?"100vw":void 0}),gsap.from(i,{scrollTrigger:{trigger:i,...r},x:o%2===0?"-100vw":"100vw"})})}}const q=e=>(pt("data-v-d8000034"),e=e(),mt(),e),ie={class:"relative w-full h-full max-w-3xl mx-auto"},ae=q(()=>a("div",{class:"pt-20"},null,-1)),re=q(()=>a("h1",null,"Skills",-1)),ce={class:"max-w-7xl mx-auto px-3"},ue=q(()=>a("div",{style:{height:"20vh"}},null,-1)),de=S({__name:"B3Skills",setup(e){const{data:n}=j(()=>I("/homepage/skills").find(),"$zhiTfh2j2t"),t=d(null),o=L(()=>{var s;return(s=t.value)==null?void 0:s.$el}),l=d([]),i=d(null);return Y(o,()=>{le(l)}),(s,r)=>{const u=nt,_=O,h=W;return p(),$(h,{id:"skills",ref:y=>t.value=y,tag:"section",class:"overflow-hidden","overlay-class":"skills__bg-overlay"},{svg:m(()=>[a("div",ie,[c(u,{ref:y=>i.value=y,class:"absolute inset-0 mx-auto right-2/3 top-[12%] w-80 -rotate-12"},null,512),c(u,{class:"absolute inset-0 m-auto left-1/4 bottom-64 w-96 rotate-12"}),c(u,{class:"absolute -left-40 bottom-5 w-96"})])]),default:m(()=>[ae,re,a("div",ce,[(p(!0),w(F,null,R(g(n),(y,b)=>(p(),$(_,{key:y._id,ref_for:!0,ref:T=>g(l)[b]=T,tag:"div",class:"skills-group",value:y},null,8,["value"]))),128))]),ue]),_:1},512)}}});const ge=et(de,[["__scopeId","data-v-d8000034"]]),_e=""+new URL("avatar-transparent-frame.5beee051.webp",import.meta.url).href;function pe(e,n,t,o){const[l,i,s]=[n.value,t.value,o.value];if(!l||!i||!s)return;const r=[{left:{x:2,y:0},right:{x:7,y:0}},{left:{x:3,y:10},right:{x:9,y:13}},{left:{x:1,y:20},right:{x:7,y:20}},{left:{x:2,y:30},right:{x:7,y:30}},{left:{x:0,y:36},right:{x:6,y:40}},{left:{x:3,y:47},right:{x:8,y:50}},{left:{x:1,y:64},right:{x:6,y:60}},{left:{x:4,y:70},right:{x:9,y:73}},{left:{x:2,y:80},right:{x:6,y:85}},{left:{x:3,y:92},right:{x:8,y:90}},{left:{x:0,y:100},right:{x:7,y:100}}];Ct(r,l,s);const u=ot(e,{y:()=>-window.innerHeight});U(r,l,i,(_,h)=>{gsap.to(_,{keyframes:h,scrollTrigger:{scrub:1,start:u.top,end:u.bottom}})})}const me={class:"sticky top-[25vh] mt-28 w-full h-screen overflow-hidden"},fe={class:"mx-auto max-w-3xl"},he=a("div",{class:"pt-20"},null,-1),ye=a("h1",null,"Story",-1),ve={class:"max-w-7xl px-3 mx-auto -mb-10 sm:-mb-32"},be={class:"flex items-center justify-center"},xe=a("img",{src:_e,class:"character"},null,-1),we=a("div",{class:"absolute inset-0 bg-white",style:{"clip-path":"var(--shape-bubble--right__outline)"}},null,-1),ke={class:"story-blocks__cards"},$e=S({__name:"B4Story",setup(e){const{data:n}=j("homepage",async()=>{const _=I("/homepage/story/intro").findOne(),h=I("/homepage/story/blocks").sort({date:-1}).find(),[y,b]=await Promise.all([_,h]);return{intro:y,blocks:b}}),t=d(null),o=L(()=>{var _;return(_=t.value)==null?void 0:_.$el}),l=d(null),i=d(null),s=d(null),r=d(null),u=d([]);return Y(o,()=>{pe(l,i,s,r)}),(_,h)=>{const y=kt,b=O,T=z,k=$t,B=St,D=W;return g(n)?(p(),$(D,{key:0,id:"story",ref:f=>t.value=f,tag:"section","overlay-class":"story__bg-overlay"},{svg:m(()=>[a("div",me,[a("div",fe,[c(y,{class:"h-[50vh] -ml-[20vh]"})])])]),default:m(()=>[he,ye,a("div",ve,[a("div",be,[xe,c(T,{class:"bubble-1","shape-class":"bubble-1__shape"},{"bg-overlay":m(()=>[we]),default:m(()=>[c(b,{value:g(n).intro,tag:"div",class:"bubble-1__text"},null,8,["value"])]),_:1})])]),a("div",{ref:f=>{l.value=f},class:"story-blocks"},[(p(),w("svg",{ref:f=>{i.value=f},height:"100%",width:"100%",class:"story-progress",viewBox:"0 0 10 100"},[a("polygon",{ref:f=>{r.value=f},class:"fill-black"},null,512),a("polygon",{ref:f=>{s.value=f},class:"fill-white"},null,512)],512)),a("div",ke,[(p(!0),w(F,null,R(g(n).blocks,(f,A)=>(p(),$(B,{key:f._id,ref_for:!0,ref:x=>g(u)[A]=x,mode:"homepage-story",class:"my-20"},{default:m(()=>[c(k,null,{extra:m(()=>[K(V(("dateToMonthYear"in _?_.dateToMonthYear:g(wt))(f.date)),1)]),default:m(()=>[K(" "+V(f.title),1)]),_:2},1024),c(b,{value:f},null,8,["value"])]),_:2},1024))),128))])],512)]),_:1},512)):G("",!0)}}});const Se={},Te={class:"-mt-20"};function Ce(e,n){const t=at,o=Xt,l=ne,i=ge,s=$e;return p(),w("div",Te,[c(t,{"og-title":"Homepage"}),c(o),c(l),c(i),c(s)])}const Xe=et(Se,[["render",Ce]]);export{Xe as default};
