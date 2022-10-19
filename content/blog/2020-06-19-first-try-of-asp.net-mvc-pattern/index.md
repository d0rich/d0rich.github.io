---
story_filter_tag: university
summary: ""
include_to_lifeline: true
date: 2020-06-19
tags:
  - Development
  - Learning
title: First try of ASP.NET MVC Pattern
image: ./cover.png

---


During learning in the university I've completed a course project of music web platform. It was supposed to use [ASP.NET](http://asp.net/) MVC pattern, Entity Framework, Bootstrap.  


Unfortunately, source code and database were deleted. Now there are only reports about project.  


## Purpose of the work  


Get the basic skills to perform a full cycle of designing and creating a database. Implement [ASP.NET](http://asp.net/) web application using MVC pattern, Entity Framework, Bootstrap.  


*Music portal*  
Some Internet site provides a service for listening to and downloading music.  
It is necessary to store information about performers (groups, ensembles, orchestras, solo performers ...), albums (both albums of groups and collections), compositions (including singles).  
Registered users of the site can listen to compositions, download, mark "favorite" performers, put "likes" on compositions. The history of listening and downloading is stored in the database (for example, for subsequent analysis of preferences and statistics).  


## Database  


It was needed to create a database using database-first approach, so I get experience of work with:  

- SQL  
- MS SQL Server databases  
- SQL Server Data Tools (IDE for MS SQL Server)  

Here you can see diagram of generated classes due to created database:  


<figure style="text-align: center">  

  ![](./74989d27-4aa1-42ec-b1cd-91d3445f9bd3.png)  

  <figcaption></figcaption>  
</figure>  


## Navigation  


In the application, navigation is implemented in the following way: it takes only a few clicks to access almost every page.  


Each composition object has a link to its personal page and its artist.  


From the personal page of the composition, you can go to one of the songs of the same genre, the album of the composition, the artist of the composition.  


From the artist's personal page, you can also see all his albums.  


However, a single path can still be identified. For example: main page - artist - album - composition. At each stage of this path, you have access to any other.  





<figure style="text-align: center">  

  ![](./bce12676-5718-488b-b8d1-83ec05ef696c.png)  

  <figcaption></figcaption>  
</figure>  


<figure style="text-align: center">  

  ![](./ec421389-0e67-4de3-9457-400272219ffd.png)  

  <figcaption></figcaption>  
</figure>  


<figure style="text-align: center">  

  ![](./d862f946-2963-4aa0-b52e-63df260d171b.png)  

  <figcaption></figcaption>  
</figure>  


<figure style="text-align: center">  

  ![](./009c1766-8507-4e0a-99a9-9ea7be004be6.png)  

  <figcaption></figcaption>  
</figure>  
