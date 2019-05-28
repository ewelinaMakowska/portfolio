/*BASIC GALLERY */

const imageHobby1 = document.getElementById("imgh1");
const iH1Link = document.getElementById("picture-link-1");

const imageHobby2 = document.getElementById("imgh2");
const iH2Link = document.getElementById("picture-link-2");

const imageHobby3 = document.getElementById("imgh3");
const iH3Link = document.getElementById("picture-link-3");

const imageHobby4 = document.getElementById("imgh4");
const iH4Link = document.getElementById("picture-link-4");

const imageHobby5 = document.getElementById("imgh5");
const iH5Link = document.getElementById("picture-link-5");

const imageHobby6 = document.getElementById("imgh6");
const iH6Link = document.getElementById("picture-link-6");

imageHobby1.addEventListener("mouseenter", () => {
    iH1Link.style.visibility = "visible";
});

imageHobby1.addEventListener("mouseleave", () => {
    iH1Link.style.visibility = "hidden";
});

imageHobby2.addEventListener("mouseenter", () => {
    iH2Link.style.visibility = "visible";
});

imageHobby2.addEventListener("mouseleave", () => {
    iH2Link.style.visibility = "hidden";
});

imageHobby3.addEventListener("mouseenter", () => {
    iH3Link.style.visibility = "visible";
});

imageHobby3.addEventListener("mouseleave", () => {
    iH3Link.style.visibility = "hidden";
});

imageHobby4.addEventListener("mouseenter", () => {
    iH4Link.style.visibility = "visible";
});

imageHobby4.addEventListener("mouseleave", () => {
    iH4Link.style.visibility = "hidden";
});

imageHobby5.addEventListener("mouseenter", () => {
    iH5Link.style.visibility = "visible";
});

imageHobby5.addEventListener("mouseleave", () => {
    iH5Link.style.visibility = "hidden";
});

imageHobby6.addEventListener("mouseenter", () => {
    iH6Link.style.visibility = "visible";
});

imageHobby6.addEventListener("mouseleave", () => {
    iH6Link.style.visibility = "hidden";
});
/* --- TODO: implement a nice gallery
const imageHobby1 = document.getElementById("imgh1");
const imageHobby2 = document.getElementById("imgh2");
const imageModal = document.getElementById("modal");
//img background container
//arrow left
//arrow right
//img src url
let SRC = "url(messenger.jpg)";
let DESC = "Messenger";

const close = document.getElementById("close");


imageHobby1.addEventListener("click", () => {
    imageModal.style.backgroundImage = SRC;
    imageModal.style.visibility = "visible";

    console.log("clicked");
});

imageHobby2.addEventListener("click", () => { 
    SRC = "url(mage-portrait.jpg)";
    imageModal.style.backgroundImage = ": url('mage-portrait.jpg')";
    imageModal.style.visibility = "visible";

    console.log("clicked");
});



close.addEventListener("click", () => {    
    imageModal.style.visibility = "hidden";
    console.log("clicked");
});

*/


