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