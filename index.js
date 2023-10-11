// Function to count Froyo flavors
function countFroyoFlavors() {
    // Ask the user to enter a list of comma-separated Froyo flavors
    const input = prompt("Enter a list of comma-separated Froyo flavors:");

    if (input === null) {
        // User canceled the prompt
        console.log("Operation canceled.");
        return;
    }

    // Split the input into an array of flavors
    const flavors = input.split(",").map(flavor => flavor.trim());

    // Create an object to store the counts of each flavor
    const flavorCounts = {};

    // Count the flavors
    for (const flavor of flavors) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }

    // Display the flavor counts in the console
    console.log("Froyo Flavor Counts:");
    for (const flavor in flavorCounts) {
        console.log(`${flavor}: ${flavorCounts[flavor]}`);
    }
}

// Call the function to start the process
countFroyoFlavors();
