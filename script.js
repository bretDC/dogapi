'use strict'

function getDogs(dogBreed) {
  const url = 'https://dog.ceo/api/breed/' + dogBreed + '/images/random'
  fetch(url)
    .then(response => response.json())
    .then(responseJson => generateImage(responseJson))
    .catch(error => 'Sorry, could not generate image');
};

function returnSubmit(event) {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreed = $('option').val();
    getDogs(dogBreed);
  });
}

function generateImage(responseJson) {
  console.log(responseJson)
  $('.js-image').html(`<img src="${responseJson.message}" class="dog-image" alt="Random Dog Picture">`);
  };

$(returnSubmit);