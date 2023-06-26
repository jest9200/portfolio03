function cont1Change() {
    const topBg01 = document.querySelector(".topBg01");
    const topBg02 = document.querySelector(".topBg02");
    const topBg03 = document.querySelector(".topBg03");
    const g = 5000; // g와 h는 임의의 값으로 설정하였습니다.
    const h = 1500;

    topBg01.style.opacity = 1;
    topBg01.style.zIndex = 4;

    topBg02.style.opacity = 1;
    topBg02.style.zIndex = 3;

    topBg03.style.opacity = 1;
    topBg03.style.zIndex = 2;

    setTimeout(function () {
        topBg01.style.transition = `opacity ${h}ms`;
        topBg01.style.opacity = 0;
        topBg02.style.opacity = 1;
        setTimeout(function () {
            topBg02.style.transition = `opacity ${h}ms`;
            topBg02.style.opacity = 0;
            setTimeout(function () {
                topBg03.style.transition = `opacity ${h}ms`;
                topBg01.style.opacity = 1;
                topBg01.style.zIndex = 1;
                setTimeout(function() {
                    topBg03.style.opacity = 0;
                    setTimeout(function(){
                        cont1Change();
                    },1200);
                  },g/2);
            }, g/2);
        }, g);
    }, g);
}

window.addEventListener("load",()=>{
    cont1Change();
});