$.getJSON("json/notes.json", function(data){
  $.each(data.items, function(i,item){
    $("<img/>").attr("src", item.media.m).appendTo("#images");
    if ( i == 3 ) return false;
  });
});

$(document).ready(function(){
	$("button").click(function(){
		id = "#" + $(this).attr('id').slice(0, -6);
		$(id).slideToggle();
	});
});