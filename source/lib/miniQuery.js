/*!
 * minQuery
 */

var SelectorStrategy = {};

SelectorStrategy.ClassSelector = {
  applies: function(selector) {
             this.selector = selector;
             return this.selector[0] === ".";
           },

  set: function() {
         nodeList =  document.getElementsByClassName(this.selector.slice(1));
         return Array.prototype.slice.call(nodeList, 0);
       }
};

SelectorStrategy.IdSelector = {
  applies: function(selector) {
             this.selector = selector;
             return this.selector[0] === "#";
           },

  set: function() {
         node =  document.getElementById(this.selector.slice(1));
         return Array(node);
       }
};

SelectorStrategy.TagsSelector = {
  applies: function(selector) {
             this.selector = selector;
             return true;
           },
  set: function() {
         nodeList =  document.getElementsByTagName(this.selector);
         return Array.prototype.slice.call(nodeList, 0);
       }
}

function SweetSelector(selector) {
  if (arguments.length == 1) {
     return SweetSelector.Wrapper(new SweetSelector.ElementSet(selector).elements(), SweetSelector.DOM);
  }
};

SweetSelector.init = function() {
  SweetSelector.Wrapper(SweetSelector, SweetSelector.DOM);
};

SweetSelector.DOM = {
  hide: function() {
          var i,
            elementSet = this._gatherElementSet(selector);

          for (i = 0; i < elementSet.length; i++) {
            elementSet[i].style.display = "none";
          }
        },

  show: function(selector) {
          var i,
            elementSet = this._gatherElementSet(selector);

          for (i = 0; i < elementSet.length; i++) {
            elementSet[i].style.display = "inherit";
          }
        },

  addClass: function(selector, className) {
              var i,
                elementSet = this._gatherElementSet(selector);

              for (i = 0; i < elementSet.length; i++) {
                elementSet[i].className =
                  elementSet[i].className + " " + className;
              }
            },

  removeClass: function(selector, className) {
              var i,
                elementSet = this._gatherElementSet(selector);

              for (i = 0; i < elementSet.length; i++) {
                elementSet[i].className =
                  elementSet[i].className.replace(className, '').trim();
              }
            },

  _gatherElementSet: function(selector) {
                       var elementsArray;

                       if (selector[0] === ".") {
                         elementsArray = Array.
                           prototype.
                           slice.
                           call(document.getElementsByClassName("klass"), 0)
                       } else if (selector[0] === "#") {
                         elementsArray = Array(document.getElementById('eyed'));
                       }
                       return elementsArray;
                     }
}
