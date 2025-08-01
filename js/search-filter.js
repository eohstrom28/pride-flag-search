// Create arrays to hold each flag's name, image path, and page path
const agender = ["agender", "./images/gender/agender.svg", "./flag-pages/agender.html"];
const asexual = ["asexual", "./images/sexual-attraction/asexual.svg", "./flag-pages/asexual.html"];

// Add bisexual, 8-stripe, 7-stripe, and 6-stripe pride flags

const nonbinary = ["nonbinary", "./images/gender/nonbinary.svg", "./flag-pages/nonbinary.html"]
const pansexual = ["pansexual", "./images/sexual-attraction/pansexual.svg", "./flag-pages/pansexual.html"]
const transgender = ["transgender", "./images/gender/transgender.svg", "./flag-pages/transgender.html"];

// Create array with an index representing each flag/identity
const allFlags = [agender, asexual, nonbinary, pansexual, transgender];

// Create objects for each flag/identity to display to the user

// ul containing the flags and their labels
const flagList = document.getElementById("flagsAndLabels");

// li's contained within the flagList ul
const flagItems = flagList.getElementsByTagName("li");

// Contains the current flagItem's a element
let flagLink;

// Selects the search input element
const searchBar = document.getElementById("searchInput");
// Runs the search function when a key is pressed
searchBar.addEventListener("keyup", search);

// Executes when the search input is changed
function search() {
    // Creates a selector for the search input
    let searchQuery = document.getElementById("searchInput");

    // Contains the current search query in uppercase letters
    let filteredSearchQuery = searchQuery.value.toUpperCase();

    // Contains flagLink's text content
    let flagName; 

    // Iterate through each flagItem member to see which names match the search query
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

    // Applies color filters to the search query
    applyColorFilters();

    // Applies the stripe filter to the search query
    applyStripesFilter();

    //Makes sure the back to top link is always displayed
    flagItems[flagItems.length - 1].style.display = "";
}

// Contains the currently checked colors
let filterColors = new Set();

// Array containing every checkbox color
const checkboxColors = ["white", "pink", "red", "orange", "yellow", "green", "blue", "purple", "brown", "gray",
    "black"];

// Create an event listener for every color checkbox to call filterByColor on click
for (let i = 0; i < checkboxColors.length; i++) {
    let element = document.getElementById(checkboxColors[i]);
    element.addEventListener("click", () => filterByColor(checkboxColors[i], element));
}

//Executes when a color checkbox is clicked
function filterByColor(color, colorChecked) {
    // Executes if the checkbox is checked
    if (colorChecked.checked == true) {
        // Add color to filterColors
        filterColors.add(color);

        // Iterates through each flag item
        for (let i = 0; i < flagItems.length; i++) {
            flagLink = flagItems[i].getElementsByTagName("a")[0];
            
            // Hides the flag item if it does not have the specified color
            if (!flagLink.classList.contains(color)) {
                flagItems[i].style.display = "none";
            }
        }
    }
    else {
        // Removes the color from the filterColors set
        filterColors.delete(color);

        // Resets the filters
        resetColorFilters(false);

        // Applies all current color filters
        applyColorFilters();

        // Applies the current stripe filter
        applyStripesFilter();
    }
    //Makes sure the back to top link is always displayed
    flagItems[flagItems.length - 1].style.display = "";
}

// Selects the uncheckAll button
const uncheckButton = document.getElementById("uncheckAll");

// Executes the resetFilters function when uncheckButton is clicked
uncheckButton.addEventListener("click", () => {
    resetColorFilters(true);
});

// Applies all current color filters
function applyColorFilters() {
    filterColors.forEach(function(i) {
        filterByColor(i, {checked:true});
    });
}

// Resets all color filters
// Removes all colors from filterColors set and resets checkboxes if deleteAll is true
function resetColorFilters(deleteAll) {
    if (deleteAll) {
        // Empties the filterColors set
        filterColors.clear();
        
        // Selects all checkboxes
        const checkBoxes = document.getElementsByTagName("input");
        // Unchecks all the checkboxes
        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].type == "checkbox") {
                checkBoxes[i].checked = false;
            }
        }
    }

    // Puts all flags back in the display as long as they match the search query and filters
    search();
}

// Selects stripes input element
const stripes = document.getElementById("stripes");
// Runs filterByStripes when input is changed
stripes.addEventListener("input", filterByStripes);

function filterByStripes() {
    // Holds the current value of the stripes input element
    let numberStripes = stripes.value;

    // Resets the stripes filter if there is no input
    if (numberStripes == "") {
        resetStripesFilter();
    }
    // Applies the stripes filter if there is an input
    else {
        applyStripesFilter();
    }
    // Applies search and color filters
    search();
}

// Applies the current stripes filter
function applyStripesFilter() {
    // Holds the current value of the stripes input element
    let numberStripes = stripes.value;

    // Does nothing if the current stripes input is empty
    if (numberStripes == "") {
        return;
    }

    // Iterates through each flag item
    for (let i = 0; i < flagItems.length; i++) {
        flagLink = flagItems[i].getElementsByTagName("a")[0];
        
        // Hides the flag item if it does not have the specified stripe number
        if (!flagLink.classList.contains(numberStripes)) {
            flagItems[i].style.display = "none";
        }
    }
    //Makes sure the back to top link is always displayed
    flagItems[flagItems.length - 1].style.display = "";
}

// Removes the stripe filter
function resetStripesFilter() {
    // Puts all flags back into the display
    for (let i = 0; i < flagItems.length; i++) {
        flagItems[i].style.display = "";
    }
    
    // Puts all flags back in the display as long as they match the search query and filters
    search();
}