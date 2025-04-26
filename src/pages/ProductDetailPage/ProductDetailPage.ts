import { Match } from 'navigo';
import { getProductById } from '../../api/api.ts';
import router from "../../main";
import './ProductDetailPage.scss'


export const productPage = async (match: Match) => {
    const main = document.querySelector('main');
  
    if (main) {
      main.innerHTML = '';
  
      const line = document.createElement('hr');
      main.appendChild(line);
  
      const breadcrumbs = document.createElement('nav');
      breadcrumbs.classList.add('breadcrumbs');
      
      const homeLink = document.createElement('a');
      homeLink.href = '/';
      homeLink.textContent = 'Home';
      homeLink.classList.add('home-link');
      homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigate('/');
      });
      breadcrumbs.appendChild(homeLink);
      
      const separator = document.createElement('span');
      separator.textContent = ' > ';
      breadcrumbs.appendChild(separator);
      
      const categoryName = match?.data?.category || 'Groceries';
      const capitalizedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
      
      const productsLink = document.createElement('a');
      productsLink.href = `/${categoryName}`;
      productsLink.textContent = capitalizedCategoryName;
      productsLink.classList.add('products-link');
      productsLink.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigate(`/${categoryName}`);
      });
      breadcrumbs.appendChild(productsLink);
      
      document.querySelector('main')?.appendChild(breadcrumbs);
  
      const separator2 = document.createElement('span');
      separator2.textContent = ' > ';
      breadcrumbs.appendChild(separator2);
  
      const product = await getProductById(match?.data?.productId);
  
      const productLabel = document.createElement('p');
      productLabel.textContent = product.title;
      productLabel.classList.add('product-label');
      breadcrumbs.appendChild(productLabel);
  
      main.appendChild(breadcrumbs);
  
  
      const contentContainer = document.createElement('div');
      contentContainer.classList.add('product-content');
  
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');
  
      const thumbnailsAndMainImageContainer = document.createElement('div');
      thumbnailsAndMainImageContainer.classList.add('images');
      
      const thumbnailsContainer = document.createElement('div');
      thumbnailsContainer.classList.add('thumbnails-container');
      
      const mainProductImage = document.createElement('img');
      mainProductImage.src = product.images[0];
      mainProductImage.alt = product.title;
      mainProductImage.classList.add('main-product-image');
      
      const handleClick = (thumbnail: HTMLElement, src: string): void => {
        const mainProductImage = document.getElementById('main-product-image') as HTMLImageElement;
        const thumbnailsContainer = document.getElementById('thumbnails-container') as HTMLElement;
      
        mainProductImage.src = src;
        thumbnailsContainer.querySelectorAll('.thumbnail').forEach(thumb => {
          thumb.classList.remove('active-thumbnail');
        });
        thumbnail.classList.add('active-thumbnail');
      };
      
      product.images.forEach((src, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = src;
        thumbnail.alt = `${product.title} ${index + 1}`;
        thumbnail.classList.add('thumbnail');
      
        thumbnail.addEventListener('click', () => {
          handleClick(thumbnail, src);
        });
      
        thumbnailsContainer.appendChild(thumbnail);
      });
      
      thumbnailsAndMainImageContainer.appendChild(thumbnailsContainer);
      thumbnailsAndMainImageContainer.appendChild(mainProductImage);
      imageContainer.appendChild(thumbnailsAndMainImageContainer);
      
  
      const detailsContainer = document.createElement('div');
      detailsContainer.classList.add('product-details');
  
      const title = document.createElement('h1');
      title.textContent = product.title;
      title.classList.add('product-title');
      detailsContainer.appendChild(title);
  
  
  
      const titleRatingContainer = document.createElement('div');
      titleRatingContainer.classList.add('title-rating');
  
      const ratingContainer = document.createElement('div');
      ratingContainer.classList.add('product-rating-container');
  
      const roundedRating = Math.round(product.rating * 10) / 10;
      const fullStars = Math.floor(roundedRating);
      const hasHalfStar = roundedRating - fullStars >= 0.5;
  
      for (let i = 0; i < fullStars; i++) {
        const starImage = document.createElement('img');
        starImage.setAttribute('src', '../src/assets/rating-star.png');
        starImage.setAttribute('alt', 'Full-Star');
        starImage.classList.add('full-star');
        ratingContainer.appendChild(starImage);
      }
  
      if (hasHalfStar) {
        const halfStarImage = document.createElement('img');
        halfStarImage.setAttribute('src', '../src/assets/rating-star.png');
        halfStarImage.setAttribute('alt', 'Half-Star');
        halfStarImage.classList.add('half-star');
        ratingContainer.appendChild(halfStarImage);
      }
  
      const ratingTextContainer = document.createElement('p');
      ratingTextContainer.classList.add('rating-text');
  
      const ratingTextNode = document.createTextNode(`${roundedRating}`);
      
      const ratingSpan = document.createElement('span');
      ratingSpan.textContent = "/5";
      
      ratingTextContainer.appendChild(ratingTextNode);
      ratingTextContainer.appendChild(ratingSpan);
      ratingContainer.appendChild(ratingTextContainer);
  
      titleRatingContainer.appendChild(ratingContainer);
      detailsContainer.appendChild(titleRatingContainer);
  
  
  
      const priceContainer = document.createElement('div');
      priceContainer.classList.add('price-container');
  
      const price = document.createElement('p');
      price.innerHTML = `$${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}`;
      price.classList.add('product-price');
      priceContainer.appendChild(price);
  
      const originalPrice = document.createElement('p');
      originalPrice.innerHTML = `$${product.price.toFixed(2)}`;
      originalPrice.classList.add('original-price');
      priceContainer.appendChild(originalPrice);
  
  
      const discount = document.createElement('p');
      discount.textContent = `-${Math.round(product.discountPercentage)}%`;
      discount.classList.add('discount');
      priceContainer.appendChild(discount);
  
      detailsContainer.appendChild(priceContainer);
  
      const description = document.createElement('p');
      description.textContent = product.description;
      description.classList.add('product-description');
      detailsContainer.appendChild(description);
  
      const hr1 = document.createElement('hr');
      hr1.classList.add('hr');
      detailsContainer.appendChild(hr1);
  
      const brandContainer = document.createElement('div');
      brandContainer.classList.add('brand-container');
  
      const brandLabel = document.createElement('p');
      brandLabel.textContent = 'Brand';
      brandLabel.classList.add('brand-label');
      brandContainer.appendChild(brandLabel);
  
      const brandValue = document.createElement('p');
      brandValue.textContent = product.brand;
      brandValue.classList.add('brand-value');
      brandContainer.appendChild(brandValue);
  
      detailsContainer.appendChild(brandContainer);
  
  
  
      const hr2 = document.createElement('hr');
      hr2.classList.add('hr');
      detailsContainer.appendChild(hr2);
  
  
  
      const stockContainer = document.createElement('div');
      stockContainer.classList.add('stock-container');
  
      const stockLabel = document.createElement('p');
      stockLabel.textContent = 'In Stock';
      stockLabel.classList.add('stock-label');
      stockContainer.appendChild(stockLabel);
  
      const stockValue = document.createElement('p');
      stockValue.textContent = `${product.stock} items`;
      stockValue.classList.add('stock-value');
      stockContainer.appendChild(stockValue);
  
      detailsContainer.appendChild(stockContainer);
  
  
      const hr3 = document.createElement('hr');
      hr3.classList.add('hr');
      detailsContainer.appendChild(hr3);
  
  
  
      const actions = document.createElement('div');
      actions.classList.add('actions');
  
      const counter = document.createElement('div');
      counter.classList.add('counter');
      actions.appendChild(counter);
  
      const minusButton = document.createElement('button');
      minusButton.textContent = '-';
      minusButton.classList.add('minus-button');
      counter.appendChild(minusButton);
      minusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantity.textContent || '1');
        if (currentQuantity > 1) {
          currentQuantity--;
          quantity.textContent = currentQuantity.toString();
        }
      });
  
      const quantity = document.createElement('p');
      quantity.textContent = '1';
      quantity.classList.add('quantity');
      counter.appendChild(quantity);
  
      const plusButton = document.createElement('button');
      plusButton.textContent = '+';
      plusButton.classList.add('plus-button');
      counter.appendChild(plusButton);
      plusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantity.textContent || '1');
        currentQuantity++;
        quantity.textContent = currentQuantity.toString();
      });
  
  
      const button = document.createElement('button');
      button.textContent = 'Add to Cart';
      button.classList.add('add-to-cart-button');
      actions.appendChild(button);
  
      detailsContainer.appendChild(actions);
  
      imageContainer.appendChild(detailsContainer);
      contentContainer.appendChild(imageContainer);
      
      main.appendChild(contentContainer);
    }
  };
  
  