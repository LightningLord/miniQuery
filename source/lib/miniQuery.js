/*!
 * minQuery
 */
 var SweetSelector = function(){

 }

 SweetSelector.prototype = {
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



var sweetSelector = new SweetSelector

var DOM = function(){

}

DOM.prototype = {
  domCollection: function(selector){
    return sweetSelector.select(selector)
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

var dom = new DOM

var EventDispatcher = function(){

}

EventDispatcher.prototype = {
  on: function(selector, event, callback){
    var domCollection = sweetSelector.select(selector)
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
    var domCollection = sweetSelector.select(selector)
    if (domCollection.length) {
      for (var i=0; i< domCollection.length; i++) {
        domCollection[i].dispatchEvent(customEvent)
      }
    } else {
      domCollection.dispatchEvent(customEvent)
    }
  }
}

var unicornDispatcher = new EventDispatcher

var AjaxWrapper = function(){}

AjaxWrapper.prototype = {
  request: function(inputData){
    var url = inputData.url
    var type = inputData.type
    var success = inputData.success
    var fail = inputData.fail

    var req = new XMLHttpRequest()
    req.open(type, url, true)
    req.onload = success
    req.onerror = fail

    req.send()
  }
}

var wrapper = new AjaxWrapper
