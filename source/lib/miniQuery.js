/*!
 * minQuery
 */

function SweetSelector(element) {
  debugger
  var firstChar = element.charAt(0);

  switch (firstChar) {
  case '.':
    console.log("it's a class");
    var elementObject = document.getElementsByClassName(element)
    return elementObject
  case '#':
    console.log("it's an ID");
    var elementObject = document.getElementById(element);
    return elementObject
  case 'a':

  }

  console.log(elementObject)

}











/*!
 SweetSelector.select('#eyed')
 */
