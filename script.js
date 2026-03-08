const faders = document.querySelectorAll(".fade");

const appearOptions = {
threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(
entries,
appearOnScroll
) {
entries.forEach(entry => {
if (!entry.isIntersecting) {
return;
} else {
entry.target.classList.add("show");
appearOnScroll.unobserve(entry.target);
}
});
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});

window.onload = function(){

const container = document.querySelector(".hearts-bg");

const pageHeight = document.documentElement.scrollHeight;

const heartsCount = 100;

for(let i = 0; i < heartsCount; i++){

const heart = document.createElement("img");

heart.src = "heart.png";
heart.classList.add("heart");

const spacing = 70;

let size = Math.random()*80 + 180; 
let opacity = 0.18;

heart.style.width = size + "px";
heart.style.opacity = opacity;

let maxTop = pageHeight - size;
let top = Math.min(i * spacing + Math.random()*80, maxTop);

heart.style.top = top + "px";
heart.style.left = Math.random()*100 + "%";

heart.style.animationDuration = (3 + Math.random()*3) + "s";

container.appendChild(heart);

setTimeout(()=>{
heart.classList.add("show");
},100);

}

};

function openSite(){

const screen = document.getElementById("startScreen");

screen.style.opacity = "0";

setTimeout(()=>{
screen.style.display = "none";
},1000);

}

