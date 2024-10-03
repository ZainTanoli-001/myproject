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
function loader(){
    var tl = gsap.timeline()
tl.to(".yellow-div1",{
    top: "-100%",
    delay:0.5,
    duration:1,
    ease:"expo.out"

})
tl.from(".yellow-div2",{
    top: "100%",
    delay:0.3,
    duration:1,
    ease:"expo.out"

},"same")
tl.to(".loader h1",{
    delay:0.2,
  color:"black",
  delay:0.3,

},"same")
tl.to(".loader",{
    opacity:0
})
tl.to(".loader",{
    display:"none"
})

}

function page2(){


    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector(".page2")
    elems.forEach(function (ele){
        ele.addEventListener("mouseover", function(){
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`

        })
    } )
}


 locomotive()
 loader()
page2()

