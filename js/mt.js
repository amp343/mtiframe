console.log('MT IFRAMES: starting quest to conquer MT iframes...');

var element = document.getElementsByTagName("iframe");

for (index = element.length - 1; index >= 0; index--) {
	var src = element[index].getAttribute('src');
   	
    var link = document.createElement('a');
	link.setAttribute('data-src', src);
	link.setAttribute('class', 'mt-iframes-btn');
	link.innerHTML = 'Load Iframe';
	
	element[index].parentNode.replaceChild(link, element[index]);

}
console.log('MT IFRAMES: iframes replaced... boom!');



jQuery(document).ready(function(){

	jQuery('body').on('click', '.mt-iframes-btn', function(){
		if(jQuery(this).next('iframe').size() == 0){
			jQuery(this).after('<iframe></iframe>');
		}
		jQuery(this).next('iframe').attr('src', jQuery(this).data('src'));
	});

});