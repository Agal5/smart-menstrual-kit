function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
}

function openPage(pageUrl) {
    window.location.href = pageUrl;
}

