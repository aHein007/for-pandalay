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
    header.classList.toggle("sticky",window.scrollY > 0) // this code is when i scroll down , to make class "sticky"
  })

  // navigation open / close
  const menuBtn =document.querySelector(".nav-bar .nav-menu-btn");
  const closeBtn =document.querySelector(".nav-close-btn");
  const navigation =document.querySelector(".navigation");

  menuBtn.addEventListener("click",() => {
    navigation.classList.add("active");
    console.log('this is menu');
  });

  closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
   
  });