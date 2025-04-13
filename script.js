// Select all elements with the "i" tag and store them in a NodeList called "stars" 
const stars = document.querySelectorAll(".stars i"); 
// Loop through the "stars" NodeList 
stars.forEach((star, index1) => {
// Add an event listener that runs a function when the "click" event is triggered 
  star.addEventListener("click", () => { 
     // Loop through the "stars" NodeList Again 
      stars.forEach((star, index2) => { 
       // Add the "active" class to the clicked star and any stars with a lower index 
       // and remove the "active" class from any stars with a higher index 
        index1 >= index2 ? star.classList.add("active") :star.classList.remove("active"); 
        }); 
    });
});
gsap.from(".im .img2",{
  duration: 2,
  delay:1,
  y: 500,
  opacity:0,
  scrollTrigger:{
    trigger:".im .img2",
    scroll:"body",
    markers: false,
    // start use for starting point from wher animation start and end use for end animation
    start:"top 170%",
    end:"top 50%",
    //this scrub use for smooth scroll nd for div/box are appearing with scrolling
    scrub:1,
  }
})
gsap.from(".im .text",{
  duration: 2,
  delay:1,
  y: 500,
  opacity:0,
  scrollTrigger:{
    trigger:".im .text",
    scroll:"body",
    markers: false,
    start:"top 130%",
    end:"top 50%",
    scrub:3,
  }
})
gsap.from(".img3",{
  duration: 2,
  delay:1,
  y: 500,
  opacity:0,
  scrollTrigger:{
    trigger:".img3",
    scroll:"body",
    markers: false,
    start:"top 120%",
    end:"top 50%",
    scrub:3,
  }
})
gsap.from(".img4",{
  duration: 1,
  delay:2,
  y: 500,
  opacity:0,
  scrollTrigger:{
    trigger:".img4",
    scroll:"body",
    markers: false,
    start:"top 100%",
    end:"top 50%",
    scrub:3,
  }
})
gsap.from(".textno",{
  duration: 1,
  delay:1,
  y: 500,
  opacity:0,
  scrollTrigger:{
    trigger:".textno",
    scroll:"body",
    markers: false,
    start:"top 100%",
    end:"top 50%",
    scrub:3,
  }
})
gsap.from(".fttext",{
  duration: 1,
  delay:2,
  y: 500,
  opacity:0,
  scrollTrigger:{
    trigger:".fttext",
    scroll:"body",
    markers: false,
    start:"top 100%",
    end:"top 50%",
    scrub:3,
  }
})
gsap.from("footer,.bt,.social",{
  duration: 1,
  delay:2,
  y: 500,
  opacity:0,
  scrollTrigger:{
    trigger:"footer",
    scroll:"body",
    markers: false,
    start:"top 150%",
    end:"top 108%",
    scrub:3,
  }
})