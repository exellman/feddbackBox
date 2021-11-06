let stars = document.getElementsByClassName("fas");
let emoji = document.getElementById("emoji");

for(let i = 0; i < stars.length; i++){
    stars[i].onclick = function(){
        for(let k = 0; k < stars.length; k++){
            stars[k].style.color = stars[k].id <= this.id ? "#ffd93b" : "#e4e4e4";
        }
        emoji.style.transform = `translateX(${-100 * i}px)`;
    }
}