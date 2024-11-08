const body = document.querySelector('body');

new Swiper('.customer__slider', {
	spaceBetween: 30,
	pagination: {
		el: '.customer__slider_pagination',
		clickable: true,
	},
});

new Swiper('.Slswiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: '.slect_pagination',
		clickable: true,
	},
});

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
const headerLinkAll = document.querySelectorAll('.header__menu_item');

burger.addEventListener('click', function () {
	headerMenu.classList.toggle('active');
});

// headerLinkAll.forEach(function(item){
// item.addEventListener('click', function(){
// 	headerMenu.classList.remove('active')
// })
// })

const dropLink = document.querySelector('.header__menu_link.header__menu_link--drop');
const dropdown = document.querySelector('.dropdown');
dropLink.addEventListener('click', function () {
	dropdown.classList.toggle('active');
});

const tabButtonAll = document.querySelectorAll('[data-button__tub]');
const tubListAll = document.querySelectorAll('[data-list]');

tabButtonAll.forEach(function (element) {
	element.addEventListener('click', function (event) {
		if (element.classList.contains('active')) return;

		tabButtonAll.forEach(function (item) {
			item.classList.remove('active');
		});

		element.classList.add('active');

		tubListAll.forEach(function (item) {
			item.classList.remove('active');
		});
		console.log(event);

		document.querySelector('#' + event.target.dataset.button__tub).classList.add('active');
	});
});




function videoPlay() {
	document.querySelector('.VideoCover').style.display = 'none';
	document.querySelector('.VideoIframe').src += '&autoplay=1';

	document.querySelector('.VideoWrap').removeEventListener('click', videoPlay);
}
document.querySelector('.VideoWrap').addEventListener('click', videoPlay);


Fancybox.bind('[data-fancybox="gallery"]');

