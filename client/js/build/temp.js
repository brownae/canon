import { getAllAbouts } from '../about/model';
import { displayAbouts } from '../about/view';


$.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: getAllAbouts
        }),
        contentType: 'application/json',
        success: function(response) {
            abouts = [];
            if (response.hasOwnProperty('data')) {
                let aboutEdges = response.data.viewer.allAbouts.edges;
                for (var about of aboutEdges) {
                    abouts.push(about.node);
                }
            }
            displayAbouts(abouts);
        }
});

import { createAbout, getAboutsById, updateAbout, deleteAbout, createAward, getAwardsById, updateAward, deleteAward } from '../admin/model.js';
import {displayNewAboutForm, displayAboutsTable, displayUpdateAboutForm, displayAwardsTable, displayNewAwardsForm, displayUpdateAwardsForm,  displayMenuForm } from '../admin/view.js';

$("[name='page-select']").change(function(event){

    let value = $(this).val();

    switch(value) {
        case 'about':
            $('#tableContent').empty();//clears what was in div before
            $.ajax({
                    type: "POST",
                    url: "https://us-west-2.api.scaphold.io/graphql/canon",
                    data: JSON.stringify({
                        query: getAllAbouts
                    }),
                    contentType: 'application/json',
                    success: function(response) {
                        abouts = [];
                        if (response.hasOwnProperty('data')) {
                            let aboutEdges = response.data.viewer.allAbouts.edges;
                            for (var about of aboutEdges) {
                                abouts.push(about.node);
                            }
                        }
                        displayAboutsTable(abouts);
                    }
            });
            break;
        case 'awards':
            $('#tableContent').empty();//clears what was in div before

            $.ajax({
                    type: "POST",
                    url: "https://us-west-2.api.scaphold.io/graphql/canon",
                    data: JSON.stringify({
                        query: getAllAwards
                    }),
                    contentType: 'application/json',
                    success: function(response) {
                        awards = [];
                        if (response.hasOwnProperty('data')) {
                            let awardEdges = response.data.viewer.allAwards.edges;
                            for (var award of awardEdges) {
                                awards.push(award.node);
                            }
                        }
                        //console.log(awards);
                        displayAwardsTable(awards);
                    }
            });
            break;
        case 'menu':
            $('#tableContent').empty();//clears what was in div before

            $.ajax({
                    type: "POST",
                    url: "https://us-west-2.api.scaphold.io/graphql/canon",
                    data: JSON.stringify({
                        query: getAllMenus
                    }),
                    contentType: 'application/json',
                    success: function(response) {
                        menus = [];
                        if (response.hasOwnProperty('data')) {
                            let menuEdges = response.data.viewer.allMenus.edges;
                            for (var menu of menuEdges) {
                                menus.push(menu.node);
                            }
                        }
                        //console.log(menus);
                        displayMenuForm(menus);
                    }
            });

            break;
        default:
            $('#tableContent').empty();//clears what was in div before
            // code block
    }
});


// START - ABOUT *** ABOUT *** ABOUT *** ABOUT *** ABOUT *** ABOUT

// this pops down the form to add a new about article
$(document).on('click', "#add-about-form", function() {
    displayNewAboutForm();
});

//CREATE a new about article Start
let createAboutInput = (displayOrder, name, title, content, imgName) => {
    return {
        "input": {
            "displayOrder": displayOrder,
            "name": name,
            "title": title,
            "content": content,
            "imgName": imgName
        }
    };
};

$(document).on('click', '#create-about-button', function() {


    let displayOrder = $('#displayOrder').val(),
        name = $('#name').val(),
        title = $('#title').val(),
        content = $('#content').val(),
        imgName = $('#imgName').val(),
        data = createAboutInput(displayOrder, name, title, content, imgName);

    $.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: createAbout,
            variables: data
        }),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        },
        success: function(response) {
            if (response.hasOwnProperty('data')) {
                alert('You created a new about section!');
                location.reload();
            }
        },
        error: function(xhr, status, response) {
            if (response.hasOwnProperty('errors')) {
                alert(response.errors[0].message);
            }
        }
    });
});
//CREATE a new about article End

//UPDATE FORM about article Start
let createAboutIdInput = (id) => {//this formats the data for the graphql query to use.
    return {
            "input": id
    };
};

$(document).on('click', '.update', function(e) {
    e.preventDefault();
    let id = $(this).attr('id'),
        data = createAboutIdInput(id);

        $.ajax({
                type: "POST",
                url: "https://us-west-2.api.scaphold.io/graphql/canon",
                data: JSON.stringify({
                    query: getAboutsById,
                    variables: data
                }),
                contentType: 'application/json',
                success: function(response) {
                    //console.log(response);
                    abouts = response.data.getAbout ;

                    displayUpdateAboutForm(abouts);
                    location.href = "#form";

                }
        });
});
//UPDATE FORM about article End

//UPDATE about article Start
let updateAboutInput = (id,displayOrder, name, title, content, imgName) => {
    return {
        "input": {
            "id": id,
            "displayOrder": displayOrder,
            "name": name,
            "title": title,
            "content": content,
            "imgName": imgName
        }
    };
};

$(document).on('click', 'button.updateAbout', function() {
    let id = $(".updateAbout").data("id"),
        displayOrder = $('#displayOrder').val(),
        name = $('#name').val(),
        title = $('#title').val(),
        content = $('#content').val(),
        imgName = $('#imgName').val(),
        data = updateAboutInput(id,displayOrder, name, title, content, imgName);

    $.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: updateAbout,
            variables: data
        }),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        },
        success: function(response) {
            if (response.hasOwnProperty('data')) {
                alert('Updated!');
                location.reload();
            }
        },
        error: function(xhr, status, response) {
            if (response.hasOwnProperty('errors')) {
                alert(response.errors[0].message);
            }
        }
    });
});
//UPDATE about article End

//DELETE About article Start
$(document).on('click', 'a.deleteAbout', function(event){
    event.preventDefault();

    let delConfirm = confirm('Are you sure you want to delete?');
        if (delConfirm === true){

            // Go to db and delete
            let deleteInput = (id) => {
                return {
                    "input": {
                        "id": id
                    }
                };
            };

            let id = $(this).attr('id'),
                data = deleteInput(id);

            $.ajax({
                type: "POST",
                url: "https://us-west-2.api.scaphold.io/graphql/canon",
                data: JSON.stringify({
                    query: deleteAbout,
                    variables: data
                }),
                contentType: 'application/json',
                headers: {
                    'Authorization': 'Bearer ' + Cookies.get('token')
                },
                success: function(response) {
                    if (response.hasOwnProperty('data')) {
                        alert('Deleted an about section!');
                        location.reload();
                    }
                },
                error: function(xhr, status, response) {
                    if (response.hasOwnProperty('errors')) {
                        alert(response.errors[0].message);
                    }
                }
            });
        }
});
//DELETE About article End

// END - ABOUT *** ABOUT *** ABOUT *** ABOUT *** ABOUT *** ABOUT



// START - AWARD *** AWARD *** AWARD *** AWARD *** AWARD *** AWARD
// this pops down the form to add a new award
$(document).on('click', "#add-award-form", function() {
    displayNewAwardsForm();
});

//CREATE a new award article START
    let createAwardInput = (imgName, awardTitle, awardFrom, awardSrcUrl, dateAwarded, comments) => {
        return {
            "input": {
                "imgName": imgName,
                "awardTitle": awardTitle,
                "awardFrom": awardFrom,
                "awardSrcUrl": awardSrcUrl,
                "dateAwarded": dateAwarded,
                "comments": comments
            }
        };
    };

    $(document).on('click', '#create-award-button', function() {

        let imgName = $('#imgName').val(),
            awardTitle = $('#awardTitle').val(),
            awardFrom = $('#awardFrom').val(),
            awardSrcUrl = $('#awardSrcUrl').val(),
            dateAwarded = $('#dateAwarded').val(),
            comments = $('#comments').val(),
            data = createAwardInput(imgName, awardTitle, awardFrom, awardSrcUrl, dateAwarded, comments );

        $.ajax({
            type: "POST",
            url: "https://us-west-2.api.scaphold.io/graphql/canon",
            data: JSON.stringify({
                query: createAward,
                variables: data
            }),
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token')
            },
            success: function(response) {
                if (response.hasOwnProperty('data')) {
                    alert('You created a new award section!');
                    location.reload();
                }
            },
            error: function(xhr, status, response) {
                if (response.hasOwnProperty('errors')) {
                    alert(response.errors[0].message);
                }
            }
        });
    });
//CREATE a new award article END

//UPDATE FORM award article Start
let createAwardIdInput = (id) => {//this formats the data for the graphql query to use.
    return {
            "input": id
    };
};

$(document).on('click', 'a.updateAward', function(e) {
    e.preventDefault();
    let id = $(this).attr('id'),
        data = createAwardIdInput(id);

        $.ajax({
                type: "POST",
                url: "https://us-west-2.api.scaphold.io/graphql/canon",
                data: JSON.stringify({
                    query: getAwardsById,
                    variables: data
                }),
                contentType: 'application/json',
                success: function(response) {
                    award = response.data.getAward ;

                    displayUpdateAwardsForm(award);
                    location.href = "#form";

                }
        });
});
//UPDATE FORM award article End

//UPDATE an award article START
let updateAwardInput = (id,imgName, awardTitle, awardFrom, awardSrcUrl, dateAwarded, comments) => {
    return {
        "input": {
            "id": id,
            "imgName": imgName,
            "awardTitle": awardTitle,
            "awardFrom": awardFrom,
            "awardSrcUrl": awardSrcUrl,
            "dateAwarded": dateAwarded,
            "comments": comments
        }
    };
};

$(document).on('click', 'button.updateAward', function() {

    let id = $("button.updateAward").data("id"),
        imgName = $('#imgName').val(),
        awardTitle = $('#awardTitle').val(),
        awardFrom = $('#awardFrom').val(),
        awardSrcUrl = $('#awardSrcUrl').val(),
        dateAwarded = $('#dateAwarded').val(),
        comments = $('#comments').val(),
        data = updateAwardInput(id, imgName, awardTitle, awardFrom, awardSrcUrl, dateAwarded, comments );

        console.log(data);

    $.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: updateAward,
            variables: data
        }),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        },
        success: function(response) {
            if (response.hasOwnProperty('data')) {
                alert('Updated an award!');
                location.reload();
            }
        },
        error: function(xhr, status, response) {
            if (response.hasOwnProperty('errors')) {
                alert(response.errors[0].message);
            }
        }
    });
});
//UPDATE a new award article END

//DELETE AWARD article Start
$(document).on('click', 'a.deleteAward', function(event){
    event.preventDefault();

    let delConfirm = confirm('Are you sure you want to delete?');
        if (delConfirm === true){

            // Go to db and delete
            let deleteInput = (id) => {
                return {
                    "input": {
                        "id": id
                    }
                };
            };

            let id = $(this).attr('id'),
                data = deleteInput(id);
            console.log(data);

            $.ajax({
                type: "POST",
                url: "https://us-west-2.api.scaphold.io/graphql/canon",
                data: JSON.stringify({
                    query: deleteAward,
                    variables: data
                }),
                contentType: 'application/json',
                headers: {
                    'Authorization': 'Bearer ' + Cookies.get('token')
                },
                success: function(response) {
                    if (response.hasOwnProperty('data')) {
                        alert('Deleted an award!');
                        location.reload();
                    }
                },
                error: function(xhr, status, response) {
                    if (response.hasOwnProperty('errors')) {
                        alert(response.errors[0].message);
                    }
                }
            });
        }
});
//DELETE AWARD article End

// END - AWARD *** AWARD *** AWARD *** AWARD *** AWARD *** AWARD

import { getAllAwards } from '../award/model';
import { displayAwards } from '../award/view';


$.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: getAllAwards
        }),
        contentType: 'application/json',
        success: function(response) {
            awards = [];
            if (response.hasOwnProperty('data')) {
                let awardEdges = response.data.viewer.allAwards.edges;
                for (var award of awardEdges) {
                    awards.push(award.node);
                }
            }
            //console.log(awards);
            displayAwards(awards);
        }
});

import { getAllFaqs } from '../faq/model';
import { displayFaqs } from '../faq/view';


$.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: getAllFaqs
        }),
        contentType: 'application/json',
        success: function(response) {
            faqs = [];
            if (response.hasOwnProperty('data')) {
                let faqEdges = response.data.viewer.allFaqs.edges;
                for (var faq of faqEdges) {
                    faqs.push(faq.node);
                }
            }
            console.log(faqs);
            displayFaqs(faqs);
        }
});

import '../homePage/nav';
import '../homePage/homePage';

import '../login/view';

$(function() { //ready on load

    if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) != "admin.php"){
        const pressed = [];
        const secretCode = 'admin';

        window.addEventListener('keyup', (e) => {
            console.log(e.key);
            pressed.push(e.key);//pushes keyup into array.
            pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
                if (pressed.join('').includes(secretCode)) {
                window.location.replace("login.php");
                }
        });
    }

});//ready on load END

import { getAllMenus } from '../menu/model';
import { displayMenus } from '../menu/view';


$.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: getAllMenus
        }),
        contentType: 'application/json',
        success: function(response) {
            menus = [];
            if (response.hasOwnProperty('data')) {
                let menuEdges = response.data.viewer.allMenus.edges;
                for (var menu of menuEdges) {
                    menus.push(menu.node);
                }
            }
            displayMenus(menus);
        }
});

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
