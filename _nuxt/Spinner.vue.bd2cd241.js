import{_ as l}from"./_plugin-vue_export-helper.c27b6911.js";import{o as t,e as i,a as d,f as n,C as c,J as p}from"./entry.d0fa8d7e.js";const f={name:"DAnimationLetterD"},m={d:"M200.242,139.244l137.207,-0c66.136,-0 112.859,17.192 140.169,51.576c27.31,34.384 33.562,84.973 18.755,151.767c-22.045,98.711 -85.878,148.066 -191.498,148.066l-179.16,-0l74.527,-351.409Zm184.588,179.159c12.175,-57.581 -7.732,-86.372 -59.72,-86.372l-33.068,0l-35.042,165.834l44.42,0c23.69,0 42.034,-6.169 55.031,-18.508c12.997,-12.339 22.457,-32.657 28.379,-60.954Z"};function _(r,e,a,o,s,h){return t(),i("path",m)}const u=l(f,[["render",_]]),g={name:"DAnimationSpinner"},x=d({...g,props:{spinPeriod:{type:Number,default:10},bladeWigglePeriod:{type:Number,default:5}},setup(r){const e="315 315";return(a,o)=>{const s=u;return t(),i("svg",{class:"spinner",viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",style:p({"--d-spinner-spin-period":r.spinPeriod+"s","--d-spinner-blade-wiggle-period":r.bladeWigglePeriod+"s"})},[n("defs",null,[c(s,{id:"d-letter"}),n("use",{id:"d-spinner-blade",href:"#d-letter",class:"d-animation-spinner__blade","transform-origin":e}),n("g",{id:"spinner",class:"d-animation-spinner__spinner","transform-origin":e},[n("use",{href:"#d-spinner-blade",transform:"rotate(0)","transform-origin":e}),n("use",{href:"#d-spinner-blade",transform:"rotate(120)","transform-origin":e}),n("use",{href:"#d-spinner-blade",transform:"rotate(240)","transform-origin":e})])]),n("use",{href:"#spinner",transform:"translate( -20 20 )",class:"fill-black","transform-origin":e}),n("use",{href:"#spinner",class:"fill-white","transform-origin":e})],4)}}});export{x as _,u as a};
