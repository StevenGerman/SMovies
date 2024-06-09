// Petición GET a la API
fetch('https://tu-api.com/imagenes')
  .then(response => response.json())
  .then(data => {
    // Procesamiento de datos JSON
    const imagenes = data.imagenes;

    // Creación dinámica de elementos HTML
    imagenes.forEach(imagen => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      const img = document.createElement('img');
      img.src = imagen.url;
      img.alt = imagen.alt;

      slide.appendChild(img);

      // Agregar el slide al contenedor
      document.querySelector('.swiper-wrapper').appendChild(slide);
    });

    // Inicialización de Swiper
    new Swiper('#swiperPrincipal', {
      // Opciones de Swiper
      direction: 'horizontal', // Dirección del desplazamiento
      slidesPerView: 3, // Cantidad de elementos visibles
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets' // Tipo de paginación
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  });
