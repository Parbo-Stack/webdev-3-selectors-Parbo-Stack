function helpMe() {
    let hiddenElements = document.getElementsByClassName("hidden");

    for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.display = 'block';
    }
    let helperButtons = document.getElementsByClassName("HelperButton");

    for (let j = 0; j < helperButtons.length; j++) {
        helperButtons[j].style.display = 'none';
    }
}