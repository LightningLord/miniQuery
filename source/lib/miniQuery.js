/*!
 * minQuery
 */
// PSEUDOCODE
// FIND ELEMENT BY ID: var x=document.getElementById("intro");
// FIND ELEMENT BY CLASS: document.getElementsByClassName("intro");
// FIND ELEMENT BY TAG NAME: var y=x.getElementsByTagName("p");
// <p id="intro">Hello World!</p>
// <p>This example demonstrates the <b>getElementById</b> method!</p>

// <script>
// x=document.getElementById("intro");
// document.write("<p>The text from the intro paragraph: " + x.innerHTML + "</p>");
// </script>
// document.getElementById('contents'); //returns a HTML DOM Object


// var txt = "";
// for (var i=0;i<x.length;i++)
//   {
//   txt = txt + x.elements[i].value + "<br>";
//   }


  // var eyed = document.querySelectorAll('div #eyed');
  // var eyed = document.getElementById("eyed")
  // var klass = document.getElementsByClassName("klass");
  // var hello = document.getElementsByTagName("a"); //the link


var SweetSelector = (function(){

  return {
    select: function(element) {
      // So if it starts with #, . , or tag different rules
      if (element.charAt(0) == "#"){
        return document.getElementById(element.substring(1));
      }
      else if (element.charAt(0) == ".") {
        return document.getElementsByClassName(element.substring(1));
      }
      else {
        return document.getElementsByTagName(element);
      }
    }
  };
}())

SweetSelector.select("#eyed");
SweetSelector.select(".klass");
SweetSelector.select("a");

var DOM = (function(){
  // function displayNone(element) {
  //   document.getElementsByClassName(element)[0].style.display = "none";
  return {
    hide: function(element) {
      if (element.charAt(0) == "#"){
        return document.getElementById(element.substring(1)).style.display = "none";
      }
      else if (element.charAt(0) == "."){
        var className = element.substring(1)
        return document.getElementsByClassName(className)[0].style.display = 'none'
      }
      else {
        return document.getElementsByTagName(element)[0].style.display = "none";
      }
    },
    show: function(element){
      if (element.charAt(0) == "#"){
        return document.getElementById(element.substring(1)).style.display = "";
      }
      else if (element.charAt(0) == "."){
        var className = element.substring(1)
        return document.getElementsByClassName(className)[0].style.display = ""
      }
      else {
        return document.getElementsByTagName(element)[0].style.display = "";
      }
    }
  }
}())


// DOM.hide('.klass')
// DOM.hide('#eyed')
// DOM.hide('a') // hides the div
// DOM.show('.klass') // shows the div

var EventDispatcher = (function(){
  return {
    on: function(element, eventName, fn) {
      elem = document.querySelectorAll(element)[0]
      elem.addEventListener(eventName, fn)
      eventName = new Event(fn)
      return eventName
    },
    trigger: function(element, eventName){
      event = new Event(eventName)
      elem = document.querySelectorAll(element)[0]
      elem.dispatchEvent(event)

    }
  }
}())


// EventDispatcher.on('.klass', 'shadi', function() { console.log("awesome") });
// EventDispatcher.trigger('.klass', 'shadi');
// this should print "awesome" in the console.



// ********************RELEASE4 PENDING******************************
var AjaxWrapper = (function(){
  return {
    request: function(args){
      newRequest = new XMLHttpRequest();
      newRequest.open(args.type, args.url, true);

      newRequest.onload = function() {
        if (newRequest.status >= 200 && newRequest.status < 400){
          args.success
          resp = newRequest.responseText;
        }
        else {
          console.log("Error: newRequest failed")
        }
      };
      newRequest.onerror = function() {
        args.error
      };
      newRequest.send();
    }
  }
})


// AjaxWrapper.request({
//  url: 'someurl',
//  type: 'GET',
//  success: function() {
//    //do something
//  },
//  fail: function() {
//   //do something
//  }
// });