const ratingState = document.getElementById('ratingState');
const thankState = document.getElementById('thankState');
var userRatingValue = null;

submitBtn.addEventListener('click', function () {
    if (userRatingValue >= 1 && userRatingValue <= 5) { 
        ratingState.style.display = 'none';
        thankState.style.display = 'inline';
        document.getElementById('userRating').innerHTML = userRatingValue;
    }
    else {
        console.log("No option selected!");
    }
})