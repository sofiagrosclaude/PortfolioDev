const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_uvwfdjp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

var boton1 = document. getElementById('boton1'),
  contador=0;

  function cambio()
  {
    if(contador==0)
    {
      boton1.classList.add('rgba(254, 232, 86, 0.9)');
      contador=1;
    }
    else{
      boton1.classList.remove('rgba(254, 232, 86, 0.9)');
      contador=0;
    }
  }

  boton1.addEventListener('click',cambio,true);