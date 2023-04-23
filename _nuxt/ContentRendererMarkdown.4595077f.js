import{a as Z,H as J,a0 as M,M as T,m as E,a1 as G,a2 as S,W as Q,a3 as nn}from"./entry.d0fa8d7e.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";class x{constructor(e,o,t){this.property=e,this.normal=o,t&&(this.space=t)}}x.prototype.property={};x.prototype.normal={};x.prototype.space=null;function U(n,e){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new x(o,t,e)}function P(n){return n.toLowerCase()}class m{constructor(e,o){this.property=e,this.attribute=o}}m.prototype.space=null;m.prototype.boolean=!1;m.prototype.booleanish=!1;m.prototype.overloadedBoolean=!1;m.prototype.number=!1;m.prototype.commaSeparated=!1;m.prototype.spaceSeparated=!1;m.prototype.commaOrSpaceSeparated=!1;m.prototype.mustUseProperty=!1;m.prototype.defined=!1;let ln=0;const u=v(),d=v(),z=v(),l=v(),c=v(),b=v(),f=v();function v(){return 2**++ln}const O=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:d,commaOrSpaceSeparated:f,commaSeparated:b,number:l,overloadedBoolean:z,spaceSeparated:c},Symbol.toStringTag,{value:"Module"})),w=Object.keys(O);class L extends m{constructor(e,o,t,r){let a=-1;if(super(e,o),R(this,"space",r),typeof t=="number")for(;++a<w.length;){const i=w[a];R(this,w[a],(t&O[i])===O[i])}}}L.prototype.defined=!0;function R(n,e,o){o&&(n[e]=o)}const en={}.hasOwnProperty;function k(n){const e={},o={};let t;for(t in n.properties)if(en.call(n.properties,t)){const r=n.properties[t],a=new L(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,o[P(t)]=t,o[P(a.attribute)]=t}return new x(e,o,n.space)}const B=k({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),I=k({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function j(n,e){return e in n?n[e]:e}function H(n,e){return j(n,e.toLowerCase())}const _=k({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:H,properties:{xmlns:null,xmlnsXLink:null}}),F=k({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:d,ariaAutoComplete:null,ariaBusy:d,ariaChecked:d,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:c,ariaCurrent:null,ariaDescribedBy:c,ariaDetails:null,ariaDisabled:d,ariaDropEffect:c,ariaErrorMessage:null,ariaExpanded:d,ariaFlowTo:c,ariaGrabbed:d,ariaHasPopup:null,ariaHidden:d,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:c,ariaLevel:l,ariaLive:null,ariaModal:d,ariaMultiLine:d,ariaMultiSelectable:d,ariaOrientation:null,ariaOwns:c,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:d,ariaReadOnly:d,ariaRelevant:null,ariaRequired:d,ariaRoleDescription:c,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:d,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),on=k({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:H,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:b,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:c,autoFocus:u,autoPlay:u,capture:u,charSet:null,checked:u,cite:null,className:c,cols:l,colSpan:null,content:null,contentEditable:d,controls:u,controlsList:c,coords:l|b,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:z,draggable:d,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:c,height:l,hidden:u,high:l,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:c,itemRef:c,itemScope:u,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:l,pattern:null,ping:c,placeholder:null,playsInline:u,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:c,required:u,reversed:u,rows:l,rowSpan:l,sandbox:c,scope:null,scoped:u,seamless:u,selected:u,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:d,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:d,width:l,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:d,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:l,security:null,unselectable:null}}),tn=k({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:j,properties:{about:f,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:c,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:b,g2:b,glyphName:b,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:f,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:c,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:f,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:f,rev:f,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:f,requiredFeatures:f,requiredFonts:f,requiredFormats:f,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:f,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:f,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:f,to:null,transform:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),rn=/^data[-\w.:]+$/i,A=/-[a-z]/g,an=/[A-Z]/g;function un(n,e){const o=P(e);let t=e,r=m;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&rn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(A,cn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!A.test(a)){let i=a.replace(an,sn);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}r=L}return new r(t,e)}function sn(n){return"-"+n.toLowerCase()}function cn(n){return n.charAt(1).toUpperCase()}const pn=U([I,B,_,F,on],"html");U([I,B,_,F,tn],"svg");const N=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],D="default",V=/^@|^v-on:/,W=/^:|^v-bind:/,q=/^v-model/,dn=["select","textarea","input"],On=Z({name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},async setup(n){var o;const{content:{tags:e={}}}=J().public;return await Cn(n.value.body,{tags:{...e,...M(((o=n.value)==null?void 0:o._components)||{}),...n.components}}),{tags:e}},render(n){var p;const{tags:e,tag:o,value:t,components:r}=n;if(!t)return null;let a=t.body||t;n.excerpt&&t.excerpt&&(a=t.excerpt);const i={...t,tags:{...e,...M((t==null?void 0:t._components)||{}),...r}};let s=i.component||o;return typeof i.component=="object"&&(s=i.component.name),s=$(s),T(s,{...(p=i.component)==null?void 0:p.props,...this.$attrs},X(a,T,i,i))}});function gn(n,e,o,t={}){var p;if(n.type==="text")return e(S,n.value);if(n.tag==="script")return e(S,K(n));const r=n.tag,a=typeof((p=n.props)==null?void 0:p.__ignoreMap)>"u"&&o.tags[r]||r;if(n.tag==="binding")return hn(n,e,o,t);const i=$(a);typeof i=="object"&&(i.tag=r);const s=fn(n,o);return e(i,s,X(n,e,o,{...t,...s}))}function K(n){var e,o;return n.type==="text"?n.value:(e=n.children)!=null&&e.length?`<${n.tag}>${((o=n.children)==null?void 0:o.map(K).join(""))||""}</${n.tag}>`:`<${n.tag}>`}function hn(n,e,o,t={}){var p;const r={...t,$route:()=>Q(),$document:o,$doc:o},a=/\.|\[(\d+)\]/,s=((p=n.props)==null?void 0:p.value.trim().split(a).filter(Boolean)).reduce((g,y)=>y in g?typeof g[y]=="function"?g[y]():g[y]:{},r);return e(S,s)}function X(n,e,o,t){const a=(n.children||[]).reduce((s,p)=>{if(!Sn(p))return s[D].push(p),s;const g=kn(p);return s[g]=s[g]||[],s[g].push(...p.children||[]),s},{[D]:[]});return Object.entries(a).reduce((s,[p,g])=>(g.length&&(s[p]=()=>{const y=g.map(h=>gn(h,e,o,t));return xn(y)}),s),{})}function fn(n,e){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(q.test(a)&&!dn.includes(o))return mn(a,i,r,e);if(a==="v-bind")return yn(a,i,r,e);if(V.test(a))return vn(a,i,r,e);if(W.test(a))return bn(a,i,r,e);const{attribute:s}=un(pn,a);return Array.isArray(i)&&i.every(p=>typeof p=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function mn(n,e,o,t){const r=h=>+h,a=h=>h.trim(),i=h=>h,s=n.replace(q,"").split(".").filter(h=>h).reduce((h,Y)=>(h[Y]=!0,h),{}),p="value",g=s.lazy?"change":"input",y=s.number?r:s.trim?a:i;return o[p]=C(e,t),o.on=o.on||{},o.on[g]=h=>t[e]=y(h),o}function yn(n,e,o,t){const r=C(e,t);return o=Object.assign(o,r),o}function vn(n,e,o,t){return n=n.replace(V,""),o.on=o.on||{},o.on[n]=()=>C(e,t),o}function bn(n,e,o,t){return n=n.replace(W,""),o[n]=C(e,t),o}const $=n=>{if(!N.includes(n)&&!(n!=null&&n.render)){const e=E(G(n),!1);if(typeof e=="object")return e}return n};function C(n,e){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof o>"u"?nn(n):o}function kn(n){let e="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){e=o.split(/[:#]/,2)[1];break}return e||D}function Sn(n){return n.tag==="template"}function xn(n){const e=[];for(const o of n){const t=e[e.length-1];o.type===S&&(t==null?void 0:t.type)===S?t.children=t.children+o.children:e.push(o)}return e}async function Cn(n,e){const o=Array.from(new Set(t(n,e)));await Promise.all(o.map(async r=>{if(r!=null&&r.render)return;const a=E(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){var p;if(r.type==="text"||r.tag==="binding")return[];const i=typeof((p=r.props)==null?void 0:p.__ignoreMap)>"u"&&a.tags[r.tag]||r.tag,s=[];r.type!=="root"&&!N.includes(i)&&s.push(i);for(const g of r.children||[])s.push(...t(g,a));return s}}export{On as default};
