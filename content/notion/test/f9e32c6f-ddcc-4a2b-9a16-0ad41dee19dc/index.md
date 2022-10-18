---
summary: Nowadays there are a lot of technologies for building websites. You
  might be disoriented trying to choose something for your site. I did the big
  research, and I want share information I found.
date: 2022-01-25
tags:
  - Article
  - Websites
  - DocOps
title: Classification of Website technologies

---


## Introduction


Once my team met one challenge. We needed to create a documentation site
for a technology. It should be easy to work with for a non-specialist in web
technologies and just give great *User Experience (UX)*.


We found some experience from *DocOps* specialists on the internet.
By the by, DocOps specialists are people who create documentation
for technologies. But I found classic DocOps technologies unsuitable for our
purposes. Templates for documentation are designed to get information from only one repository. But technology we want to describe is more complicated than other, because it includes many repositories and we need to get fresh info about all components. So I put forward the idea of looking for something new.


## What do we know?


Nowadays, as I see, web developers community identifies 3 types of
frameworks for website development. I realized it searching a lot of documentations
and communicating with people from my university.


So there is my representation of site types in the triangle:


![Classic Sites Triangle](./Classic-Sites-Triangle.png)


As you can see,


### Static Sites


The most simple way to deploy a site is just put heap of HTML, JS, and CSS files
into hosting and get it from browser. And static sites are about it.


Of course, you can just write all pages by yourself. But there is a list of technologies,
that can generate all pages by template and required information. Such technologies
are called *Static Site Generators (SSG)*.


You can see how browser works with pages in this site on the diagram below:


![Static Site Workflow](./Static-Site-Workflow.png)


Working principle of static sites is pretty easy. Browser just get HTML file any time
you want to view a new page. Any. Time. It recreates even pattern elements, that exist
on the page (eg header, navigation, footer), that you already see. You can notice
flashing of the screen while new page is loading on such sites.


Anyway, this technology provides content that we want with easy usage. Some of available SSG:


Capabilities of all these engines are about to be equal. Rendering speed is not important
as it happens not in real time. So the only difference is only in programming language
syntax while creating template.


### Dynamic Sites


From the user side dynamic site can seem a static one. It's because on the browser side
workflow is the same. But all magic at the server side.


![Dynamic Site Workflow](./Dynamic-Site-Workflow.png)


Yeah, this time browser make request not to file storage, but to server,
that generates HTML in real time. And dynamic sites have the same problem as
the static ones - flashing between pages.


You can create dynamic site with:


These technologies have different requirements to server and ways to work with database.


### Single Pages Applications


This type of site provides more slightly UX as browser doesn't recreate whole page,
but only elements when it is needed to change content. Technically, it is static site
with one HTML file. But HTML files exists there only because it might exist anyway to
run JavaScript.


![SPA Workflow](./SPA-Workflow.png)


SPA's don't flash, but browser need to download whole site while first request.
And if you have a lot of content, it will be a huge file.
There is another way, when browser require data to show on the third-party resource.
In this case your site won't contain needed information on initial state. As I know,
initial state is important for *Search Engine Optimization (SEO)*. Also, user will wait
twice:


Somebody may call disadvantage that it works on the JavaScript. There you can decide: support
HTML only site for people with old gadgets or create cool app to use it with pleasure.
I think, that liquidation of flashing is killer feature.


You can try SPA with:


## What is wrong?


Time is running, technologies are constantly improved. Business decided that UX is the main feature  for sites. Because our site should be more comfortable than competitor’s one.


So sites mixed with SPA began to appear: SPA with *Server Side Rendering (SSR)*, SPA with SSG. Some newbie can be confused. May be he want seamless experience for site, but


These 3 bad associations comes to my mind when I hear SPA. But SPA with SSR and SPA with SSG don’t have these problems. Anyway, I deny these technologies because of the phrase “I am SPA” in documentation.


So I propose a solution for this problem. We can call this mixed types of sites as “Hybrid”. Basically they are some blend of classic static sites with SPA, dynamic sites with SPA (with inherited advantages and solved problems).


![Sites Triangle](./Sites-Triangle.png)


SPA is the part of the each hybrid technology. It provides seamless work. Today every hybrid framework is based on the popular SPA framework.


### Static Hybrid


Static Hybrid sites are just *Static Site Generators (SSG)* that generate all possible HTML files for your site with SPA code in JavaScript. But these HTML files have special section for the case you want not to load all page but to update some information on your site.


You can see workflow of the Static Hybrid Site below:


![Static Hybrid Workflow](./Static-Hybrid-Workflow.png)


Firstly, browser gets full generated page in initial state (SEO problem of SPA is solved). After that SPA starts on the page and allow site to get only useful information from page requests until it is closed (seam problem of static sites is solved).


You can try static hybrid sited with:


### Dynamic Hybrid


Basically, we can say that Dynamic Hybrid sites and static hybrid ones have similar idea. Browser get full page on initial page request and then it loads useful information only.


The only difference is that Dynamic Hybrid site generates pages not while creating, but during runtime. This feature increases latencies a bit, but it proposes you a possibility to update data on your site often or get data from frequently changed resource.


![Dynamic Hybrid Workflow](./Dynamic-Hybrid-Workflow.png)


There are some dynamic hybrid technologies:


## Jamstack


> Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity.


Basically, Jamstack frameworks are cheaper to maintain, because there is no runtime app needed. Only technologies, that generates static files can be considered as Jamstack. You can see these frameworks on the sites triangle, proposed by me.


![Sites Triangle with Jamstack Architecture](./Sites-Triangle-with-Jamstack-Architecture.png)


## Summary


To sum up, in my point of view there 5 types of sites:


I think, that static and dynamic sites are obsolete. But there can be reasons to use it, if:


In other cases, I’d advice you to choose SPA or Hybrid sites.


If you are not sure whether static site covers all your needs, you can start from dynamic analog. And then switch to static one, if it is possible.


As for my choice, I chose Nuxt.js (Dynamic Hybrid) for the documentation site. It is so, because we need to fetch info about a lot of repositories, and there are some ideas of helping tools and API’s.



