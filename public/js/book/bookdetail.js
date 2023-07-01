const formControl = document.querySelector("#form_control");
const searchBtn = document.querySelector(".searchBtn");


// 각 input type=number에 플러스 마이너스 기능 추가하기 (총 4개)
// 반복문이 애매한거 같아서 일단 각각 만들기
// adult
const adultInput = document.querySelector(".adult_wrap input");
const adultPlus = document.querySelector(".adult_wrap .plus");
const adultMinus = document.querySelector(".adult_wrap .minus");
adultPlus.addEventListener("click", () => {
    if (adultInput.value >= 1 && adultInput.value < 5) {
        adultInput.value++;
    }
});
adultMinus.addEventListener("click", () => {
    if (adultInput.value > 1 && adultInput.value <= 5) {
        adultInput.value--;
    }
});

// child01
const child01Input = document.querySelector(".line02 input");
const child01Plus = document.querySelector(".line02 .plus");
const child01Minus = document.querySelector(".line02 .minus");
child01Plus.addEventListener("click", () => {
    if (child01Input.value >= 0 && child01Input.value < 5) {
        child01Input.value++;
    }
});
child01Minus.addEventListener("click", () => {
    if (child01Input.value > 0 && child01Input.value <= 5) {
        child01Input.value--;
    }
});

// child02
const child02Input = document.querySelector(".line06 input");
const child02Plus = document.querySelector(".line06 .plus");
const child02Minus = document.querySelector(".line06 .minus");
child02Plus.addEventListener("click", () => {
    if (child02Input.value >= 0 && child02Input.value < 5) {
        child02Input.value++;
    }
});
child02Minus.addEventListener("click", () => {
    if (child02Input.value > 0 && child02Input.value <= 5) {
        child02Input.value--;
    }
});

// totalroom
const totalroomInput = document.querySelector(".room_wrap input");
const totalroomPlus = document.querySelector(".room_wrap .plus");
const totalroomMinus = document.querySelector(".room_wrap .minus");
totalroomPlus.addEventListener("click", () => {
    if (totalroomInput.value >= 1 && totalroomInput.value < 5) {
        totalroomInput.value++;
    }
})
totalroomMinus.addEventListener("click", () => {
    if (totalroomInput.value > 1 && totalroomInput.value <= 5) {
        totalroomInput.value--;
    }
})

// search버튼 누르면 select room(bot_wrap)등장
const checkDateInput = document.querySelector(".date input");
const botWrap = document.querySelector(".bot_wrap");
const dayContainer = document.querySelector(".dayContainer");

searchBtn.addEventListener("click", () => {
    botWrap.style.display = "block";
    window.scrollTo({
        top: botWrap.offsetTop,
        behavior: "smooth"
    })
})

// room01 ~ room04
const room01Input = document.querySelector(".room01 input");
const room01Plus = document.querySelector(".room01 .plus");
const room01Minus = document.querySelector(".room01 .minus");
room01Plus.addEventListener("click", () => {
    if (room01Input.value >= 0 && room01Input.value < 3) {
        room01Input.value++;
    }
})
room01Minus.addEventListener("click", () => {
    if (room01Input.value > 0 && room01Input.value <= 3) {
        room01Input.value--;
    }
})
const room02Input = document.querySelector(".room02 input");
const room02Plus = document.querySelector(".room02 .plus");
const room02Minus = document.querySelector(".room02 .minus");
room02Plus.addEventListener("click", () => {
    if (room02Input.value >= 0 && room02Input.value < 3) {
        room02Input.value++;
    }
})
room02Minus.addEventListener("click", () => {
    if (room02Input.value > 0 && room02Input.value <= 3) {
        room02Input.value--;
    }
})
const room03Input = document.querySelector(".room03 input");
const room03Plus = document.querySelector(".room03 .plus");
const room03Minus = document.querySelector(".room03 .minus");
room03Plus.addEventListener("click", () => {
    if (room03Input.value >= 0 && room03Input.value < 3) {
        room03Input.value++;
    }
})
room03Minus.addEventListener("click", () => {
    if (room03Input.value > 0 && room03Input.value <= 3) {
        room03Input.value--;
    }
})
const room04Input = document.querySelector(".room04 input");
const room04Plus = document.querySelector(".room04 .plus");
const room04Minus = document.querySelector(".room04 .minus");
room04Plus.addEventListener("click", () => {
    if (room04Input.value >= 0 && room04Input.value < 3) {
        room04Input.value++;
    }
})
room04Minus.addEventListener("click", () => {
    if (room04Input.value > 0 && room04Input.value <= 3) {
        room04Input.value--;
    }
})

// room01 ~ room04의 총합이 totalroom과 같을때만 submit
const bookBtn = document.querySelector(".bookBtn");
bookBtn.addEventListener("click", (e) => {
    let question = window.confirm("Are you sure you want to make a reservation?");
    if (question) {
        let totalroomCount = Number(totalroomInput.value);
        let room01Count = Number(room01Input.value);
        let room02Count = Number(room02Input.value);
        let room03Count = Number(room03Input.value);
        let room04Count = Number(room04Input.value);

        // 예약하려는 방 총 개수가 일치하는지에 대한 boolean 변수
        let roomCorrect = (totalroomCount === room01Count + room02Count + room03Count + room04Count);

        if (roomCorrect) {
            alert("Your reservation is complete!");
            submit();
        } else {
            e.preventDefault();
            alert("The number of rooms you selected does not match. Please check.");
        }
    } else {
        alert("It has been canceled.");
        e.preventDefault();
    }



})
