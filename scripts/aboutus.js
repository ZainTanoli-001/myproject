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

  





var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
 crsr.style.left = dets.x + 30 + "px"
 crsr.style.top =  dets.y + 30 + "px"
})



gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 3,
  duration: 1
})






var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1  h1",
        scroller:".main",
        // markers:true,
        start:"top 24%",
        end:"top 0",
        scrub:"3"

    }
    
})
tl.to(".page1 h1",{
    
    x:-140  
},"same")


tl.to(".page1 h2",{
    
    x:140
},"same")
tl.to(".page1 video",{
    
    width:"95%"
},"same")


var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page  h1",
      scroller:".main",
      start:"top -110%",
      end:"top -130%",
      scrub:"3",
      // markers:true

  }
  
})

tl2.to(".main",{
  backgroundColor:"#EFEAE3"
},)


var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page  h1",
      scroller:".main",
      start:"top -510%",
      end:"top -530%",
      scrub:"3",
      // markers:true

  }
  
})
tl3.to(".main",{
  backgroundColor:"#0F0D0D"
},)
tl3.to(".grid .head h3 ,.grid .para p ,.elem",{
  color:"#fff",
  
},"same")



var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:".page  h1",
      scroller:".main",
      start:"top -725%",
      end:"top -750%",
      scrub:"3",
      // markers:true

  }
  
})
tl4.to(".main",{
  backgroundColor:"transparent"
},)




// lastpage //
var boxex = document.querySelectorAll(".box-container #box")
 boxex.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = "30vw"
    crsr.style.height = "20vw"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor = "transparent"
    crsr.style.width = "1vw"
    crsr.style.height = "1vw"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `none`
  })
  
})

function loader(){
  var loader = document.querySelector(".spinner")
setTimeout(function(){
loader.style.top ="-100%"
},2000)
}
loader()