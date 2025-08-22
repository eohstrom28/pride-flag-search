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

    // Applies the shape filter to the search query
    applyShapeFilter();

    // Applies the current category filter
    applyCategoryFilter();

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
    let checkbox = document.getElementById(checkboxColors[i]);
    checkbox.addEventListener("click", () => filterByColor(checkboxColors[i], checkbox));
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

        search();
    }
    //Makes sure the back to top link is always displayed
    flagItems[flagItems.length - 1].style.display = "";
}

// Selects the resetColors button
const resetColorsButton = document.getElementById("resetColors");

// Executes the resetFilters function when uncheckButton is clicked
resetColorsButton.addEventListener("click", () => {
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
        
        // Selects all input elements
        const inputs = document.getElementsByTagName("input");
        // Unchecks all the checkboxes
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "checkbox") {
                inputs[i].checked = false;
            }
        }
    }

    // Puts all flags back in the display as long as they match the search query and filters
    search();
}

// Selects stripes input element
const stripesInput = document.getElementById("stripes");
// Runs filterByStripes when input is changed
stripesInput.addEventListener("input", filterByStripes);

// Holds the value of the stripes input element
let numberOfStripes = "";

// Executes when the stripes input is changed
function filterByStripes() {
    // Updates to be current value of the stripes input element
    numberOfStripes = stripes.value;

    // Resets the stripes filter if there is no input
    if (numberOfStripes == "") {
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
    // Does nothing if the current stripes input is empty
    if (numberOfStripes == "") {
        return;
    }

    // Iterates through each flag item
    for (let i = 0; i < flagItems.length; i++) {
        flagLink = flagItems[i].getElementsByTagName("a")[0];
        
        // Hides the flag item if it does not have the specified stripe number
        if (!flagLink.classList.contains(numberOfStripes)) {
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
}

// Selects the shapes div element
const shapesDiv = document.getElementById("shapes");
// Runs filterByShape when a radio button is selected
shapesDiv.addEventListener("change", filterByShape);

// Holds an array of the shape radio buttons
const shapeInputs = shapesDiv.getElementsByTagName("input");

// Holds the current value of the selected shape radio button
let currentShape = "";

// Executes when the shapes filter is changed
function filterByShape() {
    // Updates the currentShape
    for (let i = 0; i < shapeInputs.length; i++) {
        if (shapeInputs[i].checked == true) {
            currentShape = shapeInputs[i].id;
        }
    }

    if (currentShape == "none") {
        currentShape = "";
    }

    // Resets the shape filter
    resetShapeFilter();

    // Applies the shape filter if it isn't empty
    if (currentShape != "") {
        applyShapeFilter();
    }

    // Puts all flags back in the display as long as they match the search query and filters
    search();
}

// Applies the current shape filter
function applyShapeFilter() {
    // Does nothing if the current shape value is empty
    if (currentShape == "") {
        return;
    }

    // Iterates through each flag item
    for (let i = 0; i < flagItems.length; i++) {
        flagLink = flagItems[i].getElementsByTagName("a")[0];
        
        // Hides the flag item if it does not have the specified shape
        if (!flagLink.classList.contains(currentShape)) {
            flagItems[i].style.display = "none";
        }
    }
    //Makes sure the back to top link is always displayed
    flagItems[flagItems.length - 1].style.display = "";
}

function resetShapeFilter() {
    // Puts all flags back into the display
    for (let i = 0; i < flagItems.length; i++) {
        flagItems[i].style.display = "";
    }
}

// Selects the category select element
const categorySelect = document.getElementById("category");
// Runs filterByCategory when an option is selected
categorySelect.addEventListener("change", filterByCategory);

// Holds the current value of the selected category option
let currentCategory = "";

// Executes when the category filter is changed
function filterByCategory() {
    // Updates the currentCategory
    currentCategory = categorySelect.value;

    // Resets the category filter
    resetCategoryFilter();

    // Applies the category filter if it isn't empty
    if (currentCategory != "") {
        applyCategoryFilter();
    }

    // Puts all flags back in the display as long as they match the search query and filters
    search();
}

// Applies the current category filter
function applyCategoryFilter() {
    // Does nothing if the current category value is empty
    if (currentCategory == "") {
        return;
    }

    // Iterates through each flag item
    for (let i = 0; i < flagItems.length; i++) {
        flagLink = flagItems[i].getElementsByTagName("a")[0];
        
        // Hides the flag item if it does not have the specified category
        if (!flagLink.classList.contains(currentCategory)) {
            flagItems[i].style.display = "none";
        }
    }
    //Makes sure the back to top link is always displayed
    flagItems[flagItems.length - 1].style.display = "";
}

function resetCategoryFilter() {
    // Puts all flags back into the display
    for (let i = 0; i < flagItems.length; i++) {
        flagItems[i].style.display = "";
    }
}

// Selects the show/hide more filters button
const moreFiltersButton = document.getElementById("more-filters-button");
// Runs showMoreFilters when the show/hide more filters button is clicked
moreFiltersButton.addEventListener("click", showMoreFilters);

// Selects the div with the stripes, shape, and category filters
const moreFilters = document.getElementById("more-filters");
// Hides the stripes, shape, and category filters from display when the page loads
moreFilters.style.display = "none";

// Executes when the show/hide more filters button is clicked
function showMoreFilters() {
    // Stores the current display value of the more-filters div
    let moreFiltersDisplay = moreFilters.style.display;

    // If currently hidden, more-filters div is shown
    if (moreFiltersDisplay == "none") {
        moreFilters.style.display = "";
        // Changes the more-filters button text to say "Hide" instead of "Show"
        moreFiltersButton.innerHTML = "Hide more filters";
    }
    // If currently shown, hides more-filters div and resets those filters
    else {
        moreFilters.style.display = "none";

        // Resets and removes stripes filter
        resetStripesFilter();
        stripesInput.value = "";
        numberOfStripes = "";

        // Resets and removes shape filter
        resetShapeFilter();
        shapesSelect.value = "";
        currentShape = "";

        // Resets and removes category filter
        resetCategoryFilter();
        categorySelect.value = "";
        currentCategory = "";

        // Applies search query and color filters
        search();

        // Changes the more-filters button text to say "Show" instead of "Hide"
        moreFiltersButton.innerHTML = "Show more filters";
    }
}