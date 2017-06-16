//this is where I query the db and get the info and put it in a var

// All awards
export const getAllAbouts = `
    query getAllAbouts {
        viewer {
            allAbouts{
                edges {
                    node {
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
            }
        }
    }`;
