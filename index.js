/**
 * @class  Honeycrisp
 * @param  {HTMLElement}  el
 * @param  {Object} [options]
*/
function Honeycrisp(el, options) {
  const rootElement = document.querySelector(el); // root element
	const assignedOptions = Object.assign({}, options)

  // build wrapper class and add class to element
  const wrapper = buildWrapperElement(assignedOptions)

  for (let i = 0; i < assignedOptions['inputCount']; i++) {
    addSingleInput(rootElement, assignedOptions, wrapper)
  }
}

function addSingleInput(el, options, wrapper) {
  const input = buildInput(options)

  wrapper.appendChild(input)

  el.append(wrapper)
}

function buildWrapperElement(options) {
  // build wrapper
  const wrapper = document.createElement('div') 

  // add class
  wrapper.classList.add(options['wrapperClass'])

  // return wrapper
  return wrapper
}

function buildInput(options) {
  // build element
  const input = document.createElement('input')

  // add class
  input.classList.add(options['inputClass'])

  // define input specifications
  input.name = options['inputName']
  input.type = 'number'

  // return input
  return input
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
