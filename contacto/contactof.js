//https://script.google.com/macros/s/AKfycbymgV4ONj8M1ZIB_5QDvojD1A2XnzwaJmHehXtoko2CY3_Q6GZwYaidcgkUZzUd0j0dzQ/exec

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('miFormulario');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      fetch('https://script.google.com/macros/s/AKfycbymgV4ONj8M1ZIB_5QDvojD1A2XnzwaJmHehXtoko2CY3_Q6GZwYaidcgkUZzUd0j0dzQ/exec', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(result => {
        alert('Formulario enviado con éxito, estaremos en contacto.');
        this.reset();
      })
      .catch(error => {
        console.error('Error al enviar:', error);
        alert('Ocurrió un error al enviar el formulario.');
  });
    });
  });