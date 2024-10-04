document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("dailyImage");

    // Array of image paths or URLs for each day of the week
    const images = [
        "images/sunday.png",   // Sunday
        "images/monday.png",   // Monday
        "images/tuesday.png",  // Tuesday
        "images/wednesday.png",// Wednesday
        "images/thursday.png", // Thursday
        "images/friday.png",   // Friday
        "images/saturday.png"  // Saturday
    ];

    // Get the current day of the week (0 represents Sunday)
    const currentDay = new Date().getDay();

    // Set the src of the image element to today's image
    imageElement.src = images[currentDay];
    imageElement.alt = `Image for ${currentDay}`;
});
