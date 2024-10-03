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
locomotive()


function loader(){
    var loader = document.querySelector(".spinner")
  setTimeout(function(){
  loader.style.top ="-100%"
  },2000)
  }
  loader() 