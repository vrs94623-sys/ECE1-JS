// Change text
document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("heading").innerHTML = "Text Changed!";
});

// Change color
document.getElementById("changeColor").addEventListener("click", function() {
    document.getElementById("para").style.color = "red";
});

// Hide paragraph
document.getElementById("hide").addEventListener("click", function() {
    document.getElementById("para").style.display = "none";
});

// Show paragraph
document.getElementById("show").addEventListener("click", function() {
    document.getElementById("para").style.display = "block";
});

// Mouseover event
document.getElementById("box").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
    this.innerHTML = "Mouse Over!";
});

// Mouseout event
document.getElementById("box").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
    this.innerHTML = "Hover Me";
});

// Input typing event
document.getElementById("inputBox").addEventListener("keyup", function() {
    document.getElementById("display").innerHTML = "You typed: " + this.value;
});