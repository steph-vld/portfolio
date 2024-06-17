let selection = Splitting();

gsap.registerPlugin(ScrollTrigger)

gsap.from(selection[0].chars, {
    // y: 100,
    // scaleY: 0.5,
    // rotation: 90,
    // opacity: 1,
    color: "rgb(13,13,13)",
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".text-reveal",
        start: "top 15%",
        end: "bottom 100%",
        markers: true,
        scrub: true
    }
})
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
