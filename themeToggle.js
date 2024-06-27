window.addEventListener('DOMContentLoaded', (event) => {
    const icon = document.querySelector('#icon');
    const emailIcon = document.querySelector('.social-icons img');
    const myLinks = document.querySelectorAll('.text-link');
    const myLinks2 = document.querySelectorAll('.text-link2');

    icon.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            emailIcon.src = 'resources/emailicon.png';
            myLinks.forEach(link => {
                link.style.color = '#448EE4'; 
            });
            myLinks2.forEach(link => {
                link.style.color = '#448EE4';
            });
        } else {
            document.body.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            emailIcon.src = 'resources/whitemailoutline.png';
            myLinks.forEach(link => {
                link.style.color = 'orange'; 
            });
            myLinks2.forEach(link => {
                link.style.color = 'orange';
            });
        }
    });
});
