// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

//tech stack section
const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(item => {
    const proficiencyBar = item.querySelector('.proficiency-bar');
    const proficiencyLevel = proficiencyBar.getAttribute('data-width');
    proficiencyBar.style.width = proficiencyLevel;
});

//thumbs up animation
const smiley = document.getElementById('smiley');
smiley.addEventListener('mouseenter', () => {
    smiley.style.transform = 'scale(1.2) rotate(-15deg)';
});

smiley.addEventListener('mouseleave', () => {
    smiley.style.transform = 'scale(1)';
});

