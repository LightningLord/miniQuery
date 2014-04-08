var SweetSelector = (function(){
  return {
    select: function(selector) {
      return document.querySelectorAll(selector)
    }
  }
})();

var DOM = (function(){
  return {
    hide: function(selector){
      var divElems = SweetSelector.select(selector)
      for(var i = 0; i < divElems.length; i++){
       divElems[i].style.display = 'none';
      }
    },

    show: function(selector){
      var divElems = SweetSelector.select(selector)
      for(var i = 0; i < divElems.length; i++){
       divElems[i].style.display = '';
      }
    },

    removeClass: function(selector, className){
      var divElems = SweetSelector.select(selector)
      for(var i = 0; i < divElems.length; i++){
       divElems[i].classList.remove(className)
       console.log(divElems[i])
      }
    },

    addClass: function(selector, className){
      var divElems = SweetSelector.select(selector)
      for(var i = 0; i < divElems.length; i++){
       divElems[i].classList.add(className)
      }
    }
  }
})();

var EventDispatcher = (function() {
  var events = {}

  return {
    on: function(selector, eventName, eventHandler){
     var divElems = SweetSelector.select(selector)
     for(var i = 0; i < divElems.length; i++){
       divElems[i].addEventListener(eventName, eventHandler)
      }
    },

    trigger: function(selector, eventName){
      var event = new Event(eventName)
      var divElems = SweetSelector.select(selector)
      for(var i = 0; i < divElems.length; i++){
        divElems[i].dispatchEvent(event)
      }
    }
  }
})();

var AjaxWrapper = (function(){
  return {
    request: function(reqParams){
      request = new XMLHttpRequest()
      request.open(reqParams.type, reqParams.url, true)

      request.onload = function(){
        if (request.status >= 200 && request.status < 400) {
          resp = request.responseText;
          reqParams.success(resp)
        }
        else {
          console.log(reqParams)
          reqParams.fail();
        }
      }
      request.send()
    }
  }
})();

// {
//  url: 'someurl',
//  type: 'GET',
//  success: function() {
//    //do something
//  },
//  fail: function() {
//   //do something
//  }
// }