$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
 
class UI{
showNav(){
	document.querySelector('.nav').classList.toggle('nav-show');
}	
}


//event Listener
eventListeners(); 
function eventListeners(){
const ui = new UI()
 //windows event list
   //nav btn
	document.querySelector('.navBtn').addEventListener('click', function(){
	ui.showNav()
	});

	//control the video
	document.querySelector('.video-swich').addEventListener('click', function(){
		ui.videoControls()
	});
}





//show nav
UI.prototype.showNav = function(){
document.querySelector('.nav').classList.toggle('nav-show');	
}

//play paus
UI.prototype.videoControls = function(){
	let btn = document.querySelector('.video-swich-btn');
	if (!btn.classList.contains('btn-slide')) {
		btn.classList.add('btn-slide')
		document.querySelector('.video_item').pause()
	}
	else{
		btn.classList.remove('btn-slide')
		document.querySelector('.video_item').play()
	}
}


 
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	
	
	
	
	
}(jQuery));