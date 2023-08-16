var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
   
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  // navigation bar effects

  window.addEventListener("scroll",function(){
    const header =this.document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY > 0) // this code is when i scroll down , to make class "sticky"
  })