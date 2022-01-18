      const scriptURL = 'https://script.google.com/macros/s/AKfycby5QuJ4741E0f7xdS1qep9p2glXVrlN2Lr_-Q4swKmZkL-ls1ZS1Ol-Gw0NXk-ndg5e/exec'
      const form = document.forms['makanYuk-contact-form']
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.my-alert');
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        // ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // Tampilkan alert
            myAlert.classList.toggle('d-none');
            // Reset Formnya
            form.reset();
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))
      })