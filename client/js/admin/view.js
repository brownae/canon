
// Awards table Start ///////////////
//the displayAwardsTable function is what makes the view for awards on the admin page.
export let displayAwardsTable = (award) => {
    let table =
    `<table>
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
                <td><a href="" id='${award.id}' >Update</a>
                <a href="" id='${award.id}' >Delete</a></td>
        </tr>`;
        });

        table += `</table>
        <div id='admin-button'>
        <button type='button' name='update-button' id='add-award-form' class='addEntry'>Add</button>
        <div>
        `;

    $('#tableContent').append(table);//loads what is requested

};
// Awards table End ///////////////
// Awards form Start ///////////////
export let displayAwardsForm = () => {

        let form = `
            <form action="#" method="post" class="">
                <div class="form-group">
                    <label for="imgName">Name of img</label>
                    <input type="text" class="form-control" id="imgName" name="imgName" placeholder="example: beard-award-logo.jpg">
                </div>

                <div class="form-group">
                    <label for="awardTitle">Award title</label>
                    <input type="text" class="form-control" id="awardTitle" name="awardTitle" placeholder="example: Best Cocktail Bar in the World">
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
                    <button id="create-award-button" type="button">Update</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested


};
// Awards form End ///////////////



// About table Start ///////////////
export let displayAboutsTable = (about) => {
    let table =
    `<table>
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
                <td><a href="" id='${about.id}' >Update</a>
                <a href="" id='${about.id}' >Delete</a></td>
        </tr>`;
        });

        table += `</table>
        <div id='admin-button'>
        <button type="button" name="add-about-form" id="add-about-form" class='addEntry' >Add</button>
        <div>
        `;

    $('#tableContent').append(table);//loads what is requested

};
// About table End ///////////////
// About form Start ///////////////
export let displayAboutForm = () => {

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
                    <button id="create-about-button" type="button">Update</button>
                </div>
            </form>`;

    $('#tableContent').append(form);//loads what is requested


};
// About form END ///////////////


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
