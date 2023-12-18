// const imgs = document.getElementById("img");
// const img = document.querySelectorAll("#img img");

// let idx = 0;
// const imgWidth = img[0].clientWidth;

// function carrossel(){

//     imgs.style.transform = `translateX(${-idx * imgWidth}px)`;
//     idx++;

//     if(idx > img.length - 1) {
//         idx = 0;
//     }
// }

// setInterval(carrossel, 4000);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    cssMode: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3200,
        disabledOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });