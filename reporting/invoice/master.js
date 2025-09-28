document.addEventListener('DOMContentLoaded', function () {
    const emailRadio = document.getElementById('invoiceByEmail');
    const phoneRadio = document.getElementById('invoiceByPhone');
    const contactNoGroup = document.getElementById('contactNoGroup');
    const emailGroup = document.getElementById('emailGroup');

    function toggleVisibility() {
        if (emailRadio.checked) {
            emailGroup.style.display = 'flex';
            contactNoGroup.style.display = 'none';
        } else if (phoneRadio.checked) {
            contactNoGroup.style.display = 'flex';
            emailGroup.style.display = 'none';
        }
    }

    emailRadio.addEventListener('change', toggleVisibility);
    phoneRadio.addEventListener('change', toggleVisibility);

    toggleVisibility();
});