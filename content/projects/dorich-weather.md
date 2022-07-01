---
title: "Weather Forecast App"
date: 2021-01-18
summary: ""
image: '/covers/projects/dorich-weather.jpeg'
tags: [ 'frontend', dashboard, API, learn]
technologies: ['Vue.js', Vuetify]
related:
    - title: Working project
      icon: mdi-desktop-mac-dashboard
      href: http://dorich-weather.herokuapp.com/
---
This application was created with the goal of understanding what potentially useful application I can make in a short time.

The following functionality is available:
- determining the user location when starting the application and displaying the local weather;
- top 20 popular cities in the country;
- the weather at the moment;
- animation of a sunny day, sunrise and sunset times;
- weather for the coming days;
- the weather in your city for a month;
- viewing cities by region (various types of sorting);
- adding / removing cities to favorites;
- view the list of favorite cities.

Only the client was developed, the application takes all data from open APIs:
- [Yandex geocode](https://geocode-maps.yandex.ru/1.x/);
- [Geohelper](http://geohelper.info/);
- [Open Weather Map](https://api.openweathermap.org/).

P.S. The application is only available in Russian, but if you need, there is a Google translator. Some cities' functionality is relevant only for Russia.

P.P.S. Some weather forecast values are copied from the nearest dates due to the limitations of the free OWM API.

P.P.P.S. The link to the application has the http protocol, since the Geohelper API does not work with the https protocol.

