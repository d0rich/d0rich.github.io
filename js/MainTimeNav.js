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
    WronglyActiveScreen, WronglyActiveDot, ActiveID;

    screens.forEach((screen, i) => {
      if (TopBottom(screen).top<TopBottom(target).top+(length+1)*10 && TopBottom(screen).bottom>TopBottom(target).top+(length+1)*10)
      ActiveID = i;
    });

    if (pos<30)
    {
      pos=30;
      ActiveID=0;
    }


    else if (pos>screensPosition.bottom- screensPosition.top -(length+1)*20-30)
    {
      pos=screensPosition.bottom- screensPosition.top -(length+1)*20-30;
      ActiveID=length;
    }

    screens.forEach((screen, i) => {
      if (i!=ActiveID && screen.classList.contains('Showing'))
      {
        WronglyActiveScreen = screen;
        WronglyActiveDot = dots[i];
      }
    });

    if (ActiveID != undefined)
    {
      screens[ActiveID].classList.add('Showing')
      dots[ActiveID].classList.add('ShowDot');
      if (WronglyActiveScreen != undefined)
      WronglyActiveScreen.classList.remove('Showing');
      if (WronglyActiveDot != undefined)
      WronglyActiveDot.classList.remove('ShowDot');
    }

    target.style.top=pos+"px";
}

window.addEventListener('scroll', function() {
  DotsVisible (target, screenlist);
});
