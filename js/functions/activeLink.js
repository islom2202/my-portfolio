export const handleActiveLink = (home_section, projects_section, about_section, header_height) => {
     const navsections = [home_section, projects_section, about_section]
     const top = window.scrollY + header_height
     navsections.forEach((section) => {
       if (
         top >= section.offsetTop &&
         top <= section.offsetTop + section.offsetHeight
       ) {
         document
           .querySelectorAll(`.${section.getAttribute("id")}`)
           .forEach((link) => link.classList.add("active"))
       } else {
         document
           .querySelectorAll(`.${section.getAttribute("id")}`)
           .forEach((link) => link.classList.remove("active"))
       }
     })
}
