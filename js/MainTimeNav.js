var target = document.querySelector('.NavDots');
var screenlist = document.querySelector('.PresNavigation');
var screens = document.querySelectorAll('.Screen');
var dots = document.querySelectorAll('.NavDots div');
var TopBottom=function(elem){
  return{
    top: window.pageYOffset + elem.getBoundingClientRect().top,
    bottom: window.pageYOffset + elem.getBoundingClientRect().bottom
  }
}
var DotsVisible = function(target, screenlist){
  var screensPosition = TopBottom(screenlist),
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    },
    pos = windowPosition.top - screensPosition.top/2,
    length = screens.length - 1,
    WronglyActiveScreen, ActiveID;

    screens.forEach((screen, i) => {
      if (TopBottom(screen).top<TopBottom(target).top && TopBottom(screen).bottom>TopBottom(target).top)
      ActiveID = i;

    });

    if (pos<30)
    {
      pos=30;
      ActiveID=0;
      screens.forEach((screen) => {
        if (screen.index!=ActiveID && screen.classList.contains('Showing'))
        WronglyActiveScreen = screen;
      });

      if (WronglyActiveScreen != undefined)
      WronglyActiveScreen.classList.remove('Showing');

      screens[ActiveID].classList.add('Showing');
    }


    else if (pos>screensPosition.bottom- screensPosition.top -150)
    {
      pos=screensPosition.bottom- screensPosition.top -150;
      ActiveID=length;
      screens.forEach((screen) => {
        if (screen.index!=ActiveID && screen.classList.contains('Showing'))
        WronglyActiveScreen = screen;
      });

      if (WronglyActiveScreen != undefined)
      WronglyActiveScreen.classList.remove('Showing');

      screens[ActiveID].classList.add('Showing')
    }


    else
    {
      screens.forEach((screen) => {
        if (screen.index!=ActiveID && screen.classList.contains('Showing'))
        WronglyActiveScreen = screen;
      });

      if (WronglyActiveScreen != undefined)
      WronglyActiveScreen.classList.remove('Showing');

      if (ActiveID != undefined)
      screens[ActiveID].classList.add('Showing')

    }


    target.style.top=pos+"px";
}

window.addEventListener('scroll', function() {
  DotsVisible (target, screenlist);
});
