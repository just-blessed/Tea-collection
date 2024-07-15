$('document').ready(function () {
    // Открытие изображений карточек
    $('.product-image').magnificPopup({
        type: 'image'
    });

    $('#thank-you-message').hide();

    // Анимации первого и второго блока
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    // slider
        $('.slider_content').slick({
            arrows: true,
            prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            beforeArrow: ''
        });
        // Аккордион
        $('#accordion').accordion();


    $('#btn-order').click (function(event) {
        event.preventDefault();

        let isFormValid = true;

        if ($('#fullName').val() === '') {
            alert('Пожалуйста, заполните имя.');
            isFormValid = false;
        } else if ($('#lastName').val() === '') {
            alert('Пожалуйста, заполните фамилию.');
            isFormValid = false;
        } else if ($('#phone').val() === '') {
            alert('Пожалуйста, заполните телефон.');
            isFormValid = false;
        } else if ($('#country').val() === '') {
                alert('Пожалуйста, заполните страну.');
                isFormValid = false;
        } else if ($('#postalСode').val() === '') {
            alert('Пожалуйста, заполните индекс.');
            isFormValid = false;
        } else if (typeof $('#postalСode').val() === 'string' && !/^\d{6}$/ && parseInt(number).test($('#postalСode').val())) {
            alert('Индекс должен содержать 6 цифр.');
            isFormValid = false;
        } else if ($('#address').val() === '') {
            alert('Пожалуйста, заполните адрес.');
            isFormValid = false;
        } else {
            $('#order-form').hide();
            $('#thank-you-message').show();
        }

    });

    let phoneInput = $('#phone');
    phoneInput.inputmask({"mask": "+7(999) 999-9999"});

    let indexInput = $('#postalСode');
    indexInput.inputmask("999999")

})





