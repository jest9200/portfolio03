const join = document.querySelector("#join");

const memberid = document.querySelector("#memberid");
const memberpass = document.querySelector("#memberpass");
const memberphone = document.querySelector("#memberphone");
const membername = document.querySelector("#membername");
const memberbirth = document.querySelector("#memberbirth");

// 체크박스 체크했을때만 버튼 활성화
const checkInput = document.querySelector(".check_wrap input");
const signupBtn = document.querySelector(".signup");
checkInput.addEventListener("click",()=>{
    if(checkInput.checked) {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
});

// 정규표현식
join.addEventListener("submit",(e)=>{
    const idValue = memberid.value;
    const passValue = memberpass.value;
    const phoneValue = memberphone.value;
    const birthValue = memberbirth.value;
    const nameValue = membername.value;

    const checkId = /^[\w]+[\@][a-z]{5,7}[\.][a-z]{2,3}$/;
    const checkPass = /^[\w\!\$\&\-]{12,16}$/;
    const checkPhone = /^(010)[\-][\d]{4}[\-][\d]{4}$/;
    const checkBirth = /^(19[\d]{2}|20[\d]{2})[\-](0[1-9]|1[0-2])[\-](0[1-9]|[1-2][0-9]|3[0-1])$/;
    const checkName = /^[가-힣]{2,4}$/;

    // 이메일 체크
    if (checkId.test(idValue)) {
        memberid.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberid.parentElement.className = "form_control no";
        memberid.parentElement.querySelector(".error_msg").innerText = "Email input method is not valid."
    }

    //비밀번호 체크
    if (checkPass.test(passValue)) {
        memberpass.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberpass.parentElement.className = "form_control no";
        memberpass.parentElement.querySelector(".error_msg").innerText = "Only 12 to 16 English words, numbers, _,!,$,&,- can be entered."
    }

    //연락처 체크
    if(checkPhone.test(phoneValue)){
        memberphone.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberphone.parentElement.className = "form_control no";
        memberphone.parentElement.querySelector(".error_msg").innerText = "Phone number input method is not valid."
    }

    //생년월일 체크
    if(checkBirth.test(birthValue)){
        memberbirth.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberbirth.parentElement.className = "form_control no";
        memberbirth.parentElement.querySelector(".error_msg").innerText = "The date of birth entry method is not valid."
    }

    //이름 체크
    if(checkName.test(nameValue)){
        membername.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        membername.parentElement.className = "form_control no";
        membername.parentElement.querySelector(".error_msg").innerText = "Only 2 to 4 Korean words can be entered."
    }
})