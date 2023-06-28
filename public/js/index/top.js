function cont1Change() {
    const topBg01 = document.querySelector("#top .topBg01");
    const topBg02 = document.querySelector("#top .topBg02");
    const topBg03 = document.querySelector("#top .topBg03");
    const g = 5000; // g와 h는 임의의 값으로 설정하였습니다.
    const h = 1500;

    topBg01.style.opacity = 1;
    topBg01.style.zIndex = 4;

    topBg02.style.opacity = 1;
    topBg02.style.zIndex = 3;

    topBg03.style.opacity = 1;
    topBg03.style.zIndex = 2;

    setTimeout(()=>{
        topBg01.style.transition = `opacity ${h}ms`;
        topBg01.style.opacity = 0;
        topBg02.style.opacity = 1;
        setTimeout(()=>{
            topBg02.style.transition = `opacity ${h}ms`;
            topBg02.style.opacity = 0;
            setTimeout(()=>{
                topBg03.style.transition = `opacity ${h}ms`;
                topBg01.style.opacity = 1;
                topBg01.style.zIndex = 1;
                setTimeout(()=>{
                    topBg03.style.opacity = 0;
                    setTimeout(()=>{
                        cont1Change();
                    },1200);
                  },g/2);
            }, g/2);
        }, g);
    }, g);
}

const loader = document.querySelector("#loader");
const loaderImg = document.querySelector("#loader img");

window.addEventListener("load",()=>{
    setTimeout(()=>{
        loaderImg.style.opacity = 1;
        setTimeout(()=>{
            loaderImg.style.opacity = 0;
            setTimeout(()=>{
                loader.style.opacity = 0;
                setTimeout(()=>{
                    loader.style.display = "none";
                },900)
            },1000)
        },1500)
    },300);
    cont1Change();
});