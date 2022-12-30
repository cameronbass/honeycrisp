/**
 * Input Generation. Build the necessary inputs
 * based on the options defined by the user
*/
import InputGeneration from './input-generation'

/**
 * Default options. These options will have the
 * oppurtunity to be overridden by the user
*/
import DefaultOptions from './options'

/**
 * @class  Honeycrisp
 * @param  {HTMLElement} el
 * @param  {Object}      [options]
*/
function Honeycrisp(el, options) {
  const rootElement     = document.querySelector(el); // root element
  const assignedOptions = Object.assign({...DefaultOptions()}, options)

  InputGeneration(assignedOptions, rootElement)
}

/**
 * Create honeycrisp instance
 * @param {HTMLElement} el
 * @param {Object}      [options]
*/
Honeycrisp.create = function (el, options) {
  return new Honeycrisp(el, options);
};

export default Honeycrisp;
