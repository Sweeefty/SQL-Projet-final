const title = document.querySelector("h1");

title.addEventListener("mouseover", function() {
    title.style.backgroundColor = "#FF5722"; 
});

title.addEventListener("mouseout", function() {
    title.style.backgroundColor = "transparent"; 
});
