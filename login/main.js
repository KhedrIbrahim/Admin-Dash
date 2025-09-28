// Show/Hide Passwords
const btnsShowHidePass = document.querySelectorAll('.btn-show-hid');
btnsShowHidePass.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const inputId = this.getAttribute('for-inp-id');
        const inputEl = document.getElementById(inputId);
        if (inputEl) {
            if (inputEl.type === 'password') {
                inputEl.type = 'text';
                button.textContent = 'Hide';
            } else {
                inputEl.type = 'password';
                button.textContent = 'Show';
            }
        }
    });
})