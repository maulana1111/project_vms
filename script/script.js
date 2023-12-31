function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    var burgerIcon = document.querySelector('.burger-icon');
  
    if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px';
      content.style.marginLeft = '0';
      burgerIcon.classList.remove('active'); // Hapus class active
    } else {
      sidebar.style.left = '0';
      content.style.marginLeft = '250px';
      burgerIcon.classList.add('active'); // Tambahkan class active
    }
  }
  
  function toggleSubMenu(menuItem) {
    var subMenu = menuItem.querySelector('.sub-menu');
    subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
  }
  