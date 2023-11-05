import{C as d,V as w,m as y,aj as D,z as H,k as g,d as S,aa as b,a8 as j,a5 as c}from"./entry.8b155df3.js";import k from"./ContentRenderer.253cdbf2.js";import q from"./ContentQuery.ef57b272.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./ContentRendererMarkdown.vue.86906e95.js";import"./preview.f8eb3a52.js";import"./asyncData.efe7da25.js";import"./ready.9af0e460.js";import"./query.16443e70.js";const a=(p,s=y())=>{const e=d(p),m=g();w(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),D(()=>H(t))},{immediate:!0})},x=S({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=b(),{tag:m,excerpt:f,path:n,query:t,head:r}=p,u=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||j(y().path),find:"one"},C=(o,i)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return c(q,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return u&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:f,...this.$attrs})}:({data:o})=>(u&&a(o),c(k,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),J=x;export{J as default};