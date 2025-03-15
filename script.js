document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const backToTopButton = document.getElementById('back-to-top');

    // Dark mode functionality
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    };

    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (localStorage.getItem('darkMode') !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Tooltip functionality
    const aiTerms = document.querySelectorAll('.ai-term');
    aiTerms.forEach(term => {
        term.addEventListener('mouseenter', () => {
            const tooltip = term.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.classList.add('tooltip');
            tooltipElement.textContent = tooltip;
            document.body.appendChild(tooltipElement);

            const rect = term.getBoundingClientRect();
            tooltipElement.style.left = rect.left + window.pageXOffset + 'px';
            tooltipElement.style.top = rect.top + window.pageYOffset - tooltipElement.offsetHeight - 10 + 'px';
        });

        term.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

console.log("AI and Agents website loaded successfully!");