// imformacion de las mascotas 
const mascotas = [{
    imagen : 'imagen/mascotas/Mascota_bluey.jpg',
    nombre : 'Bluey',
    descripcion : 'Perrita aproximadamente de 2 años'
},{
    imagen: 'imagen/mascotas/Mascota_roko.jpg',
    nombre: 'Roko',
    descripcion: 'Perrito de 6 años'
},{
    imagen: 'imagen/mascotas/Mascota_jiji.jpg',
    nombre: 'Jiji',
    descripcion:'Gata aproximadamente de 2 años'
},{
    imagen: 'imagen/mascotas/Mascota_ulises.jpg',
    nombre: 'Ulises',
    descripcion:'Perro con edad aproximda de 3 años'
}
];

const mascotasContainer = document.getElementById('mascotasContainer');

mascotas.forEach((mascota, index) => {
    const mascotaDiv = document.createElement('div');
    mascotaDiv.classList.add('mascota');

    const imagen = document.createElement('img');
    imagen.src = mascota.imagen;
    imagen.alt = mascota.nombre;

    const nombre = document.createElement('h2');
    nombre.textContent = mascota.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = mascota.descripcion;

    mascotaDiv.appendChild(imagen);
    mascotaDiv.appendChild(nombre);
    mascotaDiv.appendChild(descripcion);

    mascotasContainer.appendChild(mascotaDiv);

    if ((index + 1) % 3 === 0) {
        const br = document.createElement('br');
        mascotasContainer.appendChild(br);
    }
});

 //Seccion formularios Adopcion
 document.addEventListener("DOMContentLoaded", function () {
    const formularioAdopcion = document.getElementById("formularioAdopcion");
    const mostrarFormularioAdopcion = document.getElementById("mostrarFormularioAdopcion");

    mostrarFormularioAdopcion.addEventListener("click", function () {
        formularioAdopcion.classList.toggle("oculto");
    });
});

//Seccion servicios
function toggleInfo(servicio) {
    const infoElement = document.getElementById(`${servicio}-info`);
  
    if (infoElement.classList.contains('hidden')) {
      const allInfoElements = document.querySelectorAll('.info');
      allInfoElements.forEach(element => element.classList.add('hidden'));
  
      infoElement.classList.remove('hidden');
      infoElement.classList.add('visible');
    } else {
      infoElement.classList.remove('visible');
      infoElement.classList.add('hidden');
    }
  }
  
  // Evitar que la información se oculte al hacer clic en el texto
  const servicios = document.querySelectorAll('.servicio');
  servicios.forEach(servicio => {
    servicio.addEventListener('click', (event) => {
      event.stopPropagation(); // Evitar que el clic se propague y oculte la información
    });
  });
  
