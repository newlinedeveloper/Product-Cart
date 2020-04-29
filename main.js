$( document ).ready(function() {

	var amount = 399;
	var total = 0 ; 
	var count =1;

	$('#ten').click(function(){

		amount = 399;
		alert(amount);
	});

	$('#five').click(function(){

		amount = 209;
		alert(amount);
	});

	$('#plus').click(function(){

		count++;
		$('#lable').text(count);
	});

	$('#minus').click(function(){
		count--;
		$('#lable').text(count);

	});

	$('#cart').click(function(){
		total = amount * count;

		$('#value').html("<div class='ui compact success message'>Total amount is : "+ total+"</div>");

	});



	
	

    console.log( "ready!" );
});