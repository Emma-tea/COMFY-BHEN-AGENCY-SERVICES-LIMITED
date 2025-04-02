AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
 



  function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}


function sendMail(){
    let parms= {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      country : document.getElementById("country").value,
    }

  emailjs.send("service_i9k2zh9","template_g25m30c",parms).then(alert("Email Sent!!"))  
}


const firebaseConfig = {
  apikey: "YOUR_API_KEY",
  auth
