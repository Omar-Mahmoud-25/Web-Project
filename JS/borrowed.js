
const books = [
    { image: '../images/img54.webp', title: 'Book 1' },
    { image: '../images/img83.webp', title: 'Book 2' },
    { image: '../images/img64.webp', title: 'Book 3' },
    { image: '../images/Spidey.png', title: 'Book 4' },
    { image: '../images/img81.webp', title: 'Book 5' },
    { image: '../images/img62.webp', title: 'Book 6' },
    { image: '../images/img63.webp', title: 'Book 7' },
    { image: '../images/img61.webp', title: 'Book 8' },
    { image: '../images/img84.webp', title: 'Book 9' },
    { image: '../images/img82.webp', title: 'Book 10' },
    { image: '../images/img65.webp', title: 'Book 11' },
    { image: '../images/img51.webp', title: 'Book 12' },
    { image: '../images/img52.webp', title: 'Book 13' },
    { image: '../images/img85.webp', title: 'Book 14' }
    // Add more books here as needed
];

const itemsPerPage = 6;
let currentPage = 0;

function displayBooks() {
    const container = document.querySelector('.book-container');
    container.innerHTML = '';

    const startIndex = currentPage; // Start index based on currentPage
    const endIndex = startIndex + itemsPerPage;

    const currentBooks = books.slice(startIndex, endIndex);

    currentBooks.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;
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
            // window.location.href = 'bookDetails.html';
            console.log(`Details for Book ${startIndex + index + 1}`);
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
    document.getElementById('nextBtn').disabled = endIndex >= books.length;
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        displayBooks();
    }
}

function nextPage() {
    const maxPage = books.length - itemsPerPage;
    if (currentPage < maxPage) {
        currentPage++;
        displayBooks();
    }
}

displayBooks(); // Initial display of books
