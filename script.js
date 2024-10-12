function handleYesClick() {
    // Show the success message and hide the date card
    document.querySelector('.date-container').style.display = 'none';
    document.getElementById('messageContainer').style.display = 'block';
}

function handleNoHover() {
    // Generate random positions for the "No" button to move
    const noButton = document.querySelector('.no-button');
    const randomX = Math.floor(Math.random() * 300) - 150; // Move between -150px and 150px
    const randomY = Math.floor(Math.random() * 300) - 150;

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
