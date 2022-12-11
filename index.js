/**
 * @class  Honeycrisp
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */
function Honeycrisp(el, options) {
  this.el = document.querySelector(el); // root element
	this.options = options = Object.assign({}, options)

  const newDiv = document.createElement('div') 
  const newContent = document.createTextNode("Hi there and greetings!")

  newDiv.appendChild(newContent)

  this.el.append(newDiv)
}

/**
 * Create honeycrisp instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */
 Honeycrisp.create = function (el, options) {
	return new Honeycrisp(el, options);
};

export default Honeycrisp;

// /**
//  */
// module.exports = {
//   displayMessage: function () {
//     console.log('hey')
//   }
// }