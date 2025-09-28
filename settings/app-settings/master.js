document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.sett-box');

    boxes.forEach(box => {
        const setTitle = box.querySelector('.tit');
        const setContent = box.querySelector('.cont');
        
        setContent.style.cssText = `max-height: 0px; padding: 0px 8px 0px 8px; margin-top: 0px;`; 
        
        setTitle.addEventListener('click', function(event) {
            event.stopPropagation();
            
            const isOpen = box.classList.toggle('act');
            
            if (isOpen) {
                let ansHeight = setContent.scrollHeight + 84;
                setContent.style.cssText = `max-height: ${ansHeight}px; padding: 32px 8px 52px; margin-top: 10px; transition: max-height 0.3s ease, padding 0.3s ease;`;
            } else {
                setContent.style.cssText = `max-height: 0px; padding: 0px 8px 0px 8px; margin-top: 0px; transition: max-height 0.3s ease, padding 0.3s ease;`;
            }

            closeOtherBoxes(box);
        });
    });

    function closeOtherBoxes(clickedBox) {
        boxes.forEach(box => {
            if (box !== clickedBox && box.classList.contains('act')) {
                const setContent = box.querySelector('.cont');
                box.classList.remove('act');
                setContent.style.cssText = `max-height: 0px; padding: 0px 8px 0px 8px; margin-top: 0px; transition: max-height 0.3s ease, padding 0.3s ease;`;
            }
        });
    }
});



// Preview Email Template
const btnsPreviewPop = document.querySelectorAll('.btn-preview-pop');
btnsPreviewPop.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the pop-id from the clicked button
        const popID = this.getAttribute('pop-id');
        const popElement = document.getElementById(popID);

        if (popElement) {
            // Add the 'act' class to the element with pop-id
            popElement.classList.add('act');

            // Optionally, add 'tran' class after a delay (as in your example)
            setTimeout(function () {
                popElement.classList.add('tran');
            }, 100);
        }

        // Get the code-data-frm attribute from the clicked button (this is the textarea)
        const codeDataFrmID = this.getAttribute('code-data-frm');
        const codeDataElement = document.getElementById(codeDataFrmID);

        if (codeDataElement) {
            // Get the value (HTML code) from the textarea
            const htmlContent = codeDataElement.value;

            // Get the box-preview-temp element from the clicked button
            const boxPreviewTempID = this.getAttribute('box-preview-temp');
            const boxPreviewElement = document.getElementById(boxPreviewTempID);

            if (boxPreviewElement) {
                // Render the HTML content inside the box-preview-temp element
                boxPreviewElement.innerHTML = htmlContent;
            }
        }
    });
});


let htmlRecieptEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- Receipt Voucher -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: left; color: #000000;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 20px 0px 30px; font-size: 16px; font-weight: 700;">Hi <span>{recieved_from}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 20px; font-size: 14px; font-weight: 400; line-height: 22px;">{on_account_of}</td>
                            </tr>
                            <tr>
                                <td style="padding: 16px 0px 32px">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <th style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px; text-align: center">Receipt Voucher</th>
                                            </tr>
                                            <tr>
                                                <td style="width: 100%;">
                                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                        <tr>
                                                            <td style="padding-top: 30px;">
                                                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: 60px; font-weight: 600;">SL NO.</td>
                                                                            <td style="width: calc(100% - 60px); border-bottom: 2px dotted #A0A0A0; font-weight: 100;">{sl_no}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top: 16px;">
                                                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: 120px; font-weight: 600;">Received from:</td>
                                                                            <td style="width: calc(100% - 120px); border-bottom: 2px dotted #A0A0A0; font-weight: 100;">{recieved_from}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top: 16px;">
                                                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: 70px; font-weight: 600;">Amount:</td>
                                                                            <td style="width: calc(100% - 70px); border-bottom: 2px dotted #A0A0A0; font-weight: 100;">{amount} AED</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top: 16px;">
                                                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: 160px; min-width: 160px; font-weight: 600;">By Cash/Cheque No:</td>
                                                                            <td style="width: calc(100% - 160px); min-width: 330px; border-bottom: 2px dotted #A0A0A0; font-weight: 100;">{pay_type}</td>
                                                                            <td style="width: 70px; min-width: 70px; font-weight: 600;">Date on:</td>
                                                                            <td style="width: calc(100% - 560px); min-width: 140px; border-bottom: 2px dotted #A0A0A0; font-weight: 100;">{date_on}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top: 16px;">
                                                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: 120px; font-weight: 600;">On Account of:</td>
                                                                            <td style="width: calc(100% - 120px); border-bottom: 2px dotted #A0A0A0; font-weight: 100;">{on_account_of}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <!-- Start E-Sign -->
                                                        <tr>
                                                            <td style="padding-top: 12px">
                                                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: calc(100% - 120px);"></td>
                                                                            <td style="width: 200px; height: 80px; min-height: 80px; border-bottom: 1px dotted #A0A0A0; text-align: center;"><img src="https://evhelpcenter.com/Email/img/sign.png" style="width: 150px; max-width: 150px; height: fit-content;" alt="E-Sign"></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: calc(100% - 120px);"></td>
                                                                            <td style="width: 200px; font-weight: 600; text-align: center; padding-top: 8px">Authorized Signature</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <!-- End E-Sign -->
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; max-width: 460px; font-size: 14px; font-weight: 400; line-height: 22px; color: #868686;">Note:This invoice is computer generated and does not require signature or the company stamp in order to be considered valid</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`


let htmlCustomerRegOtpEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- OTP Registration -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: center;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700;">Registration in Watt Charge</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{{recipent_name}}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; vertical-align: center; text-align: center;"><span style="width: 100%; max-width: 370px; display: block; margin: 0px auto; line-height: 22px">Please enter this OTP code to complete your registration in Watt Charge Mobilities.</span></td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 32px; font-weight: 700; letter-spacing: 15px"> {{OTP}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`
let htmlInvoiceBoostEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- INVOICE -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: left; color: #000000;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700; text-align: center;">INVOICE</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{recipent_name}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; line-height: 22px;">{chargedetails}</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 24px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td>Invoice number: <span>{invno}</span></td>
                                                <td style="text-align: right">Date: <span>{invdate}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 24px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <th style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px;">Charge Description</th>
                                                <th style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px; text-align: right">Amount</th>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Service Cost</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">{amount} AED</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Service Charges</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">{service_charges} AED</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">VAT</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">5%</td>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 15px 8px; color:#000000; border-top: 1px solid #D4D4D4; font-size: 16px;">TOTAL</td>
                                                <td style="padding: 15px 8px; color:#000000; border-top: 1px solid #D4D4D4;  font-size: 16px; text-align: right;">{totalamount} AED</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <th colspan="2" style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px;">Transaction Details</th>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Payment Method</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right; max-width: 60% !important; width: 60%">Bank Transfer Ref#000000, TT Ref# 00000000</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">TRN Number</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">#95249</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Payment Status</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">Paid</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; max-width: 460px; font-size: 14px; font-weight: 400; line-height: 22px; color: #868686;">Note:This invoice is computer generated and does not require signature or the company stamp in order to be considered valid</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`
let htmlInvoiceScheduleEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- INVOICE -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: left; color: #000000;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700; text-align: center;">INVOICE</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{recipent_name}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; line-height: 22px;">{chargedetails}</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 24px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td>Invoice number: <span>{invno}</span></td>
                                                <td style="text-align: right">Date: <span>{invdate}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 24px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <th style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px;">Charge Description</th>
                                                <th style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px; text-align: right">Amount</th>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                                   <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">KW Used from Account </td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">{kw_used} KW</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Service Charges</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">{service_charges} AED</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">VAT</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">5%</td>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 15px 8px; color:#000000; border-top: 1px solid #D4D4D4; font-size: 16px;">TOTAL</td>
                                                <td style="padding: 15px 8px; color:#000000; border-top: 1px solid #D4D4D4;  font-size: 16px; text-align: right;">{totalamount} AED</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <th colspan="2" style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px;">Transaction Details</th>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Payment Method</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right; max-width: 60% !important; width: 60%">Bank Transfer Ref#000000, TT Ref# 00000000</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">TRN Number</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">#95249</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Payment Status</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">Paid</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; max-width: 460px; font-size: 14px; font-weight: 400; line-height: 22px; color: #868686;">Note:This invoice is computer generated and does not require signature or the company stamp in order to be considered valid</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`
let htmlInvoiceRecoveryEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- INVOICE -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: left; color: #000000;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700; text-align: center;">INVOICE</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{recipent_name}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; line-height: 22px;">{chargedetails}</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 24px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td>Invoice number: <span>{invno}</span></td>
                                                <td style="text-align: right">Date: <span>{invdate}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 24px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <th style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px;">Charge Description</th>
                                                <th style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px; text-align: right">Amount</th>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                         
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Service Charges</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">{service_charges} AED</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">VAT</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">5%</td>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 15px 8px; color:#000000; border-top: 1px solid #D4D4D4; font-size: 16px;">TOTAL</td>
                                                <td style="padding: 15px 8px; color:#000000; border-top: 1px solid #D4D4D4;  font-size: 16px; text-align: right;">{totalamount} AED</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 14px; font-weight: 700;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <th colspan="2" style="padding: 10px 8px; background-color: #EEEEEE; font-size: 16px;">Transaction Details</th>
                                            </tr>
                                            <tr><td style="padding: 16px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Payment Method</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right; max-width: 60% !important; width: 60%">Bank Transfer Ref#000000, TT Ref# 00000000</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">TRN Number</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">#95249</td>
                                            </tr>
                                            <tr><td style="padding: 4px 0px;"></td></tr>
                                            <tr>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5;">Payment Status</td>
                                                <td style="padding: 4px 8px; color:#5F5F5F; border-bottom: 1px dotted #E5E5E5; text-align: right;">Paid</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; max-width: 460px; font-size: 14px; font-weight: 400; line-height: 22px; color: #868686;">Note:This invoice is computer generated and does not require signature or the company stamp in order to be considered valid</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`

let htmlCustomerWelcomeRegEmailTemp = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NewsLetter Email</title>
    <style>
    </style>
</head>

<body style="margin: 0; padding: 0px; background-color: #CFD1D2; font-family: Arial, Helvetica, sans-serif;">
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="width: 100%; max-width: 850px; min-width: 850px; background-color: #fff; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="padding-top: 120px;"></td>
            </tr>
            <tr>
                <td>
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
                        <tr>
                            <td style="padding-left: 40px;"></td> <!-- delete filter and use black logo-->
                            <td style="text-align: left; filter: grayscale(100%) brightness(0%);"><img
                                    src="https://admin.evhelpcenter.com/Email/Nimages/wattlogo.png"
                                    style="width: 100%; max-width: 300px;"></td>
                            <td style="padding-right: 40px;"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 3px;"></td>
            </tr>
            <tr>
                <td
                    style="padding-top: 40px; background: radial-gradient(50% 50% at 50% 50%, #7a7a7a 0%, transparent 100%); border-collapse: collapse; ">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                        <tr>
                            <td style="width: 100%;">
                                <table cellspacing="0" cellpadding="0" style="width: 100%;">
                                    <tr>
                                        <td style="width: 7.50%; min-width: 80px;">
                                            <table cellspacing="0" cellpadding="0" style="width: 100%">
                                                <tr>
                                                    <td
                                                        style="background-color: #000000; width: 100%; height: 300px; color: #fff; font-weight: 700; text-align: center">
                                                        <span style="display: inline-block; transform: rotate(-90deg);">
                                                           {{MONTH}}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td style="width: 85%;">
                                            <table cellspacing="0" cellpadding="0" style="height: 400px; width: 100%">
                                                <tr>
                                                    <td
                                                        style="width: 100%; height: 100%; border: 15px solid #ffffff; border-radius: 30px; padding-left: 16px; display: flex; box-sizing: border-box; background: url(https://evhelpcenter.com/Email/Nimages/img2.jpeg) no-repeat center; background-size: cover;">
                                                        <span
                                                            style="width: fit-content; height: fit-content; padding: 24px 16px 16px; font-weight: 700; background-color: #fff; font-size: 50px; border-top-left-radius: 40px; border-top-right-radius: 40px;  margin-top: auto;">Thank
                                                            You</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td style="width: 7.50%; min-width: 80px">
                                            <table cellspacing="0" cellpadding="0" style="width: 100%">
                                                <tr>
                                                    <td
                                                        style="background-color: #000000; width: 100%; height: 300px; color: #fff; font-weight: 700; text-align: center">
                                                        <span style="display: inline-block; transform: rotate(-90deg);">
                                                            {{YEAR}}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 100%">
                                <table cellspacing="0" cellpadding="0" style="width: 100%;">
                                    <tr>
                                        <td style="width: 7.50%; min-width: 80px;">
                                            <table cellspacing="0" cellpadding="0" style="width: 100%">
                                                <tr>
                                                    <td style="background-color: #000000; width: 100%;"></td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td style="width: 85%;">
                                            <table cellspacing="0" cellpadding="0" style=" width: 100%">
                                                <tr>
                                                    <td
                                                        style="padding-left: 40px;  width: 66%; box-sizing: border-box;">
                                                        <span
                                                            style="width: fit-content; font-weight: 700; font-size: 50px; position: relative; top: -24px">For
                                                            Registration</span>
                                                    </td>
                                                    <td>
                                                        <span
                                                            style="background-color: #2a9595; width: 60px; height: 60px; border-radius: 50%; display: flex; box-sizing: border-box;"><img
                                                                src="https://evhelpcenter.com/Email/Nimages/arrow.png"
                                                                style="width: 60px; height: fit-content"></span>
                                                    </td>
                                                </tr>

                                            </table>
                                        </td>
                                        <td style="width: 7.50%; min-width: 80px">
                                            <table cellspacing="0" cellpadding="0" style="width: 100%">
                                                <tr>
                                                    <td style="background-color: #000000; width: 100%;"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 70px;"></td>
            </tr>
            <tr>
                <td style="padding: 0px 0px; background-color: #ffffff; width: 100%;">
                    <table cellspacing="0" cellpadding="0" style=" width: 100%; height: fit-content">
                        <tbody>
                            <tr>
                                <td style="width: 300px; height: 400px; padding-right: 50px; padding-left: 70px;">
                                        <span style="width: 300px; height: 500px; display: block;  background: url(https://evhelpcenter.com/Email/Nimages/img2.jpeg) no-repeat center; background-size: cover; border-radius: 30px; box-shadow: 0px 150px 0px 30px #eff0f4"></span>
                                    </td>
                                <td style="width: 100%; height: 100%;">
                                    <table cellspacing="0" cellpadding="0" style=" width: 100%; height: 100%">
                                        <tbody>
                                            <tr>
                                                <td style=" width: 100%; max-width: 400px; height:100%;">
                                                    <table cellspacing="0" cellpadding="0"
                                                        style=" width: 100%; height: 100%;  vertical-align:top;">
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style="vertical-align: top; padding-right: 10px; padding-top: 14px">
                                                                    <span
                                                                        style="width: 50px; height: 3px; display: block; background-color: #000000;"></span>
                                                                </td>
                                                                <td
                                                                    style=" width: 100%; height: 40px; vertical-align:top; font-weight: 700; font-size: 21px; color: #000000;  padding-right: 70px;">
                                                                    Welcome Message For You !</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"
                                                                    style="width: 100%; height: 150px; vertical-align:top; font-weight: 100; font-size: 21px; color: #717279; line-height: 29px;  padding-right: 70px;">
                                                                    Welcome ! We are thrilled to have you join with us.
                                                                    we are committed to providing you with the best
                                                                    service and experience. Here are a few things you
                                                                    can do to get started</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2"
                                                                    style=" width: 100%; height: 200px; vertical-align:bottom;">
                                                                    <table style="width: 100%;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style="width: 100%; display: flex;">
                                                                                    <span
                                                                                        style="display: inline-block; width: 90px; height: 160px; margin-top: auto; margin-left: auto; border-radius: 50px; background: url(https://evhelpcenter.com/Email/Nimages/arrow-down.png) no-repeat center; background-size: 120%; background-color: #2a9595;"></span>
                                                                                    <span
                                                                                        style="width: 300px; height: 250px; display: inline-block; background: url(https://evhelpcenter.com/Email/Nimages/img3.jpg) no-repeat center; background-size: 150%; margin: 0px 0px 0px auto; border-top-left-radius: 30px;"></span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 70px;"></td>
            </tr>
            <tr>
                <td style=" width: 100%; height: 200px">
                    <table style="padding: 0px 70px;">
                        <tbody>
                            <tr>
                                <td style="text-align: center; font-weight: 700; font-size: 50px;">Tailored Packages
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="text-align: center; font-weight: 100; font-size: 18px; color: #717279; line-height: 29px">
                                    A newsletter is a regularly distributed publication that is generally about one main
                                    topic of interest to its subscribers.</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style=" width: 100%;">
                    <table style="padding: 0px 70px; width: 100%">
                        <tbody>
                            <tr>
                                <td style="text-align: center; height: 350px; padding-right: 25px">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="width: 300px; height: 350px; border: 1px solid #71727969; border-radius: 30px; padding: 10px">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><span
                                                                        style="width:250px; min-height: 150px; max-height: 150px; display: block; background: url(https://evhelpcenter.com/Email/Nimages/img2.jpeg) no-repeat center; background-size: cover; border-radius: 30px; margin: 0px auto"></span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-weight: 700; font-size: 24px; color: #000000; padding: 8px 0px">
                                                                    Watt Package</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-weight: 100; font-size: 14px; color: #717279; padding: 0px 0px 12px; line-height: 24px">
                                                                    A newsletter is a regularly distributed publication
                                                                    that is generally about one main topic of interest
                                                                    to its subscribers.</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="padding: 6px 6px 6px 16px; cursor: pointer !important; background-color: #000000; border-radius: 30px">
                                                                    <a href="https://wattcharge.io/packages/"
                                                                        target="_blank"
                                                                        style="width: 100%; height: 45px; display: flex; cursor: pointer !important;  text-decoration: none; color: #fff;">
                                                                        <span
                                                                            style="color: #fff; height: 45px; display: inline-block; font-weight: 700; line-height: 45px;">Product
                                                                            Details</span>
                                                                        <span
                                                                            style="width: 45px; height: 45px; margin-left: auto; border-radius: 50%; display: inline-block; box-sizing: border-box; background: url(https://evhelpcenter.com/Email/Nimages/arrow-right.png) no-repeat center; background-size: 60%; background-color: #fff;"></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td style="text-align: center; height: 350px; padding-left: 25px">
                                    <table align="right">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="width: 300px; height: 350px; border: 1px solid #71727969; border-radius: 30px; padding: 10px; display: block;">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><span
                                                                        style="width:250px; height: 150px; display: block; background: url(https://evhelpcenter.com/Email/Nimages/img2.jpeg) no-repeat center; background-size: cover; border-radius: 30px; margin: 0px auto"></span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-weight: 700; font-size: 24px; color: #000000; padding: 8px 0px">
                                                                    Mega Watt Package</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-weight: 100; font-size: 14px; color: #717279; padding: 0px 0px 38px; line-height: 24px;">
                                                                    Provides access to charging stations with a maximum
                                                                    power output of 240 - 320KW.</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="padding: 6px 6px 6px 16px; cursor: pointer !important; background-color: #000000; border-radius: 30px;">
                                                                    <a href="https://wattcharge.io/packages/"
                                                                        target="_blank"
                                                                        style="width: 100%; height: 45px; display: flex; cursor: pointer !important;  text-decoration: none; color: #fff;">
                                                                        <span
                                                                            style="color: #fff; height: 45px; display: inline-block; font-weight: 700; line-height: 45px;">Product
                                                                            Details</span>
                                                                        <span
                                                                            style="width: 45px; height: 45px; margin-left: auto; border-radius: 50%; display: inline-block; box-sizing: border-box; background: url(https://evhelpcenter.com/Email/Nimages/arrow-right.png) no-repeat center; background-size: 60%; background-color: #fff;"></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="text-align: center; width: 100%; padding: 30px 0px">
                                    <table align="center">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="width: 300px; height: 350px; border: 1px solid #71727969; border-radius: 30px; padding: 10px; display: block;">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><span
                                                                        style="width:250px; height: 150px; display: block; background: url(https://evhelpcenter.com/Email/Nimages/img2.jpeg) no-repeat center; background-size: cover; border-radius: 30px; margin: 0px auto"></span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-weight: 700; font-size: 24px; color: #000000; padding: 8px 0px">
                                                                    Kilo Watt Package</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="font-weight: 100; font-size: 14px; color: #717279; padding: 0px 0px 36px; line-height: 24px;">
                                                                    Suitable for heavy users or those with high energy
                                                                    consumption needs.</td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="padding: 6px 6px 6px 16px; cursor: pointer !important; background-color: #000000; border-radius: 30px;">
                                                                    <a href="https://wattcharge.io/packages/"
                                                                        target="_blank"
                                                                        style="width: 100%; height: 45px; display: flex;cursor: pointer !important; text-decoration: none; color: #fff;">
                                                                        <span
                                                                            style="color: #fff; height: 45px; display: inline-block; font-weight: 700; line-height: 45px;">Product
                                                                            Details</span>
                                                                        <span
                                                                            style="width: 45px; height: 45px; margin-left: auto; border-radius: 50%; display: inline-block; box-sizing: border-box; background: url(https://evhelpcenter.com/Email/Nimages/arrow-right.png) no-repeat center; background-size: 60%; background-color: #fff;"></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 30px;"></td>
            </tr>
            <tr>
                <td style="padding-top: 40px;">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                        <tr>
                            <td style="width: 100%;">
                                <table cellspacing="0" cellpadding="0" style="width: 100%;">
                                    <tr>
                                        <td style="width: 7.50%; min-width: 80px;">
                                            <table cellspacing="0" cellpadding="0" style="width: 100%">
                                                <tr>
                                                    <td
                                                        style="background-color: #000000; width: 100%; height: 232px; color: #fff; font-weight: 700; text-align: center">
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td
                                            style="width: 85%; background-color: #eff0f4; border-radius: 40px; padding: 30px">
                                            <table cellspacing="0" cellpadding="0" style="height: 280px; width: 100%;">
                                                <tr>
                                                    <td
                                                        style="width: 100%; height: 100%; border-radius: 30px;  display: flex; box-sizing: border-box;">
                                                        <table style="width: 100%; height: 100%;">
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style="width: 220px; height: 100px; vertical-align:bottom; padding-bottom: 15px">
                                                                        <a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge"
                                                                            target="_blank" style="display: block;">
                                                                            <span
                                                                                style="width: fit-content; height: fit-content; display: block;"><img
                                                                                    src="https://evhelpcenter.com/Email/Nimages/googleplay.png"
                                                                                    style="width: 220px; height: fit-content;"></span>
                                                                        </a>
                                                                    </td>
                                                                    <td rowspan="2"
                                                                        style="width: 60%; min-width: 400px; font-size:35px; font-weight: 700; padding: 0px 0px 0px 30px ">
                                                                        Download the App for a Better Experience</td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        style="width: 200px; height: 100px; vertical-align:top; padding-top: 15px">
                                                                        <a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747"
                                                                            target="_blank" style="display: block;">
                                                                            <span
                                                                                style="width: fit-content; height: fit-content; display: block;"><img
                                                                                    src="https://evhelpcenter.com/Email/Nimages/applestore.png"
                                                                                    style="width: 220px; height: fit-content;"></span>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td style="width: 7.50%; min-width: 80px">
                                            <table cellspacing="0" cellpadding="0" style="width: 100%">
                                                <tr>
                                                    <td
                                                        style="background-color: #000000; width: 100%; height: 230px; color: #fff; font-weight: 700; text-align: center">
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="height: 20px;"></td>
            </tr>
            <tr>
                <td style=" width: 100%; height: fit-content">
                    <table>
                        <tbody>
                            <tr>
                                <td style="padding-left: 75px;">
                                    <span
                                        style="display: block; width: 350px; height: 300px; background: url(https://evhelpcenter.com/Email/Nimages/img2.jpeg) no-repeat center; background-size: cover; border-radius: 20px"></span>
                                </td>
                                <td style="width: 60%; min-width: 400px; padding: 0px 75px 0px 30px;">
                                    <table style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td colspan="2"
                                                    style="text-align: left; font-size:35px; font-weight: 700;">Have a
                                                    Question?</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="font-size: 18px; font-weight: 700; color: #000000; padding-top: 14px">
                                                    Mail Address:</td>
                                                <td
                                                    style="font-size: 18px; font-weight: 700; color: #000000; padding-top: 14px">
                                                    Phone Number:</td>
                                            </tr>
                                            <tr>
                                                <td><a href="mailto:hello@wattcharge.io" target="_blank"
                                                        style="font-size: 16px; font-weight: 100; color: #717279 !important; text-decoration: none;">hello@wattcharge.io</a>
                                                </td>
                                                <td style="font-size: 16px; font-weight: 100; color: #717279">+971 58
                                                    888 5666</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="padding-top: 20px;"></td>
                                            </tr>
                                            <tr>
                                                <td style="font-size: 18px; font-weight: 700; color: #000000">Social
                                                    Media:</td>
                                                <td style="font-size: 18px; font-weight: 700; color: #000000">Office
                                                    Address:</td>
                                            </tr>
                                            <tr>
                                                <td style="font-size: 16px; font-weight: 100; color: #717279">
                                                    @wattcharge</td>
                                                <td style="font-size: 16px; font-weight: 100; color: #717279">Dubai UAE
                                                </td>
                                            </tr>
                                            <tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="height: 80px;"></td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`

let htmlCorporateRegCredentailsEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- Reset Password -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: center; color: #000000;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700;">Corporate Credentials</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{recipent_name}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 400;">Dear Corporate user please use this password for access your account : <span style="font-weight: 800;">{password}</span></td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 60px; font-size: 14px; font-weight: 400; vertical-align: center; text-align: center;"><span style="width: 100%; max-width: 400px; display: block; margin: 0px auto; line-height: 22px">Please <a href="#" target="_blank" style="color:#0767E4;">click here</a> to sign in to your <a href="https://corporate-testing.wattcharge.io/login/" style="color:#0767E4; text-decoration: none !important">{username}</a> please update your password after login </span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`
let htmlOtpVerificationEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- OTP Registration -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: center;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700;">Email Update Verification </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{{recipent_name}}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; vertical-align: center; text-align: center;"><span style="width: 100%; max-width: 370px; display: block; margin: 0px auto; line-height: 22px">Dear Customer for Update Your Account Email, Please enter this OTP code to Complete Updation of email in  Watt Charge Mobilities </span></td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 32px; font-weight: 700; letter-spacing: 15px"> {{OTP}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`
let htmlOtpRemoveAccountEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- OTP Registration -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: center;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700;">Account Remove</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{{recipent_name}}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; vertical-align: center; text-align: center;"><span style="width: 100%; max-width: 370px; display: block; margin: 0px auto; line-height: 22px">Dear Customer for remove account from Watt Charge, Please enter this OTP code to Complete your registration in Watt Charge Mobilities . </span></td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 32px; font-weight: 700; letter-spacing: 15px"> {{OTP}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`

let htmlUpcomingSchedulesEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- Upcoming schedules -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: center; color: #000000;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700;">Upcoming schedules</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{{recipient_name}}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; vertical-align: center; text-align: center;"><span style="width: 100%; max-width: 370px; display: block; margin: 0px auto; line-height: 22px">We hope this email finds you well. We are pleased to confirm your scheduled slots in Watt Mobilities as follows.</span></td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 20px; width: 100%;">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; padding: 16px; vertical-align: center;">
                                        <tbody>
                                            {{SCHEDULE_DETAILS}}
                                          
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`
let htmlStartChargingOTPEmailTemp = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <!-- OTP Registration -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #f5f5f5; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
    <!-- Header -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: linear-gradient(to right, #2A9595, #0CCECE); box-sizing: border-box; padding: 18px 0px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width: 230px; height: 75px; background: url(https://evhelpcenter.com/Email/img/wattwhitelogo.png) no-repeat center; background-size: 95%;"><a href="https://wattcharge.io/" target="_blank" style="display: flex; width: 100%; height: 100%;"></a></td>
                                <td style="padding-left: 32px; text-align: right; color: #FFFFFF; font-weight: 700;">Drive Green, Charge Clean</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Email Body -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%;">
        <tbody>
            <tr>
                <td style="text-align: center;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="padding: 50px 0px 30px; font-size: 24px; font-weight: 700;">Start Charging OTP</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 30px; font-size: 16px; font-weight: 700;">Hi <span>{{recipent_name}}</span>,</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 14px; font-weight: 400; vertical-align: center; text-align: center;"><span style="width: 100%; max-width: 370px; display: block; margin: 0px auto; line-height: 22px">Dear Customer Please Use this OTP when Driver reached at your location and ask for OTP  to continue charging,  Please make sure driver reached at your location before you share. </span></td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 50px; font-size: 32px; font-weight: 700; letter-spacing: 15px"> {{OTP}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Footer -->
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #FFFFFF; box-sizing: border-box; padding: 30px 0px 20px; border-top: 1px solid #E9E9E9 ;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://apps.apple.com/us/app/watt-charge-mobilities/id6499434747" target="_blank" style="display: block; width: 170px; height: 40px; margin-left: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/applestore.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                                <td style="width:calc(50%); padding-right: 10px;"><a href="https://play.google.com/store/apps/details?id=com.wattevcharging.wattcharge" target="_blank" style="display: block; width: 170px; height: 40px; margin-right: auto;"><span style="display: inline-block; width: 100%; height: 100%; background: url(https://evhelpcenter.com/Email/img/googleplay.jpg) center no-repeat; background-size: 80%;"></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; border-collapse: collapse; margin: 0 auto; ">
        <tbody>
            <tr>
                <td style="background: #EEEEEE; box-sizing: border-box; padding: 24px 0px 40px;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; min-width: 650px; padding: 16px;">
                        <tbody>
                            <tr>
                                <td style="color: #1B1B1B; font-size: 12px; font-weight: 600; text-align: center;">© 2024 WattCharge. All rights reserved.</td>
                            </tr>
                            <tr>
                                <!-- Change Support link -->
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 12px; font-weight: 600; text-align: center;">Notice something wrong? <a href="mailto:info@wattcharge.io" style="color: #2A9595 !important">Contact our support team</a> and we will be happy to help.</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 8px; font-size: 12px; font-weight: 600; text-align: center;">WTC District, SZR Main, P.O. Box 117636, Dubai-UAE</td>
                            </tr>
                            <tr>
                                <td style="color: #66667eb6; padding-top: 24px; font-size: 18px; text-align: center; font-weight: 900; color: #000000;"><a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Privacy policy</a> . <a href="https://wattcharge.io/privacy-policy/" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Terms of service</a> . <a href="#" style="color: #66667eb6 !important; font-size: 12px; font-weight: 600;">Help center</a></td>
                            </tr>
                            <tr>
                                <!-- Help center Link -->
                                <td style="padding-top: 24px; text-align: center; box-sizing: border-box;">
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/twitter.png) no-repeat center; background-size: 90%;"><a href="https://twitter.com/WattCharge" style="width: 100%; height: 100%; display: block;" title="X"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display: inline-block; background: url(https://evhelpcenter.com/Email/img/linkedin.png) no-repeat center; background-size: 90%;"><a href="https://www.linkedin.com/company/wattcharge/" style="width: 100%; height: 100%; display: block;" title="LinkedIn"></a></span>
                                    <span style="display: inline-block; width: 1px; height: 100%"></span>
                                    <span style="width: 25px; height: 25px; display:inline-block; background: url(https://evhelpcenter.com/Email/img/facebook.png) no-repeat center; background-size: 90%;"><a href="https://www.facebook.com/people/WATT-Charge/61554980025571/" style="width: 100%; height: 100%; display: block;" title="Facebook"></a></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
`
let htmlCustomerRequestIssueEmailTemp = `
 <style>
  @font-face {
      font-family: "Avenir";
      src: url(../font/avenir/AvenirRegular/AvenirRegular.ttf),
          url(../font/avenir/AvenirBlack/AvenirBlack.ttf),
          url(../font/avenir/AvenirBook/AvenirBook.ttf),
          url(../font/avenir/AvenirHeavy/AvenirHeavy.ttf),
          url(../font/avenir/AvenirLight/AvenirLight.ttf);
      }
  
  
  </style>
  <body style="margin: 0; padding: 0px;">
  
  <table cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; max-width: 650px; background-color: darkslategray; border-collapse: collapse; margin: 0 auto;">
      <tbody>
          <!-- First Row -->
          <tr>
              <td style="padding: 40px; text-align: center;">
                  <img src="https://admin.evhelpcenter.com/images/wat/userprofile.png" alt="user_photo" style="width: 100px; height: fit_content;">
              </td>
          </tr>
          <!-- Second Row -->
          <tr>
              <td style="padding: 40px; font-size: 18px; color: white; background-color: black;">
                  <table style="width: 100%;">
                      <tr>
                          <td colspan="2" style="text-align: left; width: 100%;">
                              <h1 style="font-family: Century Gothic; font-size: 24px; font-style: normal; font-weight: 700; margin-bottom: 24px">User Information</h1>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding-bottom: 16px; font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 900; line-height: normal;">Name:</td>
                          <td style="padding-bottom: 16px; font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 400;">{customer_name}</td>
                      </tr>
                      <tr>
                          <td style="padding-bottom: 16px; font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 900; line-height: normal;">Email:</td>
                          <td style="padding-bottom: 16px; font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 400;">{customer_email}</td>
                      </tr>
                      <tr>
                          <td style="padding-bottom: 16px; font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 900; line-height: normal;">Phone number:</td>
                          <td style="padding-bottom: 16px; font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 400;">'. {customer_contact}</td>
                      </tr>
                      <tr>
                          <td style="font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 900; line-height: normal;">Report ID</td>
                          <td style="font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 400;">{report_id}</td>
                      </tr>
                  </table>
              </td>
          </tr>
          <!-- Third Row -->
          <tr>
              <td style="padding: 40px;  font-size: 18px; color: white; background-color: darkslategrey;">
                  <table style="width: 100%;">
                      <tr>
                          <td style="text-align: left; width: 100%;">
                              <h1 style="font-family: Century Gothic; font-size: 24px; font-style: normal; font-weight: 700; margin-bottom: 24px">Description</h1>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding-bottom: 16px; font-family: Avenir; font-size: 16px; font-style: normal; font-weight: 400;">{messagetext}</td>
                      </tr>
                  </table>
              </td>
          </tr>
          <!-- Fourth Row (This section is for emails with attached images)-->
          <tr>
              <td style="padding: 40px; text-align: center; font-size: 18px; color: white; background-color: dimgrey;">
                  <table style="width: 100%;">
                      <tr>
                          <td style="text-align: left; width: 100%;">
                              <h1 style="font-family: Century Gothic; font-size: 24px; font-style: normal; font-weight: 700; margin-bottom: 24px">File attached</h1>
                          </td>
                      </tr>
                      <tr>
                          <td>
                            <img src="" alt=" {Attachements}">
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <!--  End Fourth Row -->
      </tbody>
  </table>
  
  </body>
`

const inpRecieptEmailTemp = document.getElementById('inpRecieptEmailTemp');
inpRecieptEmailTemp.value = htmlRecieptEmailTemp;

const inpCustomerRegOtpEmailTemp = document.getElementById('inpCustomerRegOtpEmailTemp');
inpCustomerRegOtpEmailTemp.value = htmlCustomerRegOtpEmailTemp;

const inpInvoiceBoostEmailTemp = document.getElementById('inpInvoiceBoostEmailTemp');
inpInvoiceBoostEmailTemp.value = htmlInvoiceBoostEmailTemp;

const inpInvoiceScheduleEmailTemp = document.getElementById('inpInvoiceScheduleEmailTemp');
inpInvoiceScheduleEmailTemp.value = htmlInvoiceScheduleEmailTemp;

const inpInvoiceRecoveryEmailTemp = document.getElementById('inpInvoiceRecoveryEmailTemp');
inpInvoiceRecoveryEmailTemp.value = htmlInvoiceRecoveryEmailTemp;

const inpCustomerWelcomeRegEmailTemp = document.getElementById('inpCustomerWelcomeRegEmailTemp');
inpCustomerWelcomeRegEmailTemp.value = htmlCustomerWelcomeRegEmailTemp;

const inpCorporateRegCredentailsEmailTemp = document.getElementById('inpCorporateRegCredentailsEmailTemp');
inpCorporateRegCredentailsEmailTemp.value = htmlCorporateRegCredentailsEmailTemp;

const inpOtpVerificationEmailTemp = document.getElementById('inpOtpVerificationEmailTemp');
inpOtpVerificationEmailTemp.value = htmlOtpVerificationEmailTemp;

const inpOtpRemoveAccountEmailTemp = document.getElementById('inpOtpRemoveAccountEmailTemp');
inpOtpRemoveAccountEmailTemp.value = htmlOtpRemoveAccountEmailTemp;

const inpUpcomingSchedulesEmailTemp = document.getElementById('inpUpcomingSchedulesEmailTemp');
inpUpcomingSchedulesEmailTemp.value = htmlUpcomingSchedulesEmailTemp;

const inpStartChargingOTPEmailTemp = document.getElementById('inpStartChargingOTPEmailTemp');
inpStartChargingOTPEmailTemp.value = htmlStartChargingOTPEmailTemp;

const inpCustomerRequestIssueEmailTemp = document.getElementById('inpCustomerRequestIssueEmailTemp');
inpCustomerRequestIssueEmailTemp.value = htmlCustomerRequestIssueEmailTemp;

