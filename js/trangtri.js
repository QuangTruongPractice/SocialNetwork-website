const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function(){
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
    input.setAttribute("type", "password")
});

eyeClose.addEventListener("click", function(){
    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    input.setAttribute("type","text");
});
const input1 = document.querySelector(".input1");
const eyeOpen1 = document.querySelector(".eyes-open");
const eyeClose1 = document.querySelector(".eyes-close");
eyeOpen1.addEventListener("click", function(){
    eyeOpen1.classList.add("hidden1");
    eyeClose1.classList.remove("hidden1");
    input1.setAttribute("type", "password")
});

eyeClose1.addEventListener("click", function(){
    eyeOpen1.classList.remove("hidden1");
    eyeClose1.classList.add("hidden1");
    input1.setAttribute("type","text");
});
