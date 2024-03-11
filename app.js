// language switcher selectors
const languages = document.querySelector(".header__nav__languages")
const language = document.querySelectorAll(".lang")
// header selectors
const logo = document.querySelector(".header__logo")
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const projects = document.querySelector(".projects")
const cv = document.querySelector(".cv")
const btn = document.querySelector("header button")
const burger = document.querySelector(".burger")
// sidebar selectors
const sidebar = document.querySelector(".sidebar__nav ul")

// handle-sidebar
burger.onclick = () => {
  if(burger.innerHTML == "menu"){
    burger.innerHTML = "close";
    sidebar.style.right = "0"
  }else{
    burger.innerHTML = "menu"
    sidebar.style.right = "-100%"
  }

}
//data
let data = null
const fetchData = fetch("data.json")
  .then((res) => res.json())
  .then((content) => data = content)
// switch languages
languages.onchange = (e) => {
  // header-data
  const header = [logo, home, about, projects, cv, btn]
  header.forEach((selector) =>
    selector.textContent = data[`${e.target.value}`].header[selector.getAttribute("data-name")]
  )
};