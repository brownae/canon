// this is the page where I say get element by id and put $thisVar in that spot.



export let displayFaqs = (faqs) => {
    faqs.forEach(function(faq) {
        //console.log(faq);

        const faqTemplate = `
            <p class="question"> Do I have to have a reservation?</p>
            <p class="answer">No, we accept walk-ins but if you want a guaranteed spot you should make a reservation</p>
        `;

        $('.content-faq').append(faqTemplate);
    });

};
