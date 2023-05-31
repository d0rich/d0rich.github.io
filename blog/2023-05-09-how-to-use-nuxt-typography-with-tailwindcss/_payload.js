export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR){return {data:{"blog/2023-05-09-how-to-use-nuxt-typography-with-tailwindcss/position":p,"blog/2023-05-09-how-to-use-nuxt-typography-with-tailwindcss":{_path:"\u002Fblog\u002F2023-05-09-how-to-use-nuxt-typography-with-tailwindcss",_dir:"blog",_draft:L,_partial:L,_locale:s,_empty:L,title:ad,description:"Small hack to use Nuxt Typography with TailwindCSS",date:"2023-05-09T00:00:00.000Z",tags:["Frontend","Nuxt.js","TailwindCSS"],body:{type:"root",children:[{type:a,tag:ae,props:{id:"how-to-use-nuxt-typography-with-tailwindcss"},children:[{type:c,value:ad}]},{type:a,tag:j,props:{},children:[{type:c,value:"TailwindCSS is a great CSS framework, loved by many developers. And also it has "},{type:a,tag:D,props:{href:"https:\u002F\u002Ftailwindcss.com\u002Fdocs\u002Ftypography-plugin",rel:[E],target:F},children:[{type:c,value:"a typography plugin"}]},{type:c,value:", which is very useful for creating beautiful and readable text."}]},{type:a,tag:j,props:{},children:[{type:c,value:"Unfortunately, CSS is not enough to describe complex elements like codeblock with copy button. Here is where "},{type:a,tag:D,props:{href:"https:\u002F\u002Ftypography.nuxt.space\u002F",rel:[E],target:F},children:[{type:c,value:"Nuxt typography"}]},{type:c,value:" goes. It is set of typography elements for "},{type:a,tag:D,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002F",rel:[E],target:F},children:[{type:c,value:"Nuxt content"}]},{type:c,value:M}]},{type:a,tag:N,props:{id:af},children:[{type:c,value:ag}]},{type:a,tag:j,props:{},children:[{type:c,value:"Nuxt typography is implemented on base of "},{type:a,tag:D,props:{href:"https:\u002F\u002Fgithub.com\u002FTahul\u002Fpinceau",rel:[E],target:F},children:[{type:c,value:"pinceau"}]},{type:c,value:", so it can be "},{type:a,tag:D,props:{href:"https:\u002F\u002Ftypography.nuxt.space\u002F#configuration",rel:[E],target:F},children:[{type:c,value:"conveniently configured"}]},{type:c,value:" via "},{type:a,tag:G,props:{},children:[{type:c,value:O}]},{type:c,value:" file. For example:"}]},{type:a,tag:l,props:{code:"import { defineTheme } from 'pinceau'\nexport default defineTheme({\n  typography: {\n    \u002F\u002F This will change the general line-break size\n    letterSpacings: {\n      tight: '-0.035em',\n      wide: '0.035em'\n    },\n  },\n  prose: {\n    \u002F\u002F This will change the fontSize of the `\u003CProseH1\u003E` component\n    h1: {\n      fontSize: '{typography.2xl.fontSize}'\n    }\n  }\n})\n",filename:O,language:ah,meta:ai},children:[{type:a,tag:w,props:{},children:[{type:a,tag:l,props:{__ignoreMap:s},children:[{type:a,tag:b,props:{class:e,line:x},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:aj}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:ak}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:al}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:am}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:an}]}]},{type:a,tag:b,props:{class:e,line:n},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:ao}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:ap}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:P}]}]},{type:a,tag:b,props:{class:e,line:p},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:y}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:aq}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:t}]}]},{type:a,tag:b,props:{class:e,line:z},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\u002F\u002F This will change the general line-break size\n"}]}]},{type:a,tag:b,props:{class:e,line:A},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"letterSpacings"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:t}]}]},{type:a,tag:b,props:{class:e,line:B},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"tight"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'-0.035em'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Q}]}]},{type:a,tag:b,props:{class:e,line:C},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"wide"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'0.035em'\n"}]}]},{type:a,tag:b,props:{class:e,line:H},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"    },\n"}]}]},{type:a,tag:b,props:{class:e,line:R},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  },\n"}]}]},{type:a,tag:b,props:{class:e,line:S},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:y}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"prose"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:t}]}]},{type:a,tag:b,props:{class:e,line:T},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\u002F\u002F This will change the fontSize of the `\u003CProseH1\u003E` component\n"}]}]},{type:a,tag:b,props:{class:e,line:ar},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:ae}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:t}]}]},{type:a,tag:b,props:{class:e,line:as},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"fontSize"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'{typography.2xl.fontSize}'\n"}]}]},{type:a,tag:b,props:{class:e,line:at},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:U}]}]},{type:a,tag:b,props:{class:e,line:au},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:av}]}]},{type:a,tag:b,props:{class:e,line:aw},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:V}]}]}]}]}]},{type:a,tag:j,props:{},children:[{type:c,value:"But it is not possible to use TailwindCSS classes or values in this configuration file."}]},{type:a,tag:N,props:{id:ax},children:[{type:c,value:ay}]},{type:a,tag:j,props:{},children:[{type:c,value:"Technically all these values are stored as CSS variables in result. So you can make these variables point to other CSS variables, which are defined in TailwindCSS."}]},{type:a,tag:j,props:{},children:[{type:c,value:"In my case I want to change fonts in typography. Let's see an example."}]},{type:a,tag:W,props:{id:az},children:[{type:c,value:aA}]},{type:a,tag:j,props:{},children:[{type:c,value:"First of all we need to create custom plugin for TailwindCSS. It will define CSS variables for fonts."}]},{type:a,tag:l,props:{code:"\u002F\u002F Import function for creating plugin\n\u002F** @type {import('tailwindcss\u002Fplugin')} *\u002F\nconst plugin = require('tailwindcss\u002Fplugin')\n\nmodule.exports = plugin(function ({ \n    \u002F\u002F Function for adding utilities\n    addUtilities, \n    \u002F\u002F Function for getting values from current TailwindCSS theme\n    theme \n  }) {\n  addUtilities({\n    \u002F\u002F Create utility class with required variables\n    '.nuxt-typography-connector': {\n      \u002F\u002F Define your CSS variables\n      '--tw-typography-font-sans': theme('fontFamily.sans'),\n      '--tw-typography-font-serif': theme('fontFamily.serif'),\n      '--tw-typography-font-mono': theme('fontFamily.mono'),\n      '--tw-typography-font-dialog': theme('fontFamily.dialog')\n    }\n  })\n})\n",filename:"nuxt-typography.js",language:aB,meta:"[nuxt-typography.js]"},children:[{type:a,tag:w,props:{},children:[{type:a,tag:l,props:{__ignoreMap:s},children:[{type:a,tag:b,props:{class:e,line:x},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:"\u002F\u002F Import function for creating plugin\n"}]}]},{type:a,tag:b,props:{class:e,line:n},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:aC}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:aD}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:u},children:[{type:c,value:"{import('tailwindcss\u002Fplugin')}"}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:aE}]}]},{type:a,tag:b,props:{class:e,line:p},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:"const"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:u},children:[{type:c,value:aF}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:K},children:[{type:c,value:X}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:aG}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'tailwindcss\u002Fplugin'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Y}]}]},{type:a,tag:b,props:{class:e,line:z},children:[{type:a,tag:b,props:{},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e,line:A},children:[{type:a,tag:b,props:{class:u},children:[{type:c,value:aH}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:u},children:[{type:c,value:aI}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:K},children:[{type:c,value:X}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:aF}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:"function"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" ({ \n"}]}]},{type:a,tag:b,props:{class:e,line:B},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\u002F\u002F Function for adding utilities\n"}]}]},{type:a,tag:b,props:{class:e,line:C},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:aJ}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:", \n"}]}]},{type:a,tag:b,props:{class:e,line:H},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\u002F\u002F Function for getting values from current TailwindCSS theme\n"}]}]},{type:a,tag:b,props:{class:e,line:R},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:I}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" \n"}]}]},{type:a,tag:b,props:{class:e,line:S},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  }) {\n"}]}]},{type:a,tag:b,props:{class:e,line:T},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:y}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:aJ}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:P}]}]},{type:a,tag:b,props:{class:e,line:ar},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\u002F\u002F Create utility class with required variables\n"}]}]},{type:a,tag:b,props:{class:e,line:as},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'.nuxt-typography-connector'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:t}]}]},{type:a,tag:b,props:{class:e,line:at},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"\u002F\u002F Define your CSS variables\n"}]}]},{type:a,tag:b,props:{class:e,line:au},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'--tw-typography-font-sans'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:I}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'fontFamily.sans'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:_}]}]},{type:a,tag:b,props:{class:e,line:aw},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'--tw-typography-font-serif'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:I}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'fontFamily.serif'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:_}]}]},{type:a,tag:b,props:{class:e,line:17},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'--tw-typography-font-mono'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:I}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'fontFamily.mono'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:_}]}]},{type:a,tag:b,props:{class:e,line:18},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'--tw-typography-font-dialog'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:I}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'fontFamily.dialog'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Y}]}]},{type:a,tag:b,props:{class:e,line:19},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:U}]}]},{type:a,tag:b,props:{class:e,line:20},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  })\n"}]}]},{type:a,tag:b,props:{class:e,line:21},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:V}]}]}]}]}]},{type:a,tag:j,props:{},children:[{type:c,value:"Don't forget to add this plugin to your "},{type:a,tag:G,props:{},children:[{type:c,value:aK}]},{type:c,value:":"}]},{type:a,tag:l,props:{code:"\u002F** @type {import('tailwindcss').Config} *\u002F\nmodule.exports = {\n  \u002F\u002F ...\n  plugins: [\n    \u002F\u002F ...\n    require('.\u002Fnuxt-typography.js')\n  ]\n}\n",filename:aK,language:aB,meta:"[tailwind.config.js]"},children:[{type:a,tag:w,props:{},children:[{type:a,tag:l,props:{__ignoreMap:s},children:[{type:a,tag:b,props:{class:e,line:x},children:[{type:a,tag:b,props:{class:i},children:[{type:c,value:aC}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:aD}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:u},children:[{type:c,value:"{import('tailwindcss').Config}"}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:aE}]}]},{type:a,tag:b,props:{class:e,line:n},children:[{type:a,tag:b,props:{class:u},children:[{type:c,value:aH}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]},{type:a,tag:b,props:{class:u},children:[{type:c,value:aI}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:K},children:[{type:c,value:X}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:$}]}]},{type:a,tag:b,props:{class:e,line:p},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:y}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:aL}]}]},{type:a,tag:b,props:{class:e,line:z},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:y}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"plugins"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:": [\n"}]}]},{type:a,tag:b,props:{class:e,line:A},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:aL}]}]},{type:a,tag:b,props:{class:e,line:B},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:aG}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:v}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'.\u002Fnuxt-typography.js'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Y}]}]},{type:a,tag:b,props:{class:e,line:C},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  ]\n"}]}]},{type:a,tag:b,props:{class:e,line:H},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aa}]}]}]}]}]},{type:a,tag:W,props:{id:aM},children:[{type:c,value:"Step 2: Use created utility class on "},{type:a,tag:G,props:{},children:[{type:c,value:ab}]}]},{type:a,tag:j,props:{},children:[{type:c,value:"Now we need to use created utility class on "},{type:a,tag:G,props:{},children:[{type:c,value:ab}]},{type:c,value:" element. It will make CSS variables available for all elements on page."}]},{type:a,tag:l,props:{code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n  @apply nuxt-typography-connector;\n}\n",filename:"tailwind.css",language:aN,meta:"[tailwind.css]"},children:[{type:a,tag:w,props:{},children:[{type:a,tag:l,props:{__ignoreMap:s},children:[{type:a,tag:b,props:{class:e,line:x},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:ac}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" base;\n"}]}]},{type:a,tag:b,props:{class:e,line:n},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:ac}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" components;\n"}]}]},{type:a,tag:b,props:{class:e,line:p},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:ac}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" utilities;\n"}]}]},{type:a,tag:b,props:{class:e,line:z},children:[{type:a,tag:b,props:{},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e,line:A},children:[{type:a,tag:b,props:{class:K},children:[{type:c,value:ab}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:$}]}]},{type:a,tag:b,props:{class:e,line:B},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  @apply nuxt-typography-connector;\n"}]}]},{type:a,tag:b,props:{class:e,line:C},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aa}]}]}]}]}]},{type:a,tag:W,props:{id:aO},children:[{type:c,value:aP}]},{type:a,tag:j,props:{},children:[{type:c,value:"Now we can use CSS variables in Nuxt typography configuration:"}]},{type:a,tag:l,props:{code:"import { defineTheme } from 'pinceau'\n\nexport default defineTheme({\n  typography: {\n    font: {\n      body: 'var(--tw-typography-font-serif)',\n      code: 'var(--tw-typography-font-mono)',\n      display: 'var(--tw-typography-font-serif)'\n    }\n  }\n})\n",filename:O,language:ah,meta:ai},children:[{type:a,tag:w,props:{},children:[{type:a,tag:l,props:{__ignoreMap:s},children:[{type:a,tag:b,props:{class:e,line:x},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:aj}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:ak}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:al}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:am}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:an}]}]},{type:a,tag:b,props:{class:e,line:n},children:[{type:a,tag:b,props:{},children:[{type:c,value:Z}]}]},{type:a,tag:b,props:{class:e,line:p},children:[{type:a,tag:b,props:{class:h},children:[{type:c,value:ao}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:h},children:[{type:c,value:ap}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]},{type:a,tag:b,props:{class:q},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:P}]}]},{type:a,tag:b,props:{class:e,line:z},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:y}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:aq}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:t}]}]},{type:a,tag:b,props:{class:e,line:A},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:m}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"font"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:t}]}]},{type:a,tag:b,props:{class:e,line:B},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"body"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'var(--tw-typography-font-serif)'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Q}]}]},{type:a,tag:b,props:{class:e,line:C},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'var(--tw-typography-font-mono)'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:Q}]}]},{type:a,tag:b,props:{class:e,line:H},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:o}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"display"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:r}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"'var(--tw-typography-font-serif)'\n"}]}]},{type:a,tag:b,props:{class:e,line:R},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:U}]}]},{type:a,tag:b,props:{class:e,line:S},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:av}]}]},{type:a,tag:b,props:{class:e,line:T},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:V}]}]}]}]}]},{type:a,tag:j,props:{},children:[{type:c,value:"Done! Now your typography will use fonts from TailwindCSS."}]},{type:a,tag:N,props:{id:aQ},children:[{type:c,value:aR}]},{type:a,tag:j,props:{},children:[{type:c,value:"If you don't want to create plugin for TailwindCSS, you can apply style to content, which will override existing fonts with TailwindCSS ones:"}]},{type:a,tag:l,props:{code:".blog-fonts {\n  @apply [&_p]:!font-sans [&_a]:!font-sans [&_em]:!font-sans [&_li]:!font-sans\n         [&_ul]:!font-sans [&_ol]:!font-sans [&_blockquote]:!font-sans\n         [&_strong]:!font-sans [&_del]:!font-sans [&_hr]:!font-sans\n         [&_table]:!font-sans [&_thead]:!font-sans [&_tbody]:!font-sans [&_tr]:!font-sans\n         [&_th]:!font-sans [&_td]:!font-sans [&_sup]:!font-sans [&_sub]:!font-sans\n         [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h4]:!font-sans [&_h5]:!font-sans [&_h6]:!font-sans;\n}\n",language:aN,meta:null},children:[{type:a,tag:w,props:{},children:[{type:a,tag:l,props:{__ignoreMap:s},children:[{type:a,tag:b,props:{class:e,line:x},children:[{type:a,tag:b,props:{class:"ct-ecbf27"},children:[{type:c,value:".blog-fonts"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:$}]}]},{type:a,tag:b,props:{class:e,line:n},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"  @apply [&_p]:!font-sans [&_a]:!font-sans [&_em]:!font-sans [&_li]:!font-sans\n"}]}]},{type:a,tag:b,props:{class:e,line:p},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"         [&_ul]:!font-sans [&_ol]:!font-sans [&_blockquote]:!font-sans\n"}]}]},{type:a,tag:b,props:{class:e,line:z},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"         [&_strong]:!font-sans [&_del]:!font-sans [&_hr]:!font-sans\n"}]}]},{type:a,tag:b,props:{class:e,line:A},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"         [&_table]:!font-sans [&_thead]:!font-sans [&_tbody]:!font-sans [&_tr]:!font-sans\n"}]}]},{type:a,tag:b,props:{class:e,line:B},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"         [&_th]:!font-sans [&_td]:!font-sans [&_sup]:!font-sans [&_sub]:!font-sans\n"}]}]},{type:a,tag:b,props:{class:e,line:C},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"         [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h4]:!font-sans [&_h5]:!font-sans [&_h6]:!font-sans;\n"}]}]},{type:a,tag:b,props:{class:e,line:H},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:aa}]}]}]}]}]},{type:a,tag:"alert",props:{type:"info"},children:[{type:a,tag:j,props:{},children:[{type:c,value:"You should apply styles with "},{type:a,tag:G,props:{},children:[{type:c,value:"!important"}]},{type:c,value:". In other case it won't work."}]}]},{type:a,tag:j,props:{},children:[{type:c,value:"It is not very convenient, but it works. Choose configs for Nuxt typography carefully, because it is not easy to change them later."}]},{type:a,tag:"style",children:[{type:c,value:".ct-ecbf27{color:#D19A66}\n.ct-52d13f{color:#56B6C2}\n.ct-7517e8{color:#E5C07B}\n.ct-800ca2{color:#7F848E}\n.ct-fd66d5{color:#61AFEF}\n.ct-47a444{color:#98C379}\n.ct-63014c{color:#E06C75}\n.ct-220feb{color:#ABB2BF}\n.ct-144f41{color:#C678DD}"}]}],toc:{title:s,searchDepth:n,depth:n,links:[{id:af,depth:n,text:ag},{id:ax,depth:n,text:ay,children:[{id:az,depth:p,text:aA},{id:aM,depth:p,text:"Step 2: Use created utility class on :root"},{id:aO,depth:p,text:aP}]},{id:aQ,depth:n,text:aR}]}},_type:"markdown",_id:"content:blog:2023-05-09-how-to-use-nuxt-typography-with-tailwindcss.md",_source:"content",_file:"blog\u002F2023-05-09-how-to-use-nuxt-typography-with-tailwindcss.md",_extension:"md"}},prerenderedAt:1685534035347}}("element","span","text","ct-220feb","line","ct-47a444","ct-63014c","ct-144f41","ct-800ca2","p"," ","code","    ",2,"      ",3,"ct-fd66d5",": ","",": {\n","ct-7517e8","(","pre",1,"  ",4,5,6,7,"a","nofollow","_blank","code-inline",8,"theme","defineTheme","ct-52d13f",false,".","h2","tokens.config.ts","({\n",",\n",9,10,11,"    }\n","})","h3","=",")\n","\n","),\n"," {\n","}",":root","@tailwind","How to use Nuxt Typography with TailwindCSS","h1","problems-of-nuxt-typography-configuration","Problems of Nuxt typography configuration","ts","[tokens.config.ts]","import"," { "," } ","from","'pinceau'\n","export","default","typography",12,13,14,15,"  }\n",16,"solution","Solution","step-1-create-tailwindcss-plugin","Step 1: Create TailwindCSS plugin","js","\u002F** ","@type"," *\u002F\n","plugin","require","module","exports","addUtilities","tailwind.config.js","\u002F\u002F ...\n","step-2-use-created-utility-class-on-root","css","step-3-use-css-variables-in-nuxt-typography-configuration","Step 3: Use CSS variables in Nuxt typography configuration","how-to-do-that-without-plugin","How to do that without plugin"))