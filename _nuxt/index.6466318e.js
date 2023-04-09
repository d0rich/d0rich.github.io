import{_ as ut}from"./AsyncSafeSeoWithOg.vue.e89a46ba.js";import dt from"./ContentRenderer.7336cc37.js";import{_ as q}from"./Shape.vue.fa7cc3e7.js";/* empty css                  */import{_ as E}from"./_plugin-vue_export-helper.c27b6911.js";import{a as $,r as f,Y as X,Z as J,o as p,c as D,w as h,e as _,F as M,h as H,u as c,i as A,G as k,f as i,H as u,a9 as gt,k as V,t as K,aa as ft,ab as Q,j as z,l as tt,E as pt,ac as Z,ad as mt,b as ht,ae as _t,af as yt}from"./entry.b26fc087.js";/* empty css                       */import{_ as vt}from"./Index.ae744b6d.js";import{_ as et}from"./Btn.vue.5dd41f8d.js";/* empty css                */import bt from"./Icon.9fa945f3.js";import{_ as xt}from"./Mask.9254c696.js";import{_ as wt}from"./Index.vue.f055e242.js";/* empty css                  */import{C as kt}from"./Title.8721b656.js";import{_ as $t}from"./Index.vue.2e551b3e.js";/* empty css                  */import{u as St}from"./asyncData.63bda6c3.js";import{q as B}from"./query.ae9cec02.js";import{a as Tt}from"./date.8706a179.js";import"./ContentRendererMarkdown.d8f4f30b.js";import"./index.a6ef77ff.js";/* empty css                  */import"./nuxt-link.22b1a7b0.js";import"./config.b46d26cd.js";import"./Icon.vue.087e1ea4.js";/* empty css                 *//* empty css                  */import"./utils.e3333c60.js";function st(t){return t.map((e,o,s)=>{const n=s.reduce((l,d,g)=>(g>o?l.push(l.at(-1)):l.push(d.left),l),[]);return[...s.reduce((l,d,g)=>(g>o?l.push(l.at(-1)):l.push(d.right),l),[]),...n.reverse()]})}function Ct(t){const e=st(t),o=e.length,s=e[0].length,n=[];for(let a=0;a<s;a++){const l=[];for(let d=0;d<o;d++)l.push(e[d][a]);n.push(l)}return n}function U(t,e,o,s){const n=Ct(t);for(const a of n){const l=e.createSVGPoint();o.points.appendItem(l),s(l,a)}}function Pt(t,e,o){const s=st(t).at(-1);if(s)for(const n of s){const a=e.createSVGPoint();a.x=n.x,a.y=n.y,o.points.appendItem(a)}}function ot(t,e={}){return{top:()=>{var o;return(((o=t.value)==null?void 0:o.getBoundingClientRect().top)??0)+window.scrollY+(e.y?e.y():0)},bottom:()=>{var o;return(((o=t.value)==null?void 0:o.getBoundingClientRect().bottom)??0)+window.scrollY+(e.y?e.y():0)},right:()=>{var o;return(((o=t.value)==null?void 0:o.getBoundingClientRect().right)??0)+window.scrollX+(e.x?e.x():0)},left:()=>{var o;return(((o=t.value)==null?void 0:o.getBoundingClientRect().left)??0)+window.scrollX+(e.x?e.x():0)}}}const Dt={name:"DActionsFan"},At=$({...Dt,props:{actions:{type:Array,default:()=>[]},side:{type:String,default:"left"},filterClass:{type:[String,Object],default:""}},emits:["actionFocus","actionUnfocus","actionChoose"],setup(t){const e=t,o={left:{clipPath:"polygon(10px 0, 0 100%, 100% 40%)"},right:{clipPath:"polygon(calc(100% - 10px) 0, 100% 100%, 0 40%)"}},s=f([]);return X(()=>{s.value=e.actions.filter(()=>!0)}),J(()=>{s.value=e.actions.filter(()=>!1)}),(n,a)=>{const l=et,d=q;return p(),D(ft,{name:"actions",tag:"ul",class:"py-8"},{default:h(()=>[(p(!0),_(M,null,H(c(s),(g,y)=>(p(),D(d,{key:g.title,tag:"li",class:A(["w-full transform -my-8",{[g.class??""]:!0,"origin-left":t.side==="right","origin-right":t.side==="left"}]),"filter-class":t.filterClass,style:k({...g.style,"--tw-rotate":`${t.side==="left"?12-y*18:-12+y*18}deg`}),"shape-class":{"dark:bg-neutral-900":!0,[g.shapeClass??""]:!0},"shape-style":{...g.shapeStyle,...t.side==="right"?o.right:o.left}},{default:h(()=>[i("div",{class:A(["px-3 py-2",{"flex justify-end":t.side==="right"}])},[u(l,gt(g.attrs,{tag:"button","no-passive-hl":"",onClick:m=>n.$emit("actionChoose",g.emit),onMouseenter:m=>n.$emit("actionFocus",g.emit),onTouchstart:m=>n.$emit("actionFocus",g.emit),onFocusin:m=>n.$emit("actionFocus",g.emit),onMouseleave:m=>n.$emit("actionUnfocus",g.emit),onTouchend:m=>n.$emit("actionUnfocus",g.emit),onFocusout:m=>n.$emit("actionUnfocus",g.emit)}),{default:h(()=>[V(K(g.title),1)]),_:2},1040,["onClick","onMouseenter","onTouchstart","onFocusin","onMouseleave","onTouchend","onFocusout"])],2)]),_:2},1032,["filter-class","class","style","shape-class","shape-style"]))),128))]),_:1})}}}),Nt={name:"DAnimationLetterD"},Bt={d:"M200.242,139.244l137.207,-0c66.136,-0 112.859,17.192 140.169,51.576c27.31,34.384 33.562,84.973 18.755,151.767c-22.045,98.711 -85.878,148.066 -191.498,148.066l-179.16,-0l74.527,-351.409Zm184.588,179.159c12.175,-57.581 -7.732,-86.372 -59.72,-86.372l-33.068,0l-35.042,165.834l44.42,0c23.69,0 42.034,-6.169 55.031,-18.508c12.997,-12.339 22.457,-32.657 28.379,-60.954Z"};function Mt(t,e,o,s,n,a){return p(),_("path",Bt)}const I=E(Nt,[["render",Mt]]),Ht=i("use",{id:"d-accordion-section",href:"#d-letter",transform:"scale(0.33)"},null,-1),Rt=Q('<use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use><use href="#d-accordion-section" class="d-animation-accordion__section"></use>',6),Lt={name:"DAnimationAccordion"},Ft=$({...Lt,props:{wigglePeriod:{type:Number,default:10},delay:{type:Number,default:1}},setup(t){return(e,o)=>{const s=I;return p(),_("svg",{viewBox:"0 0 630 210",xmlns:"http://www.w3.org/2000/svg",class:"d-animation-accordion",style:k({"--d-accordion-wiggle-period":t.wigglePeriod+"s","--d-accordion-delay":t.delay+"s"})},[i("defs",null,[u(s,{id:"d-letter"}),Ht]),Rt],4)}}}),It={name:"DAnimationFloatingLetter"},Ot=$({...It,props:{floatPeriod:{type:Number,default:5},pathClass:{type:[String,Object],default:""}},setup(t){return(e,o)=>{const s=I;return p(),_("svg",{viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",style:k({"--d-floating-letter-float-period":t.floatPeriod+"s"})},[u(s,{class:A(["d-animation-floating-letter",t.pathClass])},null,8,["class"])],4)}}}),jt=i("use",{id:"d-hypnosis-section",href:"#d-letter"},null,-1),Gt=Q('<use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use>',6),Wt={name:"DAnimationHypnosis"},Yt=$({...Wt,props:{wigglePeriod:{type:Number,default:10},delay:{type:Number,default:1}},setup(t){return(e,o)=>{const s=I;return p(),_("svg",{viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",class:"d-animation-hypnosis",style:k({"--d-hypnosis-wiggle-period":t.wigglePeriod+"s","--d-hypnosis-delay":t.delay+"s"})},[i("defs",null,[u(s,{id:"d-letter"}),jt]),Gt],4)}}}),Vt={name:"DAnimationSpinner"},Kt=$({...Vt,props:{spinPeriod:{type:Number,default:10},bladeWigglePeriod:{type:Number,default:5}},setup(t){const e="315 315";return(o,s)=>{const n=I;return p(),_("svg",{class:"spinner",viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",style:k({"--d-spinner-spin-period":t.spinPeriod+"s","--d-spinner-blade-wiggle-period":t.bladeWigglePeriod+"s"})},[i("defs",null,[u(n,{id:"d-letter"}),i("use",{id:"d-spinner-blade",href:"#d-letter",class:"d-animation-spinner__blade","transform-origin":e}),i("g",{id:"spinner",class:"d-animation-spinner__spinner","transform-origin":e},[i("use",{href:"#d-spinner-blade",transform:"rotate(0)","transform-origin":e}),i("use",{href:"#d-spinner-blade",transform:"rotate(120)","transform-origin":e}),i("use",{href:"#d-spinner-blade",transform:"rotate(240)","transform-origin":e})])]),i("use",{href:"#spinner",transform:"translate( -20 20 )",class:"fill-black","transform-origin":e}),i("use",{href:"#spinner",class:"fill-white","transform-origin":e})],4)}}}),Ut={class:"mbg__relative-container"},zt={class:"mbg__layer"},Zt={class:"mbg__content"},qt={name:"DWrapBackground"},Et=$({...qt,props:{overlayClass:{type:[String,Object],default:""},overlayStyle:{type:Object,default:()=>{}},dotsClass:{type:[String,Object],default:""},dotsStyle:{type:Object,default:()=>{}},dots:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){return(e,o)=>(p(),D(pt(t.tag),{class:"mbg__main-container"},{default:h(()=>[i("div",Ut,[i("div",{class:A(["mbg__layer",t.overlayClass]),style:k(t.overlayStyle)},null,6),i("div",zt,[z(e.$slots,"svg")]),t.dots?(p(),_("div",{key:0,class:A(["mbg__layer mbg__dots",t.dotsClass]),style:k(t.dotsStyle)},null,6)):tt("",!0),i("div",Zt,[z(e.$slots,"default")])])]),_:3}))}}),Xt=(t,e,o=500)=>{{let n=o/100;const a=()=>{var l;(l=t.value)!=null&&l.isConnected?e():n>0&&(setTimeout(a,100),n--)};X(()=>{a()})}};function Jt(t,e,o){const[s,n,a]=[t.value,e.value,o.value];if(!(s&&n&&a))return;const l={scrub:1,start:()=>0,end:()=>window.innerHeight*.5};gsap.fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)"},{scrollTrigger:l,clipPath:"polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)"}),gsap.fromTo(s,{},{scrollTrigger:l,marginBottom:"-75vh"}),gsap.fromTo(a==null?void 0:a.$el,{top:"33%"},{scrollTrigger:l,top:"3%"})}function Qt(t){const[e,o,s,n]=t.value.map(m=>m==null?void 0:m.$el);if(!(o&&e&&s&&n))return;const a=gsap.matchMedia(),l={scrub:1,start:()=>window.innerHeight*.1,end:()=>window.innerHeight*.3},d={scrub:1,start:()=>window.innerHeight*.2,end:()=>window.innerHeight*.4},g={scrub:1,start:()=>window.innerHeight*.4,end:()=>window.innerHeight*.5},y={scrub:1,start:()=>window.innerHeight*.35,end:()=>window.innerHeight*.45};a.add("(max-width: 639px)",()=>{gsap.to(e,{scrollTrigger:l,top:"10%",left:"10%",rotate:354}),gsap.to(o,{scrollTrigger:d,top:"8%",left:"30%",rotate:360}),gsap.to(s,{scrollTrigger:g,top:"10%",left:"50%",rotate:366}),gsap.to(n,{scrollTrigger:y,top:"14%",left:"70%",rotate:354})}),a.add("(min-width: 640px) and (max-width: 767px)",()=>{gsap.to(e,{scrollTrigger:l,top:"15%",left:"70%",rotate:354}),gsap.to(o,{scrollTrigger:d,top:"23%",left:"80%",rotate:360}),gsap.to(s,{scrollTrigger:g,top:"35%",left:"85%",rotate:366}),gsap.to(n,{scrollTrigger:y,top:"50%",left:"85%",rotate:354})}),a.add("(min-width: 768px)",()=>{gsap.to(e,{scrollTrigger:l,top:"15%",left:"60%",rotate:354}),gsap.to(o,{scrollTrigger:d,top:"30%",left:"70%",rotate:360}),gsap.to(s,{scrollTrigger:g,top:"23%",left:"80%",rotate:366}),gsap.to(n,{scrollTrigger:y,top:"50%",left:"73%",rotate:354})})}function te(t,e){const[o,s]=[t.value,e.value];!o||!s||U([{left:{x:90,y:0},right:{x:95,y:0}},{left:{x:50,y:33},right:{x:63,y:35}},{left:{x:80,y:58},right:{x:85,y:55}},{left:{x:50,y:100},right:{x:75,y:100}}],o,s,(n,a)=>{gsap.to(n,{keyframes:a,scrollTrigger:{scrub:1,end:()=>window.innerHeight*1,start:()=>window.innerHeight*.3}})})}var R=Z.registerPlugin(mt)||Z;R.core.Tween;function ee(t,e){if(!t.value||!e.value)return;const o=ot(t,{y:()=>-window.innerHeight*(1-.35*+(window.innerHeight<window.innerWidth))}),s={scrub:1,start:o.top,end:o.bottom};U([{left:{x:10,y:0},right:{x:13,y:0}},{left:{x:87,y:4},right:{x:90,y:1}},{left:{x:83,y:16},right:{x:87,y:10}},{left:{x:97,y:6},right:{x:94,y:7}},{left:{x:43,y:8},right:{x:50,y:9}},{left:{x:45,y:67},right:{x:57,y:49}},{left:{x:90,y:40},right:{x:85,y:38}},{left:{x:83,y:23},right:{x:72,y:14}},{left:{x:95,y:28},right:{x:98,y:25}},{left:{x:97,y:93},right:{x:99,y:99}},{left:{x:40,y:76},right:{x:30,y:75}},{left:{x:80,y:60},right:{x:95,y:50}},{left:{x:50,y:100},right:{x:75,y:100}}],t.value,e.value,(a,l)=>{R.to(a,{keyframes:l,scrollTrigger:s})})}function se(t,e){const[o,s,n]=t.value,a=new IntersectionObserver(l=>{const d=g=>l.some(y=>y.isIntersecting&&y.target===g);d(n)?e.value="resume":d(s)?e.value="blog":d(o)&&(e.value="portfolio")},{rootMargin:"-33% 0% -66% 0%",threshold:0});return o&&a.observe(o),s&&a.observe(s),n&&a.observe(n),()=>{a.disconnect()}}function oe(t,e){for(const o of e.value){const s=[];s.push(o.children[0]),s.push(...o.children[1].children),R.from(s,{opacity:0,scrollTrigger:{trigger:o,scrub:1,start:"top 90%",end:"center 66%"},stagger:.2})}for(const o of t.value){const s=o.$el;R.set(s,{transform:"perspective(400px)"}),R.from(s,{scrollTrigger:{trigger:s,scrub:1,start:"center 90%",end:"center 66%"},opacity:0,rotateY:-90})}}function ne(t,e,o,s){const[n,a,l]=[e.value,o.value,s.value];if(!n||!a||!l)return;const d=[{left:{x:2,y:0},right:{x:7,y:0}},{left:{x:3,y:10},right:{x:9,y:13}},{left:{x:1,y:20},right:{x:7,y:20}},{left:{x:2,y:30},right:{x:7,y:30}},{left:{x:0,y:36},right:{x:6,y:40}},{left:{x:3,y:47},right:{x:8,y:50}},{left:{x:1,y:64},right:{x:6,y:60}},{left:{x:4,y:70},right:{x:9,y:73}},{left:{x:2,y:80},right:{x:6,y:85}},{left:{x:3,y:92},right:{x:8,y:90}},{left:{x:0,y:100},right:{x:7,y:100}}];Pt(d,n,l);const g=ot(t,{y:()=>-window.innerHeight});U(d,n,a,(y,m)=>{gsap.to(y,{keyframes:m,scrollTrigger:{scrub:1,start:g.top,end:g.bottom}})})}function ie(t){const e=t.value,o=gsap.matchMedia();for(let s=0;s<e.length;s++){const n=e[s].$el,a=n.children[0],l=n.children[1],d={scrub:1,start:"top bottom",end:"center 66%"};o.add("(min-width: 768px)",()=>{gsap.from(n.children,{scrollTrigger:{trigger:n,...d},marginLeft:s%2===0?"-100vw":void 0,marginRight:s%2===1?"-100vw":void 0})}),o.add("(max-width: 767px)",()=>{gsap.from(l,{scrollTrigger:{trigger:l,...d},marginLeft:s%2===0?"-100vw":void 0,marginRight:s%2===1?"-100vw":void 0,paddingRight:s%2===0?"100vw":void 0,paddingLeft:s%2===1?"100vw":void 0}),gsap.from(a,{scrollTrigger:{trigger:a,...d},x:s%2===0?"-100vw":"100vw"})})}}const le=t=>{const e={section:f(null),main:f(null),bg:f(null),text:f(null),svg:f(null),line:f(null),socials:f([])},o={svg:f(null),line:f(null),sections:f([]),sectionsMasks:f([]),sectionsContent:f([])},s=f(()=>{}),n=f(null),a={block:f(null),skillsGroups:f([]),bgSpinner:f(null)},l={storyContainer:f(null),svg:f(null),line:f(null),linePlaceholder:f(null),cards:f([])};return Xt(t,()=>{Jt(e.main,e.bg,e.text),Qt(e.socials),te(e.svg,e.line),ee(o.svg,o.line),s.value=se(o.sections,n),oe(o.sectionsMasks,o.sectionsContent),ie(a.skillsGroups),ne(l.storyContainer,l.svg,l.line,l.linePlaceholder)}),J(()=>s.value()),{introNodeRefs:e,sectionsNodeRefs:o,currentSection:n,skillsNodeRefs:a,storyNodeRefs:l}},ae=t=>t!=null&&t.attributes?null:t,re=""+new URL("avatar-transparent-frame.5beee051.webp",import.meta.url).href,x=t=>(_t("data-v-486ba653"),t=t(),yt(),t),ce={class:"sticky top-0"},ue={class:"absolute inset-0 overflow-hidden"},de={id:"home-intro-section"},ge={class:"relative h-full max-w-7xl mx-auto"},fe={class:"absolute inset-0 text-3xl md:text-4xl"},pe={class:"absolute inset-0 overflow-hidden"},me=x(()=>i("div",{class:"pt-20"},null,-1)),he=x(()=>i("h1",null,"Sections",-1)),_e={class:"w-full max-w-6xl mx-auto overflow-hidden"},ye={class:"relative w-full h-full max-w-3xl mx-auto"},ve=x(()=>i("div",{class:"pt-20"},null,-1)),be=x(()=>i("h1",null,"Skills",-1)),xe={class:"max-w-7xl mx-auto px-3"},we=x(()=>i("div",{style:{height:"20vh"}},null,-1)),ke={class:"sticky top-[25vh] mt-28 w-full h-screen overflow-hidden"},$e={class:"mx-auto max-w-3xl"},Se=x(()=>i("div",{class:"pt-20"},null,-1)),Te=x(()=>i("h1",null,"Story",-1)),Ce={class:"max-w-7xl px-3 mx-auto -mb-10 sm:-mb-32"},Pe={class:"flex items-center justify-center"},De=x(()=>i("img",{src:re,class:"character"},null,-1)),Ae=x(()=>i("div",{class:"absolute inset-0 bg-white",style:{"clip-path":"var(--shape-bubble--right__outline)"}},null,-1)),Ne={class:"story-blocks__cards"},Be=$({__name:"index",setup(t){const e=f("idle"),o=f(),{introNodeRefs:s,sectionsNodeRefs:n,currentSection:a,skillsNodeRefs:l,storyNodeRefs:d}=le(o),g=f([{icon:"ic:sharp-mail",link:"mailto:dorich2000@gmail.com"},{icon:"fa6-brands:linkedin",link:"https://www.linkedin.com/in/d0rich/"},{icon:"fa6-brands:github",link:"https://github.com/d0rich"},{icon:"fa6-brands:telegram",link:"https://d0rich.t.me/"}]),y=[{title:"Sections",emit:"action",attrs:{href:"#sections",noPassiveHighlight:!0}},{title:"Skills",emit:"profi",attrs:{href:"#skills",noPassiveHighlight:!0}},{title:"Story",emit:"idle",attrs:{href:"#story",noPassiveHighlight:!0}}],m=ht(()=>a.value==="portfolio"?"fill-red-700":a.value==="blog"?"fill-cyan-700":a.value==="resume"?"fill-blue-700":"fill-green-700"),{data:S}=St("homepage",async()=>{const T=B("/homepage/intro").findOne(),L=B("/homepage/sections").find(),O=B("/homepage/skills").find(),w=B("/homepage/story/intro").findOne(),N=B("/homepage/story/blocks").sort({date:-1}).find(),[C,j,G,W,Y]=await Promise.all([T,L,O,w,N]);return{intro:C,sections:j,skills:G,story:{intro:W,blocks:Y}}});return(T,L)=>{const O=ut,w=dt,N=q,C=Yt,j=Ft,G=vt,W=At,Y=bt,nt=et,F=Et,P=Ot,it=xt,lt=wt,at=Kt,rt=kt,ct=$t;return c(S)?(p(),_("div",{key:0,ref_key:"rootRef",ref:o,class:"-mt-20"},[u(O,{"og-title":"Homepage"}),i("section",{ref:r=>{c(s).section.value=r},style:{height:"200vh"}},[i("div",ce,[i("div",{ref:r=>{c(s).main.value=r},class:"relative w-screen max-w-full h-screen"},[i("div",{ref:r=>{c(s).bg.value=r},class:"absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"},null,512),u(N,{ref:r=>{c(s).text.value=("componentFromNodeRef"in T?T.componentFromNodeRef:c(ae))(r)},class:"absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]","shape-class":"intro-shape"},{default:h(()=>[u(w,{tag:"div",value:c(S).intro,class:"p-10 text-xl font-serif text-center"},null,8,["value"])]),_:1},512)],512),u(F,{dots:"","dots-style":{clipPath:"polygon(20% 100%, 100% 100%, 100% 0%)"},class:"bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-0 bg-green-900 bg-opacity-90"},{svg:h(()=>[u(C,{class:"absolute landscape:h-full m-auto inset-0","path-class":"fill-white"}),(p(),_("svg",{ref:r=>{c(s).svg.value=r},height:"100%",width:"100%",class:"absolute inset-0 w-full max-w-6xl mx-auto h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"80 0 20 100",preserveAspectRatio:"xMaxYMax"},[i("polygon",{ref:r=>{c(s).line.value=r},class:"fill-white"},null,512)],512)),i("div",ue,[u(j,{class:"absolute bottom-8 -right-20 sm:right-5 -rotate-12 w-[clamp(300px,_33%,_500px)]"})])]),default:h(()=>[i("div",de,[i("div",ge,[u(G,{pose:c(e),"shape-class":"fill-black",class:"absolute self-end h-full -ml-20 sm:ml-auto mt-20 transition-all"},null,8,["pose"]),u(W,{actions:y,side:"right",class:"absolute top-1/2 left-1/3 w-1/2 md:w-1/3 max-w-xs z-10 text-xl md:text-2xl","filter-class":"sharp-shadow ss-br-3 ss-neutral-50",onActionFocus:L[0]||(L[0]=r=>e.value=r)}),i("div",fe,[(p(!0),_(M,null,H(c(g),(r,b)=>(p(),D(N,{key:b,ref_for:!0,ref:v=>{c(s).socials.value[b]=v},class:"absolute -top-1/3 left-1/2","shape-class":"d-chip bg-black","filter-class":"sharp-shadow ss-br-2 ss-white"},{default:h(()=>[u(nt,{href:r.link,target:"_blank"},{default:h(()=>[u(Y,{name:r.icon,class:"m-[0.4em]"},null,8,["name"])]),_:2},1032,["href"])]),_:2},1024))),128))])])])]),_:1},8,["dots-style"])])],512),u(F,{id:"sections",tag:"section",class:"bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-50 bg-neutral-900 bg-opacity-90"},{svg:h(()=>[i("div",pe,[u(P,{class:"absolute w-56 inset-0 left-1/3 mx-auto","path-class":c(m)},null,8,["path-class"]),u(P,{class:"absolute w-32 inset-0 bottom-1/2 right-2/3 m-auto","path-class":c(m)},null,8,["path-class"]),u(P,{class:"absolute w-52 inset-0 left-1/3 m-auto","path-class":c(m)},null,8,["path-class"]),u(P,{class:"absolute w-60 inset-0 bottom-1/3 left-3/4 m-auto","path-class":c(m)},null,8,["path-class"]),u(P,{class:"absolute w-48 inset-0 top-1/2 right-1/3 m-auto","path-class":c(m)},null,8,["path-class"]),u(P,{class:"absolute w-96 inset-0 top-3/4 left-1/4 m-auto","path-class":c(m)},null,8,["path-class"])]),(p(),_("svg",{ref:r=>{c(n).svg.value=r},height:"100%",width:"100%",class:"absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"70 0 10 100",preserveAspectRatio:"xMidYMin"},[i("polygon",{ref:r=>{c(n).line.value=r},class:A(["transition-colors",c(m)])},null,2)],512))]),default:h(()=>[me,he,i("div",_e,[(p(!0),_(M,null,H(c(S).sections,(r,b)=>(p(),_("div",{key:r._id,ref_for:!0,ref:v=>{c(n).sections.value[b]=v},class:"section-description"},[u(it,{ref_for:!0,ref:v=>c(n).sectionsMasks.value[b]=v,mask:r.mask,color:"",class:"section-description__image"},null,8,["mask"]),i("div",{ref_for:!0,ref:v=>c(n).sectionsContent.value[b]=v,class:"section-description__text"},[u(lt,{to:r.link,text:r.title,class:"underline"},null,8,["to","text"]),u(w,{value:r},null,8,["value"])],512)]))),128))])]),_:1}),u(F,{id:"skills",ref:r=>c(l).block.value=r,tag:"section",class:"overflow-hidden","overlay-class":"skills__bg-overlay"},{svg:h(()=>[i("div",ye,[u(C,{ref:r=>c(l).bgSpinner.value=r,class:"absolute inset-0 mx-auto right-2/3 top-[12%] w-80 -rotate-12"},null,512),u(C,{class:"absolute inset-0 m-auto left-1/4 bottom-64 w-96 rotate-12"}),u(C,{class:"absolute -left-40 bottom-5 w-96"})])]),default:h(()=>[ve,be,i("div",xe,[(p(!0),_(M,null,H(c(S).skills,(r,b)=>(p(),D(w,{key:r._id,ref_for:!0,ref:v=>c(l).skillsGroups.value[b]=v,tag:"div",class:"skills-group",value:r},null,8,["value"]))),128))]),we]),_:1},512),u(F,{id:"story",tag:"section","overlay-class":"story__bg-overlay"},{svg:h(()=>[i("div",ke,[i("div",$e,[u(at,{class:"h-[50vh] -ml-[20vh]"})])])]),default:h(()=>[Se,Te,i("div",Ce,[i("div",Pe,[De,u(N,{class:"bubble-1","shape-class":"bubble-1__shape"},{"bg-overlay":h(()=>[Ae]),default:h(()=>[u(w,{value:c(S).story.intro,tag:"div",class:"bubble-1__text"},null,8,["value"])]),_:1})])]),i("div",{ref:r=>{c(d).storyContainer.value=r},class:"story-blocks"},[(p(),_("svg",{ref:r=>{c(d).svg.value=r},height:"100%",width:"100%",class:"story-progress",viewBox:"0 0 10 100"},[i("polygon",{ref:r=>{c(d).linePlaceholder.value=r},class:"fill-black"},null,512),i("polygon",{ref:r=>{c(d).line.value=r},class:"fill-white"},null,512)],512)),i("div",Ne,[(p(!0),_(M,null,H(c(S).story.blocks,(r,b)=>(p(),D(ct,{key:r._id,ref_for:!0,ref:v=>c(d).cards.value[b]=v,mode:"homepage-story",class:"my-20"},{default:h(()=>[u(rt,null,{extra:h(()=>[V(K(("dateToMonthYear"in T?T.dateToMonthYear:c(Tt))(r.date)),1)]),default:h(()=>[V(" "+K(r.title),1)]),_:2},1024),u(w,{value:r},null,8,["value"])]),_:2},1024))),128))])],512)]),_:1})],512)):tt("",!0)}}});const rs=E(Be,[["__scopeId","data-v-486ba653"]]);export{rs as default};
