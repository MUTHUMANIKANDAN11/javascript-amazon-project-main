import { orders } from "../data/orders.js";
import { matchingProductItem, products } from "../data/products.js";
import { moneyFormat } from "../others/money-format.js";
import { cart } from "../data/cart-class.js";

let ordersHTML = '';

document.querySelector('.js-cart-quantity').innerText = cart.cartQuantity();

orders.forEach((order) => {
    let productsHTML = '';

    order.products.forEach((product) => {
        const matchedProduct = matchingProductItem(product.productId);

        const date = new Date(product.estimatedDeliveryTime);
        const datenum = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });

        productsHTML += 
        `<div class="product-image-container">
            <img src="${matchedProduct.image}">
        </div>

        <div class="product-details">
            <div class="product-name">
            ${matchedProduct.name}
            </div>
            <div class="product-delivery-date">
            Arriving on: ${month} ${datenum}
            </div>
            <div class="product-quantity">
            Quantity: ${product.quantity}
            </div>
            <button class="buy-again-button button-primary">
            <img class="buy-again-icon" src=".//images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
            </button>
        </div>

        <div class="product-actions">
            <a href="tracking.html">
            <button class="track-package-button button-secondary">
                Track package
            </button>
            </a>
        </div>
        `;
    });

    const date = new Date(order.orderTime);
    const datenum = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });

    ordersHTML += 
    `<div class="order-container">
        <div class="order-header">
        <div class="order-header-left-section">
            <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${month} ${datenum}</div>
            </div>
            <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>${moneyFormat(order.totalCostCents)}</div>
            </div>
        </div>

        <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
        </div>
        </div>

        <div class="order-details-grid">
        ${productsHTML}
        </div>
    </div>
    `
});

document.querySelector('.js-orders-grid').innerHTML = ordersHTML;