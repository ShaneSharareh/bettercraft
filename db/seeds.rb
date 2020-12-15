 #id	integer	not null, indexed, primary key
# name	string	not null, indexed,
# description	text	not null
# price	string	not null
# seller_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null
User.destroy_all
Product.destroy_all

guestUser = User.create(
    username: 'guest',
    email: 'guest@example.com',
    password: 'password'
)


# seller1 = User.create(
#     username: 'Odoyle',
#     email: 'odoyle@example.com',
#     password: 'password'
# )

# seller2 = User.create(
#     username: 'Jericho',
#     email: 'jericho@example.com',
#     password: 'password'
# )

# seller3 = User.create(
#     username: 'Jane',
#     email: 'jane@example.com',
#     password: 'password'
# )


# seller4 = User.create(
#     username: 'Jimothy',
#     email: 'Jimothy@example.com',
#     password: 'password'
# )



product1 = Product.create!(
    name: 'Need Coffee Engraved Spoon',
    description: 'We all need coffee, thats true, but what about a nice spoon to go with it? Start your morning right with a nice spoon dedicated to serve your every morning needs',
    price: '$9.50',
    store_name: "Augusto Productions",
    image_name: "coffee-spoon.jpeg"
)

product2 = Product.create!(
    name: 'Customizable Wooded Sign',
    description: 'Nice customizable sign that you can use indoors or outside to be the coolest house on the block',
    price: '$12.00',
    store_name: "Alpha Omega Signs", 
    image_name: "custom-wooded-sign.jpeg"
)

product3 = Product.create!(
    name: 'Cyclone Bottle Cutter',
    description: "You have heard the term 'Beauty from ashes', but what about beauty from glasses? BEER GLASSES! Be creative during quarantine and make something beautiful out of beer glasses",
    price: '$22.00',
    store_name: "Frazier Beers", 
    image_name: 'beer-glass-cutter.jpeg'
)

product4 = Product.create!(
    name: 'Camping Planner Sticker',
    description: "Camping Trip Planner Stickers For Outdoor Fun",
    price: '$2.00',
    store_name: "twiceasniceletter", 
    image_name: 'invitations.jpg'
)

product5 = Product.create!(
    name: 'Pallet Sign',
    description: "Pallet Sign, Pallet Art, Anniversary Gift, 5th Anniversary, Custom Photo Pallet, Pallet Wall Art, Rustic Home Decor, Picture Frame, Wood",
    price: '$49.99',
    store_name: "MyWoodPhoto", 
    image_name: 'pallet-sign.jpg'
)


