(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0805":function(t,e,n){"use strict";n("ab3a")},"0912":function(t,e,n){},"0937":function(t,e,n){},"0a62":function(t,e,n){"use strict";n("b4ed")},"13e7":function(t,e,n){"use strict";n("c878")},"15fd":function(t,e,n){},1871:function(t,e,n){},"1d6b":function(t,e,n){},"1f6d":function(t,e,n){t.exports=n.p+"img/bg2.19a6da0c.jpg"},"29c5":function(t,e,n){t.exports=n.p+"img/bg1.8b0b43fc.jpg"},"2e90":function(t,e,n){t.exports=n.p+"img/vuejs.4909b10c.svg"},"403f":function(t,e,n){"use strict";n("7bdb")},"42ff":function(t,e,n){t.exports=n.p+"img/nodejs.11f1518f.svg"},"50f8":function(t,e,n){"use strict";n("1871")},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("d3b7");var a=n("5530"),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"main-scroll"},[t.headerOn?n("Header"):n("BottomNavigation"),n("v-main",[n("transition",{attrs:{name:"glitch-transition",mode:"out-in"}},[n("router-view",{staticClass:"page pa-2",class:{"loading--glitch":t.onPageLoad}})],1)],1),n("Footer")],1)},o=[],r=(n("a1c9"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"header",attrs:{app:""}},[n("nav",{staticClass:"header-line"},[n("v-btn",{attrs:{"active-class":"nav-btn",text:"",to:t.navigation.blog.route}},[n("span",[t._v(t._s(t.navigation.blog.text.getText(t.lang)))]),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("v-btn",{attrs:{"active-class":"nav-btn",text:"",to:t.navigation.about.route}},[n("span",[t._v(t._s(t.navigation.about.text.getText(t.lang)))]),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("router-link",{staticClass:"btn-main",class:{"nav-btn":t.routeNow===t.navigation.home.route.name},attrs:{to:t.navigation.home.route}},[n("span",[t._v(t._s(t.navigation.home.text.getText(t.lang)))]),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("v-btn",{attrs:{"active-class":"nav-btn",text:"",to:t.navigation.portfolio.route}},[n("span",[t._v(t._s(t.navigation.portfolio.text.getText(t.lang)))]),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("LangSwitcher")],1),n("div",{staticClass:"header-bg"},[n("div",{staticClass:"square1",class:{active:t.squaresOn},style:{width:t.squareWidth+"px",height:t.squareWidth+"px"}}),n("div",{staticClass:"square2",class:{active:t.squaresOn},style:{width:5*t.squareWidth/6+"px",height:5*t.squareWidth/6+"px"}})])])}),c=[],l=n("d4ec"),u=n("bee2"),d=n("2f62");i["a"].use(d["a"]);var m=new d["a"].Store({state:{windowWidth:1e3,lang:"ru",apiUrl:"https://dorich-server.herokuapp.com/api",onPageLoad:!1},getters:{headerOn:function(t){return t.windowWidth>640}},mutations:{getWindowWidth:function(t,e){t.windowWidth=e},setLang:function(t,e){t.lang=e,localStorage.setItem("lang",e)},turnPageLoad:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.onPageLoad=e}},actions:{},modules:{}}),v=function(){function t(e,n){Object(l["a"])(this,t),this.ru=e,this.en=n}return Object(u["a"])(t,[{key:"getText",value:function(t){return"ru"===t?this.ru:this.en}},{key:"text",get:function(){return this.getText(m.state.lang)}}],[{key:"fromObj",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{ru:"",en:""};return new t(e.ru,e.en)}}]),t}(),p={about:{text:new v("Обо мне","About me"),route:{name:"About"}},blog:{text:new v("Блог","Blog"),route:{name:"Blog"}},home:{text:new v("Dorich","Dorich"),route:{name:"Home"}},portfolio:{text:new v("Портфолио","Portfolio"),route:{name:"Portfolio"}}},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-x":t.headerOn,"offset-y":!t.headerOn,bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-tooltip",{attrs:{disabled:!t.headerOn,bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[n("v-btn",t._g(t._b({class:{"lang-switcher":!t.headerOn},attrs:{icon:""}},"v-btn",i,!1),Object.assign({},s,a)),[n("v-icon",[t._v("mdi-earth")])],1)]}}],null,!0)},[n("span",[t._v(t._s(t.tooltip.getText(t.lang)))])])]}}])},[n("v-list",{attrs:{dense:""}},t._l(t.languages,(function(e,a){return n("v-list-item",{key:a,attrs:{link:""},on:{click:function(n){return t.setLang(e.short)}}},[n("v-list-item-action-text",{class:{active:e.short===t.lang}},[t._v(" "+t._s(e.name)),n("span",{class:{cursor:t.lang===e.short},staticStyle:{opacity:"0"}},[t._v("_")])])],1)})),1)],1)},f=[],b=[{name:"English",short:"en"},{name:"Русский",short:"ru"}],_={name:"LangSwitcher",data:function(){return{languages:b,tooltip:new v("Выбать язык","Choose language")}},computed:Object(a["a"])({},Object(d["b"])(["headerOn"])),methods:Object(a["a"])({},Object(d["c"])(["setLang"]))},g=_,w=(n("13e7"),n("2877")),x=n("6544"),k=n.n(x),y=n("8336"),C=n("132d"),j=n("8860"),O=n("da13"),S=n("5d23"),T=n("e449"),W=n("3a2f"),R=Object(w["a"])(g,h,f,!1,null,"0a2917fc",null),P=R.exports;k()(R,{VBtn:y["a"],VIcon:C["a"],VList:j["a"],VListItem:O["a"],VListItemActionText:S["a"],VMenu:T["a"],VTooltip:W["a"]});var B={name:"Header",components:{LangSwitcher:P},data:function(){return{squareWidth:100,squaresOn:!1,navigation:p}},methods:{onResize:function(){var t=7*window.innerWidth/8/5/Math.sqrt(2);this.squareWidth=t>100?100:t}},mounted:function(){this.squaresOn=!0}},E=B,N=(n("50f8"),n("40dc")),L=n("269a"),V=n.n(L),z=n("dc22"),A=Object(w["a"])(E,r,c,!1,null,"37d00373",null),I=A.exports;k()(A,{VAppBar:N["a"],VBtn:y["a"]}),V()(A,{Resize:z["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"border-light--accent footer"},[n("div",{staticStyle:{"max-width":"1100px",margin:"auto"}},[n("div",{staticClass:"footer__block--main"},[n("nav",{staticClass:"mb-3"},[n("div",[t._v(t._s(t.navigation.title.text)+":")]),n("ul",t._l(t.navigation.routes,(function(t,e){return n("FooterRoute",{key:e,attrs:{route:t}})})),1)]),n("div",[n("div",[t._v(t._s(t.connection.title.text)+":")]),n("div",[n("v-icon",[t._v("mdi-email")]),t._v(" d.orich@yandex.com")],1),t._l(t.connection.socials,(function(e){return n("v-btn",{key:e.href,attrs:{icon:"",target:"_blank",href:e.href}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2)]),n("div",{staticClass:"footer__block--bottom"},[n("span",[t._v("© 2021 "+t._s(t.dorich.text))])])])])},$=[],D=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{key:new v,value:new v};Object(l["a"])(this,t),this.key=e.key,this.value=e.value},M=n("b85c"),H=n("ade3"),F=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;Object(l["a"])(this,t),Object(H["a"])(this,"fields",[]),this.name=n;var a,i=Object(M["a"])(e);try{for(i.s();!(a=i.n()).done;){var s=a.value;this.addField(s)}}catch(o){i.e(o)}finally{i.f()}}return Object(u["a"])(t,[{key:"addField",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new D;this.fields.push(t)}}]),t}(),J=(n("4160"),n("159b"),n("9911"),{title:new v,link:"",icon:""}),U=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;Object(l["a"])(this,t),this.title=v.fromObj(e.title),this.link=e.link,this.icon=e.icon},Y={title:new v("",""),skills:[""]},Q=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;Object(l["a"])(this,t),this.title=v.fromObj(e.title),this.skills=e.skills},G=(n("a4d3"),n("e01a"),function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:new v,place:new v,period:{begin:new v,end:new v},description:new v};Object(l["a"])(this,t),this.title=v.fromObj(e.title),this.place=v.fromObj(e.place),this.period={begin:v.fromObj(e.period.begin),end:v.fromObj(e.period.end)},this.description=v.fromObj(e.description)}),K=(n("99af"),n("96cf"),n("1da1")),X=n("bc3a"),Z=n.n(X),tt=n("6924"),et=n.n(tt),nt={src:et.a,alt:new v,path:""},at=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt;Object(l["a"])(this,t),this.alt=v.fromObj(e.alt),this.path=e.path,this.src=e.src}return Object(u["a"])(t,[{key:"getSrc",value:function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.a.get("".concat(m.state.apiUrl,"/dbx/files/get/link?path=").concat(this.path));case 2:this.src=t.sent.data;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),it=new G({title:new v("Нет записей","No notes"),place:new v,period:{begin:new v("Скоро","Soon"),end:new v("Немного терпения","A little patience")},description:new v("В ближайшее время тут появится запись.","The first note will appear there vey soon.")}),st={photo:new at,header:new v,intro:new v,phone:new v,email:new v,address:new v,social:[new U],skills:[new Q],experience:[new G],education:[new G]},ot=function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st;Object(l["a"])(this,t),this.photo=new at(n.photo),this.header=v.fromObj(n.header),this.intro=v.fromObj(n.intro),this.phone=v.fromObj(n.phone),this.email=v.fromObj(n.email),this.address=v.fromObj(n.address),this.social=[],n.social.forEach((function(t){e.social.push(new U(t))})),this.skills=[],n.skills.forEach((function(t){e.skills.push(new Q(t))})),this.experience=[],n.experience.forEach((function(t){e.experience.push(new G(t))})),this.education=[],n.education.forEach((function(t){e.education.push(new G(t))})),0===this.experience.length&&this.experience.push(it),0===this.education.length&&this.education.push(it)},rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("router-link",{staticClass:"link",attrs:{to:t.route.route}},[t._v(t._s(t.route.title.text))]),t.route.children?n("ul",t._l(t.route.children,(function(t,e){return n("footer-route",{key:e,attrs:{route:t}})})),1):t._e()],1)},ct=[],lt={name:"FooterRoute",props:["route"]},ut=lt,dt=Object(w["a"])(ut,rt,ct,!1,null,"421f84be",null),mt=dt.exports,vt={name:"Footer",components:{FooterRoute:mt},data:function(){return{dorich:new v("Свободный программист Dorich","Free programmer Dorich"),navigation:{title:new v("Навигация","Navigation"),routes:[{title:new v("Главная","Home"),route:{name:"Home"}},{title:new v("Обо мне","About me"),route:{name:"About"},children:[{title:new v("Резюме","Resume"),route:{name:"Resume"},children:[]}]},{title:new v("Портфолио","Portfolio"),route:{name:"Portfolio"}},{title:new v("Блог","Blog"),route:{name:"Blog"}}]},connection:{title:new v("Связаться со мной","Connect with me"),socials:[{href:"https://t.me/d0rich",icon:"mdi-telegram",text:"vk"},{href:"https://vk.com/d0rich",icon:"mdi-vk",text:"vk"},{href:"https://github.com/d0rich",icon:"mdi-github",text:"github"}]}}}},pt=vt,ht=(n("0805"),Object(w["a"])(pt,q,$,!1,null,"6cfd6e7a",null)),ft=ht.exports;k()(ht,{VBtn:y["a"],VIcon:C["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("LangSwitcher"),n("v-bottom-navigation",{staticClass:"bottom-nav",attrs:{color:"primary lighten-1"}},[n("v-btn",{attrs:{"active-class":"nav-btn",to:t.navigation.blog.route}},[n("span",[t._v(" "+t._s(t.navigation.blog.text.getText(t.lang))),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("v-icon",[t._v("mdi-message")])],1),n("v-btn",{attrs:{"active-class":"nav-btn",to:t.navigation.about.route}},[n("span",[t._v(" "+t._s(t.navigation.about.text.getText(t.lang))),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("v-icon",[t._v("mdi-account")])],1),n("v-btn",{attrs:{"active-class":"nav-btn",exact:"",to:t.navigation.home.route}},[n("span",[t._v(" "+t._s(t.navigation.home.text.getText(t.lang))),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("v-icon",[t._v("mdi-console-line")])],1),n("v-btn",{attrs:{"active-class":"nav-btn",to:t.navigation.portfolio.route}},[n("span",[t._v(" "+t._s(t.navigation.portfolio.text.getText(t.lang))),n("span",{staticClass:"cursor",staticStyle:{opacity:"0"}},[t._v("_")])]),n("v-icon",[t._v("mdi-file-presentation-box")])],1)],1)],1)},_t=[],gt={name:"BottomNavigation",components:{LangSwitcher:P},data:function(){return{navigation:p}}},wt=gt,xt=(n("81ab"),n("b81c")),kt=Object(w["a"])(wt,bt,_t,!1,null,"410229bd",null),yt=kt.exports;k()(kt,{VBottomNavigation:xt["a"],VBtn:y["a"],VIcon:C["a"]});var Ct={name:"App",components:{Header:I,BottomNavigation:yt,Footer:ft},data:function(){return{}},computed:Object(a["a"])({},Object(d["b"])(["headerOn"])),methods:Object(a["a"])(Object(a["a"])({},Object(d["c"])(["getWindowWidth","setLang"])),{},{onResize:function(){this.getWindowWidth(window.innerWidth)}}),beforeMount:function(){console.log(this.$vuetify.theme.themes.dark),this.setLang(localStorage.getItem("lang")||"en")},metaInfo:function(){return{title:"Default Title",titleTemplate:"%s | Dorich",htmlAttrs:{lang:this.lang}}}},jt=Ct,Ot=(n("034f"),n("7496")),St=n("f6c4"),Tt=Object(w["a"])(jt,s,o,!1,null,null,null),Wt=Tt.exports;k()(Tt,{VApp:Ot["a"],VMain:St["a"]}),V()(Tt,{Resize:z["a"]});var Rt=n("8c4f"),Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("EnterBlock2",{staticClass:"text-center"},[n("span",{staticClass:"mx-3",staticStyle:{"font-size":"1.7rem"}},[t._v(t._s(t.data.block1.p1.t1.text))]),n("span",{staticClass:"ma-3",staticStyle:{"font-size":"1.7rem"}},[t._v(t._s(t.data.block1.p1.t2.text)+" "),n("span",{staticStyle:{"font-size":"2.3rem","font-weight":"bold"}},[t._v(t._s(t.data.block1.p1.t3.text)),n("span",{staticClass:"cursor"},[t._v("_")])])]),n("span",{staticClass:"mx-3",staticStyle:{"font-size":"1.7rem"}},[t._v(t._s(t.data.block1.p1.t4.text))])]),n("section",{staticClass:"block2 mt-16"},[n("v-lazy",{attrs:{options:{threshold:.7},"min-width":"300","min-height":"200px",transition:"glitch-transition"}},[n("Terminal",{attrs:{reveal:"","enter-word":"hello world"},on:{revealed:function(e){t.show.block2info=!0}}},[n("h1",{staticClass:"align-self-start cursor-on-hover"},[t._v(t._s(t.data.block2.terminal.h1.text)),n("span",{staticClass:"cursor"},[t._v("_")])]),n("p",{staticClass:"align-self-start cursor-on-hover"},[t._v(" "+t._s(t.data.block2.terminal.t1.text)+" "),n("router-link",{staticClass:"link",attrs:{to:{name:"Portfolio"}}},[t._v(t._s(t.data.block2.terminal.t2.text))]),t._v(t._s(t.data.block2.terminal.t3.text)+" "),n("router-link",{staticClass:"link",attrs:{to:{name:"About"}}},[t._v(t._s(t.data.block2.terminal.t4.text))]),t._v(t._s(t.data.block2.terminal.t5.text)+" "),n("router-link",{staticClass:"link",attrs:{to:{name:"Blog"}}},[t._v(t._s(t.data.block2.terminal.t6.text))]),t._v(t._s(t.data.block2.terminal.t7.text)),n("span",{staticClass:"cursor"},[t._v("_")])],1)])],1),n("v-lazy",{attrs:{"min-width":"300","min-height":"500px",options:{threshold:1},transition:"glitch-transition"},model:{value:t.show.block2info,callback:function(e){t.$set(t.show,"block2info",e)},expression:"show.block2info"}},[n("div",{staticClass:"block2__info"},[n("div",{staticClass:"info-row"},[n("img",{staticClass:"border-light--accent my-photo",attrs:{src:t.data.block2.my_photo,alt:"d0rich"}}),n("div",{staticClass:"block2__info__text"},[n("h1",[t._v(t._s(t.data.block2.h1.text))]),t._l(t.data.block2.p1.text.split("\n"),(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),n("v-btn",{attrs:{to:{name:"About"},color:"primary"}},[t._v(t._s(t.btns.myInfo.text))])],2)]),n("div",{staticClass:"js-objects"},t._l(t.data.block2.objects,(function(t,e){return n("JSObjectWindow",{key:e,staticClass:"mb-3 mx-3",attrs:{object:t}})})),1)])])],1)],1)},Bt=[],Et=n("f3f0"),Nt=n.n(Et),Lt={block1:{p1:{t1:new v("Привет, меня зовут Николай Дорофеев.","Hello, my name is Nikolay Dorofeev."),t2:new v("Я ","I am "),t3:new v("JavaScript разработчик","JavaScript developer"),t4:new v("И это мой личный сайт.","And this is my own site.")}},block2:{terminal:{h1:new v("Привет мир!","Hello world!"),t1:new v("На данном сайте вы можете ознакомиться с моим ","Here you can see my "),t2:new v("портфолио","portfolio"),t3:new v(", узнать побольше информации ",", learn more information "),t4:new v("обо мне","about me"),t5:new v(" и моих умениях, почитать мой "," and my skills, read my "),t6:new v("блог","blog"),t7:new v(", может увидите что-то интересное :).",", may be you will find something interesting :).")},my_photo:Nt.a,h1:new v("Коротко обо мне","Little about me"),p1:new v('Молодой, талантливый, энергичный. \nМеня зовут Николай Дорофеев, я JavaScript разработчик, сейчас обучаюсь на 3-ем курсе ТПУ по направлению "Информационные системы и технологии в бизнесе и промышленности".\nПолученных знаний и собственного опыта работы с вёрсткой сайтов, базами данных, серверами уже вполне достаточно, чтобы создавать специально для ВАС так называемые Single Page Application (SPA) - сайты, которые не требуют загрузки отдельных страниц.\nЭтот подход позволяет получить новый опыт взаимодействия с продуктом без лишних задержек.','Young, talented, energetic. \nMy name is Nikolay Dorofeev, I am a JavaScript developer, now I am a 3rd year student at TPU in the direction of "Information systems and technologies in business and industry".\nThe acquired knowledge and personal experience of working with site layout, databases, and servers is already quite enough to create so-called Single Page Application (SPA) specially for YOU - sites that do not require loading separate pages.\nThis approach allows you to get a new experience with the product without unnecessary delays.'),objects:[new F([new D({key:new v("Имя","Name"),value:new v("Николай","Nikolay")}),new D({key:new v("Фамилия","Surname"),value:new v("Дорофеев","Dorofeev")}),new D({key:new v("Возраст","Age"),value:new v("20","20")}),new D({key:new v("Статус","Status"),value:new v("Студент","Student")})],new v("Личность","Person")),new F([new D({key:new v("Никнейм","Nickname"),value:new v("d0rich","d0rich")}),new D({key:new v("Фронтенд","Frontend"),value:new v("Vue.js","Vue.js")}),new D({key:new v("Бэкенд","Backend"),value:new v("Node.js","Node.js")}),new D({key:new v("База данных","Database"),value:new v("PostgreSQL, MongoDB","PostgreSQL, MongoDB")})],new v("Разработчик","Developer"))]}},Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame"},[n("div",{staticClass:"head"},[t._v(" "+t._s(t.data.terminal.text)+": ")]),n("div",{staticClass:"content"},[t._l(t.data.startText,(function(e,a){return n("div",{key:a,staticStyle:{"min-height":"1.5em"},style:{opacity:1*e.show}},[t._v(" "+t._s(e.text.text)+" ")])})),n("div",{style:{opacity:1*t.showCommand}},[n("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.href)+">")]),t._v(t._s(t.command)+" ")]),n("div",{staticClass:"mb-5",style:{opacity:1*t.showContent}},[t._t("default")],2)],2)])},zt=[],At={terminal:new v("Терминал","Terminal"),startText:[{text:new v("Dorich сайт [Версия 1.0.19012021]","Dorich site [Version 1.0.19012021]"),show:!1},{text:new v("(c) Свободный программист d0rich, 2021. Все права защищены.","(c) Free programmer d0rich, 2021. All rights reserved."),show:!1},{text:new v(" "," "),show:!1}]},It={name:"Terminal",props:{reveal:Boolean,enterWord:String},data:function(){return{data:At,href:document.location.href,showCommand:!1,command:"",showContent:!1}},methods:{printCommand:function(t){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function n(){var a,i,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=2e3/t.length,i=Object(M["a"])(t),n.prev=2,i.s();case 4:if((s=i.n()).done){n.next=11;break}return o=s.value,n.next=8,e.timeoutRand(a);case 8:e.command+=o;case 9:n.next=4;break;case 11:n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](2),i.e(n.t0);case 16:return n.prev=16,i.f(),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[2,13,16,19]])})))()}},mounted:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,a,i,s,o,r,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(M["a"])(t.data.startText);try{for(n.s();!(a=n.n()).done;)i=a.value,i.show=!1}catch(d){n.e(d)}finally{n.f()}if(!t.reveal){e.next=33;break}return e.next=5,t.timeout(1e3);case 5:s=Object(M["a"])(t.data.startText),e.prev=6,s.s();case 8:if((o=s.n()).done){e.next=15;break}return r=o.value,e.next=12,t.timeout(300);case 12:r.show=!0;case 13:e.next=8;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](6),s.e(e.t0);case 20:return e.prev=20,s.f(),e.finish(20);case 23:return e.next=25,t.timeout(300);case 25:return t.showCommand=!0,e.next=28,t.printCommand(t.enterWord);case 28:return e.next=30,t.timeout(500);case 30:t.showContent=!0,e.next=38;break;case 33:c=Object(M["a"])(t.data.startText);try{for(c.s();!(l=c.n()).done;)u=l.value,u.show=!0}catch(d){c.e(d)}finally{c.f()}t.command=t.enterWord,t.showCommand=!0,t.showContent=!0;case 38:t.$emit("revealed");case 39:case"end":return e.stop()}}),e,null,[[6,17,20,23]])})))()}},qt=It,$t=(n("fe0e"),Object(w["a"])(qt,Vt,zt,!1,null,"fc2eaaf0",null)),Dt=$t.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"js-object border-light--primary"},[t.object.name?n("span",[t._v(t._s(t.object.name.text)+" = ")]):t._e(),t._v("{ "),t._l(t.object.fields,(function(e,a){return n("div",{key:a,staticClass:"js-object__field"},[n("span",{staticClass:"key"},[t._v(t._s(e.key.text))]),t._v(": "),n("span",{staticClass:"value"},[t._v(t._s(e.value.text))]),a<t.object.fields.length-1?n("span",{staticClass:"comma"},[t._v(",")]):t._e()])})),t._v(" } ")],2)},Ht=[],Ft={name:"JSObjectWindow",props:{object:{type:F,required:!0}}},Jt=Ft,Ut=(n("0a62"),Object(w["a"])(Jt,Mt,Ht,!1,null,"02a004fe",null)),Yt=Ut.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"enterBlock",staticClass:"content"},[n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"block"},t._l(t.blocks,(function(t,e){return n("div",{key:e,staticClass:"block__column"},[n("div",{staticClass:"column__bg",style:{backgroundImage:"url('"+t.bg+"'"}}),n("div",{staticClass:"column__substrate--bg"}),n("div",{staticClass:"column__content"},[n("img",{attrs:{src:t.img,alt:e}})]),n("div",{staticClass:"column__substrate"}),n("div",{staticClass:"column__overlay--primary",class:{disabled:!t.overlay.primary}}),n("div",{staticClass:"column__overlay--dark theme--dark",class:{disabled:!t.overlay.dark}})])})),0),n("div",{staticClass:"content__slot"},[t._t("default"),n("div",{staticClass:"content__btn--down",on:{click:t.scroll}},[n("v-icon",{staticClass:"arrow"},[t._v("mdi-chevron-down")])],1)],2)])},Gt=[],Kt=n("bf38"),Xt=n.n(Kt),Zt=n("b479"),te=n.n(Zt),ee=n("42ff"),ne=n.n(ee),ae=n("bb0a"),ie=n.n(ae),se=n("2e90"),oe=n.n(se),re=n("29c5"),ce=n.n(re),le=n("1f6d"),ue=n.n(le),de=n("804d"),me=n.n(de),ve=n("ab99"),pe=n.n(ve),he=n("e9ac"),fe=n.n(he),be=[{img:ne.a,bg:me.a,onSmall:!0,smallNumber:3,number:1},{img:oe.a,bg:ue.a,onSmall:!0,smallNumber:1,number:2},{img:Xt.a,bg:ce.a,onSmall:!0,smallNumber:2,number:3},{img:te.a,bg:fe.a,onSmall:!1,number:4},{img:ie.a,bg:pe.a,onSmall:!1,number:5}];be.forEach((function(t){t.overlay={primary:!0,dark:!0}}));var _e={name:"EnterBlock2",data:function(){return{images:be,blocks:[],windowWidth:1e3}},methods:{onResize:function(){var t=window.innerWidth<960;t!==this.isSmall?(this.windowWidth=window.innerWidth,this.setBlocks()):this.windowWidth=window.innerWidth},setBlocks:function(){var t=this;this.blocks=[],this.images.forEach((function(e){t.isSmall&&!e.onSmall||t.blocks.push(e)})),this.blocks.sort((function(e,n){if(t.isSmall){if(e.smallNumber<n.smallNumber)return-1;if(e.smallNumber>n.smallNumber)return 1}else{if(e.number<n.number)return-1;if(e.number>n.number)return 1}return 0}))},scroll:function(){var t=0;this.headerOn&&(t=this.isSmall?56:64),window.scrollTo({top:this.$refs.enterBlock.getBoundingClientRect().bottom+window.pageYOffset-t,behavior:"smooth"})}},computed:Object(a["a"])({isSmall:function(){return this.windowWidth<960}},Object(d["b"])(["headerOn"])),mounted:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.setBlocks(),e.next=3,t.timeout(1e3);case 3:n=Object(M["a"])(t.images),e.prev=4,n.s();case 6:if((a=n.n()).done){e.next=16;break}return i=a.value,e.next=10,t.timeout(200);case 10:return i.overlay.dark=!1,e.next=13,t.timeout(200);case 13:i.overlay.primary=!1;case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](4),n.e(e.t0);case 21:return e.prev=21,n.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})))()}},ge=_e,we=(n("84ce"),Object(w["a"])(ge,Qt,Gt,!1,null,"782dca30",null)),xe=we.exports;k()(we,{VIcon:C["a"]}),V()(we,{Resize:z["a"]});var ke={name:"Home",components:{Terminal:Dt,EnterBlock2:xe,JSObjectWindow:Yt},data:function(){return{data:Lt,btns:{myInfo:new v("Узнать больше","More info")},show:{block2info:!1}}},metaInfo:function(){return{title:new v("Главная","Home").text}}},ye=ke,Ce=(n("d95c"),n("b687")),je=Object(w["a"])(ye,Pt,Bt,!1,null,"6ed69c5d",null),Oe=je.exports;k()(je,{VBtn:y["a"],VLazy:Ce["a"]});var Se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"btns"},[n("v-btn",{staticClass:"mx-3",attrs:{exact:"",text:"",to:{name:"About"}}},[t._v(" "+t._s(t.text.main.text)+" ")]),n("v-btn",{staticClass:"mx-3",attrs:{text:"",to:{name:"Resume"}}},[t._v(" "+t._s(t.text.resume.text)+" ")])],1),n("transition",{attrs:{name:"glitch-transition",mode:"out-in"}},[n("router-view")],1)],1)},Te=[],We={name:"About",components:{},data:function(){return{text:{main:new v("Основное","The main"),resume:new v("Резюме","Resume")}}}},Re=We,Pe=(n("c777"),Object(w["a"])(Re,Se,Te,!1,null,"4cc78896",null)),Be=Pe.exports;k()(Pe,{VBtn:y["a"]});var Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Terminal",{attrs:{"enter-word":"watch blog"}},[n("div",{staticClass:"error--text"},[t._v(" "+t._s(t.text.text)+" ")])])],1)},Ne=[],Le={name:"Blog",components:{Terminal:Dt},data:function(){return{text:new v("Упс, блог ещё в разработке :(","Oops, it seems blog is still in development :(")}}},Ve=Le,ze=Object(w["a"])(Ve,Ee,Ne,!1,null,"35dbd228",null),Ae=ze.exports,Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Terminal",{attrs:{"enter-word":"watch portfolio"}},[n("div",{staticClass:"error--text"},[t._v(" "+t._s(t.text.text)+" ")])])],1)},qe=[],$e={name:"Portfolio",components:{Terminal:Dt},data:function(){return{text:new v("Упс, портфолио ещё в разработке :(","Oops, it seems portfolio is still in development :(")}}},De=$e,Me=Object(w["a"])(De,Ie,qe,!1,null,"aaaa74fa",null),He=Me.exports,Fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-5 pt-3"},[n("section",{staticClass:"intro"},[n("div",{staticClass:"intro__info"},[n("h1",[t._v(t._s(t.resume.header.text))]),n("div",{staticClass:"mb-3"},[t._v(t._s(t.resume.intro.text))]),n("div",[n("div",{staticClass:"contact"},[n("div",{staticClass:"contact__title"},[t._v(t._s(t.text.phone.text))]),n("div",{staticClass:"contact__info"},[t._v(t._s(t.resume.phone.text))])]),n("div",{staticClass:"contact"},[n("div",{staticClass:"contact__title"},[t._v(t._s(t.text.email.text))]),n("div",{staticClass:"contact__info"},[t._v(t._s(t.resume.email.text))])]),n("div",{staticClass:"contact"},[n("div",{staticClass:"contact__title"},[t._v(t._s(t.text.address.text))]),n("div",{staticClass:"contact__info"},[t._v(t._s(t.resume.address.text))])]),n("div",{staticClass:"contact"},[n("div",{staticClass:"contact__title"},[t._v(t._s(t.text.social.text))]),t._l(t.resume.social,(function(e,a){return n("v-btn",{key:a,attrs:{icon:"",href:e.link,target:"_blank"}},[n("v-icon",[t._v(t._s(e.icon))])],1)}))],2)])]),n("div",{staticClass:"intro__photo"},[n("img",{staticClass:"border-light--primary",attrs:{src:t.resume.photo.src,alt:"Nikolay Dorofeev - Web Developer"}})])]),n("div",{staticClass:"hr"}),n("section",{staticClass:"skills block"},[n("div",{staticClass:"block__column--text skills__description"},[n("h1",[t._v(t._s(t.text.skills.title.text))]),n("div",[t._v(t._s(t.text.skills.subscription.text))])]),n("div",{staticClass:"block__column--items skills__sections"},t._l(t.resume.skills,(function(e,a){return n("div",{key:a,staticClass:"border-light--primary section"},[n("h2",[t._v(t._s(e.title.text))]),n("div",[t._v(t._s(e.skills.join(", ")))])])})),0)]),n("div",{staticClass:"hr"}),n("section",{staticClass:"block"},[n("div",{staticClass:"block__column--text"},[n("h1",[t._v(t._s(t.text.experience.title.text))]),n("div",[t._v(t._s(t.text.experience.subscription.text))])]),n("div",{staticClass:"block__column--items time-notes"},t._l(t.resume.experience,(function(e,a){return n("div",{key:a,staticClass:"border-light--primary time-note"},[n("div",[n("span",{staticClass:"time-note__title"},[t._v(t._s(e.title.text)+" ")]),n("span",{staticClass:"time-note__place"},[t._v(t._s(e.place.text))])]),n("div",{staticClass:"time-note__period"},[t._v(t._s(e.period.begin.text)+" - "+t._s(e.period.end.text))]),n("div",{staticClass:"time-note__description"},[t._v(t._s(e.description.text))])])})),0)]),n("div",{staticClass:"hr"}),n("section",{staticClass:"block"},[n("div",{staticClass:"block__column--text"},[n("h1",[t._v(t._s(t.text.education.title.text))]),n("div",[t._v(t._s(t.text.education.subscription.text))])]),n("div",{staticClass:"block__column--items time-notes"},t._l(t.resume.education,(function(e,a){return n("div",{key:a,staticClass:"border-light--primary time-note"},[n("div",[n("span",{staticClass:"time-note__title"},[t._v(t._s(e.title.text)+" ")]),n("span",{staticClass:"time-note__place"},[t._v(t._s(e.place.text))])]),n("div",{staticClass:"time-note__period"},[t._v(t._s(e.period.begin.text)+" - "+t._s(e.period.end.text))]),n("div",{staticClass:"time-note__description"},[t._v(t._s(e.description.text))])])})),0)])])},Je=[],Ue=(n("c96a"),{text:{word:new v("Соображения","Lorem"),twoWords:new v("Идейные соображения","Lorem ipsum"),small:new v("Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.","Sale liber et vel. Vivendum dignissim conceptam pri ut, ei vel partem audiam sapientem."),middle:new v("С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.","Nec labore cetero theophrastus no, ei vero facer veritus nec. An eos iusto solet, id mel dico habemus. Elitr accommodare deterruisset eam te, vim munere pertinax consetetur at. Magna copiosae apeirian ius at."),big:new v("Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.","Eam id posse dictas voluptua, veniam laoreet oportere no mea, quis regione suscipiantur mea an. Ius dicat feugiat no, vix cu modo dicat principes. Nec labore cetero theophrastus no, ei vero facer veritus nec. Sale liber et vel. Vivendum dignissim conceptam pri ut, ei vel partem audiam sapientem.")},img:new at({src:et.a})}),Ye={photo:Ue.img,header:Ue.text.twoWords,intro:Ue.text.middle,phone:Ue.text.word,email:Ue.text.word,address:Ue.text.small,social:[new U({link:"#",icon:"mdi-telegram",title:Ue.text.word}),new U({link:"#",icon:"mdi-telegram",title:Ue.text.word}),new U({link:"#",icon:"mdi-telegram",title:Ue.text.word})],skills:[new Q({title:Ue.text.twoWords,skills:[Ue.text.small.en]}),new Q({title:Ue.text.twoWords,skills:[Ue.text.small.en]}),new Q({title:Ue.text.twoWords,skills:[Ue.text.small.en]})],experience:[new G({title:Ue.text.twoWords,place:Ue.text.twoWords,period:{begin:Ue.text.twoWords,end:Ue.text.twoWords},description:Ue.text.middle}),new G({title:Ue.text.twoWords,place:Ue.text.twoWords,period:{begin:Ue.text.twoWords,end:Ue.text.twoWords},description:Ue.text.middle})],education:[new G({title:Ue.text.twoWords,place:Ue.text.twoWords,period:{begin:Ue.text.twoWords,end:Ue.text.twoWords},description:Ue.text.middle}),new G({title:Ue.text.twoWords,place:Ue.text.twoWords,period:{begin:Ue.text.twoWords,end:Ue.text.twoWords},description:Ue.text.middle})]},Qe={name:"Resume",data:function(){return{resume:new ot(Ye),text:{phone:new v("Телефон","Phone"),email:new v("Email","Email"),address:new v("Адрес","Address"),social:new v("Социальные сети","Social"),skills:{title:new v("Навыки","Skills"),subscription:new v("Я постоянно улучшаю свои умения и изучаю новые технологии, чтобы выполнять свою работу эффективнее.","I am constantly exercising my skills and learning new technologies to do my job more efficiently.")},experience:{title:new v("Опыт работы","Experience"),subscription:new v("Я сотрудничаю с другими специалистами и компаниями, чтобы создавать восхитительные цифровые продукты, которые решают проблемы пользователей.","I partner with other professionals and companies to create amazing digital products that solve user problems.")},education:{title:new v("Образование","Education"),subscription:new v("Всю свою жизнь я свято верил, что образование важно. Я каждый день стараюсь узнать что-то новое.","All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.")}}}},methods:{fetchResume:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.turnPageLoad(!0),e.next=3,t.axios.get("".concat(t.apiUrl,"/resume/get"));case 3:n=e.sent,t.resume=new ot(n.data),t.resume.photo.getSrc(),t.turnPageLoad(!1);case 7:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchResume()},metaInfo:function(){return{title:new v("Резюме","Resume").text}}},Ge=Qe,Ke=(n("403f"),Object(w["a"])(Ge,Fe,Je,!1,null,"5e68fda5",null)),Xe=Ke.exports;k()(Ke,{VBtn:y["a"],VIcon:C["a"]});var Ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Terminal",{attrs:{"enter-word":"watch about"}},[n("div",{staticClass:"error--text"},[t._v(" "+t._s(t.text.text)+" ")])])],1)},tn=[],en={name:"AboutMain",components:{Terminal:Dt},data:function(){return{text:new v("Упс, страница обо мне ещё в разработке :(","Oops, it seems about me is still in development :(")}}},nn=en,an=Object(w["a"])(nn,Ze,tn,!1,null,"5c185066",null),sn=an.exports;i["a"].use(Rt["a"]);var on=[{path:"/",name:"Home",component:Oe,meta:{scrollToTop:!0}},{path:"/about",component:Be,meta:{scrollToTop:!0},children:[{path:"",name:"About",component:sn,meta:{scrollToTop:!0}},{path:"resume",name:"Resume",component:Xe,meta:{scrollToTop:!0}}]},{path:"/blog",name:"Blog",component:Ae,meta:{scrollToTop:!0}},{path:"/portfolio",name:"Portfolio",component:He,meta:{scrollToTop:!0}},{path:"/*",redirect:"Home"}],rn=new Rt["a"]({base:"/",routes:on});rn.afterEach((function(t){t.meta.scrollToTop&&setTimeout((function(){return window.scrollTo(0,0)}),300)}));var cn=rn,ln=n("58ca"),un=n("2106"),dn=n.n(un),mn=n("f309"),vn=n("fcf4");i["a"].use(mn["a"]);var pn=new mn["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:vn["a"].purple,accent:vn["a"].lime}}}}),hn=(n("15fd"),n("0937"),n("8013"));i["a"].use(ln["a"]),i["a"].use(dn.a,Z.a),i["a"].component("scale-transition",Object(hn["b"])("scale-transition")),i["a"].mixin({computed:Object(a["a"])(Object(a["a"])({},Object(d["d"])(["lang","apiUrl","onPageLoad"])),{},{routeNow:function(){return this.$route.name}}),methods:Object(a["a"])(Object(a["a"])({},Object(d["c"])(["turnPageLoad"])),{},{timeout:function(t){return new Promise((function(e){setTimeout((function(){return e()}),t)}))},timeoutRand:function(t){return new Promise((function(e){setTimeout((function(){return e()}),t*(.9+.2*Math.random()))}))}})}),i["a"].config.productionTip=!1,new i["a"]({router:cn,store:m,axios:Z.a,vuetify:pn,render:function(t){return t(Wt)}}).$mount("#app")},"5b23":function(t,e,n){},6924:function(t,e,n){t.exports=n.p+"img/img-placeholder.83c842c6.svg"},"7bdb":function(t,e,n){},"804d":function(t,e,n){t.exports=n.p+"img/bg3.e17a0fbb.png"},"81ab":function(t,e,n){"use strict";n("1d6b")},"84ce":function(t,e,n){"use strict";n("a110")},"85ec":function(t,e,n){},a110:function(t,e,n){},a1c9:function(t,e,n){},ab3a:function(t,e,n){},ab99:function(t,e,n){t.exports=n.p+"img/bgsql.b12bb4ee.png"},b479:function(t,e,n){t.exports=n.p+"img/mongodb.e08ed2d5.svg"},b4ed:function(t,e,n){},bb0a:function(t,e,n){t.exports=n.p+"img/postgresql.df98a55a.svg"},bf38:function(t,e,n){t.exports=n.p+"img/javascript.e1e07bdd.svg"},c777:function(t,e,n){"use strict";n("5b23")},c878:function(t,e,n){},d95c:function(t,e,n){"use strict";n("0912")},e7da:function(t,e,n){},e9ac:function(t,e,n){t.exports=n.p+"img/bgnosql.cca6a60a.png"},f3f0:function(t,e,n){t.exports=n.p+"img/dorich.c7d815e2.jpg"},fe0e:function(t,e,n){"use strict";n("e7da")}});
//# sourceMappingURL=app.e2fad782.js.map