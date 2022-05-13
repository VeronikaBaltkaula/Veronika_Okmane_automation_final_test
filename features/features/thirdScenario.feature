Feature: Third Scenario
Scenario: Make a purchase
 Given I open landing page
 And I have logged in
 When I click on acconut button
 And I click on 'Orders and Payment' option
 And I click on 'My payment Options' option
 And I click add new card button
 And I fill in credit card information and submit
 | Name | Card Number | Expirity Month | Exirty year |
 | John Goodman | 1234567812345678 | 4 | 2085 |
 And I see confirmation message about card info
 When I click on acconut button
 And I click on 'Orders and Payment' option
 And I click on 'My Saved Addresses' option
 And I click on new Address button
 And I add address information and submit
 | Country |  Name | Mobile Number | Zip Code | Address | City | State |
 | John Goodman | United States | 1234567891 | 00000 | sunset bv | Los Angeles | California |
And I add 'Best Juice Shop Salesman Artwork' to basket and checkout
And I choose saved address
And I choose 'One day delivery'
And I choose saved card
And I place order and pay
Then I am in order completion page
And I see correct order address
And I see order details
#  | Product | Price | Quantity | Total Price |
#  | Best Juice Shop Salesman Artwork | 5000 | 1 | 5000 |
 And I see end total price 
#  | Items | 5000 |
#  | Delivery | 0.99 |
#  | Promotion | 0.00 |
#  | Total price | 5000.99 |
