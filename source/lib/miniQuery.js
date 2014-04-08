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
  hide: function(selector){
    var domCollection = sweetSelector.select(selector)
    for (var i = 0; i < domCollection.length; i++){
      domCollection[i].style.display = 'none'
    }
  },
  show: function(selector){
    var domCollection = sweetSelector.select(selector)
    for (var i = 0; i < domCollection.length; i++){
      domCollection[i].style.display = 'block'
    }
  }

}

var dom = new DOM