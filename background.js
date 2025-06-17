
function MyGenericClick(info, tab) {
  console.log("clicked on page :", info, tab);
}

function MyImageClick(info,tab)
{
  console.log("clicked on image :",info , tab);
}

chrome.runtime.onInstalled.addListener(() =>{
chrome.contextMenus.create({
    id:"my-share",
    title: "share",
    contexts:["page"],

});
chrome.contextMenus.create({
    id:"my-image",
    title: "share image",
    contexts:["image"],

});
});

chrome.contextMenus.onClicked.addListener(MyGenericClick);
chrome.contextMenus.onClicked.addListener(MyImageClick);