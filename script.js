function toggleDescription(codeId) {
    
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => {
        desc.style.display = 'none';
    });

    
    const selectedDescription = document.getElementById(codeId);
    if (selectedDescription) {
        selectedDescription.style.display = 'block';
    }
}
function showPopup(codeTitle, description, imgPath) {
    document.getElementById('popup-content').innerHTML = `
        <h2>${codeTitle}</h2>
        <p>${description}</p>
        `;
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = `${codeTitle} screenshot`;
    img.style.width = "80%";
    document.getElementById('popup-content').appendChild(img);
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}






