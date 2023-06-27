const hMenuRel = document.querySelector("#header_rel .menu");
const hMenuFix = document.querySelector("#header_fix .menu");
const sideMenu = document.querySelector("#side_menu");
const closeBtn = document.querySelector("#side_menu .close");
const masker = document.querySelector("#side_menu .masker");

hMenuRel.addEventListener("click",(e)=>{
    e.preventDefault();
    sideMenu.style.width = "295px";
    masker.style.left = "235px";
});

hMenuFix.addEventListener("click",(e)=>{
    e.preventDefault();
    sideMenu.style.width = "295px";
    masker.style.left = "235px";
});

closeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    sideMenu.style.width = "0px";
    masker.style.left = "60px";
})