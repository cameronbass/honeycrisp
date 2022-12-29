const BeforeInputEvent = (input) => {
  input.addEventListener('beforeinput', (event) => {
    const isNumeric = n => !isNaN(n);

    if (!isNumeric(event.data)) { 
      event.preventDefault()
      return 
    }
  })
}

export default BeforeInputEvent
