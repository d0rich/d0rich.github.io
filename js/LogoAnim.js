let triangle1 = document.getElementById('triangle1');
let triangle2 = document.getElementById('triangle2');
let tri1size=45, tri2size=45;
let glitch1 = document.getElementById('glitch1');
let glitch2 = document.getElementById('glitch2');
let glitch3 = document.getElementById('glitch3');

let logo = document.getElementById('logo');
var LogoBorder = function(){
  return{
  top: logo.getBoundingClientRect().top,
  left: logo.getBoundingClientRect().left,
  right: logo.getBoundingClientRect().right,
  bottom: logo.getBoundingClientRect().bottom
}
}

var SetTri1Size = function (size){
    triangle1.style.transform= 'scale('+size/45+')';
    triangle1.style.top=LogoBorder().top+"px";
}
var SetTri2Size = function (size){
    triangle2.style.transform= 'scale('+size/45+')';
}
var Translate = function (elem, dx, dy){
  elem.style.top = LogoBorder().top+dy+"px";
  elem.style.left = LogoBorder().left+dx+"px";
}
var animate = function(timing, draw, duration) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(45.5-progress*23); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
var glitchVis = function(glitch, chance, fun){
  if (fun(Math.random())> chance/100)
  {
    glitch.style.backgroundColor='transparent';
  }
  else
  {
    glitch.style.backgroundColor= 'var(--color3)';
  }

  if (fun(Math.random())> chance/100)
  {
    glitch.style.transform='scale(1.5)';
  }
  else
  {
    glitch.style.transform='scale(1)'+' translate('+(Math.round(fun(Math.random())*10)-5)+'px,'+(Math.round(fun(Math.random())*10)-5)+'px)';
  }
}
var t1 = function(t){return t;}
var t2 = function(t){return t*t;}
var t3 = function(t){return t*t*t;}
SetTri1Size(45.5);
	setTimeout(()=>{animate(t3, SetTri1Size, 500);
    animate(t3, SetTri2Size, 500);
  }, 1000)
setInterval(function() {
                      glitchVis(glitch1, 45, t3);
                      glitchVis(glitch2, 70, t2);
                      glitchVis(glitch3, 80, t1);
                      Translate(glitch1, 12, 15);
                      Translate(glitch2, 32, 25);
                      Translate(glitch3, 22, 33);
                    }, 400)
