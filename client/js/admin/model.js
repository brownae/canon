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
                changeAward {
                    id
                }
            }
        }`;

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
