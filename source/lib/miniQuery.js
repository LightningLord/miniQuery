/*!
 * minQuery
 */

var SweetSelector = {
    select: function(selector) {
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
    }
};


var DOM = {
    hide: function(element) {
        SweetSelector(element).style.visibility = "hidden";
    },
    show: function(element) {
        SweetSelector(element).style.visibility = "visible";
    },
    addKlass: function(element, klassToAdd) {
        SweetSelector(element).className += klassToAdd
    },
    removeKlass: function(element, klassToRemove) {
        element = SweetSelector(element)
        element.className = element.className.replace(klassToRemove, '');
    }
};

// var EventDispatcher = {
//     // on: function(selector, functionName, function) {
//     // var functionName = Event(functionName);
//     // console.log(functionName);
//     on: function(selector, newName, boundFunction) {
//         var event = new Event(newName);
//         var hi = SweetSelector.select(selector);
//         console.log(hi);
//         hi.addEventListener(newName, boundFunction)
//         console.log(event);
//     }
// }

var AjaxWrapper = {
    request: function(objsWithParams) {
        var oReq = new XMLHttpRequest();
        oReq.open(objsWithParams.type, objsWithParams.url, true);
        oReq.send();
        console.log(oReq);
        console.log(oReq.responseXML);
        var hi = oReq;
    }
}