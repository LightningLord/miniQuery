/*!
 * minQuery
 */

function SweetSelector(selector) {
    if (selector[0] == "#") {
        var toReturn = document.getElementById(selector.substr(1, selector.length - 1));
    } else if (selector[0] == ".") {
        var toReturn = document.getElementsByClassName(selector.substr(1, selector.length - 1));
    } else {
        var toReturn = document.getElementsByTagName(selector);
    }
    return toReturn;
}