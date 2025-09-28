// Admin Dash
// Nav
let navBox = document.getElementById("navBox")
let btnMenu = document.getElementById("btnMenu")
let btnCloseNav = document.getElementById("btnCloseNav")
btnMenu.addEventListener("click", function(){
    navBox.classList.add("show")
});
btnCloseNav.addEventListener("click", function(){
    navBox.classList.remove("show")
});

// Header
// Clos Btn ELE
const headerOptions = document.querySelectorAll('.btn-user-options');
headerOptions.forEach(button => {
    button.addEventListener('click', function () {
        const eleID = this.getAttribute('ele-id');
        const element = document.getElementById(eleID);
        if (element) {
            element.classList.toggle('act');
        }
    });
})


// Btn Search
let btnSearchHeader = document.getElementById("btnSearchHeader")
let bxSearchHeader = document.getElementById("bxSearchHeader")
btnSearchHeader.addEventListener("click", function(){
    bxSearchHeader.classList.toggle("show")
})


// Get all the main link elements
const mainLinks = document.querySelectorAll('.main-link');
const navLinks = document.querySelectorAll('.link')
mainLinks.forEach(link => {
    link.addEventListener('click', function() {
        const parentLink = this.parentElement;

        if (parentLink.classList.contains('show')) {
            parentLink.classList.remove('show');
        } else {
            navLinks.forEach(link => {
                link.classList.remove('show');
            });
            parentLink.classList.add('show');
        }
    });
});

// Clos Btn ELE
const closeButtons = document.querySelectorAll('.clos-ele');
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const eleID = this.getAttribute('ele-id');
        const element = document.getElementById(eleID);
        if (element) {
            element.classList.remove('act');
        }
    });
})

// Back Btn
let backBtnsNotification = document.querySelectorAll('.btn-back-wind');
backBtnsNotification.forEach(button => {
    button.addEventListener('click', function () {
        window.history.back();
    });
})

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


// Open PopUp
const btnsOpenPopUp = document.querySelectorAll('.btn-open-pop');
btnsOpenPopUp.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        const eleID = this.getAttribute('pop-id');
        const element = document.getElementById(eleID);
        if (element) {
            element.classList.add('act');
            setTimeout(function() {
                element.classList.add('tran');
            }, 100);
        }
    });
})
// Close PopUp
const btnsClosePopUp = document.querySelectorAll('.btn-close-pop');
btnsClosePopUp.forEach(button => {
    button.addEventListener('click', function () {
        const eleID = this.getAttribute('pop-id');
        const element = document.getElementById(eleID);
        if (element) {
            element.classList.remove('tran');
            setTimeout(function() {
                element.classList.remove('act');
            }, 300);
        }
    });
})

// Allow Only Numbers
const InputsTypNum = document.querySelectorAll(".number-inp")
InputsTypNum.forEach(input => {
    input.addEventListener('input', (e) => {
        checkInputValType(e);
    });
});
function checkInputValType(event){
    let input = event.target.value;
    let numericInput = input.replace(/\D/g, '');
    event.target.value = numericInput;
}

// Show Picker (Date, Time Inputs)
const btnShowNativeInput = document.querySelectorAll('.btnShowNativeInput');
btnShowNativeInput.forEach(button => {
    button.addEventListener('click', function () {
        const eleId = this.getAttribute('show-picker-id');
        const element = document.getElementById(eleId);
        if(element){
            element.showPicker();
        }
    });
})


// Upload/Show File Uploaded
function previewImage(event) {
    const input = event.target;
    const imgId = input.getAttribute('img-ele-id');
    const imageElement = document.getElementById(imgId);

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageElement.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

const customUploadFiles = document.querySelectorAll('.custom-upload-btn');

customUploadFiles.forEach((customUploadFile) => {
    customUploadFile.addEventListener('click', function(event) {
        event.preventDefault();
        
        const inputId = this.getAttribute('for');
        const fileInput = document.getElementById(inputId); 

        if (fileInput) {
            fileInput.click();
        }
    });
    const inputId = customUploadFile.getAttribute('for');
    const fileInput = document.getElementById(inputId);

    if (fileInput) {
        fileInput.addEventListener('change', previewImage);
    }
});

// Upload/Show File Name
const customUploadFilesDocs = document.querySelectorAll('.custom-upload-btn-docs');

customUploadFilesDocs.forEach((customUploadFileDoc) => {
    customUploadFileDoc.addEventListener('click', function (event) {
        event.preventDefault();
        const inputId = this.getAttribute('for');
        const fileInput = document.getElementById(inputId);
        if (fileInput) {
            fileInput.click();
        }
    });

    const inputId = customUploadFileDoc.getAttribute('for');
    const fileInput = document.getElementById(inputId);

    if (fileInput) {
        fileInput.addEventListener('change', function () {
            const fileName = this.files[0] ? this.files[0].name : 'No file';
            const displayElementId = this.getAttribute('name-ele-id');
            const displayElement = document.getElementById(displayElementId);
            if (displayElement) {
                displayElement.textContent = fileName;
            }
        });
    }
});

// Rating Group
const formGroupsRating = document.querySelectorAll('.form-group.rating');
formGroupsRating.forEach((group) => {
    const stars = group.querySelectorAll('.rate-star');

    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const starValue = parseInt(star.getAttribute('data-value'));
            stars.forEach((s) => s.classList.remove('selected'));
            stars.forEach((s) => {
                if (parseInt(s.getAttribute('data-value')) <= starValue) {
                    s.classList.add('selected');
                }
            });
            group.setAttribute('data-rating', starValue);
        });
    });
});