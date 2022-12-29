function setHiddenInput (wrapper, options) {
  var inputValue = ''
  const hiddenInput = wrapper.querySelector(`input[name=${options['inputName']}]`)
  const inputs = []
  const inputIds = [...Array(options['inputCount']).keys()];

  inputIds.forEach($input => {
    const foundInput = wrapper.querySelector(`#honeycrisp-single-input-${$input}`)

    inputs.push(foundInput)
  })

  inputs.forEach($input => {
    inputValue += $input.value
  })

  hiddenInput.value = inputValue
}

const InputEvent = (input, wrapper, options) => {
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
}

export default InputEvent