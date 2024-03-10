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

// data
const data = {
  english: {
    header: {
      logo: "Islomjon Saidaliev",
      home: "Home",
      about: "About",
      projects: "Projects",
      cv: "CV",
      btn: "Get in touch",
    },
  },
  russian: {
    header: {
      logo: "Исломджон Саидалиев",
      home: "Главная",
      about: "О нас",
      projects: "Проекты",
      cv: "Резюме",
      btn: "Связаться",
    },
  },
}

// switch languages
languages.onchange = (e) => {
  logo.textContent = data[`${e.target.value}`].header.logo
  home.textContent = data[`${e.target.value}`].header.home
  about.textContent = data[`${e.target.value}`].header.about
  projects.textContent = data[`${e.target.value}`].header.projects
  cv.textContent = data[`${e.target.value}`].header.cv
  btn.textContent = data[`${e.target.value}`].header.btn
};