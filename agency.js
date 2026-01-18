window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// --- [2. REVEAL ANIMATIONS ON SCROLL] ---
const revealElements = document.querySelectorAll('.s-card, .about-text, .work-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

// --- [3. MODAL LOGIC] ---
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function openModal(title) {
    modal.style.display = "block";
    document.getElementById("modalTitle").innerText = title;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- [4. MOBILE MENU (Simple alert for functionality)] ---
document.querySelector('.menu-btn').addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if(links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '70px';
        links.style.left = '0';
        links.style.width = '100%';
        links.style.background = '#000';
        links.style.padding = '20px';
    }
});