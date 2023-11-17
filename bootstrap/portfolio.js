let b = document.querySelector("#button");
let u = document.querySelector("ul");
let s = document.querySelector("section");
let ul = document.querySelector("ul");
ul.addEventListener("click", () => {
  u.classList.remove("slide");
});
s.addEventListener("click", () => {
  u.classList.remove("slide");
  //console.log("hii")
});
b.addEventListener("click", () => {
  u.classList.toggle("slide");
});
let s1 = document.querySelector("#span");
let l = document.createElement("h1");
function main1() {
  function func2() {
    s1.innerHTML = "Logith";
    l.remove();
  }
  setTimeout(func2, 0);
  function func() {
    s1.innerHTML = "Frontend Developer";
    l.id = "a";
    l.innerHTML = "a";
    s.append(l);
  }
  setTimeout(func, 4000);

  function func1() {
    s1.innerHTML = "Designer";
  }
  setTimeout(func1, 8000);
}
main1();
setInterval(main1, 12000);

let g = window.location.href.split("#");
console.log(g);
let g1 = g[1];
console.log(g1);
let l1 = document.querySelector(".home1");
let l2 = document.querySelector(".about1");
let l3 = document.querySelector(".projects1");
let l4 = document.querySelector(".details1");
let l5 = document.querySelector(".service1");

if (g1 == "home") {
  console.log("hiii");
  l1.id = "active";
}
if (g1 == "About") {
  console.log("hiii");
  l2.id = "active";
}
if (g1 == "Projects") {
  console.log("hiii");
  l3.id = "active";
}
if (g1 == "service") {
  console.log("hiii");
  l5.id = "active";
}
if (g1 == "details") {
  console.log("hiii");
  l4.id = "active";
}
let f = document.querySelector("#foot");
let d = new Date();
let a1 = d.getFullYear();
console.log(a1);
f.innerHTML = `Copyright <i class="fa-regular fa-copyright"></i> ${a1} - Made By Logith`;
