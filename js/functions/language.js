import {
  home,
  about,
  projects,
  cv,
  btn, // header
  hero_name,
  hero_description,
  hero_btn,
  hero_btn_view_projects, // hero
  projects_heading,
  project_labels,
  project_headings,
  project_descriptions,
  project_buttons, // projects
  mybg_heading,
  mybg_description1_span1,
  mybg_description1_mark,
  mybg_description1_span2,
  mybg_description2,
  about_stack_heading, // about
  form_heading,
  form_description,
  label_name,
  input_name,
  label_email,
  input_email,
  label_subject,
  input_subject,
  label_message,
  textarea_message,
  form_button,
  contact_list_item_heading,
  contact__list__item__body // contact
} from "../selectors/dom-variables.js"


export const handleLang = async (e) => {
  const header = [home, about, projects, cv, btn]
  const hero = [hero_name, hero_description, hero_btn, hero_btn_view_projects]
  const projects_section = [project_labels, project_headings, project_descriptions,project_buttons]
  const about_section = [mybg_description1_span1, mybg_description1_mark, mybg_description1_span2]
  try {
    //fetch data
    const response = await fetch("data.json")
    const data = await response.json()
    // header-translation
    header.forEach((selectors) =>
      selectors.forEach(
        (selector) =>
          (selector.textContent =
            data[e]["header-sidebar"][selector.getAttribute("data-name")])
      )
    )
    // hero-translation
    hero.forEach(
      (selector) =>
        (selector.textContent =
          data[e]["hero"][selector.getAttribute("data-name")])
    )
    // projects-translation
    projects_heading.textContent = data[e]["projects"]["projects-heading"]
    projects_section.forEach((tags) =>
      tags.forEach(
        (tag, i) =>
          (tag.textContent =
            data[e]["projects"]["projects-list"][i][
              tag.getAttribute("data-name")
            ])
      )
    )
    // about-translation
    mybg_heading.textContent = data[e]["about"]["about-heading"]
    about_section.forEach(
      (tag) =>
        (tag.textContent =
          data[e]["about"]["about-description1"][tag.getAttribute("data-name")])
    )
    mybg_description2.textContent = data[e]["about"]["about-description2"]
    about_stack_heading.textContent = data[e]["about"]["about-stack_heading"]

    // contact-translation
    form_heading.textContent =
      data[e]["contact"]["contact-form"]["form-heading"]
    form_description.textContent =
      data[e]["contact"]["contact-form"]["form-description"]
    label_name.textContent = data[e]["contact"]["contact-form"]["label-name"]
    input_name.placeholder =
      data[e]["contact"]["contact-form"]["placeholder-name"]
    label_email.textContent = data[e]["contact"]["contact-form"]["label-email"]
    input_email.placeholder =
      data[e]["contact"]["contact-form"]["placeholder-email"]
    label_subject.textContent =
      data[e]["contact"]["contact-form"]["label-subject"]
    input_subject.placeholder =
      data[e]["contact"]["contact-form"]["placeholder-subject"]
    label_message.textContent =
      data[e]["contact"]["contact-form"]["label-messaage"]
    textarea_message.placeholder =
      data[e]["contact"]["contact-form"]["placeholder-message"]
    form_button.textContent = data[e]["contact"]["contact-form"]["form-btn"]

    contact_list_item_heading.forEach(
      (tag, i) =>
        (tag.textContent =
          data[e]["contact"]["contact-list"][i]["item-heading"])
    )
    contact__list__item__body.forEach(
      (tag, i) =>
        (tag.textContent = data[e]["contact"]["contact-list"][i]["item-body"])
    )
  } catch (error) {
    console.error(console.error())
  }
}
