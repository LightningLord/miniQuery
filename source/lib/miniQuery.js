/*!
 * minQuery
 */

 window.addEventListener("load", function load(event){
  window.removeEventListener("load", load, false);
  // Release 0
  console.log(SweetSelector.select("#eyed"));
  console.log(SweetSelector.select(".klass"));
  console.log(SweetSelector.select("a"));
  // Release 1
  DOM.hide(".klass");
  DOM.show(".klass");
  console.log(DOM.addClass(".klass", "drew"));
  console.log(DOM.removeClass(".klass", "drew"));
 },false)


  var SweetSelector = {

    select: function(passed) {
      if (passed[0] == '#') {
          var id = passed.slice(1,passed.length)
          return document.getElementById(id)
      } else if (passed[0] == '.') {
          var className = passed.slice(1,passed.length)
          return document.getElementsByClassName(className)[0]
      } else {
          var tag = passed
          return document.getElementsByTagName(tag)[0]
      }
    }
  }

  var DOM = {

    hide: function(passed) {
      SweetSelector.select(passed).style.display = 'none'
    },

    show: function(passed) {
      SweetSelector.select(passed).style.display = 'block'
    },

    addClass: function(passed, newClass) {
      return SweetSelector.select(passed).className = SweetSelector.select(passed).className + " " + newClass
    },

    removeClass: function(passed, removeClass) {
      return SweetSelector.select(passed).className = SweetSelector.select(passed).className.split(" ")[0]
    }
  }

  var EventDispatcher = {

    on: function(passed) {

    })
  }






// function miniQuery(){
//   alert("here")



//   SweetSelector.select("stuff")
// }


  // console.log('success')
  // console.log('x')

  // // var x = document.getElementById("#eyed")
  // // console.log("x")
  // )