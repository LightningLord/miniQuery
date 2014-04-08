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
  // Release 2
  EventDispatcher.on(".klass", "shadi", function() { console.log("awesome") });
  // EventDispatcher.trigger(".klass", "shadi");
  // Release 3
  AjaxWrapper.request({
    url: 'index.html',
    type: 'GET'
  })
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

    on: function(passed, call, paramFunc) {
      paramFunc()
    }
  }

  var AjaxWrapper = {

    request: function(args) {
      // debugger
      url = args.url,
      type = args.type
      var oReq = new XMLHttpRequest();
      oReq.open(type, url)
      debugger
      console.log(oReq)
      console.log("Successfully able to " + type + " " + url )
    },
    success: function() {
        console.log("Successfully able to " + type + url )
      },
      fail: function() {
        console.log("Failed to " + type + url )
      }
    }

    AjaxWrapper.prototype.request = function() { console.log("got here?")}





// function miniQuery(){
//   alert("here")



//   SweetSelector.select("stuff")
// }


  // console.log('success')
  // console.log('x')

  // // var x = document.getElementById("#eyed")
  // // console.log("x")
  // )