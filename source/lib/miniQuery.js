/*!
 * minQuery
 */
// SweetSelector.select('#eyed')
// should return <div id="eyed">eyed</div>

SweetSelector = { }

SweetSelector.select = function(el){
      return document.querySelectorAll(el);
}