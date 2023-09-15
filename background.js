chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "O",

    });

});


const sdale = 'https://www.sdale.org'

chrome.action.onClicked.addListener(async (tab) => {
    console.log("this is working")
    if ( tab.url.startsWith(sdale)){
        console.log("This works")
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id })
        const nextState = prevState === "O" ? "X" : "O"
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        })
    } 
})

