---
title: "Sportsmen Social Network"
date: 2020-09-18
image: ./cover.png
tags: [ frontend, backend, archive]
technologies: ['Vue.js', Vuetify, Node.js, Express, Sequelize ORM, PostgreSQL ]
related:
    - title: Working project
      icon: mdi-desktop-mac-dashboard
      href: https://sport-org.herokuapp.com/
    - title: Client source code on GitHub
      icon: mdi-github
      href: https://github.com/d0rich/sport-organizer-client
    - title: Server source code on GitHub
      icon: mdi-github
      href: https://github.com/d0rich/sport-organizer-server
---
At practice after the 2nd year of university, I needed to create a small information system. We could have come up with the system ourselves, and therefore, having just got acquainted with web technologies (Vue, Express, MongoDb, MSSQL), I planned to create, in fact, a whole social network.

The idea was as follows: a network where trainers of sports groups could create events for their groups, make announcements with the ability to create a link to an event, create invitation codes for groups, and keep records of various types. The athletes were also not deprived and had the opportunity of various kinds of communications.

As a result, you can register in the application (there is even an email check); algorithms for authorization via JSON Web Token were learned and created from scratch; a calendar has been implemented where you can create events, share and make notes; the group news feed with filters has been recreated.

Of course, I could not create a full-fledged application (at least the news feed requires pagination), but I think it was a worthy attempt :).

Below you can view the application itself and the client's source code to track my progress in coding. Maybe someday I will remove confidential data from the server code and also make it public.

P.S. The application is available only in Russian, but, if you need, there is a Google translator.

P.P.S. For practice I got the highest mark :)
