import{_ as x}from"./nuxt-link.f6fbd9f8.js";import{a as d,ah as f,b as a,o as e,c as B,w as k,e as s,h as y,t as b,u as r,F as C,s as h}from"./entry.938a03d5.js";const D=["textContent"],S={name:"DBigBangButton"},L=d({...S,props:{text:{type:String,required:!0},tag:{type:String,default:"button"},to:{type:String,default:void 0}},emits:["click"],setup(n,{emit:c}){const t=n,i=x,{text:u}=f(),l=a(()=>t.to?i:t.tag),p=a(()=>t.text.split(""));function m(o){u.value=t.text,c("click",o)}return(o,v)=>(e(),B(h(r(l)),{to:n.to,class:"big-bang-button",onClick:m},{default:k(()=>[(e(!0),s(C,null,y(r(p),(_,g)=>(e(),s("span",{key:g,textContent:b(_)},null,8,D))),128))]),_:1},8,["to"]))}});export{L as _};