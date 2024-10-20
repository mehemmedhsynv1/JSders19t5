let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let thisForm = new FormData(event.target);
    if(thisForm.get("password").length > 5){
        console.log("icaze verildi");
    }else{
        console.log("Girise icaze verilmedi");
    }
})