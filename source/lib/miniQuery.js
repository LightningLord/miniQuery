/*!
 * minQuery
 */

 window.addEventListener("load", function load(event){
  window.removeEventListener("load", load, false);
  // Release 0
  console.log($.select("#eyed"));
  console.log($.select(".klass"));
  console.log($.select("a"));
  // Release 1
  $.hide(".klass");
  $.show(".klass");
  console.log($.addClass(".klass", "drew"));
  console.log($.removeClass(".klass", "drew"));
  // Release 2
  $.on(".klass", "shadi", function() { console.log("awesome") });
  $.trigger(".klass", "shadi");
  // Release 3
  $.request({
    url: 'index.html',
    type: 'GET',
    success: function() {
    },
    fail: function() {
    }
  })
  $.success()
 },false)

 var $ = {

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
    },

    hide: function(passed) {
      $.select(passed).style.display = 'none'
    },

    show: function(passed) {
      $.select(passed).style.display = 'block'
    },

    addClass: function(passed, newClass) {
      return $.select(passed).className = $.select(passed).className + " " + newClass
    },

    removeClass: function(passed, removeClass) {
      return $.select(passed).className = $.select(passed).className.split(" ")[0]
    },

    on: function(passed, call, paramFunc) {
      // paramFunc()
      // var event = new Event(call)
      var event = new Event('build')

      document.addEventListener('build', paramFunc(), false)
    },

    trigger: function(passed, call) {
      // document.call()
      // passed.dispatchEvent(call)
      // document.dispatchEvent(event)
    },

    request: function(args) {
      url = args.url,
      type = args.type
      success = args.success
      var request = new XMLHttpRequest();
      request.open(type, url, true)
      if (request.status >= 200 && request.status < 400) {
        console.log("Successfully able to " + type + url)
      } else {
        console.log("Failed to " + type + " " + url)
        $.fail
      }
    },

    success: function() {
      console.log("Successfully able to " + type + " " + url)
    },

    fail: function() {
      console.log("Failed to " + type + " " + url)
    }
}