// this is the page where I say get element by id and put $thisVar in that spot.



export let displayFaqs = (faqs) => {
    faqs.forEach(function(faq) {
        //console.log(faq);

        const faqTemplate = `
            <p class="question">${faq.question}</p>
            <p class="answer">${faq.answer}</p>
        `;

        $('.content-faq').append(faqTemplate);
    });

};
