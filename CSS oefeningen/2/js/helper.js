
function helpMe() {
    //document.getElementById("hiddenList").style.display = 'block';
    let elementsByClassName = document.getElementsByClassName("hidden");
    for (let i = 0; i < elementsByClassName.length; i++) {
        elementsByClassName[i].style.display = 'block';
    }
    let elementHTMLCollectionOf = document.getElementsByClassName("veryNiceButton");
    for (let j = 0; j < elementHTMLCollectionOf.length; j++) {
        elementHTMLCollectionOf[j].style.display = 'none';
    }
}