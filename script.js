document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        document.querySelector(this.getAttribute('href')).style.display = 'block';
    });
});
