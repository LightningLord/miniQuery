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
      // debugger
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
  
window.onload = function(){
  var selector = new SweetSelector();
  selector.select(".klass");
  selector.select("#eyed");
  console.log(selector.select(".klass"));
  console.log(selector.select("#eyed"));
  console.log(selector.select("a"));
};

  
// Steps:
// 1. Get the first character of the string
// string[0], and see if it starts with a ".", "#" or else.
// 2. If . then we implement getElement by classname + the rest of the string as the argument
// 3. If # we do step 2 byt with get element by ID
// 4. else get element by tag.


