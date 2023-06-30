const formControl = document.querySelector("#form_control");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click",()=>{
    let dateValue = formControl.value;
    console.log(dateValue.substring(0,10)); // 체크인 날짜
    console.log(dateValue.substring(dateValue.length-10));  // 체크아웃 날짜
})