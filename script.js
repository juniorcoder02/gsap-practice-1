// Practice Code
//  **GSAP ANIMATION**

//gsap.to means intital to final position
// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   rotate: 360,
//   delay: 1,
//   backgroundColor: "blue",
// });

//gsap.from means final to initial position
// gsap.from("#box", {
//   x: 1000,
//   duration: 2,
//   rotate: 360,
//   delay: 1,
//   backgroundColor: "blue",
// });

// **GSAP Timeline**
// let tl = gsap.timeline();
// tl.to("#box1", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });
// tl.to("#box2", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });
// tl.to("#box3", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });

// Project
let tl = gsap.timeline();
tl.from("nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.3,
  duration: 0.8,
  stagger: 0.2, //after one by one elements moving
});
tl.from("main h1", {
  x: -500,
  opacity: 0,
  delay: 0.3,
  duration: 0.8,
  stagger: 0.2,
});
tl.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  delay: 0.3,
  duration: 0.8,
  stagger: 0.5,
});
tl.from("footer h3",{
    y: 100,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    stagger: 0.2,
})