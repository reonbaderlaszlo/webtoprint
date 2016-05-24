$(function(){
    $('.process .navigation a').on('click', function  (e) {

    	e.preventDefault();

    	$('.process .navigation a').removeClass('active');

    	$(this).addClass('active');
    	   
    });

});
