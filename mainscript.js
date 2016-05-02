function addIdea() {
    var node = document.createElement("LI");
    var buttonnode = document.createElement("BUTTON");
    buttonnode.setAttribute("onclick", "showDetails()")
    buttonnode.setAttribute("id", "idea" + document.getElementById("counter").value);
    document.getElementById("counter").value += 1;
    var textnode = document.createTextNode("This is a idea");
    node.appendChild(buttonnode);
    buttonnode.appendChild(textnode);
    document.getElementById("listoftasks").appendChild(node);
}
