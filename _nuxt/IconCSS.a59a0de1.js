import{d as p,ak as m,s as d,D as o,b as x,c as S,H as f}from"./entry.8b155df3.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const z=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const t=u;m(s=>({fdac8218:_.value}));const e=d();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[t.name]||t.name}),_=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var n,r,i;if(!t.size&&typeof((n=e.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const s=t.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,n)=>(x(),S("span",{style:f({width:a.value,height:a.value})},null,4))}});const g=v(z,[["__scopeId","data-v-abe1e2b4"]]);export{g as default};
