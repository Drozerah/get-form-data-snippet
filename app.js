(() => {

    console.log('JS is loaded!')
    // get form
    const form = document.querySelector('#registrationForm')
    // submit event
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      // get form data as Object response
      const formData = [...e.target.elements]
        .filter(element => element.name !== 'submit' )
        .reduce((acc, input) => ({...acc, [input.name]: input.value}), {})
      console.log(formData) // !DEBUG
      confirm(JSON.stringify(formData, null, 4))
      e.target.reset()
    })

})()