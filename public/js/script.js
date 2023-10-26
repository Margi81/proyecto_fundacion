document.addEventListener("DOMContentLoaded", function () {
const bannerImage1 = document.getElementById("banner-image");
const bannerImage2 = document.getElementById("banner-image-2");
const images = ["/imagen/banner/banner_1.jpeg", "/imagen/banner/banner_2.jpeg"];
let currentIndex = 0;

function changeImage() {
    if (currentIndex % 2 === 0) {
        bannerImage1.src = images[0];
        bannerImage2.src = images[1];
    } else {
        bannerImage1.src = images[1];
        bannerImage2.src = images[0];
    }
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambia la imagen cada 5 segundos
setInterval(changeImage, 5000);

});


document.addEventListener("DOMContentLoaded", function() {
  // Datos de los perritos (nombre, imagen, descripción, etc.)
  const dogsData = [
      {
          imagen: '/imagen/mascotas/Mascota_bluey.jpg',
          nombre: 'Bluey',
          descripcion: 'Perrita aproximadamente de 2 años'
      },
      {
          imagen: '/imagen/mascotas/Mascota_roko.jpg',
          nombre: 'Roko',
          descripcion: 'Perrito de 6 años'
      },
      {
          imagen: '/imagen/mascotas/Mascota_jiji.jpg',
          nombre: 'Jiji',
          descripcion: 'Gata aproximadamente de 2 años'
      },
      {
          imagen: '/imagen/mascotas/Mascota_ulises.jpg',
          nombre: 'Ulises',
          descripcion: 'Perro con edad aproximada de 3 años'
      }
  ];

  const catalog = document.getElementById("catalog");

  dogsData.forEach((dog) => {
      const contenedorMascota = document.createElement("div");
      contenedorMascota.classList.add("mascota-contenedor");

      const dogImage = document.createElement("img");
      dogImage.src = dog.imagen;
      dogImage.alt = dog.nombre;

      const dogName = document.createElement("p");
      dogName.textContent = dog.nombre;

      const dogDescription = document.createElement("p");
      dogDescription.textContent = dog.descripcion;

      contenedorMascota.appendChild(dogImage);
      contenedorMascota.appendChild(dogName);
      contenedorMascota.appendChild(dogDescription);
      catalog.appendChild(contenedorMascota);

      // Agregar un event listener para manejar el clic en los elementos del catálogo
      contenedorMascota.addEventListener("click", function () {
          // Tu código para manejar el clic aquí
          // Puedes abrir una página de detalles del perrito o realizar otras acciones.
      });
  });
});



 //Seccion formularios Adopcion
 document.addEventListener("DOMContentLoaded", function () {
  const formularioAdopcion = document.getElementById("formularioAdopcion");
  const mostrarFormularioAdopcion = document.getElementById("mostrarFormularioAdopcion");

  mostrarFormularioAdopcion.addEventListener("click", function () {
      // Cambia la clase del formulario para mostrarlo u ocultarlo
      formularioAdopcion.classList.toggle("oculto");
  });
});


//Seccion servicios
function toggleInfo(servicio) {
  const infoElement = document.getElementById(`${servicio}-info`);

  if (infoElement.classList.contains('hidden')) {
    const allInfoElements = document.querySelectorAll('.info');
    allInfoElements.forEach((element) => element.classList.add('hidden'));

    infoElement.classList.remove('hidden');
    infoElement.classList.add('visible');
  } else {
    infoElement.classList.remove('visible');
    infoElement.classList.add('hidden');
  }
}

// Asignar la función a los elementos de servicio
const servicios = document.querySelectorAll('.servicio');
servicios.forEach((servicio) => {
  servicio.addEventListener('click', (event) => {
    event.stopPropagation(); // Evitar que el clic se propague y oculte la información
    const servicioId = servicio.getAttribute('id');
    toggleInfo(servicioId);
  });
});

  
