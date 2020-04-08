# Mobile City Coupons Server


## Description of Features
The platform will be divided into three main areas: Admin, Merchants, Consumers.

<hr>

### Admin
The master control interface for platform administrators at MCC.

##### Features:
- admin user accounts
- log viewer
- merchant databases viewer / editor
- analytics & usage reporting

<hr>

### Merchants
The merchant interface will give merchants an interface to create, pay for and manage coupon campaigns.

##### Features:
- Profile & Business Information
- Create Coupon
- Manage Coupons
- Manage Payment Information

##### Databases:
- merchant user accounts database
- merchant user preferences & coupons database
- merchant payments database

##### Questions:
- n/a

<hr>

### Consumers
The end user who receives the promotion and redeems the coupon with the merchant.

##### Features:
- user account (optional)
  - saved coupons
  - used coupons
  - preferences
    - contact information
    - location (city or zip)
    - preferred categories
    - security
      - password
      - 2FA
- browse by city
- browse by category
- list of active coupons

##### Databases:
- user accounts

##### Questions:
- Why don't we work on user accounts to save history of coupon usage.
  - this could be tied to their phone number
  - this would also allow us to get their email address
  - this will also enhance our ability to better suggest the kinds of coupons that are relevant for each consumer.

<hr>
