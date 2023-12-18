window.addEventListener('scroll', function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 700)
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    cssMode: true,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disabledOnInteraction: false,
    },
  
    // If we need pagination
  
  
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

  