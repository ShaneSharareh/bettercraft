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

product1 = Product.create!(
    name: 'spoon',
    description: 'silver studded spoon',
    price: '$12.00',
    seller_id: guestUser.id
)




