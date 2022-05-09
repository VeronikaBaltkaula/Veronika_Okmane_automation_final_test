Feature: Fourth Scenario
Scenario: Shopping
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