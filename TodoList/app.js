/*If enter key is pressed*/
var completed = 0;
var input = document.getElementById("textInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});

/*Add item to list when the enter key is pressed*/
function addListItem() {
    var item = document.createElement("LI");
    var textInput = document.getElementById("textInput").value;
    var t = document.createTextNode(textInput);
    // item.setAttribute("id", textInput);
    // item.addEventListener('click', openNav);
    item.appendChild(t);

    if (textInput === "") {
        alert("Invalid input. You must write something");
    } else {
        document.getElementById("list").appendChild(item);
    }
    document.getElementById("textInput").value = "";

    var itemList = document.getElementsByTagName("LI");
    for (let index = 0; index < itemList.length; index++) {
        var close = document.createElement("button");
        var buttonSymbol = document.createElement("i");
        close.className = "close";
        buttonSymbol.className = "fa fa-trash";
        close.appendChild(buttonSymbol);
        itemList[index].appendChild(close);
    }

    var close = document.getElementsByClassName("close");
    for (let index = 0; index < close.length; index++) {
        close[index].onclick = erase;
    }

    for (let index = 0; index < itemList.length; index++) {
        var openSidebar = document.createElement("button");
        var symbol = document.createElement("i");
        openSidebar.className = "openSidebar";
        symbol.className = "fa fa-caret-square-o-left";
        openSidebar.appendChild(symbol);
        itemList[index].appendChild(openSidebar);
    }

    var openSidebar = document.getElementsByClassName("openSidebar");
    for (let index = 0; index < openSidebar.length; index++) {
        openSidebar[index].onclick = openNav;
    }

    var main = document.getElementById("main");
    for (let index = 0; index < itemList.length; index++) {
        var itemSidebar = itemList[index];
        var sidebar = document.createElement("div");
        sidebar.className = "sidebar";
        sidebar.id = "Sidebar";
        main.appendChild(sidebar);
        var closeSidebar = document.createElement("button");
        var symbol = document.createElement("i");
        closeSidebar.className = "closeSidebar";
        symbol.className = "fa fa-caret-square-o-right";
        closeSidebar.appendChild(symbol);
        sidebar.appendChild(closeSidebar);
    }

    var closeSidebar = document.getElementsByClassName("closeSidebar");
        for (let index = 0; index < closeSidebar.length; index++) {
        closeSidebar[index].onclick = closeNav;
    }
}

/*Create a check mark on a list item when it is clicked on. Shows completion of item*/
var list = document.getElementById('list');
list.addEventListener('click', check);

function check() {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
    completed++;
    showListItem();
}

/*When the close button or "x" button is clicked, erase the list item*/
var close = document.getElementsByClassName("close");
for (let index = 0; index < close.length; index++) {
    close[index].onclick = erase;
}

/*Erase the item from the list*/
function erase() {
    var div = this.parentElement;
    div.style.display = "none";
    completed -= 2;
}

function showListItem() {
    var numCompleted = document.getElementById("showCompleted");
    numCompleted.innerHTML = completed + " completed to-dos";
}

function openNav() {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("Sidebar").style.width = "0px";
    document.getElementById("main").style.marginRight = "0px";
}

