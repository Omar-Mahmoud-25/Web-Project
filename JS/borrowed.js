
var Books = [
    { image: '../images/img54.webp', bookName: 'Book 1', url: 'bookDetails.html?name=Elementary Biology' },
    { image: '../images/img83.webp', bookName: 'Book 2', url: 'bookDetails.html?name=Computer Fundamentals and Programming in C'},
    { image: '../images/img64.webp', bookName: 'Book 3', url: 'bookDetails.html?name=The Avengers Vault'},
    { image: '../images/Spidey.png', bookName: 'Book 4', url: 'bookDetails.html?name=The Amazing Spider-man'},
    { image: '../images/img81.webp', bookName: 'Book 5', url: 'bookDetails.html?name=Computer Fundamentals'},
    { image: '../images/img50.webp', bookName: 'Book 6', url: 'bookDetails.html?name=The Biology Book'},
    { image: '../images/img63.webp', bookName: 'Book 7', url: 'bookDetails.html?name=X-men'},
    { image: '../images/img61.webp', bookName: 'Book 8', url: 'bookDetails.html?name=spider-man'},
    { image: '../images/img84.webp', bookName: 'Book 9', url: 'bookDetails.html?name=Computer Science with Python'},
    { image: '../images/img82.webp', bookName: 'Book 10', url: 'bookDetails.html?name=Programming with JAVA'},
    { image: '../images/img65.webp', bookName: 'Book 11', url: 'bookDetails.html?name=DeadPool'},
    { image: '../images/img51.webp', bookName: 'Book 12', url: 'bookDetails.html?name=Biology Dictionary'},
    { image: '../images/img52.webp', bookName: 'Book 13', url: 'bookDetails.html?name=master the NCERT Biology 1'},
    { image: '../images/img85.webp', bookName: 'Book 14', url: 'bookDetails.html?name=Computer Science'}
    // Add more books here as needed
];

const itemsPerPage = 6;
let currentPage = 0;

function displayBooks() {
    const container = document.querySelector('.book-container');
    container.innerHTML = '';

    const startIndex = currentPage; // Start index based on currentPage
    const endIndex = startIndex + itemsPerPage;

    const currentBooks = Books.slice(startIndex, endIndex);

    currentBooks.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.bookName;
        bookImage.style.width = '150px';
        bookImage.style.height = '200px';
        bookImage.style.objectFit = 'cover';
        bookImage.style.marginBottom = '10px';
        bookImage.style.paddingRight='10px';
        bookItem.appendChild(bookImage);

        const titleParagraph = document.createElement('p');
        titleParagraph.textContent = `Book ${startIndex + index + 1}`;
        titleParagraph.style.fontSize = '16px';
        titleParagraph.style.fontWeight = 'bold';
        titleParagraph.style.marginBottom = '10px';
        bookItem.appendChild(titleParagraph);

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        detailsButton.className = 'Book-Button';
        detailsButton.style.padding = '8px 16px';
        detailsButton.style.marginTop = '8px';
        detailsButton.style.backgroundColor = '#dcd5aa';
        detailsButton.style.color = '#000000';
        detailsButton.style.border = 'none';
        detailsButton.style.borderRadius = '4px';
        detailsButton.style.cursor = 'pointer';
        detailsButton.addEventListener('click', () => {
            // Handle details button click (e.g., redirect to book details page)
          window.location.href = book.url; // Change to your desired URL

        });
        bookItem.appendChild(detailsButton);

        container.appendChild(bookItem);
    });

    // Center align the book items within the container
    container.style.display = 'flex';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'center';
    container.style.gap = '10px';

    document.getElementById('prevBtn').disabled = currentPage === 0;
    document.getElementById('nextBtn').disabled = endIndex >= Books.length;
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        displayBooks();
    }
}

function nextPage() {
    const maxPage = Books.length - itemsPerPage;
    if (currentPage < maxPage) {
        currentPage++;
        displayBooks();
    }
}

displayBooks(); // Initial display of books
