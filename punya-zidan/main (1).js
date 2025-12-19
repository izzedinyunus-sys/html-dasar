// Toggle menu mobile
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  // Tutup menu saat klik link nav (opsional tapi enak di mobile)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("open");
    });
  });
}

// Isi contoh text di codeContent
const codeContent = document.getElementById("codeContent");

if (codeContent) {
  codeContent.textContent = `const developer = {
  name: "Nama Kamu",
  role: "Frontend Developer",
  stack: ["HTML", "CSS", "JavaScript", "React"],
};`;
}
