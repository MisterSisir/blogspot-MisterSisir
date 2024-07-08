document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button, index) => {
        if (index !== 0) {
            button.disabled = true; // Disable all buttons except the first one
        }

        button.addEventListener('click', function() {
            if (index < buttons.length - 1) {
                buttons[index + 1].disabled = false; // Enable the next button
            }
        });
    });
});
