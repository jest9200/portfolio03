const hMenuRel = document.querySelector("#header_rel .menu");
const hMenuFix = document.querySelector("#header_fix .menu");
const sideMenu = document.querySelector("#side_menu");
const closeBtn = document.querySelector("#side_menu .close");
const masker = document.querySelector("#side_menu .masker");

hMenuRel.addEventListener("click",(e)=>{
    e.preventDefault();
    openMenu();
});

hMenuFix.addEventListener("click",(e)=>{
    e.preventDefault();
    openMenu();
});

closeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    closeMenu();
});

function openMenu(){
    sideMenu.style.width = "295px";
    masker.style.left = "235px";
}

function closeMenu(){
    sideMenu.style.width = "0px";
    masker.style.left = "60px";
}


// 사이드메뉴의 li들 클릭시 각 섹션으로 부드럽게 스크롤 이동
const sideList01 = document.querySelector("#side_menu .rooms");
const sideList02 = document.querySelector("#side_menu .breakfast");
const sideList03 = document.querySelector("#side_menu .features");
const sideList04 = document.querySelector("#side_menu .access");
const sideList05 = document.querySelector("#side_menu .gallery");
const sideList06 = document.querySelector("#side_menu .contact");

const cont1 = document.querySelector("#container .cont1");
const cont2 = document.querySelector("#container .cont2");
const cont3 = document.querySelector("#container .cont3");
const cont4 = document.querySelector("#container .cont4");
const cont5 = document.querySelector("#container .cont5");
const cont6 = document.querySelector("#container .cont6");
const cont7 = document.querySelector("#container .cont7");

// 반복문을 안쓰는 이유 -> 각 위치를 상세히 조정하기위해
sideList01.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: cont2.offsetTop + topCont.clientHeight,
        behavior: "smooth"
    });
    closeMenu();
});

sideList02.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: cont3.offsetTop + topCont.clientHeight - 190,
        behavior: "smooth"
    });
    closeMenu();
});
sideList03.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: cont4.offsetTop + topCont.clientHeight - 190,
        behavior: "smooth"
    });
    closeMenu();
});
sideList04.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: cont5.offsetTop + topCont.clientHeight,
        behavior: "smooth"
    });
    closeMenu();
});
sideList05.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: cont6.offsetTop + topCont.clientHeight,
        behavior: "smooth"
    });
    closeMenu();
});
sideList06.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top: cont7.offsetTop + topCont.clientHeight,
        behavior: "smooth"
    });
    closeMenu();
});