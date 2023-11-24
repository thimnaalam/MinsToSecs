let btnSubmit = document.querySelector('[data-submit]')

function converter() {
   let minutes = +document.querySelector('#Minutes').value
   let output = document.querySelector('#output')
 let seconds = minutes * 60;
 output.textContent = `${minutes} min is ${seconds} sec`
    }

 btnSubmit.addEventListener('click', converter);