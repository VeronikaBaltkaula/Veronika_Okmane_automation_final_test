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
 And I click on 'Orders and Payment' option
 And I click on 'My Saved Addresses' option
 And I click on new Address button
 And I add address information and submit
 | Country | United States |
 | Name | John Goodman |
 | Mobile Number | 1234567891 |
 | Zip Code | 00000 |
 | Address | sunset bv |
 | City | Los Angeles |
 | State | California |
