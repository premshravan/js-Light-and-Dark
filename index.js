const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// image color
function imageMode(color){
    image1.src = `imgs/One_${color}.svg`;
    image2.src = `imgs/Two_${color}.svg`;
    image3.src = `imgs/Three_${color}.svg`;

}

//darkMode styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 /60%)";
  textBox.style.backgroundColor = "rgb(200 200 200 /100%)";
  toggleIcon.children[0].textContent = "Dark Mode";
//  toggleIcon.children[1].classList.remove("fa-sun");
//  toggleIcon.children[1].classList.add("fa-moon");
  toggleIcon.children[1].classList.replace("fa-sun","fa-moon");
 
//   image1.src = "/imgs/One_Dark.svg";
//   image2.src = "/imgs/Two_Dark.svg";
//   image3.src = "/imgs/Three_Dark.svg";
imageMode('dark')
}

//lightMode styles
function lightMode() {
    nav.style.backgroundColor = "rgb(255 255 255 /60%)";
    textBox.style.backgroundColor = "rgb(0 0 0 /10%)";
    toggleIcon.children[0].textContent = "Light Mode";
    // toggleIcon.children[1].classList.remove("fa-moon"); replce these by 1 code
    // toggleIcon.children[1].classList.add("fa-sun");
    toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
    // image1.src = "/imgs/OneLight.svg";
    // image2.src = "/imgs/TwoLight.svg";
    // image3.src = "/imgs/ThreeLight.svg";
    imageMode('Light')
    
  }


// switch theme dynamically
function swithTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem('theme','dark')
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('theme','light')
    lightMode();
  }
}


//Eventlistener
toggleSwitch.addEventListener("change", swithTheme);

//check local storge for theme
const currentTheme=localStorage.getItem('theme')
if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme);
  if (currentTheme==='dark'){
    toggleSwitch.checked=true;
    darkMode();
  }
}

