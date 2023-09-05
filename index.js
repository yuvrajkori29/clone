function activateNavItem(item) {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(navItem => {
        navItem.classList.remove('active');
    });

    item.classList.add('active');
}
