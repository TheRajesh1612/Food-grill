
    const toggleMenu = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navlinks = document.querySelector('.nav-menu a')

    toggleMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link =>{
        link.addEventListener('click',() =>{
            navMenu.classList.remove('active');
        });
    });    

