gsap.to(".dot", {
  y: -30,
  stagger: {
    each: 0.2,
    repeat: -1,
    yoyo: true
  }
});

gsap.to(".shadow", {
    y: 30,
    stagger: {
      each: 0.2,
      repeat: -1,
      yoyo: true
    },
    opacity: 0.1
  });
  
