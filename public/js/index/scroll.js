const headerFix = document.querySelector("#header_fix");
const topCont = document.querySelector("#top");
// console.log(cont1.offsetTop);
// console.dir(topCont);

window.addEventListener("scroll", () => {
    let scTop = window.scrollY;

    // header_fix 등장 기능
    if(scTop > topCont.clientHeight) {
        headerFix.style.top = "0px";
    } else {
        headerFix.style.top = "-85px";
    }

})
