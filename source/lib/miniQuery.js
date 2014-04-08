
var SweetSelector = (function(){
  return {
    select: function(selector){
      var selectorName = selector.substring(1)
      if (selector[0] == '#'){
        return document.getElementById(selectorName)
      } else if (selector[0] == '.'){
        return document.getElementsByClassName(selectorName)
      } else {
        return document.getElementsByTagName(selector)
      }
    }

  }
}) ()



var DOM = (function(){
  return {

    domCollection: function(selector){
      return SweetSelector.select(selector)
    },

    changeDisplay: function(cssAttribute, domCollection){
      if (domCollection.length) {
        for (var i = 0; i < domCollection.length; i++){
          domCollection[i].style.display = cssAttribute
        }
      } else {
        domCollection.style.display = cssAttribute
      }
    },

    hide: function(selector){
      this.changeDisplay('none', this.domCollection(selector))
    },

    show: function(selector){
      this.changeDisplay('block', this.domCollection(selector))
    },

    addClass: function(selector, newClass){
      this.domCollection(selector).classList.add(newClass)
    },

    removeClass: function(selector, badClass){
      this.domCollection(selector).classList.remove(badClass)
    }
  }
}) ()



var EventDispatcher = function(){
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
} ()




var AjaxWrapper = function(){
  return {
    request: function(inputData){
      var req = new XMLHttpRequest()
      req.open(inputData.type, inputData.url, true)
      req.onload = inputData.success
      req.onerror = inputData.fail
      req.send()
    }

  }
} ()

var Wrapper = function(input){
  this.domCollection = SweetSelector.select(input)
  this.input = input
}

Wrapper.prototype = {
  hide: function() {
    DOM.hide(this.input)
  },
  show: function() {
    DOM.show(this.input)
  }
}

var miniQuery = function(selector){
  return new Wrapper(selector)
}






