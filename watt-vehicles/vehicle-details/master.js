// Drivers Rating (Based On Attribute Value EX: (rating-data="4.6"))
function displayRatings() {
    const ratingElements = document.querySelectorAll('.rating');

    ratingElements.forEach(ratingElement => {
        const ratingData = parseFloat(ratingElement.getAttribute('rating-data'));
        const stars = ratingElement.querySelectorAll('img');

        stars.forEach((star, index) => {
            if (index < Math.floor(ratingData)) {
                star.src = '../../img/icon/star-full.png';
            } else if (index < ratingData && index === Math.floor(ratingData)) {
                star.src = '../../img/icon/star-half.png';
            } else {
                star.src = '../../img/icon/star-empty.png';
            }
        });
    });
}

displayRatings();
