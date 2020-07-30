// Function that will save the age into localStorage
function saveAge() {
    // Turns input into a integer, then into string, to make finding "Nan" easier
    if (parseInt(document.getElementById("age").value).toString() !== "NaN" || (parseInt(document.getElementByID("age").value) <= 0)) {
        // Store age value that user inputted in age variable  
        let age = document.getElementById("age").value;
        
        // Set the innerHTML of the ageDisplay element to what the user inputted
        document.getElementById("ageDisplay").innerHTML = age;
        document.getElementById("output").innerHTML = "Cookies = ";
        
        // Save age variable into localStorage ageKey key
        localStorage.setItem("ageKey", age);

    } else {
        document.getElementById("output").innerHTML = "Please enter a number greater than 0";
        document.getElementById("ageDisplay").innerHTML = "";
    }
}

// We have to use innerHTML to set the inside of HTML elements using JavaScript
document.getElementById("ageDisplay").innerHTML = localStorage.getItem("ageKey");

// We have to use placeholder to update input elements using JavaScript
document.getElementById("age").placeholder = "Cookies";

// Add listener to document that listens for keypress
// Run anonymous function that is defined in the same place
// Event is the argument that is defined by the event that just occurred
document.addEventListener("keypress", function(event) {
    if(document.getElementById("age").value.length > 0) {
        // If the event argument has its keycode variable equal to 13,
        // user pressed enter so run saveAge function
        if (event.keyCode == 13) {
            saveAge();
        }   
    }
});
