// How do I implement a search that displays only the pride flags with labels that match the search query?

// Create arrays to hold each flag's name, image path, and page path
const asexual = ["asexual", "./images/sexual-attraction/asexual.svg", "./flag-pages/asexual.html"];
const transgender = ["transgender", "./images/gender/transgender.svg", "./flag-pages/transgender.html"]

// Create array with an index representing each flag/identity
const allFlags = [asexual, transgender];

// Create objects for each flag/identity to display to the user
// If there is no search query, all flag/label objects should be visible
// Create a selector for the search input
// Create a function that executes when the search input is changed
// Iterate through each array member to see which names match the search query
// If the label name doesn't match, hide it from the display
// Make sure this loops indefinitely, but only searches the currently displayed flags/labels