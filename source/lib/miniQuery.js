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
  }
}

var dom = new DOM