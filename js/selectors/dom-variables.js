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
// CV download tags
export const download_tags = document.querySelectorAll(".download_tags")
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
// projects
const projects_heading = document.querySelector(".projects-article__heading span:first-child")
const project_labels = document.querySelectorAll(".projects-article__list__item mark")
const project_headings = document.querySelectorAll(".projects-article__list__item h4")
const project_descriptions = document.querySelectorAll(".projects-article__list__item p")
const project_buttons = document.querySelectorAll(".projects-article__list__item a")
export {projects_heading, project_labels, project_headings, project_descriptions, project_buttons}
// about
const mybg_heading = document.querySelector(".about-article__figcaption h3 span:first-child")
const mybg_description1_span1 = document.querySelector(".about-article__figcaption__description1 span:first-child")
const mybg_description1_mark = document.querySelector(".about-article__figcaption__description1 mark")
const mybg_description1_span2 = document.querySelector(".about-article__figcaption__description1 span:last-child")
const mybg_description2 = document.querySelector(".about-article__figcaption__description2")
const about_stack_heading = document.querySelector(".about-stack__heading span:first-child")
export {
  mybg_heading,
  mybg_description1_span1,
  mybg_description1_mark,
  mybg_description1_span2,
  mybg_description2,
  about_stack_heading,
}
// contact
const form_heading = document.querySelector("form h4")
const form_description = document.querySelector("form p")
const label_name = document.querySelector(".label-name")
const input_name = document.querySelector("form #name")
const label_email = document.querySelector(".label-email")
const input_email = document.querySelector("form #email")
const label_subject = document.querySelector(".label-subject")
const input_subject = document.querySelector("form #subject")
const label_message = document.querySelector(".label-message")
const textarea_message = document.querySelector("form #message")
const form_button = document.querySelector("form button")
const contact_list_item_heading = document.querySelectorAll(".contact__list__item__content :first-child")
const contact__list__item__body = document.querySelectorAll(".contact__list__item__content :last-child")
export { form_heading, form_description, label_name, input_name, label_email, input_email, label_subject, input_subject, label_message, textarea_message, form_button, contact_list_item_heading, contact__list__item__body}