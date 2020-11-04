/* This script below just runs as soon as the page in the main window loads and the plugin is enabled */
// alert('Grrr!')
// window.location.href = "https://www.nu.nl";

/* This scripts loads, waits for a request (by sendMessage), counts the bears and sends back the length of the result. */
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     // alert(request)

//     // Waits for a request to be received by another part of the application (the actual extension).. so this is like a messagebus but between files for the extension and the actual webpage visited?
//     const re = new RegExp('bear', 'gi');
//     const matches = document.documentElement.innerHTML.match(re)

//     // alert(matches);
//     sendResponse({count: matches.length})
// })

const re = new RegExp('bear', 'gi');
const matches = document.documentElement.innerHTML.match(re)

chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})