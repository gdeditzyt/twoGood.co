function videoConAnimation() {
    let videoCon = document.querySelector("#video-container");
    let mouseFollower = document.querySelector("#play");

    videoCon.addEventListener("mouseenter", () => {
        gsap.to(mouseFollower, {
            opacity: 1,
            scale: 1,
        })
    })

    videoCon.addEventListener("mouseleave", () => {
        gsap.to(mouseFollower, {
            opacity: 0,
            scale: 0,
        })
    })

    videoCon.addEventListener("mousemove", (dets) => {
        gsap.to(mouseFollower, {
            left: dets.x,
            top: dets.y,
        })
    })
}
videoConAnimation();

gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})