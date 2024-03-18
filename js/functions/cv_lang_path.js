import { download_tags } from "../selectors/dom-variables.js";

// hadnle-cv-download-path
export const hadnle_cv_path = (lang) => {
  download_tags.forEach((tag) => {
    if (lang == "english") {
      tag.setAttribute("href", "CVs/cv.pdf")
      tag.setAttribute("download", "CV")
    } else {
      tag.setAttribute("href", "CVs/cv.pdf")
      tag.setAttribute("download", "Резюме")
    }
  })
}
