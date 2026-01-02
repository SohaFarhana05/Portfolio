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
