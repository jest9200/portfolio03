const headerFixLogo = document.querySelector("#header_fix .logo");
const toTop = document.querySelector(".footer .totop");

headerFixLogo.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

toTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});