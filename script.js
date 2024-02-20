gsap.registerPlugin(ScrollTrigger);
let counter = 1;
setInterval(() => {
    let radio = document.querySelector("#radio" + counter);
    radio.checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

gsap.to(".page-8",{
    scrollTrigger:{
        scrub: 1,
        trigger: ".page-8-bg",
        pin: true,
        start: "top 10%",
        end: "50% 10%",
    },
});

gsap.to(".page-2-head",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".page-2",
    },
    y: -70,
    duration: 1,
});
var tl = gsap.timeline({
    scrollTrigger:{
        toggleActions:"play none none reset",
        trigger: ".page-2-line",
        start: "top 100%",   
    },
});

tl.to(".l1>.in-1",{
    y: -50,
    duration: 0.3,
})
.to(".l1>.in-2",{
    y: -50,
    duration: 0.3,
})
.to(".l1>.in-3",{
    y: -50,
    duration: 0.3,
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        toggleActions:"play none none reset",
        trigger: ".l2",
        start: "top 90%",   
    },
});
tl2.to(".l2>.in-1",{
    y: -50,
    duration: 0.3,
})
.to(".l2>.in-2",{
    y: -50,
    duration: 0.3,
})
.to(".l2>.in-3",{
    y: -50,
    duration: 0.3,
});


gsap.to(".page-5-head",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".page-5",
    },
    y: -70,
    duration: 1,
});
