const links = document.querySelectorAll('.header-menu__item a')

seamless.polyfill(); //альтернатива для сафари для плавной верстки

links.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()

    const id = element.getAttribute('href').substring(1)
    const section = document.getElementById(id)
    
    if (section) {
      seamless.scrollIntoView(section, {
        behavior: 'smooth', //плавный скролл
        block: 'start'
      })
    } else {
      seamless.scrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
    }
  })
})