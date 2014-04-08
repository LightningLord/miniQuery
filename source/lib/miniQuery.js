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

// DOM FUNCTION

var DOM = function(){
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
  

// EVENT DISPATCH

var EventDispatcher = function(){
  var self = this;
  // var action = {};
};

EventDispatcher.prototype = {
  on: function(string, eventName, eventHandler){
    var selector = new SweetSelector();
    element = selector.select(string);
    element.addEventListener(eventName, eventHandler);
  },

  trigger: function(string, eventName){
    var selector = new SweetSelector();
    var el = selector.select(string);
    var event  = new Event(eventName);
    el.dispatchEvent(event);
  }

};






 //////////////////////////////////// 
window.onload = function(){
  // var selector = new SweetSelector();
  // selector.select(".klass");
  // selector.select("#eyed");
  // console.log(selector.select(".klass"));
  // console.log(selector.select("#eyed"));
  // console.log(selector.select("a"));
  // var dommer = new DOM();
  // dommer.hide(".klass");
  // dommer.show(".klass");
  // dommer.addClass('.klass', 'shadi');
  // dommer.removeClass('.klass', 'shadi');
  
  var eventOn = new EventDispatcher();
  eventOn.on('.klass', 'shadi', function() {console.log("awesome")});
  // this should print "awesome" in the console.
  eventOn.trigger('.klass', 'shadi');
};


  

