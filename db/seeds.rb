 #id	integer	not null, indexed, primary key
# name	string	not null, indexed,
# description	text	not null
# price	string	not null
# seller_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null
User.destroy_all

guestUser = User.create(
    username: 'guest',
    email: 'guest@example.com',
    password: 'password'
)


seller1 = User.create(
    username: 'Odoyle',
    email: 'odoyle@example.com',
    password: 'password'
)

seller2 = User.create(
    username: 'Jericho',
    email: 'jericho@example.com',
    password: 'password'
)

seller3 = User.create(
    username: 'Jane',
    email: 'jane@example.com',
    password: 'password'
)


seller4 = User.create(
    username: 'Jimothy',
    email: 'Jimothy@example.com',
    password: 'password'
)



product1 = Product.create!(
    name: 'spoon',
    description: 'silver studded spoon',
    price: '$12.00',
    seller_id: seller1.id
)

product2 = Product.create!(
    name: 'custom-wooded-sign',
    description: 'customizable sign',
    price: '$12.00',
    seller_id: seller2.id
)

product3 = Product.create!(
    name: 'beer-glass-cutter',
    description: 'Create beautiy from beer glasses',
    price: '$12.00',
    seller_id: seller3.id
)