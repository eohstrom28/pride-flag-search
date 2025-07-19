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

const whiteCheckbox = document.getElementById("white");
whiteCheckbox.addEventListener("click", () => filterByColor("white"));

const pinkCheckbox = document.getElementById("pink");
pinkCheckbox.addEventListener("click", () => filterByColor("pink"));

const redCheckbox = document.getElementById("red");
redCheckbox.addEventListener("click", () => filterByColor("red"));

const orangeCheckbox = document.getElementById("orange");
orangeCheckbox.addEventListener("click", () => filterByColor("orange"));

const yellowCheckbox = document.getElementById("yellow");
yellowCheckbox.addEventListener("click", () => filterByColor("yellow"));

const greenCheckbox = document.getElementById("green");
greenCheckbox.addEventListener("click", () => filterByColor("green"));

const blueCheckbox = document.getElementById("blue");
blueCheckbox.addEventListener("click", () => filterByColor("blue"));

const purpleCheckbox = document.getElementById("purple");
purpleCheckbox.addEventListener("click", () => filterByColor("purple"));

const grayCheckbox = document.getElementById("gray");
grayCheckbox.addEventListener("click", () => filterByColor("gray"));

const blackCheckbox = document.getElementById("black");
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

    // Unchecks all the checkboxes
    const checkBoxes = document.getElementsByTagName("input");
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].type == "checkbox") {
            checkBoxes[i].checked = false;
        }
    }
}