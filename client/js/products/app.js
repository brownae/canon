import { getAllProducts } from '../products/model';
import { displayProducts } from '../products/view';


$.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: getAllProducts
        }),
        contentType: 'application/json',
        success: function(response) {
            products = [];
            if (response.hasOwnProperty('data')) {
                let productEdges = response.data.viewer.allProducts.edges;
                for (var product of productEdges) {
                    products.push(product.node);
                }
            }
            displayProducts(products);
        }
});
