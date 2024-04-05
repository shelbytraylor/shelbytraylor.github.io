const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = {
    'images/pic1.jpg': 'Alternative Text 1',
    'images/pic2.jpg': 'Alternative Text 2',
    'images/pic3.jpg': 'Alternative Text 3',
    'images/pic4.jpg': 'Alternative Text 4',
    'images/pic5.jpg': 'Alternative Text 5',
}

/* Looping through images */

imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filename);
    newImage.setAttribute('alt', altTexts[filename]);

    // Add click event listener to each <img> element
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.getAttribute('src'));
        displayedImage.setAttribute('alt', this.getAttribute('alt'));
    });

    // Create a <figure> element to contain the <img> and its alternative text
    const figure = document.createElement('figure');
    figure.appendChild(newImage);

    // Append the <figure> element to the thumbBar
    thumbBar.appendChild(figure);
});

/* Wiring up the Darken/Lighten button */
let darken = false;
btn.addEventListener('click', function() {
    if (darken) {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        darken = false;
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        darken = true;
    }
});
