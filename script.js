$(document).ready(function() {

	$(".submit").click(searchWiki);
	
	$("input").keypress(function (k) {
		if (k.which == 13) {
			searchWiki();
		}
	});
	
	function searchWiki() {
		$('.results').remove();
		$.ajax({
			type: 'GET',
			dataType: "json",
			url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + $("input").val() + '&limit=10&origin=*',
			success: function(data){
				console.log(data)
				for (var i = 0; i < data[1].length; i++) {
					$('main').append(
						`<a href=` + data[3][i] + `><div class='container results'>
							<div class='row'>
							<h3>`+ data[1][i] + `</h3>
							</div>
							<div class='row'>
							<h4>` + data[2][i] + `</h4>
							</div>
						</div></a>`
					);
				}	
			}
		});
	}
})