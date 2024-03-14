export const handleSidebar = (burger, sidebar) => {
    if (burger.innerHTML == "menu") {
      burger.innerHTML = "close"
      sidebar.style.right = "0"
    } else {
      burger.innerHTML = "menu"
      sidebar.style.right = "-100%"
    }
}

