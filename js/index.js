console.log("Welcome to Rajat's Portfolio");
const navToggle = document.getElementById("Toggle-btn");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle("nav-open")
});

navLinks.forEach(link =>{
   
    link.addEventListener('click',()=>{
        document.body.classList.remove("nav-open");
        
    })
});