import PasteEvent from './events/paste'
import BeforeInputEvent from './events/before-input'
import KeydownEvent from './events/keydown'
import InputEvent from './events/input'
import ClickEvent from './events/click'

/**
 * @function defaultOptions
 * Set options that can be overridden
 * when creating the Honeycrisp instance.
*/
function defaultOptions () {
  return {
    inputClass: 'default-input-class',
    wrapperClass: 'default-wrapper-class',
    inputCount: 6,
    inputName: 'name',
  }
}

/**
 * @class  Honeycrisp
 * @param  {HTMLElement}  el
 * @param  {Object} [options]
*/
function Honeycrisp(el, options) {
  const rootElement = document.querySelector(el); // root element
  const assignedOptions = Object.assign({...defaultOptions()}, options)

  // build wrapper class and add class to element
  const wrapper = buildWrapperElement(assignedOptions)

  for (let index = 0; index < assignedOptions['inputCount']; index++) {
    addSingleInput(rootElement, assignedOptions, wrapper, index)
  }

  addHiddenInput(wrapper, assignedOptions)
}

function addHiddenInput (wrapper, options) {
  // Build element
  const input = document.createElement('input')

  // Define input specifications
  input.name = options['inputName']
  input.type = 'hidden'

  wrapper.appendChild(input)
}

/**
 * @function addSingleInput
 * @param  {HTMLElement}  el
 * @param  {Object} [options]
 * @param  {HTMLElement} wrapper
 * Pass the root element as the first argument
 * and append the built input to the parent wrapper
*/
function addSingleInput(el, options, wrapper, index) {
  const input = buildInput(options, index, wrapper)

  wrapper.appendChild(input)

  el.append(wrapper)
}

/**
 * @function buildInput
 * @param  {Object} [options]
 * Create an input and add the input class from
 * the options and apply event listeners to the input
*/
function buildInput(options, index, wrapper) {
  // Build element
  const input = document.createElement('input')

  // Add class
  input.classList.add(options['inputClass'])

  // Define input specifications
  input.id = `honeycrisp-single-input-${index}`
  input.type = 'text'
  input.maxLength = '1'

  addInputListener(input, wrapper, options)

  return input
}

/**
 * @function buildWrapperElement
 * @param  {Object} [options]
 * Create the wrapper div and add the 
 * class from the options and return the wrapper
*/
function buildWrapperElement(options) {
  // build wrapper
  const wrapper = document.createElement('div') 

  // add class
  wrapper.classList.add(options['wrapperClass'])

  // return wrapper
  return wrapper
}

/**
 * @function addInputListener
 * @param  {HTMLElement} input
 * Add listeners to look for specific keys and
 * override the native browser behavior to ensure
 * the inputs act intuitively.
*/
function addInputListener(input, wrapper, options) {
  PasteEvent(input, wrapper)
  BeforeInputEvent(input)
  KeydownEvent(input)
  InputEvent(input, wrapper, options)
  ClickEvent(input)
}

/**
 * Create honeycrisp instance
 * @param {HTMLElement}  el
 * @param {Object} [options]
*/
Honeycrisp.create = function (el, options) {
  return new Honeycrisp(el, options);
};

export default Honeycrisp;
