const PasteEvent = (input, wrapper) => {
  input.addEventListener('paste', (event) => {
    const pasteData = event.clipboardData.getData('text/plain')
    const isNumeric = n => !isNaN(n);

    if (!isNumeric(pasteData)) { 
      return 
    }

    const originalInput = input

    if (pasteData) {
      const splitData = pasteData.split("") 

      splitData.forEach((data, index) => {
        if (isNaN(data)) { 
          return 
        } else {
          var originalID = parseInt(originalInput.id.replace(/\D/g, ""))
          var updatedID = originalID + index

          const foundInput = wrapper.querySelector(`#honeycrisp-single-input-${updatedID}`)

          if (!foundInput) { return }

          foundInput.focus()
          foundInput.select()

          foundInput.value = data
        }
      })
    }
  })
}

export default PasteEvent
