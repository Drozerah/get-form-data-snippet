(() => {

    /**
    * Submit Event 
    */
    // Get form element
    const form = document.querySelector('#registrationForm')
    // Submit event
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      // Get form data as Object response
      const formData = [...e.target.elements]
        .filter(element => element.name !== 'submit' )
        .reduce((acc, input) => ({...acc, [input.name]: input.value}), {})
      console.log(formData) // !DEBUG
      confirm(JSON.stringify(formData, null, 4))
      e.target.reset()
    })
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
})()
