const projects = [
  {
    name: "Todo",
    img: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "",
    desc: "lorem",
  },
  {
    name: "Money manger",
    img: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "",
    desc: "lorem",
  },
  {
    name: "Tic Tac Toe",
    img: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    url: "",
    desc: "lorem",
  },
];

str = "";
for (const item of projects) {
  str += `
<div class="card">
  <img src="${item.img}" alt="">
  <div class="card-body">
  <h1>${item.name}</h1>
  <p>${item.desc}</p>
  <a href="${item.url}">Click here</a>

</div>
</div>
`;
}
document.getElementById("projects").innerHTML = str;

gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  scrollTrigger:{trigger:".card", scrub:1,
  end:"+=300"},
  scale: 0,
  stagger: 0.5,
  rotate:360
});

gsap.from(".progress", {
  scrollTrigger:".progress",
  width: 0,
  stagger: 0.5,
});
