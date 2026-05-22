const shareButton = document.querySelector('.card__share-button');
const overlay = document.querySelector('.card__overlay');

// Escucha el click en el botón de compartir.
shareButton.addEventListener('click', () => {
  // Muestra/oculta el overlay.
  overlay.classList.toggle('active');

  // Cambia el estado visual del botón.
  shareButton.classList.toggle('active');

  // Verifica si el overlay está abierto.
  const isExpanded = overlay.classList.contains('active');

  // Actualiza el atributo aria-expanded para accesibilidad.
  shareButton.setAttribute('aria-expanded', isExpanded);
});
