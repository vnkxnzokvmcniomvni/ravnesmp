// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Set the server IP
    const serverIp = 'RAVNESMP.UK';
    const serverIpElement = document.getElementById('server-ip');
    const copyNotification = document.getElementById('copy-notification');
    
    serverIpElement.textContent = serverIp;

    // Copy IP to clipboard when clicked
    serverIpElement.addEventListener('click', () => {
        navigator.clipboard.writeText(serverIp).then(() => {
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy IP: ', err);
        });
    });

    const themeToggle = document.getElementById('theme-toggle');

    // Load the saved theme from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Event listener for the toggle switch
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
