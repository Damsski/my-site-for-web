let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const slideWrapper = document.querySelector('.slide-wrapper');
    const slideWidth = document.querySelector('.slide').offsetWidth;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransformValue = -currentIndex * slideWidth + 'px';
    slideWrapper.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Пожалуйста, заполните все поля формы.');
            return false;
        }

        // Дополнительные проверки могут быть добавлены, например, проверка формата email.

        return true;
    }
});
