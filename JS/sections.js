// Comics
let comicsContainer = document.createElement('div');
comicsContainer.style.textAlign = 'center';
let comicsSection = document.getElementById('comics');
comicsSection.appendChild(comicsContainer);

// Programming
let programmingContainer = document.createElement('div');
programmingContainer.style.textAlign = 'center';
let programmingSection = document.getElementById('programming');
programmingSection.appendChild(programmingContainer);

// Biology
let biologyContainer = document.createElement('div');
biologyContainer.style.textAlign = 'center';
let biologySection = document.getElementById('biology');
biologySection.appendChild(biologyContainer);

let comicsImages = [
    '../images/img61.webp',
    '../images/img62.webp',
    '../images/img63.webp',
    '../images/img64.webp',
    '../images/img65.webp',
    '../images/img61.webp',
    '../images/img62.webp',
    '../images/img63.webp',
    '../images/img64.webp',
    '../images/img65.webp',
    '../images/img62.webp',
    '../images/img63.webp',
    '../images/img64.webp',
    '../images/img65.webp'
];

let programmingImages = [
    '../images/img81.webp',
    '../images/img82.webp',
    '../images/img83.webp',
    '../images/img84.webp',
    '../images/img85.webp',
    '../images/img86.webp',
    '../images/img81.webp',
    '../images/img82.webp',
    '../images/img83.webp',
    '../images/img84.webp',
    '../images/img85.webp',
    '../images/img82.webp',
    '../images/img83.webp',
    '../images/img84.webp',
    '../images/img85.webp'
];

let biologyImages = [
    '../images/img50.webp',
    '../images/img51.webp',
    '../images/img52.webp',
    '../images/img53.webp',
    '../images/img54.webp',
    '../images/img50.webp',
    '../images/img51.webp',
    '../images/img52.webp',
    '../images/img53.webp',
    '../images/img54.webp',
    '../images/img50.webp',
    '../images/img51.webp',
    '../images/img52.webp',
    '../images/img53.webp',
    '../images/img54.webp',
    '../images/img55.webp'
];

function element(container, imageUrl, title) {
    let card = document.createElement('div');
    let bookTitle = document.createElement('h3');
    let img = document.createElement('img');
    let showButton = document.createElement('a'); // Changed to anchor tag for navigation

    let head = document.createTextNode(title);

    img.src = imageUrl;
    bookTitle.appendChild(head);

    card.appendChild(img);
    card.appendChild(bookTitle);
    card.appendChild(showButton); // Append anchor tag to card

    container.appendChild(card);

    card.style.width = '200px';
    img.style.width = '100%';
    img.style.height = '200px'; // Adjusted image height
    card.style.backgroundColor = '#C4A484';
    card.style.color = '#fff';
    card.style.padding = '10px'; // Added padding
    card.style.textAlign = 'center';
    card.style.margin = '7px';
    card.style.display = 'inline-block';
    card.style.borderRadius = '10px'; // Added border radius
    container.style.minWidth = '650px'; // Adjust as needed

    showButton.innerHTML = 'Show Book'; // Button text
    showButton.style.marginTop = '10px'; // Adjust button styling
    showButton.style.cursor = 'pointer'; // Change cursor to pointer
    showButton.href = 'bookDetails.html'; // Link to book details page
    showButton.style.display = 'inline-block'; // Ensure button appears as an inline-block element
    showButton.style.textDecoration = 'none'; // Remove default underline
    showButton.style.backgroundColor = '#500'; // Button background color
    showButton.style.color = '#fff'; // Button text color
    showButton.style.padding = '8px 16px'; // Button padding
    showButton.style.border = 'none'; // Remove button border
    showButton.style.borderRadius = '5px'; // Button border radius

    // Hover effect for button
    showButton.addEventListener('mouseover', function () {
        showButton.style.backgroundColor = '#E64A19'; // Darker background color on hover
    });

    showButton.addEventListener('mouseout', function () {
        showButton.style.backgroundColor = '#500'; // Revert to original background color on mouseout
    });

    // Open link in the same tab
    showButton.target = '_self';
}



function showBooks(container, images, startIndex) {
    container.innerHTML = ''; // Clear previous content
    let numBooksPerPage = 6; // Changed from 5 to 8
    for (let i = startIndex; i < startIndex + numBooksPerPage && i < images.length; i++) {
        let title = 'Book ' + (i + 1);
        element(container, images[i], title);
    }
}


// Initialize books for each section
showBooks(comicsContainer, comicsImages, 0);
showBooks(programmingContainer, programmingImages, 0);
showBooks(biologyContainer, biologyImages, 0);

// Navigation buttons for comics
let comicsNextBtn = document.createElement('button');
comicsNextBtn.innerHTML = '&#9658;'; // Right arrow Unicode
comicsNextBtn.style.margin = '10px';
comicsNextBtn.style.fontSize = '24px';
comicsNextBtn.addEventListener('click', function () {
    next(comicsContainer, comicsImages);
});

let comicsPrevBtn = document.createElement('button');
comicsPrevBtn.innerHTML = '&#9668;'; // Left arrow Unicode
comicsPrevBtn.style.margin = '10px';
comicsPrevBtn.style.fontSize = '24px';
comicsPrevBtn.addEventListener('click', function () {
    previous(comicsContainer, comicsImages);
});

let comicsButtonDiv = document.createElement('div');
comicsButtonDiv.appendChild(comicsPrevBtn);
comicsButtonDiv.appendChild(comicsNextBtn);
comicsSection.appendChild(comicsButtonDiv);
comicsButtonDiv.style.textAlign = 'center';

// Navigation buttons for programming
let programmingNextBtn = document.createElement('button');
programmingNextBtn.innerHTML = '&#9658;'; // Right arrow Unicode
programmingNextBtn.style.margin = '10px';
programmingNextBtn.style.fontSize = '24px';
programmingNextBtn.addEventListener('click', function () {
    next(programmingContainer, programmingImages);
});

let programmingPrevBtn = document.createElement('button');
programmingPrevBtn.innerHTML = '&#9668;'; // Left arrow Unicode
programmingPrevBtn.style.margin = '10px';
programmingPrevBtn.style.fontSize = '24px';
programmingPrevBtn.addEventListener('click', function () {
    previous(programmingContainer, programmingImages);
});

let programmingButtonDiv = document.createElement('div');
programmingButtonDiv.appendChild(programmingPrevBtn);
programmingButtonDiv.appendChild(programmingNextBtn);
programmingSection.appendChild(programmingButtonDiv);
programmingButtonDiv.style.textAlign = 'center';

// Navigation buttons for biology
let biologyNextBtn = document.createElement('button');
biologyNextBtn.innerHTML = '&#9658;'; // Right arrow Unicode
biologyNextBtn.style.margin = '10px';
biologyNextBtn.style.fontSize = '24px';
biologyNextBtn.addEventListener('click', function () {
    next(biologyContainer, biologyImages);
});

let biologyPrevBtn = document.createElement('button');
biologyPrevBtn.innerHTML = '&#9668;'; // Left arrow Unicode
biologyPrevBtn.style.margin = '10px';
biologyPrevBtn.style.fontSize = '24px';
biologyPrevBtn.addEventListener('click', function () {
    previous(biologyContainer, biologyImages);
});

let biologyButtonDiv = document.createElement('div');
biologyButtonDiv.appendChild(biologyPrevBtn);
biologyButtonDiv.appendChild(biologyNextBtn);
biologySection.appendChild(biologyButtonDiv);
biologyButtonDiv.style.textAlign = 'center';

// Function to navigate next
function next(container, images) {
    let startIndex = parseInt(container.dataset.startIndex) || 0;
    if (startIndex + 6 < images.length) {
        startIndex++;
        container.dataset.startIndex = startIndex;
        showBooks(container, images, startIndex);
    }
}

// Function to navigate previous
function previous(container, images) {
    let startIndex = parseInt(container.dataset.startIndex) || 0;
    if (startIndex >= 1) {
        startIndex--;
        container.dataset.startIndex = startIndex;
        showBooks(container, images, startIndex);
    }
}