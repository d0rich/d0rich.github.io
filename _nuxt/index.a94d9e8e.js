import{_ as Z}from"./AsyncSafeSeoWithOg.vue.9a9bc382.js";import J from"./ContentRenderer.ad5ca96b.js";import{_ as W}from"./Shape.vue.da0c03b4.js";/* empty css                  */import{_ as Q}from"./Index.78cf7a50.js";import{_ as X}from"./Btn.vue.37230c88.js";/* empty css                */import{a as j,r as d,Y as w,Z as E,o as p,c as C,B as m,e as h,F as T,h as F,u,i as P,G as H,f as a,H as g,aa as ee,k as Y,t as O,ab as te,C as G,j as V,a3 as U,E as se,a5 as oe,b as le,ac as ne,ad as ie}from"./entry.687914da.js";/* empty css                       */import{_ as re}from"./Mask.ec6ce032.js";import{_ as ae}from"./Index.bf337524.js";import{C as ce}from"./Title.f2c04721.js";import{C as ue}from"./Index.8353be32.js";/* empty css                  *//* empty css                 */import"./Icon.vue.45e9bbeb.js";/* empty css                  */import{u as fe,q as S}from"./query.5268da11.js";import{a as ge}from"./date.8706a179.js";import"./ContentRendererMarkdown.83ae6f82.js";import"./index.a6ef77ff.js";import"./nuxt-link.f55ac87f.js";/* empty css                  *//* empty css                  *//* empty css                  */import"./utils.6df662d0.js";const de=j({__name:"Fan",props:{actions:{type:Array,default:()=>[]},side:{type:String,default:"left"},filterClass:{type:[String,Object],default:""}},emits:["actionFocus","actionUnfocus","actionChoose"],setup(e){const c=e,n={left:{clipPath:"polygon(10px 0, 0 100%, 100% 40%)"},right:{clipPath:"polygon(calc(100% - 10px) 0, 100% 100%, 0 40%)"}},i=d([]);return w(()=>{i.value=c.actions.filter(()=>!0)}),E(()=>{i.value=c.actions.filter(()=>!1)}),(t,o)=>{const l=X,f=W;return p(),C(te,{name:"actions",tag:"ul",class:"py-8"},{default:m(()=>[(p(!0),h(T,null,F(u(i),(r,_)=>(p(),C(f,{key:r.title,tag:"li",class:P(["w-full transform -my-8",{[r.class??""]:!0,"origin-left":e.side==="right","origin-right":e.side==="left"}]),"filter-class":e.filterClass,style:H({...r.style,"--tw-rotate":`${e.side==="left"?12-_*18:-12+_*18}deg`}),"shape-class":{"dark:bg-neutral-900":!0,[r.shapeClass??""]:!0},"shape-style":{...r.shapeStyle,...e.side==="right"?n.right:n.left}},{default:m(()=>[a("div",{class:P(["px-3 py-2",{"flex justify-end":e.side==="right"}])},[g(l,ee(r.attrs,{tag:"button","no-passive-hl":"",onClick:y=>t.$emit("actionChoose",r.emit),onMouseenter:y=>t.$emit("actionFocus",r.emit),onTouchstart:y=>t.$emit("actionFocus",r.emit),onFocusin:y=>t.$emit("actionFocus",r.emit),onMouseleave:y=>t.$emit("actionUnfocus",r.emit),onTouchend:y=>t.$emit("actionUnfocus",r.emit),onFocusout:y=>t.$emit("actionUnfocus",r.emit)}),{default:m(()=>[Y(O(r.title),1)]),_:2},1040,["onClick","onMouseenter","onTouchstart","onFocusin","onMouseleave","onTouchend","onFocusout"])],2)]),_:2},1032,["filter-class","class","style","shape-class","shape-style"]))),128))]),_:1})}}}),me=j({name:"Background",props:{overlayClass:{type:[String,Object],default:""},overlayStyle:{type:Object,default:()=>{}},dotsClass:{type:[String,Object],default:""},dotsStyle:{type:Object,default:()=>{}},dots:{type:Boolean,default:!1},tag:{type:String,default:"div"}}}),pe={class:"mbg__relative-container"},ye={class:"mbg__layer"},he={class:"mbg__content"};function _e(e,c,n,i,t,o){return p(),C(se(e.tag),{class:"mbg__main-container"},{default:m(()=>[a("div",pe,[a("div",{class:P(["mbg__layer",e.overlayClass]),style:H(e.overlayStyle)},null,6),a("div",ye,[V(e.$slots,"svg")]),e.dots?(p(),h("div",{key:0,class:P(["mbg__layer mbg__dots",e.dotsClass]),style:H(e.dotsStyle)},null,6)):U("",!0),a("div",he,[V(e.$slots,"default")])])]),_:3})}const ve=G(me,[["render",_e]]),xe=()=>({generatePolygonLineKeyframes:z,generatePolygonPointsKeyframes:be});function z(e){return e.map((c,n,i)=>{const t=i.reduce((l,f,r)=>(r>n?l.push(l.at(-1)):l.push(f.left),l),[]);return[...i.reduce((l,f,r)=>(r>n?l.push(l.at(-1)):l.push(f.right),l),[]),...t.reverse()]})}function be(e){const c=z(e),n=c.length,i=c[0].length,t=[];for(let o=0;o<i;o++){const l=[];for(let f=0;f<n;f++)l.push(c[f][o]);t.push(l)}return t}const b=oe,{generatePolygonLineKeyframes:we,generatePolygonPointsKeyframes:K}=xe(),ke=()=>{const e={section:d(null),main:d(null),bg:d(null),text:d(null),svg:d(null),line:d(null)};return w(()=>{var n;const c={scrub:1,start:()=>0,end:()=>window.innerHeight*.5};b.fromTo(e.bg.value,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 77% 100%, 0 100%)"},{scrollTrigger:c,clipPath:"polygon(0% 0%, 100% 0%, 100% 48%, 77% 25%, 0 25%)"}),b.fromTo(e.main.value,{},{scrollTrigger:c,marginBottom:"-75vh"}),b.fromTo((n=e.text.value)==null?void 0:n.$el,{top:"33%"},{scrollTrigger:c,top:"3%"})}),w(()=>{const c={scrub:1,end:()=>window.innerHeight*1,start:()=>window.innerHeight*.3};K([{left:{x:90,y:0},right:{x:95,y:0}},{left:{x:50,y:33},right:{x:63,y:35}},{left:{x:80,y:58},right:{x:85,y:55}},{left:{x:50,y:100},right:{x:75,y:100}}]).forEach(n=>{var t,o;const i=(t=e.svg.value)==null?void 0:t.createSVGPoint();i&&((o=e.line.value)==null||o.points.appendItem(i),b.to(i,{keyframes:n,scrollTrigger:c}))})}),{introNodeRefs:e}},Se=()=>{const e={svg:d(null),line:d(null),portfolio:d(null),blog:d(null),resume:d(null)};let c;const n=d(null);return w(()=>{setTimeout(()=>{const i={scrub:1,start:()=>{var o,l;return(((l=(o=e.svg)==null?void 0:o.value)==null?void 0:l.getBoundingClientRect().top)??0)+window.scrollY-window.innerHeight*(1-.35*+(window.innerHeight<window.innerWidth))},end:()=>{var o,l;return(((l=(o=e.svg)==null?void 0:o.value)==null?void 0:l.getBoundingClientRect().bottom)??0)+window.scrollY-window.innerHeight*(1-.35*+(window.innerHeight<window.innerWidth))}};K([{left:{x:10,y:0},right:{x:13,y:0}},{left:{x:87,y:4},right:{x:90,y:1}},{left:{x:83,y:16},right:{x:87,y:10}},{left:{x:97,y:6},right:{x:94,y:7}},{left:{x:43,y:8},right:{x:50,y:9}},{left:{x:45,y:67},right:{x:57,y:49}},{left:{x:90,y:40},right:{x:85,y:38}},{left:{x:83,y:23},right:{x:72,y:14}},{left:{x:95,y:28},right:{x:98,y:25}},{left:{x:97,y:93},right:{x:99,y:99}},{left:{x:40,y:76},right:{x:30,y:75}},{left:{x:80,y:60},right:{x:95,y:50}},{left:{x:50,y:100},right:{x:75,y:100}}]).forEach(o=>{var f,r;const l=(f=e.svg.value)==null?void 0:f.createSVGPoint();l&&((r=e.line.value)==null||r.points.appendItem(l),b.to(l,{keyframes:o,scrollTrigger:i}))})},1e3)}),w(()=>{c=new IntersectionObserver(i=>{if(i.some(t=>t.isIntersecting&&t.target===e.resume.value)){n.value="resume";return}if(i.some(t=>t.isIntersecting&&t.target===e.blog.value)){n.value="blog";return}i.some(t=>t.isIntersecting&&t.target===e.portfolio.value)&&(n.value="portfolio")},{rootMargin:"-33% 0% -66% 0%",threshold:0}),e.portfolio.value&&c.observe(e.portfolio.value),e.blog.value&&c.observe(e.blog.value),e.resume.value&&c.observe(e.resume.value)}),E(()=>{c&&c.disconnect()}),{sectionsNodeRefs:e,currentSection:n}},Ce=()=>{const e={storyContainer:d(null),svg:d(null),line:d(null),linePlaceholder:d(null)};return w(()=>{setTimeout(()=>{var i;const c={scrub:1,start:()=>{var t,o;return(((o=(t=e.storyContainer)==null?void 0:t.value)==null?void 0:o.getBoundingClientRect().top)??0)+window.scrollY-window.innerHeight},end:()=>{var t,o;return(((o=(t=e.storyContainer)==null?void 0:t.value)==null?void 0:o.getBoundingClientRect().bottom)??0)+window.scrollY-window.innerHeight}},n=[{left:{x:2,y:0},right:{x:7,y:0}},{left:{x:3,y:10},right:{x:9,y:13}},{left:{x:1,y:20},right:{x:7,y:20}},{left:{x:2,y:30},right:{x:7,y:30}},{left:{x:0,y:36},right:{x:6,y:40}},{left:{x:3,y:47},right:{x:8,y:50}},{left:{x:1,y:64},right:{x:6,y:60}},{left:{x:4,y:70},right:{x:9,y:73}},{left:{x:2,y:80},right:{x:6,y:85}},{left:{x:3,y:92},right:{x:8,y:90}},{left:{x:0,y:100},right:{x:7,y:100}}];(i=we(n).at(-1))==null||i.forEach(t=>{var l,f;const o=(l=e.svg.value)==null?void 0:l.createSVGPoint();o&&(o.x=t.x,o.y=t.y,(f=e.linePlaceholder.value)==null||f.points.appendItem(o))}),K(n).forEach(t=>{var l,f;const o=(l=e.svg.value)==null?void 0:l.createSVGPoint();o&&((f=e.line.value)==null||f.points.appendItem(o),b.to(o,{keyframes:t,scrollTrigger:c}))})},1e3)}),{storyNodeRefs:e}},Pe=e=>e!=null&&e.attributes?null:e,k=e=>(ne("data-v-74011482"),e=e(),ie(),e),$e={key:0,class:"-mt-20"},Be={class:"sticky top-0"},Te={id:"home-intro-section"},Fe={class:"relative h-full max-w-7xl mx-auto grid md:grid-cols-2 items-center"},Re=k(()=>a("h1",null,"Sections",-1)),Ie={class:"w-full max-w-6xl mx-auto"},Ne={class:"section-description__text"},De=k(()=>a("div",{class:"pt-20"},null,-1)),Me=k(()=>a("h1",null,"Skills",-1)),Ae={class:"max-w-7xl mx-auto px-3"},He=k(()=>a("div",{style:{height:"20vh"}},null,-1)),Ye=k(()=>a("div",{class:"pt-20"},null,-1)),Oe=k(()=>a("h1",null,"Story",-1)),je={class:"max-w-7xl px-3 mx-auto -mb-10 sm:-mb-32"},Ke={class:"flex items-start justify-start"},Ve={class:"story-blocks__cards"},We=j({__name:"index",setup(e){const c=d("idle"),{introNodeRefs:n}=ke(),{sectionsNodeRefs:i,currentSection:t}=Se(),{storyNodeRefs:o}=Ce(),l=[{title:"Sections",emit:"action",attrs:{href:"#sections"}},{title:"Skills",emit:"profi",attrs:{href:"#skills"}},{title:"Story",emit:"idle",attrs:{href:"#story"}}],f=le(()=>t.value==="portfolio"?"fill-red-700":t.value==="blog"?"fill-cyan-700":t.value==="resume"?"fill-blue-700":"fill-green-700"),{data:r}=fe("homepage",async()=>{const _=S("/homepage/intro").findOne(),y=S("/homepage/sections").find(),R=S("/homepage/skills").find(),v=S("/homepage/story/intro").findOne(),$=S("/homepage/story/blocks").sort({date:-1}).find(),[B,I,x,N,D]=await Promise.all([_,y,R,v,$]);return{intro:B,sections:I,skills:x,story:{intro:N,blocks:D}}});return(_,y)=>{const R=Z,v=J,$=W,B=Q,I=de,x=ve,N=re,D=ae,L=ce,q=ue;return u(r)?(p(),h("div",$e,[g(R,{"og-title":"Homepage"}),a("section",{ref:s=>{u(n).section.value=s},style:{height:"200vh"}},[a("div",Be,[a("div",{ref:s=>{u(n).main.value=s},class:"relative w-screen max-w-full h-screen"},[a("div",{ref:s=>{u(n).bg.value=s},class:"absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"},null,512),g($,{ref:s=>{u(n).text.value=("componentFromNodeRef"in _?_.componentFromNodeRef:u(Pe))(s)},class:"absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]","shape-class":"intro-shape"},{default:m(()=>[g(v,{tag:"div",value:u(r).intro,class:"p-10 text-xl font-serif text-center"},null,8,["value"])]),_:1},512)],512),g(x,{dots:"","dots-style":{clipPath:"polygon(20% 100%, 100% 100%, 100% 0%)"},class:"bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-0 bg-green-900 bg-opacity-90"},{svg:m(()=>[(p(),h("svg",{ref:s=>{u(n).svg.value=s},height:"100%",width:"100%",class:"absolute top-0 w-full max-w-6xl h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"80 0 20 100",preserveAspectRatio:"xMaxYMax"},[a("polygon",{ref:s=>{u(n).line.value=s},class:"fill-white"},null,512)],512))]),default:m(()=>[a("div",Te,[a("div",Fe,[g(B,{pose:u(c),"shape-class":"fill-black",class:"absolute self-end h-full -ml-20 sm:ml-auto mt-20 transition-all"},null,8,["pose"]),g(I,{actions:l,side:"right",class:"absolute top-1/2 left-1/3 w-1/2 md:w-1/3 max-w-xs z-10 text-xl md:text-2xl","filter-class":"sharp-shadow ss-br-3 ss-neutral-50",onActionFocus:y[0]||(y[0]=s=>c.value=s)})])])]),_:1},8,["dots-style"])])],512),g(x,{id:"sections",tag:"section",class:"bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center","overlay-class":"backdrop-saturate-50 bg-neutral-900 bg-opacity-90"},{svg:m(()=>[(p(),h("svg",{ref:s=>{u(i).svg.value=s},height:"100%",width:"100%",class:"absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900",viewBox:"90 0 10 100",preserveAspectRatio:"xMaxYMax"},[a("polygon",{ref:s=>{u(i).line.value=s},class:P(["transition-colors",u(f)])},null,2)],512))]),default:m(()=>[Re,a("div",Ie,[(p(!0),h(T,null,F(u(r).sections,(s,M)=>(p(),h("div",{key:s._id,ref_for:!0,ref:A=>{M===0?u(i).portfolio.value=A:M===1?u(i).blog.value=A:M===2&&(u(i).resume.value=A)},class:"section-description"},[g(N,{mask:s.mask,color:"",class:"section-description__image"},null,8,["mask"]),a("div",Ne,[g(D,{to:s.link,text:s.title,class:"underline"},null,8,["to","text"]),g(v,{value:s},null,8,["value"])])]))),128))])]),_:1}),g(x,{id:"skills",tag:"section","overlay-class":"skills__bg-overlay"},{default:m(()=>[De,Me,a("div",Ae,[(p(!0),h(T,null,F(u(r).skills,s=>(p(),C(v,{key:s._id,tag:"div",class:"skills-group",value:s},null,8,["value"]))),128))]),He]),_:1}),g(x,{id:"story",tag:"section","overlay-class":"story__bg-overlay"},{default:m(()=>[Ye,Oe,a("div",je,[a("div",Ke,[g(B,{pose:"profi",class:"character"}),g($,{class:"bubble-1","filter-class":"sharp-shadow ss-neutral-50 ss-r-1 ss-b-1","shape-class":"bubble-1__shape"},{default:m(()=>[g(v,{value:u(r).story.intro,tag:"div",class:"bubble-1__text"},null,8,["value"])]),_:1})])]),a("div",{ref:s=>{u(o).storyContainer.value=s},class:"story-blocks"},[(p(),h("svg",{ref:s=>{u(o).svg.value=s},height:"100%",width:"100%",class:"story-progress",viewBox:"0 0 10 100"},[a("polygon",{ref:s=>{u(o).linePlaceholder.value=s},class:"fill-black"},null,512),a("polygon",{ref:s=>{u(o).line.value=s},class:"fill-white"},null,512)],512)),a("div",Ve,[(p(!0),h(T,null,F(u(r).story.blocks,s=>(p(),C(q,{key:s._id,mode:"homepage-story",class:"my-20"},{default:m(()=>[g(L,null,{extra:m(()=>[Y(O(("dateToMonthYear"in _?_.dateToMonthYear:u(ge))(s.date)),1)]),default:m(()=>[Y(" "+O(s.title),1)]),_:2},1024),g(v,{value:s},null,8,["value"])]),_:2},1024))),128))])],512)]),_:1})])):U("",!0)}}});const yt=G(We,[["__scopeId","data-v-74011482"]]);export{yt as default};