function toggleMenu() {
  const nav = document.querySelector('nav');
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

function filterProjects(category) {
  const projects = document.querySelectorAll('.project-link');

  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

function hasContactFormEmail(email) {
  return email && email.trim().length > 0;
}

function validateContactFormEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return hasContactFormEmail(email) && emailRegex.test(email);
}

function hasContactFormName(name) {
  return name && name.trim().length > 0;
}

function validateContactFormName(name) {
  return hasContactFormName(name) && name.trim().length >= 2;
}

function hasContactFormMessage(message) {
  return message && message.trim().length > 0;
}
