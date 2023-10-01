
window.addEventListener('scroll', function() {
	var floatingMenu = document.getElementById('floating-menu');
	if (window.pageYOffset > 0) {
		floatingMenu.style.opacity = '0.8'; // Cambia la opacidad al hacer scroll
	} else {
	  floatingMenu.style.opacity = '1';
	}
  });

  //cambiar colores menú
  function seleccionarOpcion(opcion) {
	// Reiniciar todos los elementos del menú a su estado original
	var menuItems = document.querySelectorAll("#floating-menu a");
	menuItems.forEach(function(item) {
	  item.classList.remove("selected");
	});
	
	// Seleccionar la opción deseada y aplicar estilo
	var opcionSeleccionada = document.querySelector("#floating-menu  a:nth-child(" + opcion + ")");
	opcionSeleccionada.classList.add("selected");
  }


//    		ESPACIO PARA MOSTARRA LA INFORMACIÓN DEL PERFIL
function mostrarInformacion() {
	var paleta = document.getElementById("paleta-informacion");
  
	if (paleta.style.display === "none") {
	  paleta.style.display = "block";
	} else {
	  paleta.style.display = "none";
	}
}


// ESPACIO PAA ENVIAR EL CORREO

function enviarCorreo() {
    event.preventDefault(); 
  
  // Configura los datos del formulario
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var comentario = document.getElementById("comentario").value;
  
  // Configura los parámetros para enviar el correo
  var templateParams = {
    nombre: nombre,
    correo: correo,
    comentario: comentario
  };
  
  // Envía el correo utilizando EmailJS
  emailjs.send('service_kj2nztm', 'template_dipgczj', templateParams)
    .then(function(response) {
      alert('Correo enviado', response);
      // Aquí puedes agregar código adicional para mostrar un mensaje de éxito o redirigir a una página de confirmación
    }, function(error) {
      alert('Error al enviar el correo', error);
      // Aquí puedes agregar código adicional para mostrar un mensaje de error o realizar acciones alternativas
    });
}



//***   VISUALIZAR `PDF` 1
//
var openModalBtn = document.getElementById('open-modal');
var modal = document.getElementById('pdf-modal');
var closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});



//***   VISUALIZAR `PDF` 2
//
var openModalBtn = document.getElementById('open-modal2');
var modal = document.getElementById('pdf-modal2');
var closeModalBtn = document.getElementsByClassName('close2')[0];

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

