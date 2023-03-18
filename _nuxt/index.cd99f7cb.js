import q from"./ContentRenderer.1324a561.js";import{_ as U}from"./Shape.vue.7a76e734.js";/* empty css                  */import{_ as Z}from"./Character.92136a6e.js";import{_ as J}from"./Btn.68b5063a.js";import{a as O,r as f,Y as w,Z as W,C as V,o as m,c as C,B as p,e as h,F as B,h as F,i as $,G as H,f as r,H as g,k as Y,t as j,a8 as Q,j as G,a3 as z,E as X,a9 as b,b as ee,u,aa as te,ab as se}from"./entry.975c889e.js";/* empty css                       */import{_ as oe}from"./Mask.c5e65517.js";import{_ as le}from"./Index.ab2877b8.js";import{C as ne}from"./Title.0cb2a1ce.js";import{C as ie}from"./Index.1832ae66.js";import{u as re}from"./seo.8a0c1283.js";import{u as ae,q as S}from"./query.3ff84557.js";import{a as ce}from"./date.8706a179.js";import"./ContentRendererMarkdown.b31da741.js";import"./index.a6ef77ff.js";/* empty css                      */import"./nuxt-link.34041125.js";/* empty css                *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import"./utils.4b982728.js";const ue=O({name:"ActionsFan",props:{actions:{type:Array,default:()=>[]},side:{type:String,default:"left"},filterClass:{type:[String,Object],default:""}},emits:["actionFocus","actionUnfocus","actionChoose"],setup(e){const a={left:{clipPath:"polygon(10px 0, 0 100%, 100% 40%)"},right:{clipPath:"polygon(calc(100% - 10px) 0, 100% 100%, 0 40%)"}},n=f([]);return w(()=>{n.value=e.actions.filter(()=>!0)}),W(()=>{n.value=e.actions.filter(()=>!1)}),{displayedActions:n,shapeStyles:a}}});function de(e,a,n,c,o,s){const l=J,d=U;return m(),C(Q,{name:"actions",tag:"ul"},{default:p(()=>[(m(!0),h(B,null,F(e.displayedActions,(i,_)=>(m(),C(d,{key:i.title,tag:"li",class:$(["w-full transform -my-8",{[i.class??""]:!0,"origin-left":e.side==="right","origin-right":e.side==="left"}]),"filter-class":e.filterClass,style:H({...i.style,"--tw-rotate":`${e.side==="left"?12-_*18:-12+_*18}deg`}),"shape-class":{"dark:bg-neutral-900":!0,[i.shapeClass??""]:!0},"shape-style":{...i.shapeStyle,...e.side==="right"?e.shapeStyles.right:e.shapeStyles.left}},{default:p(()=>[r("div",{class:$(["px-3 py-2",{"flex justify-end":e.side==="right"}])},[g(l,{to:i.to,tag:"button","no-passive-hl":"",onClick:y=>e.$emit("actionChoose",i.emit),onMouseenter:y=>e.$emit("actionFocus",i.emit),onTouchstart:y=>e.$emit("actionFocus",i.emit),onFocusin:y=>e.$emit("actionFocus",i.emit),onMouseleave:y=>e.$emit("actionUnfocus",i.emit),onTouchend:y=>e.$emit("actionUnfocus",i.emit),onFocusout:y=>e.$emit("actionUnfocus",i.emit)},{default:p(()=>[Y(j(i.title),1)]),_:2},1032,["to","onClick","onMouseenter","onTouchstart","onFocusin","onMouseleave","onTouchend","onFocusout"])],2)]),_:2},1032,["filter-class","class","style","shape-class","shape-style"]))),128))]),_:1})}const fe=V(ue,[["render",de]]),ge=O({name:"Background",props:{overlayClass:{type:[String,Object],default:""},overlayStyle:{type:Object,default:()=>{}},dotsClass:{type:[String,Object],default:""},dotsStyle:{type:Object,default:()=>{}},dots:{type:Boolean,default:!1},tag:{type:String,default:"div"}}}),pe={class:"mbg__relative-container"},me={class:"mbg__layer"},ye={class:"mbg__content"};function he(e,a,n,c,o,s){return m(),C(X(e.tag),{class:"mbg__main-container"},{default:p(()=>[r("div",pe,[r("div",{class:$(["mbg__layer",e.overlayClass]),style:H(e.overlayStyle)},null,6),r("div",me,[G(e.$slots,"svg")]),e.dots?(m(),h("div",{key:0,class:$(["mbg__layer mbg__dots",e.dotsClass]),style:H(e.dotsStyle)},null,6)):z("",!0),r("div",ye,[G(e.$slots,"default")])])]),_:3})}const _e=V(ge,[["render",he]]),K=e=>e.map((a,n,c)=>{const o=c.reduce((l,d,i)=>(i>n?l.push(l.at(-1)):l.push(d.left),l),[]);return[...c.reduce((l,d,i)=>(i>n?l.push(l.at(-1)):l.push(d.right),l),[]),...o.reverse()]}),E=e=>{const a=K(e),n=a.length,c=a[0].length,o=[];for(let s=0;s<c;s++){const l=[];for(let d=0;d<n;d++)l.push(a[d][s]);o.push(l)}return o},ve=()=>{const e={section:f(null),main:f(null),bg:f(null),text:f(null),svg:f(null),line:f(null)};return w(()=>{var n;const a={scrub:1,start:()=>0,end:()=>window.innerHeight*.5};b.fromTo(e.bg.value,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)"},{scrollTrigger:a,clipPath:"polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)"}),b.fromTo(e.main.value,{},{scrollTrigger:a,marginBottom:"-75vh"}),b.fromTo((n=e.text.value)==null?void 0:n.$el,{top:"33%"},{scrollTrigger:a,top:"3%"})}),w(()=>{const a={scrub:1,end:()=>window.innerHeight*1,start:()=>window.innerHeight*.3};E([{left:{x:90,y:0},right:{x:95,y:0}},{left:{x:50,y:33},right:{x:63,y:35}},{left:{x:80,y:58},right:{x:85,y:55}},{left:{x:50,y:100},right:{x:75,y:100}}]).forEach(n=>{var o,s;const c=(o=e.svg.value)==null?void 0:o.createSVGPoint();c&&((s=e.line.value)==null||s.points.appendItem(c),b.to(c,{keyframes:n,scrollTrigger:a}))})}),{introNodeRefs:e}},xe=()=>{const e={svg:f(null),line:f(null),portfolio:f(null),blog:f(null),resume:f(null)};let a;const n=f(null);return w(()=>{setTimeout(()=>{const c={scrub:1,start:()=>{var s,l;return(((l=(s=e.svg)==null?void 0:s.value)==null?void 0:l.getBoundingClientRect().top)??0)+window.scrollY-window.innerHeight*(1-.35*Number(window.innerHeight<window.innerWidth))},end:()=>{var s,l;return(((l=(s=e.svg)==null?void 0:s.value)==null?void 0:l.getBoundingClientRect().bottom)??0)+window.scrollY-window.innerHeight*(1-.35*Number(window.innerHeight<window.innerWidth))}};E([{left:{x:10,y:0},right:{x:13,y:0}},{left:{x:87,y:4},right:{x:90,y:1}},{left:{x:83,y:16},right:{x:87,y:10}},{left:{x:97,y:6},right:{x:94,y:7}},{left:{x:43,y:8},right:{x:50,y:9}},{left:{x:45,y:67},right:{x:57,y:49}},{left:{x:90,y:40},right:{x:85,y:38}},{left:{x:83,y:23},right:{x:72,y:14}},{left:{x:95,y:28},right:{x:98,y:25}},{left:{x:97,y:93},right:{x:99,y:99}},{left:{x:40,y:76},right:{x:30,y:75}},{left:{x:80,y:60},right:{x:95,y:50}},{left:{x:50,y:100},right:{x:75,y:100}}]).forEach(s=>{var d,i;const l=(d=e.svg.value)==null?void 0:d.createSVGPoint();l&&((i=e.line.value)==null||i.points.appendItem(l),b.to(l,{keyframes:s,scrollTrigger:c}))})},1e3)}),w(()=>{a=new IntersectionObserver(c=>{if(c.some(o=>o.isIntersecting&&o.target===e.resume.value)){n.value="resume";return}if(c.some(o=>o.isIntersecting&&o.target===e.blog.value)){n.value="blog";return}c.some(o=>o.isIntersecting&&o.target===e.portfolio.value)&&(n.value="portfolio")},{rootMargin:"-33% 0% -66% 0%",threshold:0}),e.portfolio.value&&a.observe(e.portfolio.value),e.blog.value&&a.observe(e.blog.value),e.resume.value&&a.observe(e.resume.value)}),W(()=>{a&&a.disconnect()}),{sectionsNodeRefs:e,currentSection:n}},be=()=>{const e={storyContainer:f(null),svg:f(null),line:f(null),linePlaceholder:f(null)};return w(()=>{setTimeout(()=>{var c;const a={scrub:1,start:()=>{var o,s;return(((s=(o=e.storyContainer)==null?void 0:o.value)==null?void 0:s.getBoundingClientRect().top)??0)+window.scrollY-window.innerHeight},end:()=>{var o,s;return(((s=(o=e.storyContainer)==null?void 0:o.value)==null?void 0:s.getBoundingClientRect().bottom)??0)+window.scrollY-window.innerHeight}},n=[{left:{x:2,y:0},right:{x:7,y:0}},{left:{x:3,y:10},right:{x:9,y:13}},{left:{x:1,y:20},right:{x:7,y:20}},{left:{x:2,y:30},right:{x:7,y:30}},{left:{x:0,y:36},right:{x:6,y:40}},{left:{x:3,y:47},right:{x:8,y:50}},{left:{x:1,y:64},right:{x:6,y:60}},{left:{x:4,y:70},right:{x:9,y:73}},{left:{x:2,y:80},right:{x:6,y:85}},{left:{x:3,y:92},right:{x:8,y:90}},{left:{x:0,y:100},right:{x:7,y:100}}];(c=K(n).at(-1))==null||c.forEach(o=>{var l,d;const s=(l=e.svg.value)==null?void 0:l.createSVGPoint();s&&(s.x=o.x,s.y=o.y,(d=e.linePlaceholder.value)==null||d.points.appendItem(s))}),E(n).forEach(o=>{var l,d;const s=(l=e.svg.value)==null?void 0:l.createSVGPoint();s&&((d=e.line.value)==null||d.points.appendItem(s),b.to(s,{keyframes:o,scrollTrigger:a}))})},1e3)}),{storyNodeRefs:e}},we=e=>e!=null&&e.attributes?null:e,k=e=>(te("data-v-a009c8eb"),e=e(),se(),e),ke={key:0,class:"-mt-20"},Se={class:"sticky top-0"},Ce={id:"home-intro-section"},$e={class:"absolute top-0 left-0 w-fit"},Pe=k(()=>r("h1",null,"Sections",-1)),Te={class:"w-full max-w-6xl mx-auto"},Be={class:"section-description__text"},Fe=k(()=>r("div",{class:"pt-20"},null,-1)),Re=k(()=>r("h1",null,"Skills",-1)),Ie={class:"max-w-7xl mx-auto px-3"},Ne=k(()=>r("div",{style:{height:"20vh"}},null,-1)),De=k(()=>r("div",{class:"pt-20"},null,-1)),Me=k(()=>r("h1",null,"Story",-1)),Ae={class:"max-w-7xl px-3 mx-auto -mb-10 sm:-mb-32"},He={class:"flex items-start justify-start"},Ye={class:"story-blocks__cards"},je=O({__name:"index",setup(e){re({ogTitle:"Homepage"});const a=f("idle"),{introNodeRefs:n}=ve(),{sectionsNodeRefs:c,currentSection:o}=xe(),{storyNodeRefs:s}=be(),l=[{title:"Sections",to:"#sections",emit:"action"},{title:"Skills",to:"#skills",emit:"profi"},{title:"Story",to:"#story",emit:"idle"}],d=ee(()=>o.value==="portfolio"?"fill-red-700":o.value==="blog"?"fill-cyan-700":o.value==="resume"?"fill-blue-700":"fill-green-700"),{data:i}=ae("homepage",async()=>{const _=S("/homepage/intro").findOne(),y=S("/homepage/sections").find(),v=S("/homepage/skills").find(),P=S("/homepage/story/intro").findOne(),T=S("/homepage/story/blocks").sort({date:-1}).find(),[R,x,I,N,D]=await Promise.all([_,y,v,P,T]);return{intro:R,sections:x,skills:I,story:{intro:N,blocks:D}}});return(_,y)=>{const v=q,P=U,T=Z,R=fe,x=_e,I=oe,N=le,D=ne,L=ie;return u(i)?(m(),h("div",ke,[r("section",{ref:t=>{u(n).section.value=t},style:{height:"200vh"}},[r("div",Se,[r("div",{ref:t=>{u(n).main.value=t},class:"relative w-screen max-w-full h-screen"},[r("div",{ref:t=>{u(n).bg.value=t},class:"absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"},null,512),g(P,{ref:t=>{u(n).text.value=("componentFromNodeRef"in _?_.componentFromNodeRef:u(we))(t)},class:"absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]","shape-class":"intro-shape"},{default:p(()=>[g(v,{tag:"div",value:u(i).intro,class:"p-10 text-xl font-serif text-center"},null,8,["value"])]),_:1},512)],512),g(x,{dots:"","dots-style":{clipPath:"polygon(20% 100%, 100% 100%, 100% 0%)"},class:"bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-0 bg-green-900 bg-opacity-90"},{svg:p(()=>[(m(),h("svg",{ref:t=>{u(n).svg.value=t},height:"100%",width:"100%",class:"absolute top-0 w-full max-w-6xl h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"80 0 20 100",preserveAspectRatio:"xMaxYMax"},[r("polygon",{ref:t=>{u(n).line.value=t},class:"fill-white"},null,512)],512))]),default:p(()=>[r("div",Ce,[r("div",$e,[g(T,{pose:u(a),class:"sm:h-96 sm:w-96 max-w-sm md:w-full md:h-auto md:max-w-lg sharp-shadow ss-br-3 ss-neutral-400 -ml-20 sm:ml-auto mt-20 transition-all"},null,8,["pose"]),g(R,{actions:l,side:"right",class:"absolute top-2/3 left-1/2 w-2/3 sm:left-2/3 z-10 text-xl md:text-2xl","filter-class":"sharp-shadow ss-br-3 ss-neutral-50",onActionFocus:y[0]||(y[0]=t=>a.value=t),onActionUnfocus:y[1]||(y[1]=t=>a.value="idle")})])])]),_:1},8,["dots-style"])])],512),g(x,{id:"sections",tag:"section",class:"bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-50 bg-neutral-900 bg-opacity-90"},{svg:p(()=>[(m(),h("svg",{ref:t=>{u(c).svg.value=t},height:"100%",width:"100%",class:"absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"90 0 10 100",preserveAspectRatio:"xMaxYMax"},[r("polygon",{ref:t=>{u(c).line.value=t},class:$(["transition-colors",u(d)])},null,2)],512))]),default:p(()=>[Pe,r("div",Te,[(m(!0),h(B,null,F(u(i).sections,(t,M)=>(m(),h("div",{key:t._id,ref_for:!0,ref:A=>{M===0?u(c).portfolio.value=A:M===1?u(c).blog.value=A:M===2&&(u(c).resume.value=A)},class:"section-description"},[g(I,{mask:t.mask,color:"",class:"section-description__image"},null,8,["mask"]),r("div",Be,[g(N,{to:t.link,text:t.title,class:"underline"},null,8,["to","text"]),g(v,{value:t},null,8,["value"])])]))),128))])]),_:1}),g(x,{id:"skills",tag:"section","overlay-class":"skills__bg-overlay"},{default:p(()=>[Fe,Re,r("div",Ie,[(m(!0),h(B,null,F(u(i).skills,t=>(m(),C(v,{key:t._id,tag:"div",class:"skills-group",value:t},null,8,["value"]))),128))]),Ne]),_:1}),g(x,{id:"story",tag:"section","overlay-class":"story__bg-overlay"},{default:p(()=>[De,Me,r("div",Ae,[r("div",He,[g(T,{pose:"profi",class:"character"}),g(P,{class:"bubble-1","filter-class":"sharp-shadow ss-neutral-50 ss-r-1 ss-b-1","shape-class":"bubble-1__shape"},{default:p(()=>[g(v,{value:u(i).story.intro,tag:"div",class:"bubble-1__text"},null,8,["value"])]),_:1})])]),r("div",{ref:t=>{u(s).storyContainer.value=t},class:"story-blocks"},[(m(),h("svg",{ref:t=>{u(s).svg.value=t},height:"100%",width:"100%",class:"story-progress",viewBox:"0 0 10 100"},[r("polygon",{ref:t=>{u(s).linePlaceholder.value=t},class:"fill-black"},null,512),r("polygon",{ref:t=>{u(s).line.value=t},class:"fill-white"},null,512)],512)),r("div",Ye,[(m(!0),h(B,null,F(u(i).story.blocks,t=>(m(),C(L,{key:t._id,mode:"homepage-story",class:"my-20"},{default:p(()=>[g(D,null,{extra:p(()=>[Y(j(("dateToMonthYear"in _?_.dateToMonthYear:u(ce))(t.date)),1)]),default:p(()=>[Y(" "+j(t.title),1)]),_:2},1024),g(v,{value:t},null,8,["value"])]),_:2},1024))),128))])],512)]),_:1})])):z("",!0)}}});const ut=V(je,[["__scopeId","data-v-a009c8eb"]]);export{ut as default};
