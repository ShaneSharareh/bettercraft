 #id	integer	not null, indexed, primary key
# name	string	not null, indexed,
# description	text	not null
# price	string	not null
# seller_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null
User.destroy_all
Product.destroy_all
Review.destroy_all
Cart.destroy_all
CartedItem.destroy_all

# guestUser = User.create(
#     username: 'guest',
#     email: 'guest@example.com',
#     password: 'password'
# )

# Cart.create(
#     user_id: guestUser.id
# )


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
    image_name: "/images/coffee-spoon.jpeg",
    category: "Home-Living",
    shipping: "FREE"
)

product2 = Product.create!(
    name: 'Customizable Wooded Sign',
    description: 'Nice customizable sign that you can use indoors or outside to be the coolest house on the block',
    price: '$12.00',
    store_name: "Alpha Omega Signs", 
    image_name: "/images/custom-wooded-sign.jpeg", 
    category: "Art-Collectibles",
    shipping: "FREE"
)

product3 = Product.create!(
    name: 'Cyclone Bottle Cutter',
    description: "You have heard the term 'Beauty from ashes', but what about beauty from glasses? BEER GLASSES! Be creative during quarantine and make something beautiful out of beer glasses",
    price: '$22.00',
    store_name: "Frazier Beers", 
    image_name: '/images/beer-glass-cutter.jpeg',
    category: "Craft-Supplies",
    shipping: "PAID"
)

product4 = Product.create!(
    name: 'Camping Planner Sticker',
    description: "Camping Trip Planner Stickers For Outdoor Fun",
    price: '$2.00',
    store_name: "twiceasniceletter", 
    image_name: '/images/invitations.jpg',
    category: "Craft-Supplies",
    shipping: "FREE"
)

product5 = Product.create!(
    name: 'Pallet Sign',
    description: "Pallet Sign, Pallet Art, Anniversary Gift, 5th Anniversary, Custom Photo Pallet, Pallet Wall Art, Rustic Home Decor, Picture Frame, Wood",
    price: '$49.99',
    store_name: "MyWoodPhoto", 
    image_name: '/images/pallet-sign.jpg',
    category: "Home-Living",
    shipping: "PAID"
)


product6 = Product.create!(
    name: 'Fashionable Womens Clothes',
    description: "Fashionable young generation womens clothing from small to large.",
    price: '$79.99',
    store_name: "trendaffair", 
    image_name: 'https://image.shutterstock.com/image-photo/set-fashionable-clothes-accessories-on-600w-711363679.jpg',
    category: "Clothing-Shoes",
    shipping: "FREE"
)


product7 = Product.create!(
    name: 'Multi-colored Homemade Masks',
    description: "Fashionable young generation womens clothing from small to large.",
    price: '$79.99',
    store_name: "trendaffair", 
    image_name: 'https://images.unsplash.com/photo-1586942593568-29361efcd571?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    category: "Home-Living",
    shipping: "PAID"
)

product8 = Product.create!(
    name: "Europeana Painting",
    description: "Ancient painting made in 1700s",
    price: "$105.00",
    store_name: "EuroArt", 
    image_name: "https://images.unsplash.com/photo-1584727774455-ccd838144b3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
    category: "Art-Collectibles",
    shipping: "PAID"
)

product9 = Product.create!(
    name: "Heaven Meets Earth Ancient Painting",
    description: "Love European art? Ever wanted Michel Angelo painting on your ceiling? Heres a fantastic wall painting",
    price: "$200.00",
    store_name: "EuroArt", 
    image_name: "https://i.icanvas.com/list-hero/michelangelo.jpg",
    category: "Art-Collectibles",
    shipping: "FREE"
)

product10 = Product.create!(
    name: "Star Wars Lego",
    description: "Star Wars Lego Set For Fans",
    price: "$30.00",
    store_name: "LucasArts", 
    image_name: "https://images.unsplash.com/photo-1585280157431-bb8515ed4e11?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    category: "Toys-Entertainment",
    shipping: "FREE"
)

product11 = Product.create!(
    name: "Robo Pet",
    description: "Robo Pet That Customizes with Barks",
    price: "$80.00",
    store_name: "TurboManProductions", 
    image_name: "https://images.unsplash.com/photo-1559715541-d4fc97b8d6dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    category: "Toys-Entertainment",
    shipping: "FREE"
)

product12 = Product.create!(
    name: "Mr and Mrs Sign and Ladder",
    description: "Have a wedding coming up? Get this nicely decorated Mr & Mrs sign",
    price: "$20.00",
    store_name: "LantyWeddings", 
    image_name: "https://images.unsplash.com/photo-1519657814741-5781d2018f70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    category: "Wedding-Party",
    shipping: "FREE"
)

product13 = Product.create!(
    name: "Basic Groomsmen Set",
    description: "Get This basic groomsmen set for a fantastic upcoming wedding",
    price: "$70.00",
    store_name: "MensClub", 
    image_name: "https://images.unsplash.com/photo-1547619378-04c6e27684cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80",
    category: "Wedding-Party",
    shipping: "FREE"
)

product14 = Product.create!(
    name: "Groom Set",
    description: "Have that nice James Bond look going for a fantastic wedding!",
    price: "$100.00",
    store_name: "MensClub", 
    image_name: "https://images.unsplash.com/photo-1592878897400-43fb1f1cc324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Wedding-Party",
    shipping: "FREE"
)

product15 = Product.create!(
    name: "Silky Wedding Dress",
    description: "Finest Custom Made Wedding Dress",
    price: "$500.00",
    store_name: "FancyChancyWeddings", 
    image_name: "https://images.unsplash.com/photo-1524048269000-9949b9a70cb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    category: "Wedding-Party",
    shipping: "FREE"
)

product16 = Product.create!(
    name: "Iron Maiden Vinyl Set",
    description: " 1970's original Iron Maiden Vinyls for all of you metalheads",
    price: "$50.00",
    store_name: "PedalToTheMetal", 
    image_name: "https://townsquare.media/site/366/files/2014/08/2014blackvinyl_450.jpg?w=980&q=75",
    category: "Toys-Entertainment",
    shipping: "FREE"
)

product17 = Product.create!(
    name: "KISS Pinball Machine",
    description: "Pinball Machine with 100 songs from KISS for those who want to play and HEAR IT LOUD",
    price: "$300.00",
    store_name: "PinballWizard", 
    image_name: "data:image/jpeg;base64,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",
    category: "Toys-Entertainment",
    shipping: "FREE"
)

product18 = Product.create!(
    name: "Trailer Park Boys(Bubbles) Face Mask",
    description: "Handmade Trailer Park Boys facemask for all you fans. Way she goes, bud",
    price: "$30.00",
    store_name: "TeamOrangie", 
    image_name: "https://i.pinimg.com/564x/e6/ea/99/e6ea99096f882c1cb692acb7b55b2318.jpg",
    category: "Clothing-Shoes",
    shipping: "FREE"
)
product19 = Product.create!(
    name: "Toddlers Beanie",
    description: "Beanies for the little ones",
    price: "$5.00",
    store_name: "LittleGiants", 
    image_name: "https://images.unsplash.com/photo-1565058528605-670489ab6f6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80",
    category: "Clothing-Shoes",
    shipping: "FREE"
)

product20 = Product.create!(
    name: "Customizable Target Giftcard",
    description: "Put your favorite message in a giftcard!",
    price: "$25.00",
    store_name: "MrWonderful", 
    image_name: "https://target.scene7.com/is/image/Target/GUEST_bdf75e31-d627-477b-985a-1d971047bf14?wid=488&hei=488&fmt=pjpeg",
    category: "Gifts-Gift-Cards",
    shipping: "FREE"
)

product21 = Product.create!(
    name: "Homemade Earring Set",
    description: "Handcrafted Earrings",
    price: "$80",
    store_name: "ChelseaEarrings", 
    image_name: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    category: "Jewelry-Accessories",
    shipping: "FREE"
)

product23 = Product.create!(
    name: "Grinch Cup",
    description: "Grinch cup for christmas and grinch lovers",
    price: "$20.50",
    store_name: "PinaColadaChristmas", 
    image_name: "https://i.etsystatic.com/19019317/c/1440/1144/0/283/il/9ea6c4/2512042090/il_340x270.2512042090_gdxg.jpg",
    category: "Holiday-Shop",
    shipping: "FREE"
)

product24 = Product.create!(
    name: "Colored Gauge Set",
    description: "Multi Color Guages",
    price: "$15.02",
    store_name: "GuageMyEyes", 
    image_name: "https://cdn11.bigcommerce.com/s-fa4u2s4x/images/stencil/1280x1280/products/165/1182/soft_silicone_ear_gauges_plugs__40242.1492612037.jpg?c=2",
    category: "Jewelry-Accessories",
    shipping: "FREE"
)

product25 = Product.create!(
    name: "HandCrafted Necklaces",
    description: "Non-Profit/Handcrafted Necklaces. Donations go to helping sea creatures and keeping our oceans clean",
    price: "$15.23",
    store_name: "Oceans11", 
    image_name: "https://images-na.ssl-images-amazon.com/images/I/71GSijHuJiL._SL1500_.jpg",
    category: "Jewelry-Accessories",
    shipping: "PAID"
)

product26 = Product.create!(
    name: "Gem Earrings",
    description: "Hand Crafted Gem Earrings, donations go to helping wildlife",
    price: "$25.00",
    store_name: "BeJeweled", 
    image_name: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/10/04/57f491772ba50a41d9002c28/m_57f491782ba50a41d9002c2a.jpg",
    category: "Jewelry-Accessories",
    shipping: "FREE"
)

product27 = Product.create!(
    name: "Hannukah Candles",
    description: "Shabbot Shalom! These are Hannukah Candles for a nice Happy Hannukah with the family",
    price: "$12.00",
    store_name: "HannukahLove", 
    image_name: "https://sunbeamcandles.com/wp-content/uploads/2015/11/p-1043-bznat-minitapers-hannukah-wmenorah-600.jpg",
    category: "Holiday-Shop",
    shipping: "FREE"
)

product28 = Product.create!(
    name: "Last Christmas, WHAM! Vinyl",
    description: "George Michael is coming home for the holidays, in this nice WHAM! Holiday Vinyl",
    price: "$20.00",
    store_name: "FaithFigure", 
    image_name: "https://i.pinimg.com/originals/f3/45/ff/f345ffa9a90ddad59f77443d8e462f97.jpg",
    category: "Holiday-Shop",
    shipping: "FREE"
)

product29 = Product.create!(
    name: "Crochet Supplies",
    description: "Make something special and dear to heart",
    price: "$15.00",
    store_name: "CrochetMate", 
    image_name: "https://images-na.ssl-images-amazon.com/images/I/716v%2Bg8k45L._AC_SL1200_.jpg",
    category: "Craft-Supplies",
    shipping: "FREE"
)

product30 = Product.create!(
    name: "Trooper Scooper- Iron Maiden Mug",
    description: "This is another one of our furry band merch collections. Not only can you customize your pet in this Trooper Album artwork, but you can get it as a mug! Upon purchase, shoot us an email with a clear picture of your pet, and let us do the rest!",
    price: "$15.00",
    store_name: "RockAnimalLovers", 
    image_name: "https://m.media-amazon.com/images/I/51qw8wDWCyL._AC_SL1200_.jpg",
    category: "Toys-Entertainment",
    shipping: "FREE"
)

product31 = Product.create!(
    name: "Goodbye Buzz Painting",
    description: "A very detailed painting of Woody from Toy Story saying goodbye to his friend Buzz as he flys off to fight Zerg and save the toy plannet",
    price: "$35.00",
    store_name: "PixarPaintings", 
    image_name: "https://render.fineartamerica.com/images/rendered/default/framed-print/images/artworkimages/medium/1/woody-of-toy-story-paul-meijering.jpg?imgWI=8&imgHI=8&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875",
    category: "Art-Collectibles",
    shipping: "PAID"
)

product32 = Product.create!(
    name: "Glitter Pens",
    description: "Glitter pens in the finest shape and form used to create very precise glitter projects. Comes with an adjustable frame to give a nice border, if you need your borders for your images glittered up",
    price: "$7.00",
    store_name: "twiceasniceletter", 
    image_name: "https://www.wikihow.com/images/thumb/4/41/Organize-Craft-Supplies-Step-8-Version-2.jpg/v4-460px-Organize-Craft-Supplies-Step-8-Version-2.jpg.webp",
    category: "Craft-Supplies",
    shipping: "FREE"
)

product33 = Product.create!(
    name: "Office Customizable Gift Card",
    description: "Customize your gift cards with your favorite office characters and office lines! After buying our product, send us a detailed email of how you would like your card made",
    price: "$30.00",
    store_name: "ALittleStitious", 
    image_name: "https://images-na.ssl-images-amazon.com/images/I/81ZaXdO2T%2BL._SX466_.jpg",
    category: "Gifts-Gift-Cards",
    shipping: "FREE"
)

product34 = Product.create!(
    name: "Customizable Cartoon Holiday Picture Frame",
    description: "Get that holiday photo with your signicant other or your family as cartoon characters!! Upon purchasing our products, send an email with your favorite photo and we will make sure you are satisfied",
    price: "$12.00",
    store_name: "TizTheArt", 
    image_name: "https://cdn0.weddingwire.com/articles/images/3/9/4/9/img_9493/il-1588xn-2632841387-dbx8.jpg",
    category: "Holiday-Shop",
    shipping: "FREE"
)

product35 = Product.create!(
    name: "Personalized Christmas Ornaments",
    description: "Personalize your christmas ornaments with your family, pets, or your significant other. Purchase this and send us an email with your photos! Make the Holiday right",
    price: "$35.00",
    store_name: "customas", 
    image_name: "https://cdn.thewirecutter.com/wp-content/uploads/2019/11/gift-guide-pers.ornaments-1024.jpg",
    category: "Holiday-Shop",
    shipping: "PAID"
)

product36 = Product.create!(
    name: "Woodburned Broncos Artwork",
    description: "Woodburned Broncos artwork made for all you broncos fans out there with a unique addition of lion and wolf",
    price: "$50.00",
    store_name: "NozProductions", 
    image_name: "/images/woodburn.png",
    category: "Art-Collectibles",
    shipping: "FREE"
)

product37 = Product.create!(
    name: "Mens Striped Sweater",
    description: "Going for a mix of that grunge and hipster trend?! Get this mens multicolor striped sweater",
    price: "$35.00",
    store_name: "TrenderBender", 
    image_name: "https://i.pinimg.com/originals/cf/de/6d/cfde6d890ea5ea7f037091c04c320028.jpg",
    category: "Clothing-Shoes",
    shipping: "FREE"
)

product38 = Product.create!(
    name: "Mens Beanie and Jean Jacket",
    description: "Beanie & Jean Jacket set to give that edgy hipster vibe you've been looking for",
    price: "$30",
    store_name: "TrenderBender", 
    image_name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ7-RINe5O0sV2FgBR0f0oH_U2HkDrEJLCg&usqp=CAU",
    category: "Clothing-Shoes",
    shipping: "PAID"
)

# product38 = Product.create!(
#     name: "",
#     description: "",
#     price: "",
#     store_name: "", 
#     image_name: "",
#     category: "",
#     shipping: ""
# )

# product38 = Product.create!(
#     name: "",
#     description: "",
#     price: "",
#     store_name: "", 
#     image_name: "",
#     category: "",
#     shipping: ""
# )


# product38 = Product.create!(
#     name: "",
#     description: "",
#     price: "",
#     store_name: "", 
#     image_name: "",
#     category: "",
#     shipping: ""
# )


# product38 = Product.create!(
#     name: "",
#     description: "",
#     price: "",
#     store_name: "", 
#     image_name: "",
#     category: "",
#     shipping: ""
# )


# product38 = Product.create!(
#     name: "",
#     description: "",
#     price: "",
#     store_name: "", 
#     image_name: "",
#     category: "",
#     shipping: ""
# )


# #id	integer	not null, primary key
# # product_id	integer	not null, indexed, foreign key
# # reviewer_id	integer	not null, indexed, foreign key
# # body	text	not null
# # created_at	datetime	not null
# # updated_at	datetime	not null
# review = Review.create!(
#     product_id: product5.id, 
#     reviewer_id: guestUser.id,
#     body: "whats good?"
# )


