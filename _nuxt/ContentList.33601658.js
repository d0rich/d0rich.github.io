import n from"./ContentQuery.fe6747ea.js";import{a as c,Z as l,M as u}from"./entry.d0fa8d7e.js";import"./asyncData.3159d74a.js";import"./query.ea9e0d1f.js";import"./utils.9d0e11ed.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const p=(r,t)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),v=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:a}=r,m={...a||{},path:f||(a==null?void 0:a.path)||"/"};return u(n,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>p("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):p("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):p("not-found",e==null?void 0:e.data)}})}});export{v as default};
