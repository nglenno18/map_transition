var pos = 0;
var inc = -.1;

var divElement = function(string){
  var div = document.getElementById(string);
  var dimensions = "Layover Element To return";
  dimensions = {
    xPos: div.offsetLeft,
    yPos: div.offsetTop,
    opacity: 0.5,
    zIndex: 100,
    height: div.offsetHeight,
    width: div.offsetWidth
  }
  element = document.createElement('div');
  element.id = "layoverDiv";
  element.style.position = 'absolute';
  element.style.backgroundColor = 'grey';
  element.style.left = dimensions.xPos + 'px';
  element.style.top = dimensions.yPos + 'px';
  element.style.width = dimensions.width + 'px';
  element.style.height = dimensions.height + 'px';
  element.offsetHeight = dimensions.height;
  element.offsetWidth = dimensions.width;
  element.style.opacity = dimensions.opacity;
  element.style.zIndex = dimensions.zIndex;
  //set listeners to root element? or just create/remove elements every call?
  console.log('Element to return: \n', element);
  return element;
}

var setTransition = function(){
  if(layoverElement.style.opacity > 0)  fadeDiv(layoverElement, 100, -(.1));
  setTimeout(function(){
    fadeDiv(layoverElement, 100, 0.05);
  }, 2500);
}

var fadeDiv = function(element, shutter, rate){
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
