export function Footer(): HTMLElement {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="STAY-UPTO-DATE">
        <h2>STAY UPTO DATE ABOUT <br>OUR LATEST OFFERS</h2>
        <div class="actions">
        <input type="email" class="input-email" placeholder="Enter your email address">
        <button>Subscribe to Newsletter</button>
        </div>
    </div>

    <div class="footer-content">

        <ul class="content">
        <li>
            <h4>SHOP.CO</h4>
            <p>We have clothes that suits your style <br>and which you’re proud to wear. From <br>women to men.</p>
            <div>
            <img src="./src/assets/images/apps/1.png" alt="twitter">
            <img src="./src/assets/images/apps/2.png" alt="facebook">
            <img src="./src/assets/images/apps/3.png" alt="instagram">
            <img src="./src/assets/images/apps/4.png" alt="app">
            </div>
        </li>
        <li>
            <h5>Company</h5>
            <p>About</p>
            <p>Features </p>
            <p>Works</p>
            <p>Career</p>
        </li>
        <li>
            <h5>Help</h5>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </li>
        <li>
            <h5>FAQ</h5>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Manage Deliveries</p>
        </li>
        <li>
            <h5>Resousers</h5>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
        </li>
        </ul>

        <hr>

        <div class="additional-information">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <ul class="payment">
            <li><img src="./src/assets/images/payment/Badge.png" alt="payments-visa"></li>
            <li><img src="./src/assets/images/payment/Badge (1).png" alt="payments-mastercard"></li>
            <li><img src="./src/assets/images/payment/Badge (2).png" alt="payments-paypal"></li>
            <li><img src="./src/assets/images/payment/Badge (3).png" alt="payments-applepay"></li>
            <li><img src="./src/assets/images/payment/Badge (4).png" alt="payments-googlepay"></li>
        </ul>
        </div>
    </div>
    `;
    return footer;
}

