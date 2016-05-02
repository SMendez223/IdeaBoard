function addIdea() {
    var count = document.getElementById("counter");
    var node = document.createElement("li");
    node.setAttribute("id", "idea" + count.value);

    var buttonnode = document.createElement("button");
    buttonnode.setAttribute("onclick", "showDetails(idea" + count.value + ")");


    count.value = parseInt(count.value) + 1;

    var textnode = document.createTextNode("This is a idea");
    node.appendChild(buttonnode);

    var divnode = document.createElement("input");
    divnode.setAttribute("type", "hidden");
    divnode.value = promptDescription();
    divnode.appendChild(textnode);
    node.appendChild(divnode);

    buttonnode.appendChild(textnode);
    document.getElementById("listoftasks").appendChild(node);
}

function showDetails(listid) {
    var description = listid.children[1]
    if (description.type == "hidden") {
        description.type = "";
        return;
    }
    description.type = "hidden";

}

function promptDescription() {
    return "description of idea"
}
