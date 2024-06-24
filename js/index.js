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



function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

particlesJS('particles-js', {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: '#00ffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#ffff'
      }
     
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
        sync: true
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
