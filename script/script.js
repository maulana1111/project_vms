function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var content = document.querySelector(".content");
  var burgerIcon = document.querySelector(".burger-icon");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-30vh";
    content.style.marginLeft = "0";
    burgerIcon.classList.remove("active"); // Hapus class active
  } else {
    sidebar.style.left = "0";
    content.style.marginLeft = "250px";
    burgerIcon.classList.add("active"); // Tambahkan class active
  }
}

function toggleSubMenu(menuItem, level) {
  var subMenu = menuItem.querySelector('.sub-menu');
  if (subMenu) {
    subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
    if (level && subMenu.style.display === 'block') {
      // Sembunyikan semua submenu dengan level yang lebih tinggi
      var higherLevelMenus = document.querySelectorAll('.sub-menu.level-' + level);
      higherLevelMenus.forEach(function (higherLevelMenu) {
        if (higherLevelMenu !== subMenu) {
          higherLevelMenu.style.display = 'none';
        }
      });
    }
  }
}