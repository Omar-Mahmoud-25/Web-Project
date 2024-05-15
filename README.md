# Web-Project

## Pages

- Welcome Page
- Sign Up Page
- Login Page
- Add Book Page (Admin)
- Books Page
- Confirm Delete Book page (Could be made using alert function in JS) (Admin)
- Search Page (User and maybe Admin)
- Book Details Page (User)
- Borrowed Books (User)

---

## Navigation Bar

!!! Do not use Embed tag !!!

!!!use this code until javascript phase

Code

```
    <!--Header (^_^)start-->
    <header>
       <div id="navbar">
        <a href="index.html"><img id = 'logo' src='images/logo.jpeg' alt='Book Store Logo' /></a>
        <input type="text" name="Search" id="" placeholder="Search">
        <nav class='navigation'>
                <a href="index.html">Home</a>
                <a href="#about">about</a>
                <a href="#featured">featured</a>
                <a href="#newArrival">newArrival</a>
                <a href="#contact">contact</a>
                <a href="#reviews">reviews</a>
                <a href="categories.html">Available Books</a>
        </nav>
       </div>
    </header>
    <!--Header (^_^)end-->

```

!!!in javascript phase do the following:

- replace navigation bar in the html file with

```
<header id="nav"></header>
```

- then add this before the closing of the "html" tag

```
<script src="snippet.js"></script>
```


WE REACHED 200 COMMIT