new WOW().init();
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      },
  });

// document.getElementById('myScroll').addEventListener('click', scrollToElement);
// function scrollToElement(e) {
// element = document.getElementById("myElementToScroll")
// element.scrollIntoView(true);
// }

$('[href^="#"]').on('click', function(){
    let href = $(this).attr('href'), elem = $(document).find(href);
    if(elem.length > 0) {
      let posY = elem.eq(0).offset().top;
      $('html, body').animate({
        scrollTop: posY
      }, 1000);
    }
    return false;
  });