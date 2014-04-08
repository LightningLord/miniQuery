/*!
* minQuery
*/
var miniQuery = function(el){
  return new miniObject(document.querySelectorAll(el))
}

var miniObject = function(el){
  this.stuff = el
}

miniObject.prototype = {

  hide: function() {
    for (var i=0;i<this.stuff.length;i++){
      this.stuff[i].style.display = 'none'
    }
  },
  show: function() {
    for (var i=0;i<this.stuff.length;i++){
      this.stuff[i].style.display = ''
    }
  },

  addClass: function(className){
    for (var i=0;i<this.stuff.length;i++){
      if (this.stuff[i].classList)
        this.stuff[i].classList.add(className);
      else
        this.stuff[i].className += ' ' + className;
    }
  },

  removeClass: function(className){
    for (var i=0;i<this.stuff.length;i++){
      if (this.stuff[i].classList)
        this.stuff[i].classList.remove(className);
      else
        this.stuff[i].className = this.stuff[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },

  on: function(eventName, eventHandler){
    for (var i=0;i<this.stuff.length;i++){
      this.stuff[i].addEventListener(eventName, eventHandler);
    }
  },

  trigger: function(eventName){
    for (var i=0;i<this.stuff.length;i++){
      var event = new Event(eventName)
      this.stuff[i].dispatchEvent(event)
    }
  }


}




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

