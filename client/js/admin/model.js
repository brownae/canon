// queries for the admin section are currently being pulled in from the model of their section

//CREATE about
export const createAbout = `
    mutation createAboutQuery($input: CreateAboutInput!) {
        createAbout(input: $input) {
            changedAbout {
                id
                modifiedAt
                createdAt
                content
                displayOrder
                title
                name
                imgName
            }
        }
    }`;

//Delete about
export const deleteAbout = `
mutation deleteAboutQuery($input: DeleteAboutInput!) {
  deleteAbout(input: $input) {
    changedAbout {
      id
    }
  }
}
`;
//Update about
export const updateAbout = `
    mutation updateAboutQuery($input: UpdateAboutInput!) {
        updateAbout(input: $input) {
            changedAbout {
                id
                displayOrder
                name
                title
                content
                imgName
                modifiedAt
            }
        }
    }
`;

//get about with id
export const getAboutsById = `
query getAboutsById($input: ID!) {
  getAbout(id: $input) {
    id
    modifiedAt
    displayOrder
    name
    title
    content
    imgName
  }
}`;

//create new award
export const createAward = `
    mutation createAwardQuery($input: CreateAwardInput!) {
        createAward(input: $input) {
            changedAward {
                id
                modifiedAt
                createdAt
                imgName
                awardTitle
                awardFrom
                awardSrcUrl
                dateAwarded
                comments
            }
        }
    }`;

//Delete award
export const deleteAward = `
    mutation deleteAwardQuery($input: DeleteAwardInput!) {
      deleteAward(input: $input) {
         changedAward{
          id
        }
      }
    }
    `;

// Update award
export const updateAward = `
    mutation updateAwardQuery($input: UpdateAwardInput!) {
        updateAward(input: $input) {
            changedAward {
                id
                modifiedAt
                imgName
                awardTitle
                awardFrom
                awardSrcUrl
                dateAwarded
                comments
            }
        }
    }`;

//get award with id
export const getAwardsById = `
    query getAwardById($input: ID!) {
      getAward(id: $input) {
        id
        modifiedAt
        imgName
        awardTitle
        awardFrom
        awardSrcUrl
        dateAwarded
        comments
      }
    }`;


    //CREATE faq
    export const createFaq = `
        mutation createFaqQuery($input: CreateFaqInput!) {
            createFaq(input: $input) {
                changedFaq {
                    id
                    modifiedAt
                    createdAt
                    displayOrder
                    question
                    answer
                }
            }
        }`;

    //Delete faq
    export const deleteFaq = `
    mutation deleteFaqQuery($input: DeleteFaqInput!) {
      deleteFaq(input: $input) {
        changedFaq {
          id
        }
      }
    }
    `;
    //Update faq
    export const updateFaq = `
        mutation updateFaqQuery($input: UpdateFaqInput!) {
            updateFaq(input: $input) {
                changedFaq {
                    id
                    modifiedAt
                    createdAt
                    displayOrder
                    question
                    answer
                }
            }
        }
    `;

    //get faq with id
    export const getFaqById = `
    query getFaqsById($input: ID!) {
        getFaq(id: $input) {
            id
            modifiedAt
            createdAt
            displayOrder
            question
            answer
        }
    }`;


// Use this to base your UPDATE menu query
export const updateAllMenus = `
mutation updateAllmenus($input:UpdateMenuInput!){
  updateMenu(input:$input){
    changedMenu{
        id
        modifiedAt
        bottlesUrl
        foodUrl
        cocktailsUrl
    }
  }
}`;

//CREATE product
export const createProduct = `
    mutation createProductQuery($input: CreateProductInput!) {
        createProduct(input: $input) {
            changedProduct {
                id
                modifiedAt
                createdAt
                displayOrder
                productName
                productType
                productSpecs
                productDescription
                productPrice
                productForPurchaseAt
                productForPurchaseAtURL
                productInStock
                productImg
            }
        }
    }`;

//Delete product
export const deleteProduct = `
mutation deleteProductQuery($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    changedProduct {
      id
    }
  }
}
`;
//Update product
export const updateProduct = `
    mutation updateProductQuery($input: UpdateProductInput!) {
        updateProduct(input: $input) {
            changedProduct {
                id
                modifiedAt
                createdAt
                displayOrder
                productName
                productType
                productSpecs
                productDescription
                productPrice
                productForPurchaseAt
                productForPurchaseAtURL
                productInStock
                productImg
            }
        }
    }
`;

//get product with id
export const getProductById = `
query getProductById($input: ID!) {
    getProduct(id: $input) {
        id
        modifiedAt
        createdAt
        displayOrder
        productName
        productType
        productSpecs
        productDescription
        productPrice
        productForPurchaseAt
        productForPurchaseAtURL
        productInStock
        productImg
    }
}`;
