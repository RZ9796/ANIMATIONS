const user =document.getElementById("user")
const dots =document.getElementById("dots")
const para =document.getElementById("para")
const cta =document.getElementById("cta")
const title =document.getElementById("title")
const navLink =document.querySelector(".nav-link")


const tl= gsap.timeline()
tl.from(".navbar", { width:0, duration:1 });
tl.from(".nav-link", { y:"100%", stagger: 0.2, opacity: 0, duration: 1 });
tl.from(user,{y:"100vh",durstion:1})
tl.from(dots,{rotate:360,scale:2,opacity:0,duration:1})
tl.from(title, { x:"-200vh", duration:1 });
tl.from(para, { x:"200vh", duration:1 });
tl.from(cta,{y:100,opacity:0,duration:1})



gsap.from(".circle",{scale:0,repeat:-1,yoyo:true,duration:0.6})
window.addEventListener("mousemove",function(event){
    const x = event.pageX;
    const y = event.pageY;
    gsap.to(".circle",0.7,{x,y})
    gsap.to(".tiny",0.2,{x,y})
})