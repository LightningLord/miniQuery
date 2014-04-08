/*!
 * minQuery
 */


//Selector Function

var SweetSelector = function(){
  self = this;
};

SweetSelector.prototype = {

  parseString: function(string){
    return string.slice(1,string.length);
  },

  select: function(string){
    firstCharacter = string[0];
    if (firstCharacter === "."){
      result = self.selectByClass(self.parseString(string));
    }
    else if (firstCharacter === "#"){
      result = self.selectById(self.parseString(string));
    }
    else
    {
      result = self.selectByTag(string);
    }
    return result;
  },

  selectByClass: function(element){
    returnElement = document.getElementsByClassName(element)[0];
    return returnElement;
  },

  selectById: function(element){
    returnElement = document.getElementById(element);
    return returnElement;
  },

  selectByTag: function(element){
    returnElement = document.getElementsByTagName(element)[0];
    return returnElement;
  }

};


var DOM = function(){
  var self = this;
};


DOM.prototype = {
  hide: function(string){
    var selector = new SweetSelector();
    var element = selector.select(string);
    element.style.display = 'none';
  },

  show: function(string){
    var selector = new SweetSelector();
    var element = selector.select(string);
    element.style.display = '';
  },

  addClass: function(element, string){
    var selector = new SweetSelector();
    var newElement = selector.select(element);
    if (newElement.classList)
      newElement.classList.add(string);
    else
      newElement.className += ' ' + className;
  },

  removeClass: function(element, string){
    var selector = new SweetSelector();
    var newElement = selector.select(element);
    if (newElement.classList)
      newElement.classList.remove(string);
    else
      newElement.className = newElement.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

};
  


 //////////////////////////////////// 
window.onload = function(){
  var selector = new SweetSelector();
  selector.select(".klass");
  selector.select("#eyed");
  console.log(selector.select(".klass"));
  console.log(selector.select("#eyed"));
  console.log(selector.select("a"));
  var dommer = new DOM();
  dommer.hide(".klass");
  dommer.show(".klass");
  dommer.addClass('.klass', 'shadi');
  // dommer.removeClass('.klass', 'shadi');

};


  

