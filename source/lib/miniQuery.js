/*!
 * minQuery
 */
// SweetSelector.select('#eyed')
// should return <div id="eyed">eyed</div>

SweetSelector = {}

SweetSelector.select = function(el){
  return document.querySelectorAll(el);
}


// DOM.hide('.klass') // hides the div
// DOM.show('.klass') // shows the div

DOM = {}
DOM.hide = function(el){
  SweetSelector.select(el)[0].style.display = 'none'
}

DOM.show = function(el){
  SweetSelector.select(el)[0].style.display = ''
}

// // div.klass should look like this: <div class="klass shadi">klass</div>
// DOM.addClass('.klass', 'shadi')
// // div.klass should look like this: <div class="klass">klass</div>
// DOM.removeClass('.klass', 'shadi')

DOM.addClass = function(el, className){
  element = SweetSelector.select(el)[0]
  if (element.classList)
    element.classList.add(className);
  else
    element.className += ' ' + className;
}

DOM.removeClass = function(el, className){
  element = SweetSelector.select(el)[0]
  if (element.classList)
    element.classList.remove(className);
  else
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

