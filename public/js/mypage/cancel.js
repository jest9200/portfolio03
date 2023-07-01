const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener("click",(e)=>{
    let result = window.confirm("Do you really want to cancel your reservation?");
    if(result){
        alert("Your reservation has been canceled.");
        submit();
    } else {
        alert("It has been canceled.");
        e.preventDefault();
    }
})