function locoxgsap(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    
    ScrollTrigger.refresh();
    }
    locoxgsap()




    
    function loader(){
      var loader = document.querySelector(".spinner")
    setTimeout(function(){
    loader.style.top ="-100%"
    },2000)
    }
    loader() 
    


    


gsap.to(".hazards-elem",{
  scrollTrigger: {
    trigger: ".hazards-imgs",
    scroller:".main",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: "#last",
    scrub:1
  },

  y:"-300%",
  ease: Power1,

})


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








      





