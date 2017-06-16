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
            console.log(menus);
            displayMenus(menus);
        }
});
