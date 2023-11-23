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


function toggleService(service) {
    const details = document.getElementById(`${service}Details`);
  
    if (details) {
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
    }
  }
  
