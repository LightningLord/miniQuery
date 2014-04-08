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
  // el.style.display = '';
}