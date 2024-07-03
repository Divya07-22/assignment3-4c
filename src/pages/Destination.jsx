// destination.js

// Function to fetch data from an API (example)
async function fetchDestinationData(destinationName) {
    try {
        const response = await fetch(`https://api.example.com/destinations/${destinationName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching destination data:', error);
        return null;
    }
}

// Function to display destination details on the webpage
function displayDestination(destination) {
    // Example of how you might display destination information
    const destinationElement = document.getElementById('destination-info');
    if (destinationElement) {
        destinationElement.innerHTML = `
            <h2>${destination.name}</h2>
            <p>${destination.description}</p>
            <p>Location: ${destination.location}</p>
            <p>Rating: ${destination.rating}/5</p>
            <img src="${destination.image}" alt="${destination.name}">
        `;
    }
}

// Example usage
const destinationName = 'Mangalore'; // Replace with actual destination name
fetchDestinationData(destinationName)
    .then(destination => {
        if (destination) {
            displayDestination(destination);
        } else {
            console.error('Destination data not available');
        }
    })
    .catch(error => console.error('Error fetching destination data:', error));
