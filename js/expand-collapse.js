// Selects the expand button
const expandButton = document.getElementById("expand");
// Runs expand function on click
expandButton.addEventListener("click", expand);

// Stores all details elements
const dropdowns = document.getElementsByTagName("details");

// Opens all details elements
function expand() {
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].open = "true";
    }
}

// Selects the collapse button
const collapseButton = document.getElementById("collapse");
// Runs collapse function on click
collapseButton.addEventListener("click", collapse);

// Removes open attribute from all details elements
function collapse() {
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].removeAttribute("open");
    }
}