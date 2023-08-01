window.addEventListener('DOMContentLoaded', (event) => {
    const icon = document.querySelector('#icon');
  
    icon.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
      
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});
