
export let displayMenus = (menus) => {
    menus.forEach(function(menu) {
        console.log(menu);

        const menuTemplate = `
            <li><a href="${menu.foodUrl}" >Food</a></li>
            <li><a href="${menu.cocktailsUrl}" >Cocktails</a></li>
            <li><a href="${menu.bottlesUrl}" >Bottles</a></li>
        `;

        const food = menu.foodUrl;
        const cocktails = menu.cocktailsUrl;
        const bottles = menu.bottlesUrl;

        $('.menus').append(menuTemplate);
        $('.cta1 a').attr("href", food );
        $('.cta2 a').attr("href", cocktails);
        $('.cta3 a').attr("href", bottles );

    });

};
