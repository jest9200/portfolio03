const headerFix = document.querySelector("#header_fix");
const topCont = document.querySelector("#top");

const cont2BotWrap = document.querySelector(".cont2 .bot_wrap");
const cont4BotWrap = document.querySelector(".cont4 .bot_wrap");
const cont5TrainWrap = document.querySelector(".cont5 .train");
const banner01 = document.querySelector(".cont6 .banner01");
const banner02 = document.querySelector(".cont6 .banner02");
const banner03 = document.querySelector(".cont6 .banner03");
const banner04 = document.querySelector(".cont6 .banner04");

window.addEventListener("scroll", () => {
    let scTop = window.scrollY;

    // header_fix 등장 기능
    if(scTop > topCont.clientHeight) {
        headerFix.style.top = "0px";
    } else {
        headerFix.style.top = "-85px";
    }

    // 스크롤 시 콘텐츠들 각각 등장 기능
    if(scTop > cont2.offsetTop){
        cont2.classList.add("open");
    } else {
        cont2.classList.remove("open");
    }

    if(scTop > cont2.offsetTop + topCont.clientHeight){
        cont2BotWrap.classList.add("open");
    } else {
        cont2BotWrap.classList.remove("open");
    }

    if(scTop > cont3.offsetTop){
        cont3.classList.add("open");
    } else {
        cont3.classList.remove("open");
    }

    if(scTop > cont4.offsetTop){
        cont4.classList.add("open");
    } else {
        cont4.classList.remove("open");
    }

    if(scTop > cont4.offsetTop + topCont.clientHeight){
        cont4BotWrap.classList.add("open");
    } else {
        cont4BotWrap.classList.remove("open");
    }

    if(scTop > cont5.offsetTop){
        cont5.classList.add("open");
    } else {
        cont5.classList.remove("open");
    }

    if(scTop > cont5.offsetTop + topCont.clientHeight ){
        cont5TrainWrap.classList.add("open");
    } else {
        cont5TrainWrap.classList.remove("open");
    }

   

    const mobile = matchMedia("screen and (max-width:768px)");
    if(mobile.matches){
        if(scTop > cont6.offsetTop){
            banner01.classList.add("open");
        } else {
            banner01.classList.remove("open");
        }
        
        if(scTop > cont6.offsetTop + 165){
            banner02.classList.add("open");
        } else {
            banner02.classList.remove("open");
        }
    
        if(scTop > cont6.offsetTop + 165 + 165){
            banner03.classList.add("open");
        } else {
            banner03.classList.remove("open");
        }
    
        if(scTop > cont6.offsetTop + 165 + 165 + 165){
            banner04.classList.add("open");
        } else {
            banner04.classList.remove("open");
        }
    } else {
        if(scTop > cont6.offsetTop){
            banner01.classList.add("open");
        } else {
            banner01.classList.remove("open");
        }
        
        if(scTop > cont6.offsetTop + topCont.clientHeight){
            banner02.classList.add("open");
        } else {
            banner02.classList.remove("open");
        }
    
        if(scTop > cont6.offsetTop + topCont.clientHeight + topCont.clientHeight){
            banner03.classList.add("open");
        } else {
            banner03.classList.remove("open");
        }
    
        if(scTop > cont6.offsetTop + topCont.clientHeight + topCont.clientHeight + topCont.clientHeight){
            banner04.classList.add("open");
        } else {
            banner04.classList.remove("open");
        }
    }
    

    if(scTop > cont7.offsetTop){
        cont7.classList.add("open");
    } else {
        cont7.classList.remove("open");
    }
})
