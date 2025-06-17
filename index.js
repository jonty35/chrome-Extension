console.log("My Extension");

var links = document.getElementsByTagName("a");

for(let i = 0; i < links.length; i++ )
{
    let title =links[i].innerHTML;
    console.log("Link is ", title);
}