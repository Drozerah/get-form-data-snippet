(() => {
  /**
  * Check Password confirmation
  */
  const isPasswordsConfirmed = (data) => {
    return new Promise((resolve, reject) => {
      if (data.password === data.confirm) {
        resolve(data)
      } else {
        const errMsg = 'Passwords do not match.'
        reject(errMsg)
      }
    })
  }
  /**
  * Display Error info
  */
  const displayError = (str) => {
    // Get #info element
    const display = document.querySelector('#info')
    display.classList.add('error')
    display.innerHTML = str
  }
  /**
  * Display Success info
  */
  const displaySucces = (str) => {
    // Get #info element
    const display = document.querySelector('#info')
    display.classList.add('success')
    display.innerHTML = str
    console.log(display) // !DEBUG
  }
  /**
  * Reset Form 
  */
  const resetForm = (form) => {
    form.reset()
  }
  /**
  * Reset Visibility Icon
  */
  const resetVisibility = () => {
    // reset icon
    document.querySelector('#visibility').innerHTML = 'visibility'
    // reset password field default type
    const [...passwords] = document.querySelectorAll('.password')
    passwords.forEach(element => element.type = 'password' )
  }
  /**
  *  Get form data as Object response
  */
  const getFormData = (form) => {
    return [...form.elements]
    .filter(element => element.name !== 'submit' )
    .reduce((acc, input) => ({...acc, [input.name]: input.value}), {})
  }
  /**
  * Toogle Visibility Event 
  */
  // Get password imputs
  const [...passwordInputs] = document.querySelectorAll('.password')
  // Set boolean
  let isVisibility = false
  // Click event
  document.querySelector('#visibility')
    .addEventListener('click', (e) => {
      // Toogle visibility
      if(!isVisibility) {
        passwordInputs.forEach(element => element.type = 'text')
        e.target.innerHTML = 'visibility_off'
      } else {
        passwordInputs.forEach(element => element.type = 'password')
        e.target.innerHTML = 'visibility'
      }
      isVisibility = !isVisibility
  })
 
  /**
  * Submit Event 
  */
  // Get form element
  const form = document.querySelector('#registrationForm')
  // Submit event
  form.addEventListener('submit', async (e) => {
    try {
      e.preventDefault()
      // Get form data as Object response
      const formData = getFormData(e.target)
      // Validate passwords
      const data = await isPasswordsConfirmed(formData)
      if (data) {
        // Show confirmation prompt
        confirm(JSON.stringify(data, null, 4))
        // Display success message
        displaySucces('Thank you!')
        // Reset Form
        resetForm(e.target)
        // Reset visibility icon
        resetVisibility()
      }
    } catch (error) {
      // display err message
      displayError(error)
    }
  })
})()
