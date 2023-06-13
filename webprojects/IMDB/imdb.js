const navbar=document.querySelector(".navbar");
allLi=document.querySelectorAll(".right-side-navbar li");

allLi.forEach((li,index)=>{
    
    li.addEventListener("click",e=>
    {
        if (li != document.querySelector(".signIn"))
        {
            e.preventDefault();
            navbar.querySelector(".active").classList.remove("active");
            li.classList.add("active");
            console.log(index);
            const indicator = document.querySelector(".indicator");
            indicator.style.transform = `translateX(calc(${index * 90}px))`;
        }
        console.log("hi")

        
    });   
});

function openNav()
{
    document.getElementById("myNav").
    style.height="100%";
}
function closeNav()
{
    document.getElementById("myNav").style.height="0%";


}
function openLogIn()
{
    console.log("Nutton Clicked");

    document.getElementById("myLogIn").style.display="block";
}
function closeLogIn()
{
    console.log("none");
    document.getElementById("myLogIn").style.display="none";
}


var slideIndex = 1;
carousel();


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}



function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}