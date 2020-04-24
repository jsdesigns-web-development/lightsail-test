// #############################################################################
// Company: Mobile City Coupons
// File: contactwidget.js
//
// Description: Landing page subscribe form handler. User inputs either a phone
//              number, an email address or both. Inputs are detected & posted via
//              AJAX to the relevant service
// #############################################################################

// Pseudocode:
//   onclick of submit button
//   1. detect whether the phone and/or email input fields have user values
//   2. sanitize user inputs
//   3. validate user inputs
//   4. if phone, then post to sms api (txt180)
//   5. if email, then post to email api (mailchimp)
//   6. if phone or email, then post to MCC database
