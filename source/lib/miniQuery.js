/*!
* minQuery
*/
// SweetSelector.select('#eyed')
// should return <div id="eyed">eyed</div>

SweetSelector = {}

SweetSelector.select = function(el){
  return document.querySelectorAll(el);
}

// DOM.hide('.klass') // hides the div
// DOM.show('.klass') // shows the div

DOM = {}

DOM.hide = function(el){
  SweetSelector.select(el)[0].style.display = 'none'
}

DOM.show = function(el){
  SweetSelector.select(el)[0].style.display = ''
}

// // div.klass should look like this: <div class="klass shadi">klass</div>
// DOM.addClass('.klass', 'shadi')
// // div.klass should look like this: <div class="klass">klass</div>
// DOM.removeClass('.klass', 'shadi')

DOM.addClass = function(el, className){
  element = SweetSelector.select(el)[0]
  if (element.classList)
    element.classList.add(className);
  else
    element.className += ' ' + className;
}

DOM.removeClass = function(el, className){
  element = SweetSelector.select(el)[0]
  if (element.classList)
    element.classList.remove(className);
  else
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

// EventDispatcher.on('.klass', 'shadi', function() { console.log("awesome") });
// EventDispatcher.trigger('.klass', 'shadi');
// // this should print "awesome" in the console.

EventDispatcher = {}

EventDispatcher.on = function(el, eventName, eventHandler){
  element = SweetSelector.select(el)[0]
  element.addEventListener(eventName, eventHandler);
}

EventDispatcher.trigger = function(el, eventName){
  var event = new Event(eventName)
  element = SweetSelector.select(el)[0]
  element.dispatchEvent(event)
}

AjaxWrapper = {}

AjaxWrapper.request = function(url, type, data){
  reqListener = function(){
    console.log(this.responseText);
  }
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open(type, url, true);
  oReq.send(data);
  debugger

}

