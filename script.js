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

var tl3 = gsap.timeline({
    scrollTrigger:{
        toggleActions:"play none none reset",
        trigger: ".ll1",
        start: "top 100%",   
    },
});

tl3.to(".ll1>.int-1",{
    y: -50,
    duration: 0.3,
})
.to(".ll1>.int-2",{
    y: -50,
    duration: 0.3,
})
.to(".ll1>.int-3",{
    y: -50,
    duration: 0.3,
})
var tl4 = gsap.timeline({
    scrollTrigger:{
        toggleActions:"play none none reset",
        trigger: ".ll2",
        start: "top 90%",   
    },
});
tl4.to(".ll2>.int-1",{
    y: -50,
    duration: 0.3,
})
.to(".ll2>.int-2",{
    y: -50,
    duration: 0.3,
})
.to(".ll2>.int-3",{
    y: -50,
    duration: 0.3,
});

gsap.to(".im-1",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b1",
    },
    x: "20rem",
    duration: 1, 
});
gsap.to(".im-3",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b3",
    },
    x: "20rem",
    duration: 1, 
});
gsap.to(".im-5",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b5",
    },
    x: "20rem",
    duration: 1, 
});
gsap.to(".cd-2",{
    scrollTrigger:{
        start: "center 90%",
        toggleActions:"play none none reset",
        trigger: ".b2",
    },
    x: "20rem",
    duration: 1, 
});
gsap.to(".cd-4",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b4",
    },
    x: "20rem",
    duration: 1, 
});
gsap.to(".cd-6",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b6",
    },
    x: "20rem",
    duration: 1, 
});
gsap.to(".im-2",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b2",
    },
    x: "-20rem",
    duration: 1, 
});
gsap.to(".im-4",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b4",
    },
    x: "-20rem",
    duration: 1, 
});
gsap.to(".im-6",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b6",
    },
    x: "-20rem",
    duration: 1, 
});
gsap.to(".cd-1",{
    scrollTrigger:{
        start: "center 90%",
        toggleActions:"play none none reset",
        trigger: ".b1",
    },
    x: "-20rem",
    duration: 1, 
});
gsap.to(".cd-3",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b3",
    },
    x: "-20rem",
    duration: 1, 
});
gsap.to(".cd-5",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".b5",
    },
    x: "-20rem",
    duration: 1, 
});
gsap.to(".img-1",{
    scrollTrigger:{
        start: "top 90%",
        toggleActions:"play none none reset",
        trigger: ".page-4-main",
    },
    x: "20rem",
    duration: 1, 
});