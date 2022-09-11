const imageEl = document.querySelector(".Rayan1");
const PrevEl = document.getElementById("Rayan3");
const nextEl = document.getElementById("Rayan4");

let x = 0
PrevEl.addEventListener("click", ()=>{
   x = x + 45;
   RayanGhazi()
});
nextEl.addEventListener("click", ()=>{
    x = x - 45;
    RayanGhazi()
 });
function RayanGhazi() {
    imageEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;    
}




const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterEl.innerText = textareaEl.Value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.Value.length;
}