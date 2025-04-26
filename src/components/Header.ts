export function Header(): HTMLElement {
    const header = document.createElement('header');
    header.innerHTML = `
      <div class="pop-up">
        <p>Sign up and get 20% off to your first order. <span>Sign Up Now</span></p>
        <a href="#"><img src="./src/assets/images/icons/icon-closing.png" alt="icon-closing"></a>
      </div>
      
      <div class="header">
        <a href="/" class="logo"><h4>Shop.co</h4></a>
        <div>
          <a href="#"><img src="./src/assets/images/icons/icon-basket.png" alt="icon-basket"></a>
          <a href="#"><img src="./src/assets/images/icons/icon-profile.png" alt="icon-profile"></a>
        </div>
      </div>
    `;
    return header;
  }  
