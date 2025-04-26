import { createElementWithDocumentCreateElement } from "./ElementCreator.ts";

export const createHeroSection = (parentElement: HTMLElement) => {
  const heroSection = createElementWithDocumentCreateElement('section', undefined, 'hero');
  parentElement.appendChild(heroSection);

  const heroContent = createElementWithDocumentCreateElement('div', undefined, 'hero-content');
  heroSection.appendChild(heroContent);

  const heroInformation = createElementWithDocumentCreateElement('div', undefined, 'hero-information');
  heroContent.appendChild(heroInformation);

  const h1 = createElementWithDocumentCreateElement('h1');
  const span1 = createElementWithDocumentCreateElement('span', 'ANYTHING', 'span1');
  const span2 = createElementWithDocumentCreateElement('span', 'THAT MATCHES');
  h1.innerHTML = 'FIND ';
  h1.appendChild(span1);
  h1.innerHTML += '<br>';
  h1.appendChild(span2);
  h1.innerHTML += '<br>YOUR STYLE';
  heroInformation.appendChild(h1);

  const pText = createElementWithDocumentCreateElement("p");
  pText.innerHTML = "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.";
  heroInformation.appendChild(pText);

  const button = createElementWithDocumentCreateElement('button', 'Shop Now');
  heroInformation.appendChild(button);

  const ul = createElementWithDocumentCreateElement('ul');
  heroInformation.appendChild(ul);

  const li1 = createElementWithDocumentCreateElement('li');
  const h4_1 = createElementWithDocumentCreateElement('h4', '200+');
  li1.appendChild(h4_1);
  const p_1 = createElementWithDocumentCreateElement('p', 'International Brands');
  li1.appendChild(p_1);
  ul.appendChild(li1);

  const hr1 = createElementWithDocumentCreateElement('hr');
  ul.appendChild(hr1);

  const li2 = createElementWithDocumentCreateElement('li');
  const h4_2 = createElementWithDocumentCreateElement('h4', '2,000+');
  li2.appendChild(h4_2);
  const p_2 = createElementWithDocumentCreateElement('p', 'High-Quality Products');
  li2.appendChild(p_2);
  ul.appendChild(li2);

  const hr2 = createElementWithDocumentCreateElement('hr');
  ul.appendChild(hr2);

  const li3 = createElementWithDocumentCreateElement('li');
  const h4_3 = createElementWithDocumentCreateElement('h4', '30,000+');
  li3.appendChild(h4_3);
  const p_3 = createElementWithDocumentCreateElement('p', 'Happy Customers');
  li3.appendChild(p_3);
  ul.appendChild(li3);

  const stars = createElementWithDocumentCreateElement('div', undefined, 'stars');
  heroContent.appendChild(stars);

  const star = createElementWithDocumentCreateElement('img') as HTMLImageElement;
  star.src = './src/assets/images/star.png';
  star.alt = 'star';
  star.classList.add('star');
  stars.appendChild(star);

  const brandsList = createElementWithDocumentCreateElement('ul', undefined, 'brands');
  heroSection.appendChild(brandsList);

  const brands = [
    './src/assets/images/brands/versace.png',
    './src/assets/images/brands/zara.png',
    './src/assets/images/brands/gucci.png',
    './src/assets/images/brands/prada.png',
    './src/assets/images/brands/calvin-klein.png'
  ];

  brands.forEach(brand => {
    const li = createElementWithDocumentCreateElement('li') as HTMLLIElement;
    const img = createElementWithDocumentCreateElement('img') as HTMLImageElement;
    img.src = brand;
    img.alt = 'brand-logo';
    li.appendChild(img);
    brandsList.appendChild(li);
  });
};

