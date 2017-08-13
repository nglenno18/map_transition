var pos = 0;
var inc = -.1;
var dimensions, mapDiv, layoverElement;

var divElement = function(string){
  var div = document.getElementById(string);
  mapDiv = string;
  layoverElement = document.createElement('div');
  layoverElement.id = "layoverDiv";
  layoverElement.style.position = 'absolute';
  layoverElement.style.backgroundColor = 'white';
  layoverElement.style.borderColor = 'white';
  layoverElement.style.opacity = 0.5;
  bindLayover();
  console.log('Layover Element: \n', layoverElement);
  addResizeListener();
  return layoverElement;
}

var setTransition = function(){
  if(layoverElement.style.opacity > 0)  fadeDiv(layoverElement, 100, -(.1));
  setTimeout(function(){
    fadeDiv(layoverElement, 100, 0.05);
  }, 2500);
}

var fadeDiv = function(ele, shutter, rate){
  console.log(ele);
  layoverElement = ele;
  console.log('Layover Element: ', ele);
  var op = "1";
  if(rate > 0) op = "0";
  ele.style.opacity = op;
  if(!shutter) shutter = 90;
  inc = rate;
  console.log('settingInterval: ', inc);
  interval2 = setInterval(adjustTransparency, shutter);
}

var adjustTransparency = function(){
  var num = parseFloat(layoverElement.style.opacity);
  console.log('OG:',num);
  num = num + inc;
  console.log(num);
  if(num > 1 || num <=0){
    if(num <=0){
      layoverElement.style.opacity = 0;
    }else{
      layoverElement.style.opacity = 1;
    }
    clearInterval(interval2);
  }else {
    layoverElement.style.opacity = num;
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
  layoverElement.id = "layoverDiv";
  layoverElement.style.position = 'absolute';
  layoverElement.style.backgroundColor = 'white';
  layoverElement.style.borderColor = 'white';
  layoverElement.style.left = dimensions.xPos + 'px';
  layoverElement.style.top = dimensions.yPos + 'px';
  layoverElement.style.width = dimensions.width + 'px';
  layoverElement.style.height = dimensions.height + 'px';
  layoverElement.offsetHeight = dimensions.height;
  layoverElement.offsetWidth = dimensions.width;
}
