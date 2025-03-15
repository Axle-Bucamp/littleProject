// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// AI Term Tooltips
const aiTerms = document.querySelectorAll('.ai-term');

aiTerms.forEach(term => {
    term.addEventListener('mouseover', () => {
        const tooltip = term.getAttribute('data-tooltip');
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        tooltipElement.textContent = tooltip;
        term.appendChild(tooltipElement);
    });

    term.addEventListener('mouseout', () => {
        const tooltip = term.querySelector('.tooltip');
        if (tooltip) {
            term.removeChild(tooltip);
        }
    });
});