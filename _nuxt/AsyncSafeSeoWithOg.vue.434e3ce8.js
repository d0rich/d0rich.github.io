import{d as p,z as c,b as o,B as a,w as d,A as g,t as S,f as l}from"./entry.8b155df3.js";const m=i=>Object.fromEntries(Object.entries(i).filter(([,t])=>t!==void 0)),u=(i,t)=>(r,e)=>(c(()=>i({...m(r),...e.attrs},e)),()=>{var n,s;return t?(s=(n=e.slots).default)==null?void 0:s.call(n):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},y=p({name:"Title",inheritAttrs:!1,setup:u((i,{slots:t})=>{var r,e,n;return{title:((n=(e=(r=t.default)==null?void 0:r.call(t))==null?void 0:e[0])==null?void 0:n.children)||null}})}),h=p({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:u(i=>{const t={...i};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),v=p({name:"Head",inheritAttrs:!1,setup:(i,t)=>()=>{var r,e;return(e=(r=t.slots).default)==null?void 0:e.call(r)}}),b=p({__name:"AsyncSafeSeoWithOg",props:{title:{},ogTitle:{},description:{},image:{}},setup(i){return(t,r)=>{const e=y,n=h,s=v;return o(),a(s,null,{default:d(()=>[t.title?(o(),a(e,{key:0},{default:d(()=>[g(S(t.title),1)]),_:1})):l("",!0),t.title||t.ogTitle?(o(),a(n,{key:1,property:"og:title",content:t.ogTitle||t.title},null,8,["content"])):l("",!0),t.title?(o(),a(n,{key:2,property:"twitter:title",content:t.title},null,8,["content"])):l("",!0),t.description?(o(),a(n,{key:3,name:"description",content:t.description},null,8,["content"])):l("",!0),t.description?(o(),a(n,{key:4,property:"og:description",content:t.description},null,8,["content"])):l("",!0),t.description?(o(),a(n,{key:5,property:"twitter:description",content:t.description},null,8,["content"])):l("",!0)]),_:1})}}});export{b as _};
