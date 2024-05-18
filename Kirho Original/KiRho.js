document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('open');
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollContent = document.querySelector('.scroll-content');
    let isGrabbing = false;
    let startX = 0;
    let scrollLeft = 0;

    scrollContainer.addEventListener('mousedown', (e) => {
        isGrabbing = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
        scrollContainer.style.cursor = 'grabbing';
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isGrabbing) return;
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the multiplier for scroll speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener('mouseup', () => {
        isGrabbing = false;
        scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isGrabbing = false;
        scrollContainer.style.cursor = 'grab';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scrollContainer');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const scrollItems = document.querySelectorAll('.scroll-content > *');
    scrollItems.forEach((item) => {
        item.addEventListener('click', () => {
            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');

            // Clone the clicked item
            const cloneItem = item.cloneNode(true);
            modalContent.appendChild(cloneItem);

            // Add text content
            const textContent = document.createElement('p');
            textContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.";
            modalContent.appendChild(textContent);

            modal.appendChild(modalContent);
            modal.style.display = 'block';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.innerHTML = '';
        }
    });

    window.addEventListener('resize', () => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.maxWidth = window.innerWidth * 0.5 + 'px';
            modalContent.style.maxHeight = window.innerHeight * 0.5 + 'px';
        }
    });
});

