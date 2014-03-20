/*!
 * minQuery
 */

var SelectorStrategy = {};

/* Steven Sez:
 *
 * I'm introducing a SelectorStrategy namespace in which I will
 * create a number of strategies.  You'll see this come into play in
 * `SweetSelector.ElementSet.elements`
 *
 * This is a refactoring technique, not really *best* used here called "Replace
 * conditional with polymorphism."
 *
 * Also note:  many of you were contending with whether the get*by* command was
 * returning a singular or a plural.  By casting all of the results into an
 * array, I don't have to worry about null, 1 or many, i can always treat the
 * results like a many and iterate across them.  Check out
 * SweetSelector.DOM.hide() for an implementation of the benefits of this.
 *
 * By there always being an array I don't have to do conditional logic. :)
 *
 */

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

SelectorStrategy.TagsWithSpecifiers = {
  applies: function(selector) {
             this.selector = selector;
             return selector.match(/^[a-z]+[\.\#]/);
           },

  _extractTagAndSpecifierStrings: function() {
                 var sel = this.selector,
                   tagResults = sel.match(/^([a-z]+)([\.\#](.*))/),
                   tagString = tagResults[1],
                   specifiersStrings = tagResults[2].split(/([\.\#]+[a-zA-Z0-9]+)/g).filter(function(el) {
                       return !!el
                     });
                 return {"tagString": tagString, "specifierStrings": specifiersStrings};
               },

  set: function() {
         var i,j, specificationName,
          applicable = undefined,
          res = [],
          specification = this._extractTagAndSpecifierStrings(this._extractTagAndSpecifierStrings()),
          slice = Array.prototype.slice;

         nodeList = slice.call(document.getElementsByTagName(specification.tagString), 0);
         for (i = 0; i < nodeList.length; i++) {
           for (j = 0; j < specification.specifierStrings.length; j++) {
             specificationName = specification.specifierStrings[j].substring(1);
             if (
                 (nodeList[i].id == specificationName) ||
                 (nodeList[i].className.match(new RegExp(specificationName)))
                 ) {
               res.push(nodeList[i]);
             }
           }
         }
         return res;
       }
}

function SweetSelector(selector) {
  if (!!selector) {
     return SweetSelector.Wrapper(new SweetSelector.ElementSet(selector).elements(), SweetSelector.DOM);
  }
};

SweetSelector.addMixins = function(mixins) {
  SweetSelector.MIXINS = [];

  var i,
      len = mixins.length;

  for (i = 0; i < len; i ++) {
    SweetSelector.MIXINS.push(mixins[i])
    SweetSelector.Wrapper(SweetSelector, mixins[i]);
  }

  return SweetSelector;
};

/* When we find an element set I want that element set to be able to respond to
 * the SweetSelector methods too.
 */

SweetSelector.ElementSet = function(selector) {
  this.selector = selector;
};

SweetSelector.ElementSet.prototype = {
  strategies: [SelectorStrategy.ClassSelector, SelectorStrategy.IdSelector, SelectorStrategy.TagsWithSpecifiers,
    SelectorStrategy.TagsSelector],

  elements: function() {
    var strategy, set,
    len = this.strategies.length;

    for (var i = 0; i < len; i++) {
      strategy = this.strategies[i];
      if (strategy.applies(this.selector)) return strategy.set();
    }
  },
};

/* How do to a mix-in in Javascript.  jQuery calls this extend() */

SweetSelector.Wrapper = function(recipient, source) {
  for (var key in source) {
    if(source.hasOwnProperty(key)){
      recipient[key] = source[key];
    }
  }
  return recipient;
}

/* Mixins... */
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

          return elementSet;
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

          return elementSet;
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

/* Basic Demo */
document.addEventListener("DOMContentLoaded", function(event) {
  $ = SweetSelector.addMixins([ SweetSelector.DOM, SweetSelector.EventDispatcher, SweetSelector.AjaxWrapper ]);

  $.on('.klass', 'click', function(e){
    console.log("Private eyed, they're watchin' you, they see your every move.");
    $("#eyed").hide();
  });

});

