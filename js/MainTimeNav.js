var target = document.querySelector('.NavDots');
var screenlist = document.querySelector('.PresNavigation');
console.log(target);
console.log(screenlist);
var DotsVisible = function(target, screenlist){
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    screensPosition = {
        top: window.pageYOffset + screenlist.getBoundingClientRect().top,
        bottom: window.pageYOffset + screenlist.getBoundingClientRect().bottom
      },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
    var pos = windowPosition.top - screensPosition.top/2;
    if (pos<0)
    {
      pos=0;
    }
    else if (pos>screensPosition.bottom- screensPosition.top) {
      pos=screensPosition.bottom- screensPosition.top;
    }
    target.style.top=pos+"px";
}

window.addEventListener('scroll', function() {
  DotsVisible (target, screenlist);
});
