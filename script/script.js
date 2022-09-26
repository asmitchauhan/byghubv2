
function showSearch() {
    document.getElementById("search-div").style.top = "0"
    document.getElementById("search-btn2").style.display = "none"
    document.getElementById("logo-div").style.display = "none"
    document.getElementById("search-div").style.width = "100%"
}
function hide() {
    document.getElementById("search-div").style.top = "-200px"
    document.getElementById("search-btn2").style.display = "block"
    document.getElementById("logo-div").style.display = "block"
    document.getElementById("search-div").style.width = "70%"
}
function show() {
    document.getElementById("grid2").classList.toggle("hidden")
    var x = document.getElementById("show")
    if (x.innerHTML == "Show More") {
        x.innerHTML = "Show Less"
    }
    else{
        x.innerHTML = "Show More"
    }
}
function show2() {
    document.getElementById("grid3").classList.toggle("hidden")
    var x = document.getElementById("show2")
    if (x.innerHTML == "Show More") {
        x.innerHTML = "Show Less"
    }
    else{
        x.innerHTML = "Show More"
    }
}