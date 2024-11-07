import '../css/style.css';
import {categoryDescriptions} from "./categories";

document.addEventListener('DOMContentLoaded', () => {
  const categoriesButton = document.querySelector('.categories-button');
  const overlay = document.querySelector('.overlay');
  const closeOverlay = document.querySelector('.close-overlay');
  const categoryTitle = document.querySelector('.category-title');
  const categoryDescription = document.querySelector('.category-description');
  const categories = document.querySelectorAll('.category');

  categoriesButton.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  closeOverlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    categoryTitle.textContent = 'Bitte wählen Sie eine Kategorie oder eine Textsorte aus.';
    categoryDescription.textContent = '';

    categories.forEach(category => {
      category.classList.remove('active');
    });
  });

  categories.forEach(category => {
    category.addEventListener('mouseover', function () {
      categories.forEach(cat => cat.classList.remove('active'));

      category.classList.add('active');

      const categoryId = category.dataset.categoryId;
      categoryTitle.textContent = categoryDescriptions[categoryId].name;
      document.querySelector('.category-description').textContent = categoryDescriptions[categoryId].description;
    });
  });

  document.getElementById("categoryDropdown").addEventListener("change", function(e) {
    const categoryId = +e.target.value;
    categoryTitle.textContent = categoryDescriptions[categoryId].name;
    document.querySelector('.category-description').textContent = categoryDescriptions[categoryId].description;
  });

});