---
title: "Food Delivery Service Client"
date: 2021-06-06
summary: ""
image: '/covers/projects/sushi-time.jpeg'
tags: [ 'frontend', 'backend', 'learning', archive ]
technologies: [ 'Node.js', 'Nuxt.js', 'Vuetify' , 'Express', 'PostgreSQL', Sequelize ORM]
related:
    - title: Working project
      icon: mdi-desktop-mac-dashboard
      href: hhttps://sushi-service.herokuapp.com/menu
    - title: Source code
      icon: mdi-github
      href: https://github.com/d0rich/sushi-service
---
## How did this happen?
This application was created as a course project at the university for the 3rd year.

The theme could be chosen freely. I settled on the following formulation of the problem: "Entrepreneur Mr. N maintains an enterprise for the production of sushi and rolls to order. The administrator makes a menu by categories (sushi, rolls, hot rolls). A site visitor can view the menu with a description of the dishes. The choice of dishes and delivery place is made visitor and sends them as a request for manufacturing an order. The operator accepts orders."

## Functionality
A regular user has the following capabilities in the application:
- registration, authorization;
- editing data for delivery;
- adding food from the menu to the basket;
- notification of changes in the state of the basket;
- notification about the number of items in the basket;
- order editing;
- sending the order;
- tracking the status of the order (when authorization is completed);
- notification of order status change.

Also, the application provides for the roles of administrator and operator. The administrator, in addition to the user's capabilities, can:
- add / change / show / hide items in the menu;
- see hidden items in the menu.
- The operator, in addition to the capabilities of an ordinary user, can:
- see orders of all users;
- change order statuses.

There are also some exceptional cases. For example, in the order history, the price per item is displayed at the time of purchase, or hidden items of goods added to the order are displayed semi-transparent and are not counted in the final order.

## Wanna try?
You can try to become an operator (login: operator, password: operator).

If you want to try to become an administrator, then contact me personally.

P.S. The application is only available in Russian, but if you need, there is a Google translator.
