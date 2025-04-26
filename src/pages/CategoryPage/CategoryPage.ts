import { Match } from "navigo";
import { getProductsByCategory } from "../../api/api.ts";
import { createElementWithDocumentCreateElement } from "../../components/ElementCreator.ts";
import router from "../../main";
import { createFilters } from "../../components/Filters.ts";
import './CategoryPage.scss'


export const categoryPage = async (match: Match) => {
    const main = document.querySelector('main');
  
    if (main) {
      main.innerHTML = '';
  
      const line = createElementWithDocumentCreateElement('hr');
      line.classList.add('line');
      main.appendChild(line);
  
      const breadcrumbs = createElementWithDocumentCreateElement('nav', undefined, 'breadcrumbs');
  
      const homeLink = createElementWithDocumentCreateElement('a', 'Home', 'breadcrumb-link');
      homeLink.setAttribute('href', '/');
      homeLink.onclick = (e) => {
        e.preventDefault();
        router.navigate('/');
      };
      breadcrumbs.appendChild(homeLink);
  
      const separator = createElementWithDocumentCreateElement('span', '>', 'breadcrumb-separator');
      breadcrumbs.appendChild(separator);
  
      const categoryName = match?.data?.category || 'Category';
      const capitalizedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
      const currentCategory = createElementWithDocumentCreateElement('span', capitalizedCategoryName, 'breadcrumb-current');
      breadcrumbs.appendChild(currentCategory);
  
      main.appendChild(breadcrumbs);
  
      const categoryContent = createElementWithDocumentCreateElement('div', undefined, 'category-content');
      main.appendChild(categoryContent);
  
      const container = createElementWithDocumentCreateElement('div', undefined, 'container');
      main.appendChild(container);
  
      createFilters(container);
  
      const products = await getProductsByCategory(match?.data?.category);
  
      const categoryProductsContainer = createElementWithDocumentCreateElement('div', undefined, 'category-products-container');
      container.appendChild(categoryProductsContainer);
  
      const categoryTitle = createElementWithDocumentCreateElement('h3', capitalizedCategoryName);
      categoryTitle.classList.add('category-title');
      categoryProductsContainer.appendChild(categoryTitle);
  
      const categoriesGrid = createElementWithDocumentCreateElement('div', undefined, 'products-grid');
      categoryProductsContainer.appendChild(categoriesGrid);
  
      products.forEach(product => {
        const categoryCard = createElementWithDocumentCreateElement('div', undefined, 'card-cell');
  
        const categoryContentCard = createElementWithDocumentCreateElement('div', undefined, 'card-content');
  
        const productImageLink = createElementWithDocumentCreateElement('a');
        productImageLink.setAttribute('href', `/${match?.data?.category}/${product.id}`);
        productImageLink.onclick = (e) => {
          e.preventDefault();
          router.navigate(`/${match?.data?.category}/${product.id}`);
        };
  
        const productImage = createElementWithDocumentCreateElement('img');
        productImage.setAttribute('src', product.thumbnail);
        productImage.setAttribute('alt', product.title);
        productImage.classList.add('product-image');
        productImageLink.appendChild(productImage);
        categoryContentCard.appendChild(productImageLink);
  
        const productTitleLink = createElementWithDocumentCreateElement('a', product.title, 'product-title');
        productTitleLink.setAttribute('href', `/${match?.data?.category}/${product.id}`);
        productTitleLink.onclick = (e) => {
          e.preventDefault();
          router.navigate(`/${match?.data?.category}/${product.id}`);
        };
        categoryContentCard.appendChild(productTitleLink);
  
        const ratingContainer = createElementWithDocumentCreateElement('div', undefined, 'product-rating-container');
  
        const roundedRating = Math.round(product.rating * 10) / 10;
        const fullStars = Math.floor(roundedRating);
        const hasHalfStar = roundedRating - fullStars >= 0.5;
  
        for (let i = 0; i < fullStars; i++) {
          const starImage = createElementWithDocumentCreateElement('img');
          starImage.setAttribute('src', './src/assets/rating-star.png');
          starImage.setAttribute('alt', 'Full-Star');
          starImage.classList.add('full-star');
          ratingContainer.appendChild(starImage);
        }
  
        if (hasHalfStar) {
          const halfStarImage = createElementWithDocumentCreateElement('img');
          halfStarImage.setAttribute('src', './src/assets/rating-star.png');
          halfStarImage.setAttribute('alt', 'Half-Star');
          halfStarImage.classList.add('half-star');
          ratingContainer.appendChild(halfStarImage);
        }
        const ratingTextContainer = createElementWithDocumentCreateElement('p', undefined, 'rating-text');
  
        const ratingTextNode = document.createTextNode(`${roundedRating}`);
        
        const ratingSpan = document.createElement('span');
        ratingSpan.textContent = "/5";
        
        ratingTextContainer.appendChild(ratingTextNode);
        ratingTextContainer.appendChild(ratingSpan);
        ratingContainer.appendChild(ratingTextContainer);
  
        categoryContentCard.appendChild(ratingContainer);
  
        const discountPercentage = Math.round(product.discountPercentage);
        const discountText = discountPercentage > 0 ? `-${discountPercentage}%` : '';
  
        const originalPrice = 100 * product.price / (100 - product.discountPercentage);
        const formattedOriginalPrice = `$${originalPrice.toFixed(2)}`;
  
        //const formattedPrice = `$${product.price.toFixed(2)}`;
        const discountedPrice = product.price * (1 - product.discountPercentage / 100);
        const formattedDiscountedPrice = `$${discountedPrice.toFixed(2)}`;
        //const priceText = discountText ? `${formattedDiscountedPrice} ${discountText}` : formattedPrice;
  
        const priceContainer = createElementWithDocumentCreateElement('div', undefined, 'product-price-container');
  
        const productPrice = createElementWithDocumentCreateElement('p', formattedDiscountedPrice, 'product-price');
        const productOriginalPrice = createElementWithDocumentCreateElement('p', formattedOriginalPrice, 'product-original-price');
        const discountElement = createElementWithDocumentCreateElement('span', discountText, 'product-discount');
  
        priceContainer.appendChild(productPrice);
        priceContainer.appendChild(productOriginalPrice);
        priceContainer.appendChild(discountElement);
  
        categoryContentCard.appendChild(priceContainer);
  
        categoryCard.appendChild(categoryContentCard);
        categoriesGrid.appendChild(categoryCard);
      });
  
      categoryProductsContainer.appendChild(categoriesGrid);
    }
  }
  
  