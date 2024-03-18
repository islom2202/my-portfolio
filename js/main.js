// selectors
import {
  header_height,
  select_languages,
  burger,
  sidebar,
  home_section,
  projects_section,
  about_section
} from "./selectors/dom-variables.js"

// functions
import { handleSidebar } from "./functions/sidebar.js"
import { handleLang } from "./functions/language.js"
import { handleActiveLink } from "./functions/activeLink.js"
import { hadnle_cv_path } from "./functions/cv_lang_path.js"

// default functions (first work fine on computer , but not mobile)
window.onload = () => {
  const loc_lang = localStorage.getItem("lang") || "english"
  select_languages.forEach((select) => (select.value = loc_lang))
  hadnle_cv_path(loc_lang)
  handleLang(loc_lang)
}
document.addEventListener("DOMContentLoaded", () => {
  const loc_lang = localStorage.getItem("lang") || "english"
  select_languages.forEach((select) => (select.value = loc_lang))
  hadnle_cv_path(loc_lang)
  handleLang(loc_lang)
})
// handle-sidebar
burger.onclick = () => handleSidebar(burger, sidebar)

// handle-language -- two select tags one from header another from sidebar
select_languages.forEach((select) => {
  select.onchange = (e) => {
    localStorage.setItem("lang", e.target.value)
    handleLang(e.target.value)
    hadnle_cv_path(e.target.value)
  }
})

// get header's height and make a css native variable for css scroll-padding-top
document.documentElement.style.setProperty(
  "--headers-height",
  header_height + "px"
)

// hanlde active link
window.onscroll = () => handleActiveLink(home_section, projects_section, about_section, header_height)
