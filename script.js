document.addEventListener("DOMContentLoaded", () => {

  initSmoothScrolling()

  initAnimations()

  initContactForm()

  initTooltips()
})

function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })

        const navbarCollapse = document.querySelector(".navbar-collapse")
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const navbarToggler = document.querySelector(".navbar-toggler")
          if (navbarToggler) {
            navbarToggler.click()
          }
        }
      }
    })
  })
}

function initTooltips() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}

function initAnimations() {
  const elements = document.querySelectorAll(".card, .table, h2")

  elements.forEach((element) => {
    element.classList.add("fade-in")
  })

  window.addEventListener("scroll", () => {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.classList.add("show")
      }
    })
  })

  window.dispatchEvent(new Event("scroll"))
}

function initContactForm() {
  const form = document.querySelector("form")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = form.querySelector('input[placeholder="Your Name"]').value
      const email = form.querySelector('input[placeholder="Your Email"]').value
      const message = form.querySelector("textarea").value

      if (!name || !email || !message) {
        alert("Please fill in all fields.")
        return
      }

      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.")
        return
      }

      alert("Thank you for your message! I will get back to you soon.")

      form.reset()
    })
  }
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}

console.log("Student Portfolio Website - Final Version")
