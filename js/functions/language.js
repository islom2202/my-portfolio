//fetch data
let data = null
const fetchData = fetch("data.json")
.then((res) => res.json())
.then((content) => (data = content))

export const handleLang = (
  e, home, about, projects, cv, btn,
  hero_name, hero_description, hero_btn, hero_btn_view_projects
  ) => {
  // header-sidebar-translation
  const header = [home, about, projects, cv, btn]
  header.forEach((selectors) =>
    selectors.forEach(
      (selector) =>
        (selector.textContent =
          data[`${e.target.value}`]["header-sidebar"][selector.getAttribute("data-name")])
    )
  )
  // hero-translation
  const hero = [hero_name, hero_description, hero_btn, hero_btn_view_projects]
  hero.forEach((selector) => selector.textContent = data[`${e.target.value}`]["hero"][selector.getAttribute("data-name")])
}
