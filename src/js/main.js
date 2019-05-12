
//header
var positionScrol=$(window).scrollTop();
$(window).scroll(function(){  
	if(positionScrol>$(window).scrollTop()){
	$('header').removeClass('small');
	}else{
		$('header').addClass('small');
	}
	positionScrol=$(window).scrollTop();
});

//mehuMobile
$('.hamburgerButton').click(function(){
		if($('.mobileMenu').hasClass('visible')){
			$('.mobileMenu').removeClass('visible');
		}else{
			$('.mobileMenu').addClass('visible');
		}

		if($('.hamburgerButton').hasClass('on')){
			$('.hamburgerButton').removeClass('on');
		}else{
			$('.hamburgerButton').addClass('on');
		}
});

//forma
$('#contactUs form button').click(function(){

	function checkEmail(email){
		var check=false;
		for(var i=1; i<(email.length-1);i++){
				if(email[i]=='@'){
					 check=true;
				}
		}	
		return check;		
	}

	var name=$('#contactUs form #clientName').val();
	var mail=$('#contactUs form #clientMail').val();
	var mesage=$('#contactUs form #clientMesage').val();

	$('#contactUs form input').removeClass('error');
	$('#contactUs form textarea').removeClass('error');
	if (name.length<=0){
		$('#contactUs form #clientName').addClass('error');
	}else
	if (mail.length<=3 || !checkEmail(mail)){
		$('#contactUs form #clientMail').addClass('error');
	}else
	if (mesage.length<=0){
		$('#contactUs form #clientMesage').addClass('error');
	}else{
		//ajax code
		//...
		//result
		$('#contactUs form').addClass('disabled');
		$('#contactUs .mesageSend').removeClass('disabled');
	}

});