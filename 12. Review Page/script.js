var screen = document.querySelector(".screen");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ddd when hover
var star1 = document.querySelector(".star-1");
star1.addEventListener("mouseover", ()=>{
    star1.classList.add("active");
});

var star2 = document.querySelector(".star-2");
star2.addEventListener("mouseover", ()=>{
    star1.classList.add("active");
    star2.classList.add("active");
});

var star3 = document.querySelector(".star-3");
star3.addEventListener("mouseover", ()=>{
    star1.classList.add("active");
    star2.classList.add("active");
    star3.classList.add("active");
});

var star4 = document.querySelector(".star-4");
star4.addEventListener("mouseover", ()=>{
    star1.classList.add("active");
    star2.classList.add("active");
    star3.classList.add("active");
    star4.classList.add("active");
});

var star5 = document.querySelector(".star-5");
star5.addEventListener("mouseover", ()=>{
    star1.classList.add("active");
    star2.classList.add("active");
    star3.classList.add("active");
    star4.classList.add("active");
    star5.classList.add("active");
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ remove when leave

star1.addEventListener("mouseleave", ()=>{
    star1.classList.remove("active");
});
star2.addEventListener("mouseleave", ()=>{
    star1.classList.remove("active");
    star2.classList.remove("active");
});
star3.addEventListener("mouseleave", ()=>{
    star1.classList.remove("active");
    star2.classList.remove("active");
    star3.classList.remove("active");
});
star4.addEventListener("mouseleave", ()=>{
    star1.classList.remove("active");
    star2.classList.remove("active");
    star3.classList.remove("active");
    star4.classList.remove("active");
});
star5.addEventListener("mouseleave", ()=>{
    star1.classList.remove("active");
    star2.classList.remove("active");
    star3.classList.remove("active");
    star4.classList.remove("active");
    star5.classList.remove("active");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ click
star1.addEventListener("click", ()=>{
    document.querySelector(".review").style.display = "none";
    screen.querySelectorAll("div")[0].children[0].innerHTML = "Thank you!";
    screen.querySelectorAll("div")[0].children[1].innerHTML = "We appreciate your feedback!";
})

star2.addEventListener("click", ()=>{
    document.querySelector(".review").style.display = "none";
    screen.querySelectorAll("div")[0].children[0].innerHTML = "Thank you!";
    screen.querySelectorAll("div")[0].children[1].innerHTML = "We appreciate your feedback!";
})

star3.addEventListener("click", ()=>{
    document.querySelector(".review").style.display = "none";
    screen.querySelectorAll("div")[0].children[0].innerHTML = "Thank you!";
    screen.querySelectorAll("div")[0].children[1].innerHTML = "We appreciate your feedback!";
})

star4.addEventListener("click", ()=>{
    var anchor = document.createElement("a");
    anchor.href ="#ThankYOU"
    anchor.click()

    document.querySelector(".review").style.display = "none";
    screen.querySelectorAll("div")[0].children[0].innerHTML = "Redirect User Now.";
    screen.querySelectorAll("div")[0].children[1].innerHTML = "Only when high review is given redirect the user to a chosen review page like google business.";
})

star5.addEventListener("click", ()=>{
    var anchor = document.createElement("a");
    anchor.href ="#ThankYOU"
    anchor.click()

    document.querySelector(".review").style.display = "none";
    screen.querySelectorAll("div")[0].children[0].innerHTML = "Redirect User Now.";
    screen.querySelectorAll("div")[0].children[1].innerHTML = "Only when high review is given redirect the user to a chosen review page like google business.";
})