// header & sidebar selectors
const header_height = document.querySelector("header").offsetHeight;
const select_languages = document.querySelectorAll(".nav__languages")
const home = document.querySelectorAll(".home")
const about = document.querySelectorAll(".about")
const projects = document.querySelectorAll(".projects")
const cv = document.querySelectorAll(".cv")
const btn = document.querySelectorAll(".getInTouch")
const burger = document.querySelector(".burger")
const sidebar = document.querySelector(".sidebar__nav ul")
export {header_height, select_languages, home, about, projects, cv, btn, burger, sidebar }
// sections 
const home_section = document.querySelector("#home")
const projects_section = document.querySelector("#projects")
const about_section = document.querySelector("#about")
export {home_section, projects_section, about_section}
// hero
const hero_name = document.querySelector(".hero__figcaption h2")
const hero_description = document.querySelector(".hero__figcaption p")
const hero_btn = document.querySelector(".hero__figcaption__navs .button")
const hero_btn_view_projects = document.querySelector(".hero__figcaption__navs a span")
export {hero_name, hero_description, hero_btn, hero_btn_view_projects}

