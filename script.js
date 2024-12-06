//select elements
const title = document.querySelector('.title');

//change text on button click
document.getElementById('changeTextButton').addEventListener("click", function() {
    title.textContent = "You clicked the change text button!";
});

// add a new paragraph
document.getElementById('addElementButton').addEventListener("click", function() {
    console.log("Add Element button clicked");  // Debugging log

    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added to the container.";

    // Check if the container exists
    const container = document.querySelector(".container");
    if (container) {
        container.appendChild(newParagraph);
        console.log("Paragraph added");
    } else {
        console.log("Container not found");
    }
});

//remove the last paragraph
document.getElementById("removeElementButton").addEventListener("click", function() {
    const lastParagraph = document.querySelector(".container p:last-child");
    if (lastParagraph) {
        document.querySelector(".container").removeChild(lastParagraph);
        console.log("Paragraph removed");
    } else {
        console.log("No paragraph to remove");
    }
});