import { createElementWithDocumentCreateElement } from "../../components/ElementCreator.ts";
import router from "../../main";
import { getCategories } from "../../api/api.ts";
import { createHeroSection } from "../../components/HeroSection.ts";
import './HomePage.scss'

export const homePage = async () => {
    const main = document.querySelector('main');
    if (main) {
      main.innerHTML = '';
  
      createHeroSection(main);
  
      const categoriesContainer = document.createElement('div');
      categoriesContainer.classList.add('categories-container');
      
      const h3 = createElementWithDocumentCreateElement('h3', 'Categories');
      categoriesContainer.appendChild(h3);
      
      const categories = await getCategories();
      const categoriesGrid = createElementWithDocumentCreateElement('div', undefined, 'grid');
      categoriesContainer.appendChild(categoriesGrid);
      
      categories.forEach(category => {
        const categoryCard = createElementWithDocumentCreateElement('div', undefined, 'card cell');
        const categoryContentCard = createElementWithDocumentCreateElement('div', undefined, 'card-content');
        const cardContent = createElementWithDocumentCreateElement(
          'div',
          category.name,
          'content',
          () => router.navigate(`/${category.slug}`)
        );
      
        categoryContentCard.appendChild(cardContent);
        categoryCard.appendChild(categoryContentCard);
        categoriesGrid.appendChild(categoryCard);
      });
      
      main.appendChild(categoriesContainer);
      
      };
    }
  
  
  