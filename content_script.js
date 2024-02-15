// content_script.js

// Function to inject your custom button
function injectCustomButton() {
    // Find the buy button
    const buyButton = document.querySelector('.game_purchase_action');

    if (buyButton) {
        // Create your custom button
        const customButton = document.createElement('button');
        customButton.textContent = 'Get on FitGirl Repacks';
        customButton.classList.add('custom_button');

        // Insert your custom button next to the buy button
        buyButton.appendChild(customButton);

        // Add event listener to your custom button
        customButton.addEventListener('click', function() {
            // Get the game information
            let gameTitle = document.querySelector('.apphub_AppName').innerText;
            gameTitle = gameTitle.toLowerCase(); // Convert to lowercase
            gameTitle = gameTitle.replace(/\s+/g, '-');

            // Construct the URL for the page based on the game name
            const pageUrl = `https://fitgirl-repacks.site/${encodeURIComponent(gameTitle)}`;

            // Open a new tab/window with the URL
            window.open(pageUrl, '_blank');
        });
    }
}

// Call the function to inject your custom button when the page is loaded
injectCustomButton();
