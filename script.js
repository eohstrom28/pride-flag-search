// How do I implement a search that displays only the pride flags with labels that match the search query?

// Create arrays to hold each flag's name, image path, and page path
const asexual = ["asexual", "./images/sexual-attraction/asexual.svg", "./flag-pages/asexual.html"];
const transgender = ["transgender", "./images/gender/transgender.svg", "./flag-pages/transgender.html"]

// Create array with an index representing each flag/identity
const allFlags = [asexual, transgender];

// Create array to be currently shown

// Create objects for each flag/identity to display to the user

// If there is no search query, all flag/label objects should be visible


// Create a function that executes when the search input is changed
function search() {
    // Create a selector for the search input
    let searchQuery = document.getElementById("searchInput");

    // Contains the current search query in uppercase letters
    let filteredSearchQuery = searchQuery.value.toUpperCase();

    // ul containing the flags and their labels
    let flagList = document.getElementById("flagsAndLabels");

    // li's contained within the flagList ul
    let flagItem = flagList.getElementsByTagName("li");
    
    // Contains the current flagItem's a element
    let flagLink;

    // Contains the text content of the current label's p element
    let flagName;

    // Iterate through each array member to see which names match the search query
    for (let i = 0; i < flagItem.length; i++) {
        flagLink = flagItem[i].getElementsByTagName("a")[0];
        flagName = flagLink.innerText;
        // If the label name matches, show it in the display
        if (flagName.toUpperCase().indexOf(filteredSearchQuery) > -1) {
            flagItem[i].style.display = "";
        }
        // If the label name doesn't match, hide it from the display
        else {
            flagItem[i].style.display = "none";
        }
    }
}