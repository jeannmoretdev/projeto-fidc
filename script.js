window.addEventListener('scroll', function(){
  let header = this.document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 650)
  
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

  document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone");
    const cnpjInput = document.getElementById("cnpj");
  
    telefoneInput.addEventListener("input", function (event) {
      formatTelefone(event);
    });
  
    cnpjInput.addEventListener("input", function (event) {
      formatCNPJ(event);
    });
  });


  function formatTelefone(event) {
    let inputNumber = event.target.value.replace(/\D/g, "");

    let formattedNumber = "";
    for (let i = 0; i < inputNumber.length; i++) {
      if (i === 0) formattedNumber += "("
      if (i === 2) formattedNumber += ") ";
      if (i === 7) formattedNumber += "-";
      formattedNumber += inputNumber[i];

    }

    event.target.value = formattedNumber;

  }

  function formatCNPJ(event) {
    let inputCNPJ = event.target.value.replace(/\D/g, "");
    let formattedCnpj = '';

    formattedCnpj = "";
    for (let i = 0; i < inputCNPJ.length; i++) {
      if (i === 2 )formattedCnpj +=".";
      if (i === 5 )formattedCnpj +=".";
      if (i === 8 )formattedCnpj +="/";
      if (i === 12 )formattedCnpj +="-";
      formattedCnpj += inputCNPJ[i];
    }

    event.target.value = formattedCnpj

  }
 
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible")

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true)
    navToggle.setAttribute('aria-expended', true)
  } else if (visibility === "true"){
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute('aria-expended', false)

  }
})