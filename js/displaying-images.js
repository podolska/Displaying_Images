function showPhoto () {
    const button = document.querySelector('.submitPhoto');
    button.addEventListener('click', showRandomPhoto);

    function showRandomPhoto (e) {
        e.preventDefault();
        let randomNumber = null;
        randomNumber= Math.floor(Math.random() * 10);
        if(randomNumber === 0) {
            randomNumber = 1;
        };
        const title = document.querySelector('.randomNumber');
        title.textContent = `Random numbers: ${randomNumber}`;
        const result = document.querySelector('.resultPhoto');
        result.setAttribute('src', `./images/${randomNumber}.jpg`);
    }
};

showPhoto();