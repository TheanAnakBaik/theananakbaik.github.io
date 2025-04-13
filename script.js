// Scroll spy untuk menu aktif
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
};

// (Optional) Tambahkan typing effect sederhana
const typing = document.querySelector(".typing");
if (typing) {
  const text = typing.textContent;
  typing.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      typing.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
}
