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
  const assignedOptions = Object.assign({...defaultOptions()}, options);

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
  input.addEventListener('keydown', (event) => {
    const prevEl = input.previousElementSibling;
    const nextEl = input.nextElementSibling;

    if (event.keyCode == 8) {
      handleBackSpace(prevEl, input)
    }

    if (event.keyCode == 37) {
      handleBack(prevEl)
    }

    if (event.keyCode == 39) {
      handleForward(nextEl)
    }

    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault()
    }

    if (isNaN(event.key)) {
      event.preventDefault()

      return
    }
  })

  input.addEventListener('input', (event) => {
    const nextEl = input.nextElementSibling;

    if (!(nextEl instanceof HTMLInputElement)) {
      if (event.inputType === 'insertText') {
        input.value = event.data
      }

      return 
    }

    nextEl.focus()

    if (nextEl.value !== "") {
      nextEl.select()
    }

    setHiddenInput(wrapper, options)
  })

  input.addEventListener('click', (event) => {
    input.select()
  })
}

function setHiddenInput (wrapper, options) {
  var inputValue = ''
  const hiddenInput = wrapper.querySelector(`input[name=${options['inputName']}]`)
  const inputs = []
  const inputIds = [0,1,2,3,4,5]

  inputIds.forEach($input => {
    const foundInput = wrapper.querySelector(`#honeycrisp-single-input-${$input}`)

    inputs.push(foundInput)
  })

  inputs.forEach($input => {
    inputValue += $input.value
  })

  hiddenInput.value = inputValue
}

/**
 * @function handleForward
 * @param  {HTMLElement} nextEl
 * Handle the right arrow action
*/
function handleForward(nextEl) {
  if (!(nextEl instanceof HTMLInputElement)) { return }

  nextEl.focus()
  nextEl.select()
};

/**
 * @function handleBack
 * @param  {HTMLElement} prevEl
 * Handle the left arrow action
*/
function handleBack(prevEl) {
  if (!(prevEl instanceof HTMLInputElement)) { return }

  prevEl.focus()
  prevEl.select()
}

/**
 * @function handleBackSpace
 * @param  {HTMLElement} prevEl
 * @param  {HTMLElement} input
 * Handle the backspace action
*/
function handleBackSpace(prevEl, input) {
  if (!(prevEl instanceof HTMLInputElement)) { return }

  if (input.value !== '') {
    input.value = ''
    input.focus()

    return
  }

  prevEl.value = ''
  prevEl.focus()
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
