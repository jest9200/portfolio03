// 로그인 버튼 활성화 비활성화
const loginBtn = document.querySelector(".btn_wrap button");
const inputTags = document.querySelectorAll("#login_form input");
const emailWrap = document.querySelector(".email_wrap input");
const passWrap = document.querySelector(".pass_wrap input");

for(let i=0; i<inputTags.length; i++){
    inputTags[i].addEventListener("keyup",()=>{
        if(emailWrap.value === "" || passWrap.value === ""){
            loginBtn.disabled = true;
        } else {
            loginBtn.disabled = false;
        }
    })
}

loginBtn.onclick = function (e) {

    axios.post('/user', {
        memberid: emailWrap.value,
        memberpass: passWrap.value
    })
        .then(function (response) {
            e.preventDefault();
            console.log(response);
            alert("Please check your e-mail and password.");
        })
        .catch(function (error) {
            console.log(error);
        });

}