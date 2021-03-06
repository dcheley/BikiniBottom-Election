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
      var ulItem = $('<li>');
      var id = responseData.candidates[i].id;
      var name = responseData.candidates[i].name;
      var votes = responseData.candidates[i].votes;

      ulItem.append(name + " has " + votes + " votes!");
      ulItem.append("<form class='voteform' method='POST' action='https://bb-election-api.herokuapp.com/vote'><input name='name' type='hidden' value=" + name + "><input type='submit' value='submit'> </form><br>");
      $('#candidates').append(ulItem);
    };

    $('form').on('submit', function() {
      event.preventDefault();
      console.log($(this).children('input[type=hidden]').val());

      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/vote',
        method: 'POST',
        data: {"name" : $(this).children('input[type=hidden]').val()},
          }).fail(function() {
            alert('fail');
          }).done(function(data) {
              console.log(data);
          });
    });
    });
});
