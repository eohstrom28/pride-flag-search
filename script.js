// Create arrays to hold each flag's name, image path, and page path
const agender = ["agender", "./images/gender/agender.svg", "./flag-pages/agender.html"];
const asexual = ["asexual", "./images/sexual-attraction/asexual.svg", "./flag-pages/asexual.html"];
const nonbinary = ["nonbinary", "./images/gender/nonbinary.svg", "./flag-pages/nonbinary.html"]
const transgender = ["transgender", "./images/gender/transgender.svg", "./flag-pages/transgender.html"];

// Create array with an index representing each flag/identity
const allFlags = [agender, asexual, nonbinary, transgender];

// Create array to be currently shown

// Create objects for each flag/identity to display to the user

// If there is no search query, all flag/label objects should be visible


const searchBar = document.getElementById("searchInput");
searchBar.addEventListener("keyup", search);

// TODO: make sure search doesn't override filters
// Create a function that executes when the search input is changed
function search() {
    // Create a selector for the search input
    let searchQuery = document.getElementById("searchInput");

    // Contains the current search query in uppercase letters
    let filteredSearchQuery = searchQuery.value.toUpperCase();

    // ul containing the flags and their labels
    let flagList = document.getElementById("flagsAndLabels");

    // li's contained within the flagList ul
    let flagItems = flagList.getElementsByTagName("li");
    
    // Contains the current flagItem's a element
    let flagLink;

    // Contains the text content of the current label's p element
    let flagName;

    // Iterate through each array member to see which names match the search query
    for (let i = 0; i < flagItems.length; i++) {
        flagLink = flagItems[i].getElementsByTagName("a")[0];
        flagName = flagLink.innerText;
        // If the label name matches, show it in the display
        if (flagName.toUpperCase().indexOf(filteredSearchQuery) > -1) {
            flagItems[i].style.display = "";
        }
        // If the label name doesn't match, hide it from the display
        else {
            flagItems[i].style.display = "none";
        }
    }
}

// Selects the checkbox for the color white
const whiteCheckbox = document.getElementById("white");

// Executes the filterByColor function when whiteCheckbox is clicked
whiteCheckbox.addEventListener("click", () => filterByColor("white"));

// Selects the checkbox for the color pink
const pinkCheckbox = document.getElementById("pink");

// Executes the filterByColor function when pinkCheckbox is clicked
pinkCheckbox.addEventListener("click", () => filterByColor("pink"));

// Selects the checkbox for the color red
const redCheckbox = document.getElementById("red");

// Executes the filterByColor function when redCheckbox is clicked
redCheckbox.addEventListener("click", () => filterByColor("red"));

// Selects the checkbox for the color orange
const orangeCheckbox = document.getElementById("orange");

// Executes the filterByColor function when orangeCheckbox is clicked
orangeCheckbox.addEventListener("click", () => filterByColor("orange"));

// Selects the checkbox for the color yellow
const yellowCheckbox = document.getElementById("yellow");

// Executes the filterByColor function when yellowCheckbox is clicked
yellowCheckbox.addEventListener("click", () => filterByColor("yellow"));

// Selects the checkbox for the color green
const greenCheckbox = document.getElementById("green");

// Executes the filterByColor function when greenCheckbox is clicked
greenCheckbox.addEventListener("click", () => filterByColor("green"));

// Selects the checkbox for the color blue
const blueCheckbox = document.getElementById("blue");

// Executes the filterByColor function when blueCheckbox is clicked
blueCheckbox.addEventListener("click", () => filterByColor("blue"));

// Selects the checkbox for the color purple
const purpleCheckbox = document.getElementById("purple");

// Executes the filterByColor function when purpleCheckbox is clicked
purpleCheckbox.addEventListener("click", () => filterByColor("purple"));

// Selects the checkbox for the color gray
const grayCheckbox = document.getElementById("gray");

// Executes the filterByColor function when grayCheckbox is clicked
grayCheckbox.addEventListener("click", () => filterByColor("gray"));

// Selects the checkbox for the color black
const blackCheckbox = document.getElementById("black");

// Executes the filterByColor function when blackCheckbox is clicked
blackCheckbox.addEventListener("click", () => filterByColor("black"));

function filterByColor(color) {
    // ul containing the flags and their labels
    let flagList = document.getElementById("flagsAndLabels");

    // li's contained within the flagList ul
    let flagItems = flagList.getElementsByTagName("li");
    
    // Contains the current flagItem's a element
    let flagLink;

    // Iterates through each flag item
    for (let i = 0; i < flagItems.length; i++) {
        flagLink = flagItems[i].getElementsByTagName("a")[0];
        // Hides the flag item if it does not have the specified color
        if (!flagLink.classList.contains(color)) {
            flagItems[i].style.display = "none";
        }
    }
}

// Selects the uncheckAll button
const uncheckButton = document.getElementById("uncheckAll");

// Executes the uncheckAllColors function when uncheckButton is clicked
uncheckButton.addEventListener("click", uncheckAllColors);

// Executes when the uncheckButton is clicked
function uncheckAllColors() {
    // ul containing the flags and their labels
    let flagList = document.getElementById("flagsAndLabels");

    // li's contained within the flagList ul
    let flagItems = flagList.getElementsByTagName("li");

    // Puts all flags back in the display as long as they match the search query
    for (let i = 0; i < flagItems.length; i++) {
        flagItems[i].style.display = "";
        search();
    }

    // Selects all checkboxes
    const checkBoxes = document.getElementsByTagName("input");
    // Unchecks all the checkboxes
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].type == "checkbox") {
            checkBoxes[i].checked = false;
        }
    }
}