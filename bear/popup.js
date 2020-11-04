document.addEventListener('DOMContentLoaded', function(){

    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.bears).forEach(function (url){
        const div = document.createElement('div');
        div.textContent = `${url}: ${bg.bears[url]}`;
        document.body.appendChild(div);
    }

    )
    // document.querySelector('button').addEventListener('click', onclickJack, false);

    // function onclickJack(){
    //     // we want to find all the bears on a page, but we won't find many bears by default like this because this function will now check our popup.html where it is loaded. Thus we need to point it to the opened webpage.
    //     chrome.tabs.query(
    //         {
    //             currentWindow: true, // what does this setting do?
    //             active: true // what does this setting do?
    //         },
    //         function (tabs) {
    //             chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount) // send a message to the first tab? or like first (thus the main) window?
    //         }
    //     )
    // }

    // function setCount (res) {
    //     const div = document.createElement('div');
    //     div.textContent = `${res.count} bears`;
    //     document.body.appendChild(div);
    // }
}, false)