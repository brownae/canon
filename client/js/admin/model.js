// queries for the admin section are currently being pulled in from the model of their section

//make this create about
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

//make this create new award
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

    // Use this to base your UPDATE menu query
    // export const getAllMenus = `
    //     mutation getAllmenus {
    //         viewer {
    //             allMenus{
    //                 edges {
    //                     node {
    //                         id
    //                         modifiedAt
    //                         createdAt
    //                         bottlesUrl
    //                         foodUrl
    //                         cocktailsUrl
    //                     }
    //                 }
    //             }
    //         }
    //     }`;
