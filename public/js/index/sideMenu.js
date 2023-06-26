const hMenuRel = document.querySelector("#header_rel .menu");
const hMenuFix = document.querySelector("#header_fix .menu");
const sideMenu = document.querySelector("#sideMenu");
const closeBtn = document.querySelector("#sideMenu .close");
const masker = document.querySelector("#sideMenu .masker");

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