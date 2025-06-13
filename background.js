


function MyGenericClick(info, tab) {
  console.log("clicked on page :", info, tab);
}


chrome.runtime.onInstalled.addListener(() =>{
chrome.contextMenus.create({
    id:"my-checkbox",
    title: "share",
    contexts:["page"],

});
});

chrome.contextMenus.onClicked.addListener(MyGenericClick);
