// this is the page where I say get element by id and put $thisVar in that spot.



export let displayProducts = (products) => {
    products.forEach(function(product) {
        console.log(product);

        const productTemplate = `
            <article>
                <div class="img-product">
                    <img src="img/${product.productImg}" alt="${product.productName}">
                </div>
                <div class="content-product">
                    <h3><span>${product.productName}</span></h3>
                    <h4><span>${product.productSpecs}</span></h4>

                    <p><span></span> ${product.productDescription}</p>

                    <p><span>Available at: </span><a href="${product.productForPurchaseAtURL}"> ${product.productForPurchaseAt}</a></p>
                    <p><span>Price $${product.productPrice},  Availability: ${product.productInStock}</span>

                </div>
            </article>
        `;

        $('#productsPage').append(productTemplate);
    });

};
