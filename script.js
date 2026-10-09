
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed"*/
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotiveAnimation()

function navAnimation() {
    let nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", () => {
        console.log("hello");
        let tl = gsap.timeline();

        tl.to(".nav-bottom", {
            height: "22vh",
            bottom: "-21vh",
            duration: 0.3,
            ease: "none"
        })

        tl.from(".nav-bottom h5 span", {
            y: 20,
            stagger: {
                amount: 0.6,
            }
        })

    })

    nav.addEventListener("mouseleave", () => {
        let tl = gsap.timeline();
        tl.to(".nav-bottom", {
            height: "0",
            bottom: "0",
            duration: 0.3,
            ease: "none"
        })
    })
}

navAnimation();

function page2Animation() {
    let realms = document.querySelectorAll(".right-elem");
    console.log(realms);

    realms.forEach((realm) => {
        realm.addEventListener("mouseenter", (event) => {
            gsap.to(realm.childNodes[3], {
                opacity: 1,
                scale: 1,
                duration: 0.3
            })
        })

        realm.addEventListener("mouseleave", (event) => {
            gsap.to(realm.childNodes[3], {
                opacity: 0,
                scale: 0,
                duration: 0.3
            })
        })


        realm.addEventListener("mousemove", (event) => {
            console.log(realm.getBoundingClientRect());

            gsap.to(realm.childNodes[3], {
                x: event.x - realm.getBoundingClientRect().x - 40,
                y: event.y - realm.getBoundingClientRect().y - 80,
                duration: .5
            })

        })

    });
}

page2Animation();

function page3VideoAnimation() {
    let icon = document.querySelector(".icon");
    let video = document.querySelector("video")
    console.log(icon);

    icon.addEventListener("click", function (e) {
        icon.style.display = "none";
        video.play();
        console.log(e)
        gsap.to(video, {
            opacity: 1,
            transform: "scale(1)",
            duration: 0.5,
            zIndex: 111,
            // transition:"all ease 5s"
        })
    })

    video.addEventListener("click", function () {
        icon.style.display = "flex";
        video.pause();
        gsap.to(video, {
            opacity: 0,
            transform: "scaleX(.6) scaleY(.2)",
            duration: 0.5,
            zIndex: 1
        })
    })
}

page3VideoAnimation();

function page6VideoAnimation() {
    let sectionRight = document.querySelectorAll(".page6 .sec-right");
    console.log(sectionRight);

    sectionRight.forEach((section) => {
        console.log(section);
        section.addEventListener("mouseenter", (event) => {
            section.childNodes[5].play(),
                gsap.to(section.childNodes[5], {
                    opacity: 1,
                    duration: 0.3
                });

        });
        section.addEventListener("mouseleave", (event) => {
            section.childNodes[5].load(),
                gsap.to(section.childNodes[5], {
                    opacity: 0,
                    duration: 0.3
                });

        });

        section.addEventListener("mousemove", (event) => {
            console.log(event);
            let x = event.x - section.getBoundingClientRect().x - 40;
            let y = event.y - section.getBoundingClientRect().y - 80;
            console.log(x, y);
            gsap.to(section.childNodes[1], {
                x: x,
                y: y,
                zIndex: 111,
                duration: .5
            })
        })
    });

}

page6VideoAnimation();

function page7RightUpDownArrow() {
    let page7RightTech = document.querySelectorAll("#page7-right>div");
    console.log(page7RightTech);

    let num = 0;
    page7RightTech.forEach((elem) => {
        let arrow = elem.querySelector("i");
        elem.addEventListener("click", function () {
            if (num == 0) {
                num = 1;
                arrow.classList.remove("ri-arrow-down-s-line");
                arrow.classList.add("ri-arrow-up-s-line");
                console.log("up arrow")
            }
            else {
                console.log("down arrow")
                num = 0;
                arrow.classList.remove("ri-arrow-up-s-line");
                arrow.classList.add("ri-arrow-down-s-line");
            }

        })
    })
}

page7RightUpDownArrow();

function page9ScrollAnimation(){
    gsap.from(".btm9-content h5", {
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".btm9-content",
        scroller: "#main",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
    }
})      
}

page9ScrollAnimation();


let tl = gsap.timeline();
tl.from(".page1",{
    opacity:0,
    duration:.3
})
tl.from(".page1",{
    borderRadius:"200px",
    transform:"scaleX(.2) scaleY(.1)",
    translateX:100,
    translateY:150,
    duration:1.5,
  ease: "power2.out",
})
tl.from(".nav-div",{
    opacity:0,
    y: -50,
    duration:.5,
})
tl.from(".page1 h1, .page1 div, .page1 h5",{
    opacity:0,
    translateY:50,
    duration:1,
    delay:-.5,
    ease:"ease.out",
    stagger:{ 
        amount:-0.5
    }
    
})