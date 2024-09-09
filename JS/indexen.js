document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        btn.addEventListener('click', function () {
            dropdown.classList.toggle('open');
        });
    });
});


// Mostra o nasconde la freccia in base alla posizione dello scroll
window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Scorrere verso l'alto quando si clicca la freccia
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});