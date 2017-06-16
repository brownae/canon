import { createAbout, createAward } from '../admin/model.js';
import {displayAwardsTable, displayAboutsTable, displayMenuForm, displayAboutForm, displayAwardsForm } from '../admin/view.js';

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

// this pops down the form to add a new about article
$(document).on('click', "#add-about-form", function() {
    displayAboutForm();
});
// this pops down the form to add a new award
$(document).on('click', "#add-award-form", function() {
    displayAwardsForm();
});


//create a new about article Start
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
                $('form')[0].reset();
            }
        },
        error: function(xhr, status, response) {
            console.log(response);
            if (response.hasOwnProperty('errors')) {
                alert(response.errors[0].message);
            }
        }
    });
});
//create a new about article End



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
                    $('form')[0].reset();
                }
            },
            error: function(xhr, status, response) {
                console.log(response);
                if (response.hasOwnProperty('errors')) {
                    alert(response.errors[0].message);
                }
            }
        });
    });
//create a new award article End
