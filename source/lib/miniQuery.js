;var DOM = (function(){
  return{
    show: function(divElems){
      for(var i = 0; i < divElems.length; i++){
         divElems[i].style.display = '';
      }
    },
    hide: function(divElems){
      for(var i = 0; i < divElems.length; i++){
       divElems[i].style.display = 'none';
      }
    },

    addClass: function(divElems, className){
      for(var i = 0; i < divElems.length; i++){
        divElems[i].classList.add(className)
      }
    },

    removeClass: function(divElems, className){
      for(var i = 0; i < divElems.length; i++){
        divElems[i].classList.remove(className)
      }
    }
  }
})();

var EventDispatcher = (function(){
  return{
    on: function(divElems, eventName, eventHandler){
      for(var i = 0; i < divElems.length; i++){
        divElems[i].addEventListener(eventName, eventHandler)
      }
    },
    trigger: function(divElems, eventName){
      var event = new Event(eventName)
      for(var i = 0; i < divElems.length; i++){
        divElems[i].dispatchEvent(event)
      }
    }
  }
})();

var miniQuery = (function(DOM, EventDispatcher){

  var Selection = function(selector){
    this.divElems = document.querySelectorAll(selector)
  }

  Selection.prototype = {
    show: function(){DOM.show(this.divElems)},
    hide: function(){DOM.hide(this.divElems)},
    addClass: function(className){DOM.addClass(this.divElems, className)},
    removeClass: function(className){DOM.removeClass(this.divElems, className)},
    on: function(eventName, eventHandler){EventDispatcher.on(this.divElems, eventName, eventHandler)},
    trigger: function(eventName) {EventDispatcher.trigger(this.divElems, eventName)}
  }

  var selectionCreator = function(selector){
    return new Selection(selector)
  }

  return selectionCreator
})(DOM, EventDispatcher)

var $ = miniQuery