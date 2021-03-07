const glass = document.getElementById("glass");
const nav = document.getElementById("nav");
const tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: 1.5}})
const button = document.getElementById("lern-more-btn");

tl.from("img", {x: "-10%", opacity: 0})
  .from(".container", {opacity: 0, delay: .2, duration: 1}, "-=1.5")
  .from(".container", {x: "-20%", backdropFilter: "blur(0px)", duration: 2})
  .from(".seq", {y: -30, opacity: 0, stagger: .2, duration: .2}, "-=5")
  .from("h1", {y: 20, clipPath: "inset(0 0 100% 0)"}, "-=.4")
  .from(".nav", {y: 0, x: 250, clipPath: "inset( 0 100% 0)"}, "-=.5")
  .from("lern-more-btn", {x: -30, opacity: 0, stagger: .2, duration: .2}, "-=5")
