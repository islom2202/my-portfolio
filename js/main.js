// selectors
import {
  header_height,
  select_languages,
  home,
  about,
  projects,
  cv,
  btn,
  burger,
  sidebar,
  home_section,
  projects_section,
  about_section,
} from "./selectors/dom-variables.js"

// functions
import { handleSidebar } from "./functions/sidebar.js"
import { handleLang } from "./functions/language.js"
import { handleActiveLink } from "./functions/activeLink.js"

// handle-sidebar
burger.onclick = () => handleSidebar(burger, sidebar)

// handle-language -- two select tags one from header another from sidebar
select_languages.forEach((select) => {
  select.onchange = (e) => handleLang(e, home, about, projects, cv, btn)
})

// get header's height and make a css native variable for css scroll-padding-top
document.documentElement.style.setProperty(
  "--headers-height",
  header_height + "px"
)

// hanlde active link
window.onscroll = () => handleActiveLink(home_section, projects_section, about_section, header_height)
