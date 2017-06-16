//this is where I query the db and get the info and put it in a var

// All menus
export const getAllMenus = `
    query getAllmenus {
        viewer {
            allMenus{
                edges {
                    node {
                        id
                        modifiedAt
                        createdAt
                        bottlesUrl
                        foodUrl
                        cocktailsUrl
                    }
                }
            }
        }
    }`;
