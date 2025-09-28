document.addEventListener("DOMContentLoaded", function() {
    const notificationContainer = document.querySelector('.cont-noti-boxs');
    const noNotificationElement = document.querySelector('.no-notification');
    if (!notificationContainer || notificationContainer.innerHTML.trim() === "") {
        noNotificationElement.style.display = 'flex';
    } else {
        noNotificationElement.style.display = 'none';
    }
});