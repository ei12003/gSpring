var BASE_URL = 'http://gnomo.fe.up.pt/~arestivo/exemplosiem/';

$(document).ready(function(){

	$('img').mouseover(function() {
		$(this).fadeTo(1000, 0.5);
	});

	$('img').mouseout(function() {
		$(this).fadeTo(1000, 1);
	});

	$('.dismiss a').click(function(){
	  $(this).parent().parent().fadeOut('slow');
	});

	$('#comments').hide();

        $('#show_comments').click(function(event){
		$('#comments').slideToggle();
		event.preventDefault();
	});

        $('#register #username').change(function(){

		$.getJSON(BASE_URL + 'ajax/auth/username_exists.php', 
                      {username: $(this).val()}, 
                      function(data) {
			if (data.result)
			      $('#register #username').addClass('error');
			else
			      $('#register #username').removeClass('error');
		      }
	        );

/*		var username = $(this).val();
		$.getJSON(BASE_URL + 'ajax/auth/list_users.php', null, function(data) {
			var found = false;
			$.each(data, function(index, value) {
				if (value.username == username) found = true;
			});
			if (found) $('#register #username').addClass('error');
			else $('#register #username').removeClass('error');
		});*/

	});

	$('#login #username').autocomplete({
            source: BASE_URL + 'ajax/auth/list_usernames.php', 
            minLength: 2
        });

});
