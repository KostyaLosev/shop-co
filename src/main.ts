import "./style.scss";
import Navigo from "navigo";
import { categoryPage } from "./pages/CategoryPage/CategoryPage";
import { homePage } from "./pages/HomePage/HomePage";
import { productPage } from "./pages/ProductDetailPage/ProductDetailPage";
import { setupLayout } from "./api/setupLayout";

const router = new Navigo('/', { linksSelector: 'a' });

setupLayout();

router.on({
  '/': homePage,
  '/:category': categoryPage,
  '/:category/:productId': productPage
});

router.hooks({
  before() {
    window.scrollTo(0, 0);
  }
});

router.resolve();

document.addEventListener('click', (event: MouseEvent) => {
  const target = event.target as HTMLAnchorElement;

  if (target.tagName === 'A') {
    const href = target.getAttribute('href');

    if (href && href.startsWith('/') && !event.defaultPrevented) {
      event.preventDefault();
      router.navigate(href);
    }
  }
});

export default router;