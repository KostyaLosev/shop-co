import { createElementWithDocumentCreateElement } from "./ElementCreator";

export const createFilters = (parentElement: HTMLElement) => {
    const filtersContainer = createElementWithDocumentCreateElement('div', undefined, 'filters-container');

    const filters = createElementWithDocumentCreateElement('div', undefined, 'filters');
    filtersContainer.appendChild(filters);

    const text1 = createElementWithDocumentCreateElement('div', 'Filters', 'filters-text');
    filters.appendChild(text1);

    const filtersIcon = createElementWithDocumentCreateElement('img') as HTMLImageElement;
    filtersIcon.alt = 'upArrow';
    filtersIcon.src = './src/assets/images/icons/icon-filter.png';
    filters.appendChild(filtersIcon);

    const line1 = createElementWithDocumentCreateElement('hr');
    filtersContainer.appendChild(line1);

    const sortFunction = createElementWithDocumentCreateElement('div', undefined, 'sort-function');
    filtersContainer.appendChild(sortFunction);

    const sort = createElementWithDocumentCreateElement('p', 'Sort', 'sort');
    sortFunction.appendChild(sort);

    const choosing = createElementWithDocumentCreateElement('div', undefined, 'choosing');
    sortFunction.appendChild(choosing);

    const ascending = createElementWithDocumentCreateElement('p', 'Ascending', 'ascending');
    choosing.appendChild(ascending);

    const descending = createElementWithDocumentCreateElement('p', 'Descending', 'descending');
    choosing.appendChild(descending);

    const line2 = createElementWithDocumentCreateElement('hr');
    filtersContainer.appendChild(line2);

    const priceFilter = createElementWithDocumentCreateElement('div', undefined, 'price-filter');
    filtersContainer.appendChild(priceFilter);

    const choosePrice = createElementWithDocumentCreateElement('div', undefined, 'choose-price');
    priceFilter.appendChild(choosePrice);

    const price = createElementWithDocumentCreateElement('p', 'Price', 'price');
    choosePrice.appendChild(price);

    const upArrow = createElementWithDocumentCreateElement('img') as HTMLImageElement;
    upArrow.alt = 'upArrow';
    upArrow.src = './src/assets/images/icons/icon-arrow-up.png';
    choosePrice.appendChild(upArrow);

    
    const priceRange = createElementWithDocumentCreateElement('div', undefined, 'price-range') as HTMLDivElement;
    priceFilter.appendChild(priceRange);

    const priceMin = createElementWithDocumentCreateElement('input', undefined, 'price-min') as HTMLInputElement;
    priceMin.type = 'range';
    priceMin.min = '0';
    priceMin.max = '3000';
    priceMin.value = '0';
    priceMin.step = '1';
    priceRange.appendChild(priceMin);

    const priceMax = createElementWithDocumentCreateElement('input', undefined, 'price-max') as HTMLInputElement;
    priceMax.type = 'range';
    priceMax.min = '0';
    priceMax.max = '3000';
    priceMax.value = '3000';
    priceMax.step = '1';
    priceRange.appendChild(priceMax);

    const priceMinValue = createElementWithDocumentCreateElement('span', '0', 'price-min-value') as HTMLSpanElement;
    priceRange.appendChild(priceMinValue);

    const priceMaxValue = createElementWithDocumentCreateElement('span', '3000', 'price-max-value') as HTMLSpanElement;
    priceRange.appendChild(priceMaxValue);

    
    priceMin.addEventListener('input', () => {
        const minValue = parseInt(priceMin.value, 10);
        priceMinValue.textContent = minValue.toString();
        if (minValue > parseInt(priceMax.value, 10)) {
            priceMax.value = minValue.toString();
            priceMaxValue.textContent = minValue.toString();
        }
    });

    priceMax.addEventListener('input', () => {
        const maxValue = parseInt(priceMax.value, 10);
        priceMaxValue.textContent = maxValue.toString();
        if (maxValue < parseInt(priceMin.value, 10)) {
            priceMin.value = maxValue.toString();
            priceMinValue.textContent = maxValue.toString();
        }
    });

    const button1 = createElementWithDocumentCreateElement('button', 'Apply Filter', 'apply-filter') as HTMLButtonElement;
    filtersContainer.appendChild(button1);

    const button2 = createElementWithDocumentCreateElement('button', 'Reset Filter', 'reset-filter') as HTMLButtonElement;
    filtersContainer.appendChild(button2);

    parentElement.appendChild(filtersContainer);
}








