const imageHobby = document.getElementById("imgh1");
const imageModal = document.getElementById("modal");
const close = document.getElementById("close");


imageHobby.addEventListener("click", () => {    
    imageModal.style.visibility = "visible";
    console.log("clicked");
});

close.addEventListener("click", () => {    
    imageModal.style.visibility = "hidden";
    console.log("clicked");
});

