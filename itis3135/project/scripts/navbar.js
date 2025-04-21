const homepage = document.getElementById('homepage2');

homepage.addEventListener('click', () => {
    // homepage.classList.add('.active');
    // alert('Hey');
    // homepage.style.fontSize = '45px';
    homepage.classList.add('active');
    localStorage.setItem('homepage_class', 'active');
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('homepage_class') === 'active') {
        homepage.classList.add('active');
    }
});