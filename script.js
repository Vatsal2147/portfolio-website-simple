// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,

  lenisOptions: {
    duration: 1.8,       // How long the scroll animation lasts in seconds (higher = slower/longer glide)
    lerp: 0.05,          // Linear interpolation (0 to 1). Lower numbers mean a slower, smoother delay (try 0.03 to 0.07)
    wheelMultiplier: 0.8, // Directly scales down the scroll distance per wheel click (1.0 is default, 0.8 is 20% less distance)
    normalizeWheel: true // Keeps the scroll speed identical across different browsers and operating systems
  }
});


