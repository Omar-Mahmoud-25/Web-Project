const searchBar = document.getElementById('searchBar'); 
const resultBox = document.getElementById('resultBox');

searchBar.addEventListener('input',function(){
    var xhr = new XMLHttpRequest();
    var searchTxt = searchBar.value;
    xhr.responseType = "json";
    xhr.onreadystatechange = function(){
        resultBox.innerHTML = '';
        this.response.results.forEach(book => {
            var item = document.createElement('a');
            item.textContent = book.name;
            item.setAttribute('href','/book/' + book.id + '/');
            var br = document.createElement('br');
            resultBox.appendChild(item);
            resultBox.appendChild(br);
        });
    }
    xhr.open('GET','/search?searchTxt=' + encodeURIComponent(searchTxt),true);
    xhr.send();
});