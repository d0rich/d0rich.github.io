import{u as h,A as g,W as y,X as w,Y as C,H as v,a as D,Z as S,S as H,K as r}from"./entry.ec7bb338.js";import _ from"./ContentRenderer.e090e7c4.js";import q from"./ContentQuery.1bf690ca.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./ContentRendererMarkdown.de0785af.js";import"./preview.3f4c28aa.js";import"./asyncData.53f853e7.js";import"./query.a4ac4351.js";import"./utils.4cd36a7c.js";const a=(u,e=y())=>{const f=h(u),p=v();g(()=>h(u),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const s=n.title||(t==null?void 0:t.title);s&&(n.title=s),p.public.content.host;const c=(n==null?void 0:n.description)||(t==null?void 0:t.description);c&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:c}),n!=null&&n.image||(t==null||t.image),w(()=>C(n))},{immediate:!0})},T=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=S(),{tag:f,excerpt:p,path:m,query:t,head:n}=u,s={...t||{},path:m||(t==null?void 0:t.path)||H(y().path),find:"one"},c=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(q,s,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:p,...this.$attrs})}:({data:i})=>(n&&a(i),r(_,{value:i,excerpt:p,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):c("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};