
document.addEventListener('DOMContentLoaded', () => {
    // Mobile burger menu toggle
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById(burger.dataset.target);
    const moreDropdown = document.getElementById('moreDrop');
    const moreLink = moreDropdown.querySelector('.navbar-link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        
        // Close the dropdown when mobile menu is toggled
        moreDropdown.classList.remove('is-active');
    });

    // "More" dropdown toggle
    moreLink.addEventListener('click', (e) => {
        e.preventDefault(); // Stop page jump
        moreDropdown.classList.toggle('is-active');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!moreDropdown.contains(e.target)) {
            moreDropdown.classList.remove('is-active');
        }
    });

    // Close mobile menu when clicking on navbar items (optional)
    const navbarItems = document.querySelectorAll('.navbar-item:not(.has-dropdown)');
    navbarItems.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
            moreDropdown.classList.remove('is-active');
        });
    });

    // Modal logic (if you have modals)
    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelModal');
    const background = modal?.querySelector('.modal-background');

    openBtn?.addEventListener('click', () => {
        modal.classList.add('is-active');
    });

    closeBtn?.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });

    cancelBtn?.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });

    background?.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });
})