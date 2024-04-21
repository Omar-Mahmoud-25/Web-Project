// import Book from './book.js';
class Book {
    constructor(bookName, author, description, category, img) {
        this.bookName = bookName;
        this.author = author;
        this.description = description;
        this.category = category;
        this.img = img;
    }
}

var books = {};
let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere vitae itaque impedit officiis perspiciatis optio, omnis velit libero in! Laborum, dolorum cum. Quisquam molestias fuga sequi eveniet eius quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas error nam blanditiis numquam tempora illo, vel reprehenderit sint fugiat odio amet, provident voluptate necessitatibus, quos consequuntur. Nostrum, earum impedit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur ullam molestiae, repellat, ex voluptate natus vel nam earum officia eveniet fugit quisquam libero amet molestias commodi sunt? Temporibus, unde.';

function findBook(name) {
    const jsonData = localStorage.getItem("booksData");
    if (jsonData) {
      const data = JSON.parse(jsonData);
      for (const key in data) {
        if (data[key].bookName === name) {
          return true;
        }
      }
    }
    return false;
}

function add(name, author, description, category, image) {
    books[String(name)] = new Book(name, author, description, category, image);
    const jsonData = JSON.stringify(books);
    
    localStorage.setItem("booksData", jsonData);
}
  
  //storing books
  var titles = ['spider-man', 'The Amazing Spider-man', 'X-men', 'The Avengers Vault', 'DeadPool', 'Computer Fundamentals', 'Programming with JAVA', 'Computer Fundamentals and Programming in C', 'Computer Science with Python', 'Computer Science', 'Paradigms and Computer Programming Fundamentals', 'The Biology Book', 'Biology Dictionary', 'master the NCERT Biology 1', 'PUC Class 12 Biology', 'Elementary Biology', 'complete neet Biology'];
  var categories = ['Comics', 'Programming', 'Biology'];
  var authors = ['Stefan Petrucha', 'J. Michael Straczynski', 'Jim Shooter', 'Peter David', 'Stefan Petrucha', 'P.K. Sinha', 'E. Balagurusamy', 'Pradip Dey, Manas Gosh', 'Sumita Arora', 'Seema Bhatnagar', 'Alan Grid', 'D.K. Publishing', 'R. Guptas', 'Arihant Experts', 'Oswaal Books', 'K.N. Shatia', 'MTG Publication'];
  var images = ['../images/img61.webp', '../images/Spidey.png', '../images/img63.webp', '../images/img64.webp', '../images/img65.webp', '../images/img81.webp', '../images/img82.webp', '../images/img83.webp', '../images/img84.webp', '../images/img85.webp', '../images/img86.webp', '../images/img50.webp', '../images/img51.webp', '../images/img52.webp', '../images/img53.webp', '../images/img54.webp', '../images/img55.webp'];
  
  for(let i=0; i<titles.length; ++i) {
    if(i < 5 && !findBook(titles[i]))
      add(titles[i], authors[i], text, categories[0], images[i]);
    else if(i < 11 && !findBook(titles[i]))
      add(titles[i], authors[i], text, categories[1], images[i]);
    else if(!findBook(titles[i]))
      add(titles[i], authors[i], text, categories[2], images[i]);
  }

//   function printBooks(data) {
//     for (const key in data) {
//       console.log(data[key]);
//     }
//   }
