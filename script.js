const scriptURL = "https://script.google.com/macros/s/AKfycbyAOw-DhjPMV2Ha3OZkxJ2pRrmffnFUhizzoUsKKXCCntAnNKD-CmsizCzQSXZ4YIJz/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})