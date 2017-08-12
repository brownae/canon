//this is where I query the db and get the info and put it in a var

// All awards
export const getAllProducts = `
    query getAllProducts {
        viewer {
            allProducts {
                edges {
                    node {
                        id
                        modifiedAt
                        createdAt
                        productName
                        productType
                        productSpecs
                        displayOrder
                        productDescription
                        productPrice
                        productForPurchaseAt
                        productForPurchaseAtURL
                        productInStock
                        productImg
                    }
                }
            }
        }
    }`;
