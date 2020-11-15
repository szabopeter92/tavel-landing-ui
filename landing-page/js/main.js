const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumb = document.getElementsByClassName("thumb");
const hero = document.getElementById("hero");

let backgroundImage = new Array(

    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.png",
    "img/bg4.jpg",
    "img/bg5.png"
);

let i = 0;
next.addEventListener("click", () =>{

    if(i < 4){

        hero.style.backgroundImage = "url('"+backgroundImage[i+1]+"')";
        thumb[i+1].classList.add("active");
        thumb[i].classList.remove("active");
        hero.style.transition="background 0.2s ease";
        i++;
    }
    
});

prev.addEventListener("click", () =>{

    if(i > 0){

        hero.style.backgroundImage = "url('"+backgroundImage[i-1]+"')";
        thumb[i-1].classList.add("active");
        thumb[i].classList.remove("active");
        hero.style.transition="background 0.2s ease";
        i--;
    }
    
});