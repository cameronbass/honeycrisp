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

const KeydownEvent = (input) => {
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

    if (event.metaKey === true && event.key === 'v') {
      return
    }

    if (isNaN(event.key)) {
      event.preventDefault()

      return
    }
  })
}

export default KeydownEvent
