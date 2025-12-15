//Espera a que la página cargue completamente antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {

  // Detecta en qué página estamos según el título
  if (document.title.includes('Portafolio')) {
    alert('¡Bienvenido a mi Portafolio!');
  }

  if (document.title.includes('Mascotas')) {
    alert('¡Bienvenido a la galería de Mascotas!');
  }

});
