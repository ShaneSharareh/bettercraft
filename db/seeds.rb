User.destroy_all

guestUser = User.create(
    username: 'guest',
    email: 'guest@example.com',
    password: 'password'
)