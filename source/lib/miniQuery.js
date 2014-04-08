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
    }
  }
})();