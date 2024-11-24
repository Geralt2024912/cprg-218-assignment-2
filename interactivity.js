function showContent(id) {

    const infoBoxes = document.getElementsByClassName('info-box');
    for (let box of infoBoxes) {
        box.style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';
}
