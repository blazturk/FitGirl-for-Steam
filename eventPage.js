// Event listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function() {
  console.log("Free Steam Games extension installed or updated.");
});

// Event listener for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Example: Log the message received from the content script
  console.log("Message received from content script:", message);

  // Example: Send a response back to the content script
  sendResponse({ received: true });
});