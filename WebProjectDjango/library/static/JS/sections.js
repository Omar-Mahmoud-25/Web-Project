// Function to retrieve books from local storage
function getBooks(category) {
    const jsonData = localStorage.getItem("booksData");
    if (jsonData) {
        const data = JSON.parse(jsonData);
        console.log(data);
        return Object.values(data).filter(book => book.category === category);
    }
    return [];
}

// Function to initialize books for each section from local storage
function showind(container, category,index) {
    const books = getBooks(category);
    const images = books.map(book => book.img);
    const detailsUrls = books.map(book => `bookDetails.html?name=${encodeURIComponent(book.bookName)}`);
    showBooks(container, images, detailsUrls, index);
}

// Comics
let comicsContainer = document.createElement('div');
comicsContainer.style.textAlign = 'center';
comicsContainer.style.display = 'flex'; // Adding display flex
comicsContainer.style.flexWrap = 'nowrap'; // Adding flex-wrap nowrap
comicsContainer.style.justifyContent = 'center'; // Center items horizontally
comicsContainer.style.alignItems = 'center'; // Center items vertically
let comicsSection = document.getElementById('comics');
comicsSection.appendChild(comicsContainer);

// Programming
let programmingContainer = document.createElement('div');
programmingContainer.style.textAlign = 'center';
programmingContainer.style.display = 'flex'; // Adding display flex
programmingContainer.style.flexWrap = 'nowrap'; // Adding flex-wrap nowrap
programmingContainer.style.justifyContent = 'center'; // Center items horizontally
programmingContainer.style.alignItems = 'center'; // Center items vertically
let programmingSection = document.getElementById('programming');
programmingSection.appendChild(programmingContainer);

// Biology
let biologyContainer = document.createElement('div');
biologyContainer.style.textAlign = 'center';
biologyContainer.style.display = 'flex'; // Adding display flex
biologyContainer.style.flexWrap = 'nowrap'; // Adding flex-wrap nowrap
biologyContainer.style.justifyContent = 'center'; // Center items horizontally
biologyContainer.style.alignItems = 'center'; // Center items vertically
let biologySection = document.getElementById('biology');
biologySection.appendChild(biologyContainer);

// Function to create book elements
function element(container, imageUrl, detailsUrl, title) {
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
    showButton.href = detailsUrl; // Link to book details page
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

// Function to populate books in a container
function showBooks(container, images, detailsUrls, startIndex) {
    container.innerHTML = ''; // Clear previous content
    let numBooksPerPage = 6; // Changed from 5 to 8
    for (let i = startIndex; i < startIndex + numBooksPerPage && i < images.length; i++) {
        let title = 'Book ' + (i + 1);
        element(container, images[i], detailsUrls[i], title);
    }
}

// Initialize books for each section
showind(comicsContainer, 'Comics',0);
showind(programmingContainer, 'Programming',0);
showind(biologyContainer, 'Biology',0);

// Function to create navigation buttons
function createNavigationButtons(container, nextFunction, prevFunction) {
    let nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#9658;'; // Right arrow Unicode
    nextBtn.style.margin = '10px';
    nextBtn.style.fontSize = '24px';
    nextBtn.addEventListener('click', function () {
        nextFunction();
    });

    let prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#9668;'; // Left arrow Unicode
    prevBtn.style.margin = '10px';
    prevBtn.style.fontSize = '24px';
    prevBtn.addEventListener('click', function () {
        prevFunction();
    });

    let buttonDiv = document.createElement('div');
    buttonDiv.appendChild(prevBtn);
    buttonDiv.appendChild(nextBtn);
    container.appendChild(buttonDiv);
    buttonDiv.style.textAlign = 'center';
}

// Define current indices for each section
let comicsIndex = 0;
let programmingIndex = 0;
let biologyIndex = 0;

// Function to navigate next
function next(container, category) {
    let currindex = 0;
    const books = getBooks(category);
    const images = books.map(book => book.img);
    let maxx=images.length-6;

    switch (category) {
        case 'Comics':
            currindex = comicsIndex;
            break;
        case 'Programming':
            currindex = programmingIndex;
            break;
        case 'Biology':
            currindex = biologyIndex;
            break;
        default:
            break;
    }


 if(currindex<maxx) showind(container, category, ++currindex);
    switch (category) {
        case 'Comics':
            comicsIndex = currindex;
            break;
        case 'Programming':
            programmingIndex = currindex;
            break;
        case 'Biology':
            biologyIndex = currindex;
            break;
        default:
            break;
    }
}

// Function to navigate previous
function previous(container, category) {
    let currindex = 0;
    switch (category) {
        case 'Comics':
            currindex = comicsIndex;
            break;
        case 'Programming':
            currindex = programmingIndex;
            break;
        case 'Biology':
            currindex = biologyIndex;
            break;
        default:
            break;
    }

    if (currindex > 0) 
        showind(container, category, --currindex);
    

    switch (category) {
        case 'Comics':
            comicsIndex = currindex;
            break;
        case 'Programming':
            programmingIndex = currindex;
            break;
        case 'Biology':
            biologyIndex = currindex;
            break;
        default:
            break;
    }
}

// Navigation buttons for comics
createNavigationButtons(comicsSection, 
    function() {
        next(comicsContainer, 'Comics');
    }, 
    function() {
        previous(comicsContainer, 'Comics');
    });

// Navigation buttons for programming
createNavigationButtons(programmingSection, 
    function() {
        next(programmingContainer, 'Programming');
    }, 
    function() {
        previous(programmingContainer, 'Programming');
    });

// Navigation buttons for biology
createNavigationButtons(biologySection, 
    function() {
        next(biologyContainer, 'Biology');
    }, 
    function() {
        previous(biologyContainer, 'Biology');
    });
