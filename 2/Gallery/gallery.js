document.querySelectorAll(".imgs img").forEach(element => {
    element.addEventListener("click", (e)=>{
        document.querySelector(".popup-back").classList.add("active");
        document.querySelector(".popup-img img").src =e.target.src;
    })
});

document.querySelector(".popup-back").addEventListener("click", (e)=>{
    e.target.classList.remove("active");

});