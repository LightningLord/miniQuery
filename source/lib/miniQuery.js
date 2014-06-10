
var SweetSelector = {
    select: function(selector){
      return document.querySelectorAll(selector)
    }
}

var DOM = (function(){
    var domCollection = function(selector){
      return SweetSelector.select(selector)
    }

    var changeDisplay = function(cssAttribute, domCollection){
      for (var i = 0; i < domCollection.length; i++){
        domCollection[i].style.display = cssAttribute
      }
    }
  return {


    hide: function(selector){
      changeDisplay('none', domCollection(selector))
    },

    show: function(selector){
      changeDisplay('block', domCollection(selector))
    },

    addClass: function(selector, newClass){
      var collection = domCollection(selector)
      for(var i = 0; i < collection.length; i++ ){
        collection[i].classList.add(newClass)
      }
    },

    removeClass: function(selector, badClass){
      var collection = domCollection(selector)
      for(var i = 0; i < collection.length; i++ ){
        collection[i].classList.remove(badClass)
      }
    }
  }
}) ()



var EventDispatcher = (function(){
  return {
    on: function(selector, event, callback){
      var domCollection = SweetSelector.select(selector)
      if (domCollection.length) {
        for (var i=0; i< domCollection.length; i++) {
          domCollection[i].addEventListener(event, callback)
        }
      } else {
        domCollection.addEventListener(event, callback)
      }
    },

    trigger: function(selector, event){
      customEvent = new Event(event)
      var domCollection = SweetSelector.select(selector)
      if (domCollection.length) {
        for (var i=0; i< domCollection.length; i++) {
          domCollection[i].dispatchEvent(customEvent)
        }
      } else {
        domCollection.dispatchEvent(customEvent)
      }
    }
  }
})()




var AjaxWrapper = (function(){
  return {
    request: function(inputData){
      var req = new XMLHttpRequest()
      req.open(inputData.type, inputData.url, true)
      req.onload = inputData.success
      req.onerror = inputData.fail
      req.send()
    }
  }
})()

var Wrapper = function(input){
  this.domCollection = SweetSelector.select(input)
  this.input = input
}
Wrapper.prototype = {
// DOM manipulation
  hide: function() {
    DOM.hide(this.input)
    return this
  },
  show: function() {
    DOM.show(this.input)
    return this
  },
  addClass: function(newClass){
    DOM.addClass(this.input, newClass)
    return this
  },
  removeClass: function(badClass){
    DOM.removeClass(this.input, badClass)
    return this
  },
  // Event Dispatch
  on: function(eventName, callback) {
    EventDispatcher.on(this.input, eventName, callback)
    return this
  },
  trigger: function(eventName) {
    EventDispatcher.trigger(this.input, eventName)
    return this
  }
}

var miniQuery = function(selector){
    return new Wrapper(selector)
}

miniQuery.ajax = function(callDetails){
    AjaxWrapper.request(callDetails)
}

var $ = miniQuery
