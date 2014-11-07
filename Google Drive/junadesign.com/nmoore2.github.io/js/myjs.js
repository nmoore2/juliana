	/*============================================
	Navigation Functions
	==============================================*/

	var blacklogo = './assets/logoblack.png'
	var orangelogo = './assets/logo2.png'

	$(window).scroll(function(){
		if ($(window).scrollTop()===0){
			$('.logoimg').attr('src', blacklogo);
		}
		else{
			$('.logoimg').attr('src', orangelogo);
		}
	});	