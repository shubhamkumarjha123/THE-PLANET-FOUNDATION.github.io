let menu = document.querySelector('.fa-bars');
let movebar = document.querySelector('.movebar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    movebar.classList.toggle('move-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    movebar.classList.remove('move-toggle');
});
document.getElementById("fas fa-paper-plane").addEventListener("click",function(){
    document.querySelector(".btn").style.display = "flex";
})
