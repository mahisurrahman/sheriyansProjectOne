var crsr = document.querySelector("#cursor")
document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})

var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener('mousemove', function (dets) {
    crsrBlur.style.left = dets.x - 250 + "px"
    crsrBlur.style.top = dets.y - 250 + "px"
})




gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 3,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})