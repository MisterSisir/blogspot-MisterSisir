document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.btn.subscribe');
    const nextButtons = document.querySelectorAll('.btn.next');

    nextButtons.forEach(button => button.style.display = 'none');

    subscribeButton.addEventListener('click', function() {
        nextButtons.forEach(button => button.style.display = 'block');
    });
});
