function toggleMod() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pegar a tag img e alterar
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}
