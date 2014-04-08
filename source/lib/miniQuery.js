/*!
 * minQuery
 */

function SweetSelector(element) {
  debugger
  var firstChar = element.charAt(0);
  var elementName = element.substr(1)
  switch (firstChar) {
    case '.':
      console.log("it's a class");
      var elementObject = document.getElementsByClassName(elementName)
      return elementObject
      break;
    case '#':
      console.log("it's an ID");
      var elementObject = document.getElementById(elementName);
      return elementObject
      break;
    default:
      var elementObject = document.getElementsByTagName(element);
  }
  console.log(elementObject)

}











/*!
 SweetSelector.select('#eyed')
 */
