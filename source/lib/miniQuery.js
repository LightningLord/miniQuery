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
        return document.getElementById(element);
      }
      else if (element.charAt(0) == ".") {
        return document.getElementsByClassName(element);
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
