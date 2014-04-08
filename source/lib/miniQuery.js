/*!
 * minQuery
 */

window.onload = function() {
    dino = new DOM;
};

function SweetSelector(selector) {
    if (selector[0] == "#") {
        var toReturn = document.getElementById(selector.substr(1, selector.length - 1));
    } else if (selector[0] == ".") {
        var toReturn = document.getElementsByClassName(selector.substr(1, selector.length - 1));
    } else {
        var toReturn = document.getElementsByTagName(selector);
    }
    if (typeof toReturn == "object") {
        return toReturn[0];
    } else {
        return toReturn;
    }
};


function DOM() {
    this.hide = function(element) {
        SweetSelector(element).style.visibility = "hidden";
    },

    this.show = function(element) {
        SweetSelector(element).style.visibility = "visible";
    },

    this.addKlass = function(element, klassToAdd) {
        SweetSelector(element).className += klassToAdd
    }

    this.removeKlass = function(element, klassToRemove) {
        element = SweetSelector(element)
        element.className = element.className.replace(klassToRemove, '');
    }

}