document.addEventListener("DOMContentLoaded", function (){
 	AOS.init({
		once:true,
		disable: 'mobile',
		
	});
	/* ==============показать модальные окна,  имеют атрибут frame-modal , кнопка, которая его показывает , имеет атрибут frame-btn, Чтобы закрыть такое окно, прописываем кнопке закрытия атрибут frame-close*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	const modalFrames = document.querySelectorAll('[frame-modal]');
	const bodyEl = document.body;

	if( modalFrames.length > 0){
		
		const modalFramesClose = document.querySelectorAll('[frame-close]');
		for(let item of modalFramesOpen){
			item.addEventListener('click', function(e){
				for(let item of  modalFrames){
					item.classList.remove('visible');
					bodyEl.classList.remove('lock');
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');

				for(let frame of modalFrames){
					const frameAttr =frame.getAttribute('frame-modal');	
					if(frameAttr == itemAttr){
						frame.classList.add('visible');
						bodyEl.classList.add('lock');
						
					}
				}
			});
		}
		/*закрыть модалки с атрибутом frame-modal*/
		for(let item of modalFramesClose){
			item.addEventListener('click', function(e){
				
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('lock');
				
			});
		}
	}
	// overlayBg.addEventListener('click', function(e){
	// for(let frame of modalFrames){
	// 	frame.classList.remove('visible');
	// 	}
	// 	bodyEl.classList.remove('noscroll');
	// 	this.classList.remove('active');
	// });

   /**************Показать большое меню в шапке по ховеру на ссылки************** */
   const headerNav = document.querySelector('#header-menu');
   const fullMenu = document.querySelector('#full-menu');
   if(fullMenu){
	const headerMenuLink = headerNav.querySelectorAll('li');
		
		headerMenuLink.forEach((el) => {
			el.addEventListener('mouseenter', function(){
				fullMenu.classList.add('visible');
				 document.querySelector('.header-nav').classList.add('header-nav--white');
			});
		});


	fullMenu.addEventListener('mouseleave', function(){
		document.querySelector('.header-nav').classList.remove('header-nav--white');
		this.classList.remove('visible');
	});
   }

   /*================ ТАБЫ - TABS============== */
   if($('.tabs-wrapper')){
		$('.tabs-wrapper').each(function() {
			let ths = $(this);
			ths.find('.tab-item').not(':first').hide();
			ths.find('.tab').click(function() {
				ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
				ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
			}).eq(0).addClass('active');
		});

   }

	//========большой сладер документов =======//
	let speakerSlider = new Swiper(".speakers-slider", {
       slidesPerView: 4,
	   spaceBetween: 30,
       
		navigation: {
          nextEl: ".speakers-next",
          prevEl: ".speakers-prev",
        },
		speed:800,
		loop: false
      });

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
	/*=============== закрыть  .modal-block по клику на .close-btn ================*/
	const modalBlocks = document.querySelectorAll('.modal-block');
	if(modalBlocks.lemgth > 0){
		for(item of modalBlocks){
			const thisCloseBtn = item.querySelector('.close-btn');
			thisCloseBtn.addEventListener('click', function(){
				item.classList.remove('visible');
			});
		}
	}
	
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

    /*====== Панель поиска в шапке показать / скрыть =============*/
	const openHeaderSearchPanel = document.querySelector('#btn-search-panel');
	const headerSearchPanel = document.querySelector('#header-search-panel');
	if(openHeaderSearchPanel){
		openHeaderSearchPanel.addEventListener('click',function(e){
			e.preventDefault();
			headerSearchPanel.classList.add('visible');
		});
		
	}
});
