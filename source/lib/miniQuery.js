/*!
 * minQuery
 */
var DOM = {
  hide: function(selector) {
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
