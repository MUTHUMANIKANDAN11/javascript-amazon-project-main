let productSummaryHTML = '';

updateQuantityInAmazonPage();

products.forEach((product) => {
    productSummaryHTML += `
        <div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
                ${product.priceCents}
            </div>

            <div class="product-quantity-container">
            <select class="quantity-input-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${product.id}">
            Add to Cart
            </button>
        </div>
    `
});

document.querySelector('.js-products-grid').innerHTML = productSummaryHTML;

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        
        addToCart(productId);
        displayAdded(productId);
        updateQuantityInAmazonPage();
    });
});

let timeoutId = {};

function displayAdded(productId){
    const clicked = document.querySelector(`.js-added-to-cart-${productId}`);
    clicked.classList.add('added-to-cart-clicked');

    if(timeoutId[productId]){
        clearTimeout(timeoutId);
    }

    timeoutId[productId] = setTimeout(() => {
        clicked.classList.remove('added-to-cart-clicked');
        delete timeoutId[productId];
    }, 2000);
}

function updateQuantityInAmazonPage(){
    const quantity = cartQuantity();
    document.querySelector('.js-cart-quantity').innerHTML = quantity;
}