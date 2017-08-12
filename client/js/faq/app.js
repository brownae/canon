import { getAllFaqs } from '../faq/model';
import { displayFaqs } from '../faq/view';


$.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/canon",
        data: JSON.stringify({
            query: getAllFaqs
        }),
        contentType: 'application/json',
        success: function(response) {
            faqs = [];
            if (response.hasOwnProperty('data')) {
                let faqEdges = response.data.viewer.allFaqs.edges;
                for (var faq of faqEdges) {
                    faqs.push(faq.node);
                }
            }
            // orders array by displayOrder
            faqs.sort(function(a,b){
                if (a.displayOrder > b.displayOrder) return  1;
            });
            // console.log(faqs);
            displayFaqs(faqs);
        }
});
