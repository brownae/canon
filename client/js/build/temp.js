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

import { createAward, createAbout, getAboutsById, updateAbout, deleteAbout } from '../admin/model.js';
import {displayAwardsTable, displayNewAwardsForm, displayAboutsTable, displayMenuForm, displayNewAboutForm, displayUpdateAboutForm } from '../admin/view.js';

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
//create a new about article End

//UPDATE FORM about article Start
let createAboutIdInput = (id) => {//this formats the data for the graphql query to use.
    return {
            "input": id
    };
};

$(document).on('click', '.updateAbout', function(e) {
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

$(document).on('click', 'button.update', function() {
    //NOTE these do not match the location on the form!
    let id = $(".update").data("id"),
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
                $('form')[0].reset();
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
$(document).on('click', 'a.delete', function(event){
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
                        alert('Deleted!');
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

//create a new award article Start
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
//create a new award article End

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
