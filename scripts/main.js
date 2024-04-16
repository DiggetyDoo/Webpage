const myHeading = document.getElementById("name");
myHeading.textContent = 'Hello World!';

let myVariable = 'Bob';

myVariable = 'Steve';

let Value = "chocolate";
if (Value === "chocolate") {
  alert("Welcome to our project webpage");
} else {
  alert("Please leave...");
}


const myImage = document.querySelector("img");

myImage.onimglick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc == 'images/fc1.jpeg') {
    myImage.setAttribute("src", 'images/fc2.avif');
  } else if (mySrc == 'images/fc2.avif'){
    myImage.setAttribute("src", 'images/fc3.jpeg');
  }else {
    myImage.setAttribute("src", 'images/fc1.jpeg');
  }
};

let myButton = document.getElementById("myButton");


function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi, ${myName}. Welcome to our project.`;
}

if (!localStorage.getItem("name")) {
  setUserName( );
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hi,${storedName}. Welcome to our project.`;
}

myButton.onclick = () => {
    setUserName();
  };
  