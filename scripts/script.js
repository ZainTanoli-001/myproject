
function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    
    });



    document.querySelector(".back-to-top .icon i , .back-to-top h3 ").addEventListener("click",() => {
        scroll.scrollTo(0)
    });
    document.querySelector(".back-to-top h3 ").addEventListener("click",() => {
        scroll.scrollTo(0)
    });
}

function fixedimage(){

var elemc = document.querySelector('.elem-container')
var fixed = document.querySelector('#fixed-image')
elemc.addEventListener("mouseover",function(){
    fixed.style.display = "block"
    
    
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
    
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseover",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}

function swiper(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    freeMode: true,
   
  });
}

function loader(){
    var loader = document.querySelector(".loader")
        setTimeout(function(){
      loader.style.top ="-100%"
        },4000)
}


 loader()
 swiper()
 fixedimage()
 locomotive()
 