// Map the prompt to a corresponding animal URL
const imageHashMap = {
    "cat": "images/cat.jpeg",
    "dog": "images/dog.jpeg",
    "horse": "images/horse.jpeg",
    "panda": "images/panda.jpeg",
    "rabbit": "images/rabbit.jpeg",
    "otter": "images/otter.webp",
    "bird": "images/bird.jpeg",
    "jerboa": "images/jerboa.jpeg"
}

function displayImage(){
    // Extract the prompt. Lowercase all input to make it case-insensitive
    const prompt = document.getElementById('text-prompt').value.toLowerCase()
    const imgSrc = imageHashMap[prompt] || "./images/sorry_cant_find.jpeg"
    const gameViewer = document.getElementById('game-image')

    // Assess if the prompt animal is in the database
    gameViewer.src = imgSrc;
    (displayImage.alt = imgSrc === imageHashMap[prompt] ? 
        'This is a ${prompt}.' : "Sorry, can't find your animal here.")
}

// Detect "Enter" Key
document.getElementById('text-prompt').addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        displayImage()
    }
})