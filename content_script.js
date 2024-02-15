// content_script.js

// Function to inject custom CSS
function injectCustomCSS() {
    const css = `
        /* Define styles for the custom button */
        .custom_button {
            background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 5px;
        }

        .custom_button:hover {
            background-color: #45a049; /* Darker Green */
        }
    `;

    // Create a <style> element
    const styleElement = document.createElement('style');
    styleElement.textContent = css;

    // Append the <style> element to the document's <head>
    document.head.appendChild(styleElement);
}

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

            // Construct the URL for the page based on the game name
            const pageUrl = `https://fitgirl-repacks.site/?s=${encodeURIComponent(gameTitle)}`;

            // Open a new tab/window with the URL
            window.open(pageUrl, '_blank');
        });
    }
}

// Call the functions to inject custom CSS and custom button when the page is loaded
injectCustomCSS();
injectCustomButton();
