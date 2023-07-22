var BookmarkName = document.getElementById("bookmarkName");
var BookmarkUrl = document.getElementById("bookmarkUrl");

var WebsitesContainer=[];

if (localStorage.getItem("Websites") != null) {
    WebsitesContainer =JSON.parse(localStorage.getItem("Websites"));
    DispalyData();
}

function AddToTable() {
    var Website={
        BookmarkNameValue: BookmarkName.value,
        BookmarkUrlValue: BookmarkUrl.value

    }

    WebsitesContainer.push(Website);

    localStorage.setItem("Websites" , JSON.stringify(WebsitesContainer))
    DispalyData()

}
function DispalyData() {
    var cartona = '';

    for (var i = 1; i < WebsitesContainer.length; i++) {
        cartona +=`
        <tr>
            <td>${i}</td>
            <td>${WebsitesContainer[i].BookmarkNameValue}</td>
            <td><button onclick="VisitWebSite(${i});" class="btn Visitbtn" > <i class="fa-solid fa-eye"></i> Vist</button></td>
            <td><button onclick="DeleteItem(${i})" class="btn DeleteBtn" > <i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
    `
    }
    document.getElementById("tableContent").innerHTML= cartona;
}
function DeleteItem(ItemNumber) {
    WebsitesContainer.splice(ItemNumber , 1);
    localStorage.setItem("Websites" , JSON.stringify(WebsitesContainer));
    DispalyData();
}
function VisitWebSite(Index){
    // location.href = WebsitesContainer[Index].BookmarkUrlValue;
    window.open(WebsitesContainer[Index].BookmarkUrlValue)
}