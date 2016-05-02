var id;

function addIdea() {
    var count = document.getElementById("counter");
    var node = document.createElement("LI");
    node.setAttribute("id", "idea" + count.value);

    var buttonnode = document.createElement("BUTTON");
    buttonnode.setAttribute("onclick", "showDetails(idea" + count.value + ")")


    count.value = parseInt(count.value) + 1;

    var textnode = document.createTextNode("This is a idea");
    node.appendChild(buttonnode);

    buttonnode.appendChild(textnode);
    document.getElementById("listoftasks").appendChild(node);
}

function showDetails(listid) {
    //console.log(listid);
    var textnode = document.createTextNode("Description of idea");
    listid.appendChild(textnode);
}
