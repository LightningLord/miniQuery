/*!
 * minQuery
 */

 window.addEventListener("load", function load(event){
  window.removeEventListener("load", load, false);
  console.log(SweetSelector.select("#eyed"));
  console.log(SweetSelector.select(".klass"));
  console.log(SweetSelector.select("a"));
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





// function miniQuery(){
//   alert("here")



//   SweetSelector.select("stuff")
// }


  // console.log('success')
  // console.log('x')

  // // var x = document.getElementById("#eyed")
  // // console.log("x")
  // )