import{a as _t,z as nt}from"./entry.b26fc087.js";const wt=Object.freeze({left:0,top:0,width:16,height:16}),xt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),G=Object.freeze({...wt,...xt});Object.freeze({...G,body:"",hidden:!1});({...wt});const It=Object.freeze({width:null,height:null}),St=Object.freeze({...It,...xt});function Dt(t,e){const n={...t};for(const r in e){const o=e[r],s=typeof o;r in It?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Nt=/[\s,]+/;function Rt(t,e){e.split(Nt).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Bt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}const Qt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,qt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ot(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Qt);if(r===null||!r.length)return t;const o=[];let s=r.shift(),i=qt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const Ht=t=>t==="unset"||t==="undefined"||t==="none";function Ut(t,e){const n={...G,...t},r={...St,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(w=>{const p=[],a=w.hFlip,I=w.vFlip;let y=w.rotate;a?I?y+=2:(p.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),p.push("scale(-1 1)"),o.top=o.left=0):I&&(p.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),p.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,p.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:p.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,p.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),p.length&&(s='<g transform="'+p.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,f=o.height;let u,d;i===null?(d=c===null?"1em":c==="auto"?f:c,u=ot(d,l/f)):(u=i==="auto"?l:i,d=c===null?ot(u,f/l):c==="auto"?f:c);const g={},m=(w,p)=>{Ht(p)||(g[w]=p.toString())};return m("width",u),m("height",d),g.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:g,body:s}}const Vt=/\sid="(\S+)"/g,Kt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Gt=0;function Jt(t,e=Kt){const n=[];let r;for(;r=Vt.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof e=="function"?e(s):e+(Gt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}function Wt(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Xt(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Yt(t){return'url("data:image/svg+xml,'+Xt(t)+'")'}const rt={...St,inline:!1},Zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},te={display:"inline-block"},B={backgroundColor:"currentColor"},vt={backgroundColor:"transparent"},st={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},it={webkitMask:B,mask:B,background:vt};for(const t in it){const e=it[t];for(const n in st)e[t+n]=st[n]}const F={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";F[t+"-flip"]=e,F[t.slice(0,1)+"-flip"]=e,F[t+"Flip"]=e});function ct(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const ee=(t,e)=>{const n=Dt(rt,e),r={...Zt},o=e.mode||"svg",s={},i=e.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let p in e){const a=e[p];if(a!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&Rt(n,a);break;case"color":s.color=a;break;case"rotate":typeof a=="string"?n[p]=Bt(a):typeof a=="number"&&(n[p]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete r["aria-hidden"];break;default:{const I=F[p];I?(a===!0||a==="true"||a===1)&&(n[I]=!0):rt[p]===void 0&&(r[p]=a)}}}const l=Ut(t,n),f=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,f);let p=0,a=e.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),r.innerHTML=Jt(l.body,a?()=>a+"ID"+p++:"iconifyVue"),nt("svg",r)}const{body:u,width:d,height:g}=t,m=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),w=Wt(u,{...f,width:d+"",height:g+""});return r.style={...s,"--svg":Yt(w),width:ct(f.width),height:ct(f.height),...te,...m?B:vt,...c},nt("span",r)},ne=Object.create(null),Be=_t({inheritAttrs:!1,render(){const t=this.$attrs,e=t.icon,n=typeof e=="string"?ne[e]:typeof e=="object"?e:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:ee({...G,...n},t)}}),j=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!M(f)?null:f}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return e&&!M(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return e&&!M(c,n)?null:c}return null},M=(t,e)=>t?!!((t.provider===""||t.provider.match(j))&&(e&&t.prefix===""||t.prefix.match(j))&&t.name.match(j)):!1,Ct=Object.freeze({left:0,top:0,width:16,height:16}),L=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),J=Object.freeze({...Ct,...L}),Q=Object.freeze({...J,body:"",hidden:!1});function oe(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function lt(t,e){const n=oe(t,e);for(const r in Q)r in L?r in t&&!(r in n)&&(n[r]=L[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function re(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function se(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let s={};function i(c){s=lt(r[c]||o[c],s)}return i(e),n.forEach(i),lt(t,s)}function kt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=re(t);for(const o in r){const s=r[o];s&&(e(o,se(t,o,s)),n.push(o))}return n}const ie={provider:"",aliases:{},not_found:{},...Ct};function D(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function jt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!D(t,ie))return null;const n=e.icons;for(const o in n){const s=n[o];if(!o.match(j)||typeof s.body!="string"||!D(s,Q))return null}const r=e.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(j)||typeof i!="string"||!n[i]&&!r[i]||!D(s,Q))return null}return e}const ft=Object.create(null);function ce(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function v(t,e){const n=ft[t]||(ft[t]=Object.create(null));return n[e]||(n[e]=ce(t,e))}function W(t,e){return jt(e)?kt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function le(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let T=!1;function Tt(t){return typeof t=="boolean"&&(T=t),T}function fe(t){const e=typeof t=="string"?$(t,!0,T):t;if(e){const n=v(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function ue(t,e){const n=$(t,!0,T);if(!n)return!1;const r=v(n.provider,n.prefix);return le(r,n.name,e)}function ae(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),T&&!e&&!t.prefix){let o=!1;return jt(t)&&(t.prefix="",kt(t,(s,i)=>{i&&ue(s,i)&&(o=!0)})),o}const n=t.prefix;if(!M({provider:e,prefix:n,name:"a"}))return!1;const r=v(e,n);return!!W(r,t)}const de=Object.freeze({width:null,height:null}),pe=Object.freeze({...de,...L});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const q=Object.create(null);function he(t,e){q[t]=e}function H(t){return q[t]||q[""]}function X(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Y=Object.create(null),k=["https://api.simplesvg.com","https://api.unisvg.com"],A=[];for(;k.length>0;)k.length===1||Math.random()>.5?A.push(k.shift()):A.push(k.pop());Y[""]=X({resources:["https://api.iconify.design"].concat(A)});function ge(t,e){const n=X(e);return n===null?!1:(Y[t]=n,!0)}function Z(t){return Y[t]}const me=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let ut=me();function ye(t,e){const n=Z(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function be(t){return t===404}const we=(t,e,n)=>{const r=[],o=ye(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function xe(t){if(typeof t=="string"){const e=Z(t);if(e)return e.path}return"/"}const Ie=(t,e,n)=>{if(!ut){n("abort",424);return}let r=xe(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;ut(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(be(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Se={prepare:we,send:Ie};function ve(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),f=l[i]||(l[i]=v(s,i));let u;c in f.icons?u=e.loaded:i===""||f.missing.has(c)?u=e.missing:u=e.pending;const d={provider:s,prefix:i,name:c};u.push(d)}),e}function Pt(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function Ce(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(t.icons[f])i.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))i.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Pt([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let ke=0;function je(t,e,n){const r=ke++,o=Pt.bind(null,n,r);if(!e.pending.length)return o;const s={id:r,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Te(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const s=typeof o=="string"?$(o,e,n):o;s&&r.push(s)}),r}var Pe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Oe(t,e,n,r){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let h=t.resources.slice(0);for(i=[];h.length>1;){const x=Math.floor(Math.random()*h.length);i.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}i=i.concat(h)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let l="pending",f=0,u,d=null,g=[],m=[];typeof r=="function"&&m.push(r);function w(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),w(),g.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),g=[]}function a(h,x){x&&(m=[]),typeof h=="function"&&m.push(h)}function I(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:g.length,subscribe:a,abort:p}}function y(){l="failed",m.forEach(h=>{h(void 0,u)})}function b(){g.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),g=[]}function zt(h,x,C){const O=x!=="success";switch(g=g.filter(S=>S!==h),l){case"pending":break;case"failed":if(O||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){u=C,y();return}if(O){u=C,g.length||(i.length?_():y());return}if(w(),b(),!t.random){const S=t.resources.indexOf(h.resource);S!==-1&&S!==t.index&&(t.index=S)}l="completed",m.forEach(S=>{S(C)})}function _(){if(l!=="pending")return;w();const h=i.shift();if(h===void 0){if(g.length){d=setTimeout(()=>{w(),l==="pending"&&(b(),y())},t.timeout);return}y();return}const x={status:"pending",resource:h,callback:(C,O)=>{zt(x,C,O)}};g.push(x),f++,d=setTimeout(_,t.rotate),n(h,e,x.callback)}return setTimeout(_),I}function Ot(t){const e={...Pe,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const u=Oe(e,c,l,(d,g)=>{r(),f&&f(d,g)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function at(){}const N=Object.create(null);function Ee(t){if(!N[t]){const e=Z(t);if(!e)return;const n=Ot(e),r={config:e,redundancy:n};N[t]=r}return N[t]}function Fe(t,e,n){let r,o;if(typeof t=="string"){const s=H(t);if(!s)return n(void 0,424),at;o=s.send;const i=Ee(t);i&&(r=i.redundancy)}else{const s=X(t);if(s){r=Ot(s);const i=t.resources?t.resources[0]:"",c=H(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),at):r.query(e,o,n)().abort}const dt="iconify2",P="iconify",Et=P+"-count",pt=P+"-version",Ft=36e5,Me=168;function U(t,e){try{return t.getItem(e)}catch{}}function tt(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ht(t,e){try{t.removeItem(e)}catch{}}function V(t,e){return tt(t,Et,e.toString())}function K(t){return parseInt(U(t,Et))||0}const z={local:!0,session:!0},Mt={local:new Set,session:new Set};let et=!1;function Ae(t){et=t}let E=typeof window>"u"?{}:window;function At(t){const e=t+"Storage";try{if(E&&E[e]&&typeof E[e].length=="number")return E[e]}catch{}z[t]=!1}function Lt(t,e){const n=At(t);if(!n)return;const r=U(n,pt);if(r!==dt){if(r){const c=K(n);for(let l=0;l<c;l++)ht(n,P+l.toString())}tt(n,pt,dt),V(n,0);return}const o=Math.floor(Date.now()/Ft)-Me,s=c=>{const l=P+c.toString(),f=U(n,l);if(typeof f=="string"){try{const u=JSON.parse(f);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}ht(n,l)}};let i=K(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,V(n,i)):Mt[t].add(c))}function $t(){if(!et){Ae(!0);for(const t in z)Lt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,s=v(r,o);if(!W(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Le(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in z)Lt(r,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function $e(t,e){et||$t();function n(r){let o;if(!z[r]||!(o=At(r)))return;const s=Mt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=K(o),!V(o,i+1))return;const c={cached:Math.floor(Date.now()/Ft),provider:t.provider,data:e};return tt(o,P+i.toString(),JSON.stringify(c))}e.lastModified&&!Le(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function gt(){}function ze(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Ce(t)}))}function _e(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=H(n)))return;s.prepare(n,r,o).forEach(c=>{Fe(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=W(t,l);if(!f.length)return;const u=t.pendingIcons;u&&f.forEach(d=>{u.delete(d)}),$e(t,l)}catch(f){console.error(f)}ze(t)})})}))}const De=(t,e)=>{const n=Te(t,!0,Tt()),r=ve(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,gt)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:f,prefix:u}=l;if(u===c&&f===i)return;i=f,c=u,s.push(v(f,u));const d=o[f]||(o[f]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:u,name:d}=l,g=v(f,u),m=g.pendingIcons||(g.pendingIcons=new Set);m.has(d)||(m.add(d),o[f][u].push(d))}),s.forEach(l=>{const{provider:f,prefix:u}=l;o[f][u].length&&_e(l,o[f][u])}),e?je(e,r,s):gt},Qe=t=>new Promise((e,n)=>{const r=typeof t=="string"?$(t,!0):t;if(!r){n(t);return}De([r||t],o=>{if(o.length&&r){const s=fe(r);if(s){e({...J,...s});return}}n(t)})});({...pe});const mt={backgroundColor:"currentColor"},Ne={backgroundColor:"transparent"},yt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},bt={webkitMask:mt,mask:mt,background:Ne};for(const t in bt){const e=bt[t];for(const n in yt)e[t+n]=yt[n]}const R={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";R[t+"-flip"]=e,R[t.slice(0,1)+"-flip"]=e,R[t+"Flip"]=e});Tt(!0);he("",Se);if(typeof document<"u"&&typeof window<"u"){$t();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ae(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;ge(n,o)||console.error(r)}catch{console.error(r)}}}}({...J});export{Be as I,Qe as l};