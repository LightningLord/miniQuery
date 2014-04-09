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
})()

var miniQuery = (function(DOM){
  var Selection = function(selector){
    this.divElems = document.querySelectorAll(selector)
  }

  Selection.prototype = {
    show: function(){DOM.show(this.divElems)},
    hide: function(){DOM.hide(this.divElems)},
    addClass: function(className){DOM.addClass(this.divElems, className)},
    removeClass: function(className){DOM.removeClass(this.divElems, className)}
  }

  var selectionCreator = function(selector){
    return new Selection(selector)
  }

  return selectionCreator
})(DOM)


//     DOM: {
//       hide: function(selector){
//         var divElems = miniQuery.SweetSelector.select(selector)
//         for(var i = 0; i < divElems.length; i++){
//          divElems[i].style.display = 'none';
//         }
//       },
//       show: function(selector){
//         var divElems = miniQuery.SweetSelector.select(selector)
//         for(var i = 0; i < divElems.length; i++){
//          divElems[i].style.display = '';
//         }
//       },
//       removeClass: function(selector, className){
//         var divElems = miniQuery.SweetSelector.select(selector)
//         for(var i = 0; i < divElems.length; i++){
//          divElems[i].classList.remove(className)
//          console.log(divElems[i])
//         }
//       },

//       addClass: function(selector, className){
//         var divElems = miniQuery.SweetSelector.select(selector)
//         for(var i = 0; i < divElems.length; i++){
//          divElems[i].classList.add(className)
//         }
//       }
//     },
//     EventDispatcher: {
//       on: function(selector, eventName, eventHandler){
//        var divElems = miniQuery.SweetSelector.select(selector)
//        for(var i = 0; i < divElems.length; i++){
//          divElems[i].addEventListener(eventName, eventHandler)
//         }
//       },
//       trigger: function(selector, eventName){
//         var event = new Event(eventName)
//         var divElems = miniQuery.SweetSelector.select(selector)
//         for(var i = 0; i < divElems.length; i++){
//           divElems[i].dispatchEvent(event)
//         }
//       }
//     },
//     AjaxWrapper: {
//       request: function(reqParams){
//         request = new XMLHttpRequest()
//         request.open(reqParams.type, reqParams.url, true)
//         request.onload = function(){
//           if (request.status >= 200 && request.status < 400) {
//             resp = request.responseText;
//             reqParams.success(resp)
//           }
//           else {
//             console.log("REQUEST FAILED")
//             console.log(reqParams)
//             reqParams.fail();
//           }
//         }
//         request.send()
//       }
//     }
//   }
// })();
//alias (reference to same miniQuery object)
var $ = miniQuery


// var miniQuery = (function(){
//   function Thing (selector){
//     this.opts = opts
//   }
//   Thing.prototype = {
//     show: function(){
//       console.log(this.opts)
//     }
//   }

//   function ThingCreator(opts){
//     return new Thing(opts);
//   }

//   return ThingCreator
// })()
