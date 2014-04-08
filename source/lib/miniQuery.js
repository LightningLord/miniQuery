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
      //style="dispaly: none;"
      var div_elems = SweetSelector.select(selector)
      for(var i = 0; i < div_elems.length; i++){
       div_elems[i].style.display = 'none';
      }
    },
    show: function(selector){
      var div_elems = SweetSelector.select(selector)
      for(var i = 0; i < div_elems.length; i++){
       div_elems[i].style.display = '';
      }
    }
  }
})();
