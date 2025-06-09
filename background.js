


function MyGenericClick(info,tab)
{
    console.log("clicked on page :", info,tab)
}

chrome.contextMenus.create({
    "title":"share",
    "onclick": MyGenericClick
})