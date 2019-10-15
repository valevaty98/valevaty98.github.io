var myButton = document.querySelector('button');
myButton.onclick =  function() {setUserName()};

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world! ';

function setUserName() {
    var name = prompt("Enter your name: ");
    localStorage.setItem("name", name);
    myHeading.textContent = 'Hello world, ' + name;
}

if (localStorage.getItem("name") != null) {
    myHeading.textContent = 'Hello world, ' + localStorage.getItem("name");
} else {
    setUserName();
}