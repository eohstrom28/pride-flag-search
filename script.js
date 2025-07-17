// How do I implement a search that displays only the pride flags with labels that match the search query?

// Create arrays to hold each flag's name, image path, and page path
const asexual = ["asexual", "./images/sexual-attraction/asexual.svg", "./flag-pages/asexual.html"];
const transgender = ["transgender", "./images/gender/transgender.svg", "./flag-pages/transgender.html"]

// Create array with an index representing each flag/identity
const allFlags = [asexual, transgender];

// Create array to be currently shown?

// Create objects for each flag/identity to display to the user

// If there is no search query, all flag/label objects should be visible

// Create a selector for the search input
let searchQuery = document.getElementById("searchLabels");

// Contains the current search query
let filteredSearchQuery = searchQuery.value.toUpperCase();

// ul containing the flags and their labels
let flagList = document.getElementById("search-results");

// li's contained within the ul of flags and labels
let flagItem = flagList.getElementsByTagName("li");

// Contains the current flag and label li's a element
let flagLink;

// Contains the p element of the current flag and label's a element
let flagParagraph;

// Contains the text content of the current label's p element
let flagName;

// Create a function that executes when the search input is changed
// Iterate through each array member to see which names match the search query
// If the label name doesn't match, hide it from the display
// Make sure this loops indefinitely, but only searches the currently displayed flags/labels