export const fetchReviewUser = (reviewerId) =>(
    $.ajax({
        url: `/api/review_user/${reviewerId}/`,
        method: 'GET',
    })
);
