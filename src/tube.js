s= document.createElement("script");
s.src= chrome.runtime.getURL("src/chrome.js");

s.onload= function()
{
    this.remove();
}

document.head.appendChild(s);