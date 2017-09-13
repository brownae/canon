//ABOUT SECTION START
// About table Start ///////////////
export let displayAboutsTable = (about) => {
    let table =
    `<table class='About'><!-- Keep class capitalized -->
        <tr>
            <th>Display Order</th>
            <th>name</th>
            <th>Title</th>
            <th>Content</th>
            <th>imgName</th>
        </tr>`;

        abouts.forEach(function(about) {
        table +=  `<tr>
                <td>${about.displayOrder}</td>
                <td>${about.name}</td>
                <td>${about.title}</td>
                <td>${about.content}</td>
                <td>${about.imgName}</td>
                <td><a href="" id='${about.id}' class='updateAboutForm'>Update</a>
                <a href="" id='${about.id}' class='deleteAbout'>Delete</a></td>
        </tr>`;
        });

        table += `</table>
        <div id='admin-button'>
        <button type="button" name="add-about-form" id="add-about-form" class='addEntry' >Add</button>
        <div>
        <a name="form">
        `;

    $('#tableContent').append(table);//loads what is requested

};
// About table End ///////////////
// About form Start ///////////////
export let displayNewAboutForm = () => {

        let form = `
            <form action="#" method="post" class="">
                <div class="form-group">
                    <label for="displayOrder">Display Order</label>
                    <input type="url" class="form-control" id="displayOrder" name="displayOrder" placeholder="(Number)">
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Persons Name">
                </div>

                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="Title - 'i.e. Chef... Manager">
                </div>

                <div class="form-group">
                    <label for="content">Content</label>
                    <input type="url" class="form-control" id="content" name="content" placeholder="Content...">
                </div>

                <div class="form-group">
                    <label for="imgName">Image Name</label>
                    <input type="url" class="form-control" id="imgName" name="imgName" placeholder="john-johnson.jpg">
                </div>

                <div class="form-group">
                    <button id="create-about-button" type="button">Create</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested


};
// NEW About form END ///////////////
export let displayUpdateAboutForm = (about) => {

        let form = `
            <form action="#" method="post" class="">
            <h2>Update: ${about.name}<h2>
                <div class="form-group">
                    <label for="displayOrder">Display Order</label>
                    <input type="url" class="form-control" id="displayOrder" name="displayOrder" value="${about.displayOrder}">
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value="${about.name}">
                </div>

                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" name="title" value="${about.title}">
                </div>

                <div class="form-group">
                    <label for="content">Content</label>
                    <input type="url" class="form-control" id="content" name="content" value="${about.content}">
                </div>

                <div class="form-group">
                    <label for="imgName">Image Name</label>
                    <input type="url" class="form-control" id="imgName" name="imgName" value="${about.imgName}">
                </div>

                <div class="form-group">
                    <button class="updateAbout" data-id="${about.id}" type="button">Update</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested


};
// UPDATE About form END ///////////////
//ABOUT SECTION END ABOUT END ABOUT END

//AWARDS SECTION START
// Awards table Start ///////////////
//the displayAwardsTable function is what makes the view for awards on the admin page.
export let displayAwardsTable = (award) => {
    let table =
    `<table class='award'>
        <tr>
            <th>Award Title</th>
            <th>Img URL</th>
            <th>From</th>
            <th>Award src URL</th>
            <th>Date Awarded</th>
            <th>comments</th>

        </tr>`;

        awards.forEach(function(award) {
        table +=  `<tr>
                <td>${award.awardTitle}</td>
                <td>${award.imgName}</td>
                <td>${award.awardFrom}</td>
                <td>${award.awardSrcUrl}</td>
                <td>${award.dateAwarded}</td>
                <td>${award.comments}</td>
                <td><a href="" id='${award.id}' class="updateAward" >Update</a>
                <a href="" id='${award.id}' class='deleteAward' >Delete</a></td>
        </tr>`;
        });

        table += `</table>
        <div id='admin-button'>
        <button type='button' name='update-button' id='add-award-form' class='addEntry'>Add</button>
        <div>
        <a name="form">
        `;

    $('#tableContent').append(table);//loads what is requested

};
// Awards table End ///////////////
// Awards form Start ///////////////
export let displayNewAwardsForm = () => {

        let form = `
            <form action="#" method="post" class="">

                <div class="form-group">
                    <label for="awardTitle">Award title</label>
                    <input type="text" class="form-control" id="awardTitle" name="awardTitle" placeholder="example: Best Cocktail Bar in the World">
                </div>

                <div class="form-group">
                    <label for="imgName">Name of img</label>
                    <input type="text" class="form-control" id="imgName" name="imgName" placeholder="example: beard-award-logo.jpg">
                </div>

                <div class="form-group">
                    <label for="awardFrom">Award from</label>
                    <input type="text" class="form-control" id="awardFrom" name="awardFrom" placeholder="example: James Beard Foundation">
                </div>

                <div class="form-group">
                    <label for="awardSrcUrl">Url of award page</label>
                    <input type="url" class="form-control" id="awardSrcUrl" name="awardSrcUrl" placeholder="example: https://www.jamesbeardfoundation.com/awardPage">
                </div>

                <div class="form-group">
                    <label for="dateAwarded">Date awarded</label>
                    <input type="text" class="form-control" id="dateAwarded" name="dateAwarded" placeholder="Month Year... June 2016">
                </div>

                <div class="form-group">
                    <label for="comments">Comments</label>
                    <input type="text" class="form-control" id="comments" name="comments" placeholder="Comments">
                </div>

                <div class="form-group">
                    <button id="create-award-button" type="button">Create</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested


};
// Awards form End ///////////////
// Awards update form START
export let displayUpdateAwardsForm = () => {
    let form = `
        <form action="#" method="post">

            <div class="form-group">
                <label for="awardTitle">Award title</label>
                <input type="text" class="form-control" id="awardTitle" name="awardTitle" value="${award.awardTitle}">
            </div>

            <div class="form-group">
                <label for="imgName">Name of img</label>
                <input type="text" class="form-control" id="imgName" name="imgName" value="${award.imgName}">
            </div>

            <div class="form-group">
                <label for="awardFrom">Award from</label>
                <input type="text" class="form-control" id="awardFrom" name="awardFrom" value="${award.awardFrom}">
            </div>

            <div class="form-group">
                <label for="awardSrcUrl">Url of award page</label>
                <input type="url" class="form-control" id="awardSrcUrl" name="awardSrcUrl" value="${award.awardSrcUrl}">
            </div>

            <div class="form-group">
                <label for="dateAwarded">Date awarded</label>
                <input type="text" class="form-control" id="dateAwarded" name="dateAwarded" value="${award.dateAwarded}">
            </div>

            <div class="form-group">
                <label for="comments">Comments</label>
                <input type="text" class="form-control" id="comments" name="comments" value="${award.comments}">
            </div>

            <div class="form-group">
                <button type="button" class="updateAward" data-id="${award.id}">Update</button>
            </div>
        </form>`;
    $('#tableContent').append(form);//loads what is requested
};
// Awards update form END

//AWARDS SECTION END

//FAQ SECTION START
// FAQ table Start ///////////////
export let displayFaqTable = (faq) => {
    let table =
    `<table class='faq'><!-- Keep class capitalized -->
        <tr>
            <th>Display Order</th>
            <th>Question</th>
            <th>Answer</th>
        </tr>`;

        faqs.forEach(function(faq) {
        table +=  `<tr>
                <td>${faq.displayOrder}</td>
                <td>${faq.question}</td>
                <td>${faq.answer}</td>
                <td><a href="" id='${faq.id}' class='update'>Update</a>
                <a href="" id='${faq.id}' class='deleteFaq'>Delete</a></td>
        </tr>`;
        });

        table += `</table>
        <div id='admin-button'>
        <button type="button" name="add-faq-form" id="add-faq-form" class='addEntry' >Add</button>
        <div>
        <a name="form">
        `;

    $('#tableContent').append(table);//loads what is requested

};
// FAQ table End ///////////////
// FAQ form Start ///////////////
export let displayNewFaqForm = () => {

        let form = `
            <form action="#" method="post" class="">
                <div class="form-group">
                    <label for="displayOrder">Display Order</label>
                    <input type="url" class="form-control" id="displayOrder" name="displayOrder" placeholder="(Number)">
                </div>

                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" class="form-control" id="question" name="question" placeholder="Do you ? ... ">
                </div>

                <div class="form-group">
                    <label for="answer">Answer</label>
                    <input type="text" class="form-control" id="answer" name="answer" placeholder="Yes we ...">
                </div>

                <div class="form-group">
                    <button id="create-faq-button" type="button">Create</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested
};
// NEW FAQ form END ///////////////
export let displayUpdateFaqForm = (faq) => {

        let form = `
            <form action="#" method="post" class="">
            <h2>Update:${faq.question}<h2>
                <div class="form-group">
                    <label for="displayOrder">Display Order</label>
                    <input type="url" class="form-control" id="displayOrder" name="displayOrder" value="${faq.displayOrder}">
                </div>

                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" class="form-control" id="question" name="question" value="${faq.question}">
                </div>

                <div class="form-group">
                    <label for="answer">Answer</label>
                    <input type="text" class="form-control" id="answer" name="answer" value="${faq.answer}">
                </div>

                <div class="form-group">
                    <button class="updateFaq" data-id="${faq.id}" type="button">Update</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested


};
// UPDATE FAQ form END ///////////////
//FAQ SECTION END

// menu form Start ///////////////
export let displayMenuForm = (menu) => {
    menus.forEach(function(menu) {

        let form = `
            <form action="#" method="post" class="">
                <div class="form-group">
                    <label for="foodMenu">Food Menu</label>
                    <input type="url" class="form-control" id="foodMenu" name="foodMenu" value="${menu.foodUrl}">
                </div>

                <div class="form-group">
                    <label for="cocktailMenu">Cocktail Menu</label>
                    <input type="url" class="form-control" id="cocktailMenu" name="cocktailMenu" value="${menu.cocktailsUrl}">
                </div>

                <div class="form-group">
                    <label for="bottleList">Bottle List</label>
                    <input type="url" class="form-control" id="bottleList" name="bottleList" value="${menu.bottlesUrl}">
                </div>

                <div class="form-group">
                    <button id="update-menu-button" type="submit" class="">Update</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested
    });
};
// menu form End ///////////////

//PRODUCT SECTION START
// PRODUCT table Start ///////////////
export let displayProductsTable = (product) => {
    let table =
    `<table class='product'>
        <tr>
            <th>Display Order</th>
            <th>Product name</th>
            <th>Product type</th>
            <th>Specs</th>
            <th>Description</th>
            <th>Price</th>
            <th>Purchase at</th>
            <th>Purchase at URL</th>
            <th>In stock?</th>
            <th>Image name</th>
        </tr>`;

        products.forEach(function(product) {
        table +=  `<tr>
                <td>${product.displayOrder}</td>
                <td>${product.productName}</td>
                <td>${product.productType}</td>
                <td>${product.productSpecs}</td>
                <td>${product.productDescription}</td>
                <td>${product.productPrice}</td>
                <td>${product.productForPurchaseAt}</td>
                <td>${product.productForPurchaseAtURL}</td>
                <td>${product.productInStock}</td>
                <td>${product.productImg}</td>
                <td><a href="" id='${product.id}' class='updateProduct'>Update</a>
                <a href="" id='${product.id}' class='deleteProduct'>Delete</a></td>
        </tr>`;
        });

        table += `</table>
        <div id='admin-button'>
        <button type="button" name="add-product-form" id="add-product-form" class='addEntry' >Add</button>
        <div>
        <a name="form">
        `;

    $('#tableContent').append(table);//loads what is requested

};
// PRODUCT table End ///////////////
// PRODUCT form Start ///////////////
export let displayNewProductForm = () => {

        let form = `
            <form action="#" method="post" class="">
                <div class="form-group">
                    <label for="displayOrder">Display Order</label>
                    <input type="url" class="form-control" id="displayOrder" name="displayOrder" placeholder="(Number)">
                </div>

                <div class="form-group">
                    <label for="productName">Product Name</label>
                    <input type="text" class="form-control" id="productName" name="productName" placeholder="Orange Bitters">
                </div>

                <div class="form-group">
                    <label for="productType">Product Type</label>
                    <input type="text" class="form-control" id="productType" name="productType" placeholder="ex: Alcohol,Apparel,Media">
                </div>

                <div class="form-group">
                    <label for="productSpecs">Specs</label>
                    <input type="text" class="form-control" id="productSpecs" name="productSpecs" placeholder="3oz bottle">
                </div>

                <div class="form-group">
                    <label for="productDescription">Description</label>
                    <input type="text" class="form-control" id="productDescription" name="productDescription" placeholder="Delightful burst of dark citrus...">
                </div>

                <div class="form-group">
                    <label for="productPrice">Price</label>
                    <input type="text" class="form-control" id="productPrice" name="productPrice" placeholder="12.00">
                </div>

                <div class="form-group">
                    <label for="productForPurchaseAt">Purchase at:</label>
                    <input type="text" class="form-control" id="productForPurchaseAt" name="productForPurchaseAt" placeholder="Canon or Amazon">
                </div>

                <div class="form-group">
                    <label for="productForPurchaseAtURL">Purchase at URL:</label>
                    <input type="url" class="form-control" id="productForPurchaseAtURL" name="productForPurchaseAtURL" placeholder="https://www.amazon.com">
                </div>

                <div class="form-group">
                    <label for="productInStock">In stock?</label>
                    <input type="text" class="form-control" id="productInStock" name="productInStock" placeholder="In Stock or Out of Stock">
                </div>

                <div class="form-group">
                    <label for="productImg">Image name</label>
                    <input type="text" class="form-control" id="productImg" name="productImg" placeholder="orange-bitters.jpg">
                </div>

                <div class="form-group">
                    <button id="create-product-button" type="button">Create</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested
};
// NEW PRODUCT form END ///////////////

export let displayUpdateProductForm = (product) => {

        let form = `
            <form action="#" method="post" class="">
            <h2>Update: ${product.productName}<h2>
                <div class="form-group">
                    <label for="displayOrder">Display Order</label>
                    <input type="url" class="form-control" id="displayOrder" name="displayOrder" value="${product.displayOrder}">
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="productName" name="productName" value="${product.productName}">
                </div>

                <div class="form-group">
                    <label for="title">Product Type</label>
                    <input type="text" class="form-control" id="productType" name="productType" value="${product.productType}">
                </div>

                <div class="form-group">
                    <label for="productSpecs">Specs</label>
                    <input type="text" class="form-control" id="productSpecs" name="content" value="${product.productSpecs}">
                </div>

                <div class="form-group">
                    <label for="productDescription">Description</label>
                    <input type="text" class="form-control" id="productDescription" name="productDescription" value="${product.productDescription}">
                </div>

                <div class="form-group">
                    <label for="productPrice">Price</label>
                    <input type="text" class="form-control" id="productPrice" name="productPrice" value="${product.productPrice}">
                </div>

                <div class="form-group">
                    <label for="productForPurchaseAt">Purchase at</label>
                    <input type="text" class="form-control" id="productForPurchaseAt" name="productForPurchaseAt" value="${product.productForPurchaseAt}">
                </div>

                <div class="form-group">
                    <label for="productForPurchaseAtURL">Purchase at URL</label>
                    <input type="text" class="form-control" id="productForPurchaseAtURL" name="productForPurchaseAtURL" value="${product.productForPurchaseAtURL}">
                </div>

                <div class="form-group">
                    <label for="productInStock">In Stock?</label>
                    <input type="text" class="form-control" id="productInStock" name="productInStock" value="${product.productInStock}">
                </div>

                <div class="form-group">
                    <label for="productImg">Image name</label>
                    <input type="text" class="form-control" id="productImg" name="productImg" value="${product.productImg}">
                </div>

                <div class="form-group">
                    <button id="updateProduct" data-id="${product.id}" type="button">Update</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested


};
// UPDATE PRODUCT form END ///////////////
//PRODUCT SECTION END
