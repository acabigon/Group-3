document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll("section");
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggle-btn");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

 
  sections.forEach((section, index) => {
    section.style.opacity = index === 0 ? "1" : "0";
    section.style.transform = index === 0 ? "translateX(0)" : "translateX(100%)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    section.style.display = index === 0 ? "block" : "none";
  });

  
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
       
        sections.forEach(section => {
          section.style.opacity = "0";
          section.style.transform = "translateX(-100%)"; 
          setTimeout(() => {
            section.style.display = "none";
          }, 500);
        });

        
        setTimeout(() => {
          targetSection.style.display = "block";
          targetSection.style.transform = "translateX(0)";
          targetSection.style.opacity = "1";

          
          const header = targetSection.querySelector("h2");
          if (header) {
            header.classList.add("typing-text");
          }
        }, 500); 
      }
    });
  });
});
