//this is where I query the db and get the info and put it in a var

// All awards
export const getAllFaqs = `
    query getAllFaqs {
        viewer {
            allFaqs {
                edges {
                    node {
                        id
                        modifiedAt
                        createdAt
                        question
                        answer
                        displayOrder
                    }
                }
            }
        }
    }`;
