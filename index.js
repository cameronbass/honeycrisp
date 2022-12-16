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
    submitOnComplete: false
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
  input.type = 'text'
  input.maxLength = '1'

  addInputListener(input)

  // return input
  return input
}

function addInputListener(input) {
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
  })

  input.addEventListener('click', (event) => {
    input.select()
  })
}

function handleForward(nextEl) {
  if (!(nextEl instanceof HTMLInputElement)) { return }

  nextEl.focus()
  nextEl.select()
};

function handleBack(prevEl) {
  if (!(prevEl instanceof HTMLInputElement)) { return }

  prevEl.focus()
  prevEl.select()
}

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
