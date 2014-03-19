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

SweetSelector.prototype = {
  on: function() {
        this.EventDispatcher.on(arguments);
      },

  trigger: function() {
             this.EventDispatcher.trigger(arguments);
           }
}

SweetSelector.init = function() {
  SweetSelector.Wrapper(SweetSelector, SweetSelector.DOM);
  SweetSelector.Wrapper(SweetSelector, SweetSelector.EventDispatcher);
  SweetSelector.Wrapper(SweetSelector, SweetSelector.AjaxWrapper);
};

SweetSelector.ElementSet = function(selector) {
  this.selector = selector;
};

SweetSelector.ElementSet.prototype = {
  strategies: [SelectorStrategy.ClassSelector, SelectorStrategy.IdSelector, SelectorStrategy.TagsSelector],

  elements: function() {
    var strategy, set,
    len = this.strategies.length;

    for (var i = 0; i < len; i++) {
      strategy = this.strategies[i];
      if (strategy.applies(this.selector)) return strategy.set();
    }
  },
};

SweetSelector.Wrapper = function(recipient, source) {
  for (var key in source) {
    if(source.hasOwnProperty(key)){
      recipient[key] = source[key];
    }
  }
  return recipient;
}

SweetSelector.DOM = {
  hide: function() {
          var i,
            elementSet = this;

          if (arguments.length == 1) {
            elementSet =  new SweetSelector.ElementSet(arguments[0]).elements();
          }

          for (i = 0; i < elementSet.length; i++) {
            elementSet[i].style.display = "none";
          }
        },

  show: function() {
          var i,
            elementSet = this;

          if (arguments.length == 1) {
            elementSet =  new SweetSelector.ElementSet(arguments[0]).elements();
          }

          for (i = 0; i < elementSet.length; i++) {
            elementSet[i].style.display = "inherit";
          }
        },

  addClass: function(selector, className) {
              var i,
                elementSet = this;

              if (arguments.length == 2) {
                elementSet =  new SweetSelector.ElementSet(arguments[0]).elements();
              }

              for (i = 0; i < elementSet.length; i++) {
                elementSet[i].className =
                  elementSet[i].className + " " + className;
              }

              return elementSet;
            },

  removeClass: function(selector, className) {
              var i,
                elementSet = this;

              if (arguments.length == 2) {
                elementSet =  new SweetSelector.ElementSet(arguments[0]).elements();
              }

              for (i = 0; i < elementSet.length; i++) {
                elementSet[i].className =
                  elementSet[i].className.replace(className, '').trim();
              }

              return elementSet;
            }
}

SweetSelector.EventDispatcher = {
  on: function() {
        var i,
          elementSet = this;

        if (arguments.length == 3) {
          elementSet =  new SweetSelector.ElementSet(arguments[0]).elements();
        }

        for (i = 0; i < elementSet.length; i++) {
          elementSet[i].addEventListener(arguments[1], arguments[2]);
        }
      },

  trigger: function() {
        var i,
          elementSet = this;

        if (arguments.length == 2) {
          elementSet =  new SweetSelector.ElementSet(arguments[0]).elements();
        }

        for (i = 0; i < elementSet.length; i++) {
          elementSet[i].dispatchEvent(new Event(arguments[1]));
        }
      },

};

SweetSelector.AjaxWrapper = {
  request: function(opts) {
             var oReq = new XMLHttpRequest();

             oReq.addEventListener("load", opts.success);
             oReq.addEventListener("error", opts.fail);

             oReq.open(opts.type, opts.url);
             oReq.send();
           }
};

SweetSelector.init();

$ = SweetSelector;

/* Basic Demo */
document.addEventListener("DOMContentLoaded", function(event) {
  $.on('.klass', 'click', function(e){
    console.log("Private eyed, they're watchin' you, they see your every move.");
    $("#eyed").hide();
  });

});

