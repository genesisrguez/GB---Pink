/**
* Template Name: Bootslander
* Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

/**
   * Initiate Pure Counter
   */
new PureCounter();

/**

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

//Formulario de contacto


//Mapa
const map = L.map('map').setView([23.6345, -102.5528], 5); // Coordenadas de México

// Agregar mapa
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
}).addTo(map);


// Lista de estados destacados en color naranja (ejemplo)
//const estadosDestacados = {
//    "Cdmx": [[19.432608 , -99.133209]],
//    "Chiapas": [[16.752778 , -93.116667]],
//    "Colima": [[19.2452 , -103.7241]],
//    "Estado de México": [[19.3500 , -99.7532]],
//    "Guanajuato": [[21.019 , -101.2574]],
//    "Guerrero": [[17.4392 , -99.5451]],
//    "Hidalgo": [[20.0911 , -98.7624]],
//    "Michoacán": [[19.5665 , -101.7068]],
//    "Puebla": [[19.0437 , -98.1986,]],
//    "Querétaro": [[20.5888 , -100.3899]],
//    "Tabasco": [[17.8409 , -92.6189]],
//    "Tlaxcala": [[19.3189 , -98.2375]],
//    "Veracruz": [[19.1738 , -96.1342]],
//};

// Agregar polígonos de los estados destacados
//Object.keys(estadosDestacados).forEach(estado => {
//    estadosDestacados[estado].forEach(coord => {
//        L.circle(coord, {
//            color: "grey",
//            fillColor: "grey",
//            fillOpacity: 0.3,
//            radius: 100000
//        }).addTo(map).bindPopup(estado);
//    });
//});

// Pines Benber
const orangeIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png', // Icono gris claro
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje
  popupAnchor: [1, -34], // Ajuste del popup
  shadowSize: [41, 41] // Tamaño de la sombra
});

const pines = [
  { name: "Abasolo", coords: [20.44997, -101.53073] },
  { name: "Acámbaro", coords: [20.03085, -100.72194] },
  { name: "Actopan", coords: [20.26961, -98.94377] },
  { name: "Ahuacatlán", coords: [20.13722, -98.0075] },
  { name: "Ajalpan", coords: [18.37908, -97.25867] },
  { name: "Altotonga", coords: [19.76613, -97.24514] },
  { name: "Alvarado", coords: [18.77143, -95.76181] },
  { name: "Apaseo el Grande", coords: [20.54495, -100.68462] },
  { name: "Apatzingán", coords: [19.08864, -102.35704] },
  { name: "Apizaco", coords: [19.41333, -98.14358] },
  { name: "Atlixco", coords: [18.90815, -98.43613] },
  { name: "Ayutla de los Libres", coords: [16.96376, -99.09616] },
  { name: "Calpulalpan", coords: [19.58867, -98.56972] },
  { name: "Cardel", coords: [19.3681, -96.36951] },
  { name: "Cárdenas", coords: [18.00135, -93.37559] },
  { name: "Ciudad Sahagun", coords: [19.77557, -98.57471] },
  { name: "Ciudad Serdán", coords: [18.98856, -97.44643] },
  { name: "Celaya", coords: [20.52353, -100.8157] },
  { name: "Chapa de Mota", coords: [19.81406, -99.52615] },
  { name: "Colima", coords: [19.24997, -103.72714] },
  { name: "Comalcalco", coords: [18.26316, -93.22397] },
  { name: "Comonfort", coords: [20.72278, -100.75946] },
  { name: "Córdoba", coords: [18.8842, -96.92559] },
  { name: "Cosamaloapan", coords: [18.36759, -95.79857] },
  { name: "Cunduacán", coords: [18.06557, -93.17302] },
  { name: "Dolores Hidalgo", coords: [21.15611, -100.9325] },
  { name: "Huamantla", coords: [19.31451, -97.9252] },
  { name: "Huauchinango", coords: [20.17376, -98.05491] },
  { name: "Huejotzingo", coords: [19.15892, -98.40824] },
  { name: "Huimanguillo", coords: [17.83366, -93.38926] },
  { name: "Ignacio de la Llave ", coords: [18.7258, -95.98696] },
  { name: "Irapuato", coords: [20.67675, -101.35628] },
  { name: "Ixmiquilpan", coords: [20.47841, -99.21697] },
  { name: "Ixtapa-Zihuatanejo", coords: [17.64344, -101.55212] },
  { name: "Ixtapan de la Sal", coords: [18.84369, -99.67671] },
  { name: "Izúcar de Matamoros", coords: [18.60157, -98.46152] },
  { name: "Jalpan", coords: [21.21802, -99.47152] },
  { name: "Jilotzingo", coords: [19.86889, -99.06194] },
  { name: "La Piedad", coords: [20.34239, -102.0305] },
  { name: "Lázaro Cárdenas", coords: [19.48977, -100.4859] },
  { name: "León", coords: [21.12908, -101.67374] },
  { name: "Lerdo de Tejada", coords: [18.62936, -95.51968] },
  { name: "Lerma", coords: [19.28881, -99.51163] },
  { name: "Libres", coords: [19.46574, -97.68737] },
  { name: "Macuspana", coords: [17.76052, -92.59539] },
  { name: "Manzanillo", coords: [19.11695, -104.34214] },
  { name: "Martínez de la Torre", coords: [20.07082, -97.06078] },
  { name: "Mixquiapan", coords: [20.1425, -98.4825] },
  { name: "Morelia", coords: [19.70078, -101.18443] },
  { name: "Moroleón", coords: [20.12571, -101.19208] },
  { name: "Orizaba", coords: [18.85195, -97.09957] },
  { name: "Otumba", coords: [19.69985, -98.75638] },
  { name: "Pachuca", coords: [20.11697, -98.73329] },
  { name: "Palenque", coords: [17.50953, -91.98248] },
  { name: "Papantla", coords: [20.44655, -97.32494] },
  { name: "Pátzcuaro", coords: [19.51594, -101.60887] },
  { name: "Pénjamo", coords: [20.43108, -101.72261] },
  { name: "Perote", coords: [19.56233, -97.24235] },
  { name: "Poza Rica", coords: [20.53315, -97.45946] },
  { name: "Puebla", coords: [19.07500, -98.20346] },
  { name: "Querétaro", coords: [20.58806, -100.38806] },
  { name: "Romita", coords: [20.87127, -101.51683] },
  { name: "Sahuayo", coords: [20.05859, -102.71575] },
  { name: "Salamanca", coords: [20.57196, -101.19154] },
  { name: "Salvatierra", coords: [20.21322, -100.88023] },
  { name: "San Andrés Tuxtla", coords: [18.4487, -95.21327] },
  { name: "San Felipe", coords: [21.47831, -101.21566] },
  { name: "San Francisco del Rincón", coords: [21.01843, -101.85515] },
  { name: "San José Iturbide", coords: [21.00153, -100.38416] },
  { name: "San Juan del Río", coords: [20.38886, -99.99577] },
  { name: "San Luis de la Paz", coords: [21.29771, -100.51736] },
  { name: "Santa María Texmelucan", coords: [19.29417, -98.53778] },
  { name: "Silao", coords: [20.94356, -101.42703] },
  { name: "Teapa", coords: [17.5497, -92.95211] },
  { name: "Tecamachalco", coords: [18.88352, -97.73344] },
  { name: "Tecolutla", coords: [20.48049, -97.01309] },
  { name: "Tecomán", coords: [18.91678, -103.87786] },
  { name: "Tehuacán", coords: [18.46422, -97.39735] },
  { name: "Tenango de Arista", coords: [19.10446, -99.5898] },
  { name: "Tepeaca", coords: [18.96688, -97.8998] },
  { name: "Tequisquiapan", coords: [20.5225, -99.89167] },
  { name: "Texcoco", coords: [19.51194, -98.88293] },
  { name: "Teziutlan", coords: [19.8173, -97.35992] },
  { name: "Tierra Blanca", coords: [18.44771, -96.35912] },
  { name: "Tihuatlan", coords: [20.71449, -97.53335] },
  { name: "Tizayuca", coords: [19.83721, -98.97607] },
  { name: "Tlapacoyan", coords: [19.96268, -97.21141] },
  { name: "Tlaxcala", coords: [19.31905, -98.19982] },
  { name: "Tlaxcoapan", coords: [20.09163, -99.22042] },
  { name: "Toluca", coords: [19.28786, -99.65324] },
  { name: "Tula de Allende", coords: [20.05161, -99.34397] },
  { name: "Tulancingo", coords: [20.08355, -98.36288] },
  { name: "Tuxpan", coords: [20.95777, -97.40805] },
  { name: "Uruapan", coords: [19.41116, -102.05644] },
  { name: "Valle de Santiago", coords: [20.3914, -101.19222] },
  { name: "Veracruz", coords: [19.18095, -96.1429] },
  { name: "Villa Guerrero", coords: [18.96211, -99.64061] },
  { name: "Villagrán", coords: [20.51452, -100.99745] },
  { name: "Villahermosa", coords: [17.98689, -92.93028] },
  { name: "Xalapa", coords: [19.53124, -96.91589] },
  { name: "Xonacatlán", coords: [19.40513, -99.52807] },
  { name: "Zamora", coords: [19.9855, -102.28387] },
  { name: "Zinapécuaro", coords: [19.86006, -100.82857] },
  { name: "Zitácuaro", coords: [19.43612, -100.35733] },
];

pines.forEach(pin => {
  L.marker(pin.coords, { icon: orangeIcon }) // Usar el icono personalizado
      .addTo(map)
      .bindPopup(pin.name);
});

//Pines Benjes
const blueIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const bluePines = [
  { name: "Puebla", coords: [19.03793, -98.20346] },
  { name: "Querétaro", coords: [20.58806, -100.38806] },
  { name: "Apodaca", coords: [25.78195, -100.18839] },
  { name: "Ciudad General Escobedo", coords: [25.79698, -100.31791] },
  { name: "Villahermosa", coords: [17.98689, -92.93028] },
  { name: "Saltillo", coords: [25.42321, -101.0053] },
];

bluePines.forEach(pin => {
  L.marker(pin.coords, { icon: blueIcon })
    .addTo(map)
    .bindPopup(pin.name);
});

/*Animaciones Stats*/
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 100; // Velocidad de la animación

  const startCount = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const countType = counter.getAttribute("data-type"); // Detecta si lleva "+"

      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          count = Math.ceil(count + increment);
          counter.innerText = (countType === "plus" ? "+" : "") + count;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = (countType === "plus" ? "+" : "") + target;
        }
      };

      updateCount();
    });
  };

  const section = document.querySelector("#cobertura");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      startCount();
      observer.disconnect(); // Detiene la animación después de ejecutarla una vez
    }
  }, { threshold: 0.5 });

  observer.observe(section);
});