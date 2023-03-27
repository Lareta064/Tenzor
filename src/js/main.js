document.addEventListener("DOMContentLoaded", function (){

	/* ==============показать модальные окна,  имеют атрибут frame-modal , кнопка, которая его показывает , имеет атрибут frame-btn, Чтобы закрыть такое окно, прописываем кнопке закрытия атрибут frame-close*/
	// const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	// const modalFrames = document.querySelectorAll('[frame-modal]');

	// if( modalFrames.length > 0){
		
	// 	const modalFramesClose = document.querySelectorAll('[frame-close]');
	// 	for(let item of modalFramesOpen){
	// 		item.addEventListener('click', function(e){
	// 			for(let item of  modalFrames){
	// 				item.classList.remove('visible');
	// 				bodyEl.classList.remove('noscroll');
	// 				overlayBg.classList.remove('active');
					
	// 			}
	// 			e.preventDefault();
	// 			const itemAttr = item.getAttribute('frame-btn');

	// 			for(let frame of modalFrames){
	// 				const frameAttr =frame.getAttribute('frame-modal');	
	// 				if(frameAttr == itemAttr){
	// 					frame.classList.add('visible');
	// 					bodyEl.classList.add('noscroll');
	// 					overlayBg.classList.add('active');
	// 				}
	// 			}
	// 		});
	// 	}
	// 	/*закрыть модалки с атрибутом frame-modal*/
	// 	for(let item of modalFramesClose){
	// 		item.addEventListener('click', function(e){
				
	// 			e.preventDefault();
	// 			item.closest('[frame-modal]').classList.remove('visible');
	// 			bodyEl.classList.remove('noscroll');
	// 			overlayBg.classList.remove('active');
	// 		});
	// 	}
	// }
	// overlayBg.addEventListener('click', function(e){
	// for(let frame of modalFrames){
	// 	frame.classList.remove('visible');
	// 	}
	// 	bodyEl.classList.remove('noscroll');
	// 	this.classList.remove('active');
	// });


	// //========большой сладер документов =======//
	// let docSlider = new Swiper(".doc-slider", {
    //    slidesPerView: 1,
	//    spaceBetween: 24,
    //    pagination: {
	// 		el: ".doc-slider-pagination",
	// 		clickable: true,
	// 	},
	// 	navigation: {
    //       nextEl: ".doc-slider-next",
    //       prevEl: ".doc-slider-prev",
    //     },
	// 	speed:800,
	// 	loop: true
    //   });

	// //========slider в мод окне-12 =======//
	// let categorCardsSlider = new Swiper(".categody-cards__swiper", {
    //    slidesPerView: 1.6,
	//    spaceBetween: 24,
    //    pagination: {
	// 		el: ".categody-cards-pagination",
	// 		clickable: true,
	// 	},
	// 	navigation: {
    //       nextEl: ".categody-cards-next",
    //       prevEl: ".categody-cards-prev",
    //     },
	// 	speed:800,
	// 	loop: true
    //   });
	/*====== PASSWORD VISIBLE/HIDE=============*/
	document.querySelectorAll(".toggle-pass").forEach(el=>{
		const tglBtn = el.querySelector(".input-icon__img");
		const inputField = el.querySelector("input");

		tglBtn.addEventListener("click", (e)=>{
			const icon = tglBtn.querySelector("svg");

			if(inputField.type === "password")
				inputField.type = "text"
			else inputField.type = "password";

			icon.classList.toggle("svg-eye-active");
			
		});
	});

});
