// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
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
let backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Initialize tooltips for AI terms
function initializeTooltips() {
    const aiTerms = document.querySelectorAll('.ai-term');
    aiTerms.forEach(term => {
        term.addEventListener('mouseover', showTooltip);
        term.addEventListener('mouseout', hideTooltip);
    });
}

function showTooltip(event) {
    const tooltip = event.target.querySelector('.tooltip');
    if (tooltip) {
        tooltip.style.display = 'block';
    }
}

function hideTooltip(event) {
    const tooltip = event.target.querySelector('.tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTooltips();
});