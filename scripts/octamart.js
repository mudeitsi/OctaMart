// To combine all HTML strings together

let productsHTML = '';

// Loop for generating Products HTML
products.forEach((product) => {
    productsHTML += `
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
                    src=images/ratings/rating-"${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
                $${(product.priceCents /100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
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

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-cart">
                Add to Cart
            </button>
            </div>
    `;    
});

console.log(productsHTML);

// Using the DOM to get HTML emelents and putting it into JS

document.querySelector('.js-products-grid').innerHTML = productsHTML;

// Adding an event listener to make Add to Cart button interactive.
// This gives a list of all Add to Cart buttons then loops through.
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
           console.log('Added product'); 
        });
    });