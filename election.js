$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
    }).done(function(responseData) {
      for (var i in responseData.candidates) {
      console.log(responseData.candidates[i].id);
      console.log(responseData.candidates[i].name);
      console.log(responseData.candidates[i].votes);
      var ulItem = document.createElement('li');
      var id = responseData.candidates[i].id;
      var name = responseData.candidates[i].name;
      var votes = responseData.candidates[i].votes;

      ulItem.append(name + " has " + votes + " votes!");

      $('#candidates').append(ulItem);
    };
  });

});
