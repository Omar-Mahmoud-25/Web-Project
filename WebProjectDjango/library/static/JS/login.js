const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener('click',function(){
  if (password.type == 'password')
    password.type = 'text';
  else
    password.type = 'password';
  toggle.innerHTML = (toggle.innerHTML == '👀'? '🙈':'👀');
  
});

form.addEventListener('submit',function(event){
  event.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  var xml = new XMLHttpRequest();
  xml.responseType = "json";
  xml.onreadystatechange = function(){
    var data = this.response;
    console.log(data);
    console.log(data.success);
    console.log(typeof(data));
    if (data.success){
      console.log("in true");
      sessionStorage.setItem('isUserLoggedIn',true);
      sessionStorage.setItem('isAdmin',data.isAdmin);
      sessionStorage.setItem('username', data.username);
      console.log(sessionStorage.getItem('isUserLoggedIn'));
      window.location.href = "/";
    }
    else
      console.log('in false'),
      alert("Invalid username or password");
  }
  xml.open('GET','loginValidation?username=' + encodeURIComponent(username.value) + '&password=' + encodeURIComponent(password.value),true);
  xml.send()
  console.log(username.value);
  console.log(password.value);

});
