// this is the page where I say get element by id and put $thisVar in that spot.



export let displayAbouts = (abouts) => {
abouts.forEach(function(about) {
        console.log(about);

        const aboutTemplate = `
        <article id='${about.displayOrder}'>
            <div class="img-about">
                <img src="img/${about.imgName}" alt="Jaime boudreau Canon owner">
            </div>
            <div class="content-about">
                <h3>Name: ${about.name}</h3>
                <h4>Title: ${about.title}</h4>

                <p>${about.content}</p>
            </div>
        </article>

        `;

        $('#aboutPage').append(aboutTemplate);
    });

};
