function toggleDropdownMenu() {
  var dropdownMenu = document.getElementById('dropdownMenu');
  if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
}

// Ensure the dropdown menu is hidden on page load
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('dropdownMenu').style.display = 'none';
});
