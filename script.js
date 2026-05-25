// Set dark mode as default and check for saved user preference
const currentTheme = localStorage.getItem('theme') || 'dark';
document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']('dark-theme');
document.querySelector('#theme-switch').checked = currentTheme === 'dark';

// Listen for toggle switch change
document.querySelector('.theme-switch input[type="checkbox"]').addEventListener('change', function(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Toggle expandable details sections
function toggleDetails(id) {
    const details = document.getElementById(id);
    const button = details.previousElementSibling;
    
    if (details.classList.contains('show')) {
        details.classList.remove('show');
        button.textContent = 'View More Details ▼';
    } else {
        details.classList.add('show');
        button.textContent = 'Show Less ▲';
    }
}

// Typing effect for home page
document.addEventListener('DOMContentLoaded', () => {
    const h1Text = "Hi, I'm Soha Farhana";
    const pText = "Main quest: becoming the person younger me imagined.";
    const h1Element = document.getElementById('typing-h1');
    const pElement = document.getElementById('typing-p');

    function typeWriter(element, text, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    if (h1Element && pElement) {
        h1Element.innerHTML = ''; // Clear existing content
        pElement.innerHTML = ''; // Clear existing content
        typeWriter(h1Element, h1Text, 100, () => {
            typeWriter(pElement, pText, 75);
        });
    }

    // Typing effect for about page
    const greetingText = "Hello World! I'm Soha Farhana 👋";
    const taglineText = "Learning, building, failing, repeating.";
    const greetingElement = document.getElementById('typing-greeting');
    const taglineElement = document.getElementById('typing-tagline');

    if (greetingElement && taglineElement) {
        greetingElement.innerHTML = '';
        taglineElement.innerHTML = '';
        typeWriter(greetingElement, greetingText, 100, () => {
            typeWriter(taglineElement, taglineText, 75);
        });
    }

    // Reveal photo on home page
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        setTimeout(() => {
            profileImage.classList.add('reveal');
        }, 500); // Delay before revealing the photo
    }
});

// Universal Staggered Animations for Elements
document.addEventListener('DOMContentLoaded', () => {
    // Select all cards and interesting elements across the site
    const animateElements = document.querySelectorAll(
        '.project-item, .achievement-card, .contact-item, .certificate-card, .participation-card, .skills-highlight li, .timeline-item'
    );
    
    // Add staggered delay to each
    animateElements.forEach((el, index) => {
        el.style.opacity = '0'; // Start invisible
        // limit index to prevent massive delays on lists with lots of items like skills
        const delay = Math.min(index * 0.1, 1.5); 
        el.style.animation = `fadeInUp 0.6s ease-out forwards ${delay}s`;
    });
});
