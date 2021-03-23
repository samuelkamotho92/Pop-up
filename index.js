const opy = document.querySelector(".open");
console.log(opy);
const contain = document.querySelector(".container");
console.log(contain);
opy.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked");
contain.classList.add("active");
console.log(contain.classList);
});
const closy = document.querySelector(".close");
console.log(closy);
closy.addEventListener("click",(e)=>{
    e.preventDefault();
    contain.classList.remove("active");
});
const opt = document.querySelector(".optimic");
const mod = document.querySelector(".modal");
opt.addEventListener("click",(e)=>{
mod.classList.add("active");
});
const term = document.querySelector(".terminate");
term.addEventListener("click",(e)=>{
mod.classList.remove("active");
});
