(function ($) {

	new gnMenu( document.getElementById( 'gn-menu' ) );


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.gn-menu li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('a.scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateZip(zip){
        var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        return re.test(zip);
    }

    function validationError(field) {
        window.alert('Invalid ' + field + '! Please try again.');
    }

    function onSubmit(e) {
        var nameInput = document.querySelector('#nameinput');
        var name = nameInput.value;
        if (!name.length) {
            validationError('name');
            // reject
            return;
        }
        var emailInput = document.querySelector('#emailinput');
        var email = emailInput.value;
        if (!validateEmail(email)) {
            validationError('email');
            // reject
            return;
        }
        var zipInput = document.querySelector('#zipinput');
        var zip = zipInput.value;
        if (!validateZip(zip)) {
            validationError('zip');
            // reject
            return;
        }
        nameInput.value = emailInput.value = zipInput.value = '';

        var payload = {
            name: name,
            email: email,
            zip: zip
        };
        sendPOST(payload);
        $('#sendmessage').addClass('show');
    }

    var endpoint = 'https://docs.google.com/forms/d/e/1FAIpQLScRoyLh2k4qi6azEiirtAAl_MKrCA3A83oFsBwcI3kUSYamYA/formResponse';
    function sendPOST(payload) {
        var realPayload = {
            'entry.1434421784': payload.name,
            'entry.571512109': payload.email,
            'entry.410528082': payload.zip
        }
        var request = new XMLHttpRequest();
        request.open('POST', endpoint, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(toQueryString(realPayload));
    }

    function toQueryString(obj) {
        var parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }

    function main() {
        var submitButton = document.querySelector('#submitbutton');
        submitButton.addEventListener('click', onSubmit);
    }

    main();

})(jQuery);
