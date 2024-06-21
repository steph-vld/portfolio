let selection = Splitting();

gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
  y: 100,
  scaleY: 0,
  rotation: 90,
  opacity: 0,
  color: "rgb(13,13,13)",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "top 60%",
    end: "bottom bottom",
    scrub: true,
  },
});
const lenis = new Lenis();

lenis.on("scroll", (e) => {});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 400);
});

gsap.ticker.lagSmoothing(0);


document.addEventListener('DOMContentLoaded', () => {
  const headerBg = document.querySelector('.header-bg');
  headerBg.classList.add('fade-in-animation');
});
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
