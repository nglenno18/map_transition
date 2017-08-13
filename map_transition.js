var pos = 0;
var inc = -.1;
var dimensions, mapDiv, element;

var divElement = function(string){
  var div = document.getElementById(string);
  mapDiv = string;
  element = document.createElement('div');
  element.id = "layoverDiv";
  element.style.position = 'absolute';
  element.style.backgroundColor = 'white';
  element.style.borderColor = 'white';
  element.style.opacity = 0.5;
  bindLayover();
  console.log('Layover Element: \n', element);
  addResizeListener();
  return element;
}

var setTransition = function(){
  if(layoverElement.style.opacity > 0)  fadeDiv(layoverElement.id, 100, -(.1));
  setTimeout(function(){
    fadeDiv(layoverElement.id, 100, 0.05);
  }, 2500);
}

var fadeDiv = function(ele, shutter, rate){
  console.log(ele);
  element = document.getElementById(ele);
  var op = "1";
  if(rate > 0) op = "0";
  if(!shutter) shutter = 90;
  inc = rate;
  console.log('settingInterval: ', inc);
  interval2 = setInterval(adjustTransparency, shutter);
}

var adjustTransparency = function(){
  var num = parseFloat(element.style.opacity);
  console.log('OG:',num);
  num = num + inc;
  console.log(num);
  if(num > 1 || num < 0){
    if(num < 0){
      element.style.opacity = 0;
    }else{
      element.style.opacity = 1;
    }
    clearInterval(interval2);
  }else {
    element.style.opacity = num;
  }
}

var addResizeListener = function(){
  window.addEventListener('resize', function(event){
    console.log('Window is resized');
    bindLayover();
  });
}

var bindLayover = function(){
  div = document.getElementById(mapDiv);
  dimensions = {
    xPos: div.offsetLeft,
    yPos: div.offsetTop,
    zIndex: 100,
    height: div.offsetHeight,
    width: div.offsetWidth
  }
  element.id = "layoverDiv";
  element.style.position = 'absolute';
  element.style.backgroundColor = 'white';
  element.style.borderColor = 'white';
  element.style.left = dimensions.xPos + 'px';
  element.style.top = dimensions.yPos + 'px';
  element.style.width = dimensions.width + 'px';
  element.style.height = dimensions.height + 'px';
  element.offsetHeight = dimensions.height;
  element.offsetWidth = dimensions.width;
}
