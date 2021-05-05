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
    description: "Different Colored Maks that can be washed and readjustable to your convience",
    price: '$7.99',
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

product39 = Product.create!(
    name: "Popout Giftcard",
    description: "Sick of giving your significant other/best friend regular last minute cards? Take a few days ahead and give them a POP out card! Shoot us a message with the specific card of your customization",
    price: "$30.00",
    store_name: "CoolStoreCardsBro", 
    image_name: "https://i.pinimg.com/originals/6c/f7/f5/6cf7f5dc8958493c9be2c7621f905bb1.jpg",
    category: "Gifts-Gift-Cards",
    shipping: "FREE"
)

product40 = Product.create!(
    name: "Christmas Tree Ornament Bird",
    description: "Christmas Tree Ornament Bird Felt Decoration",
    price: "$30.00",
    store_name: "ForLoveDove", 
    image_name: "https://i.pinimg.com/236x/95/96/0f/95960f38154d7ca7e9ac55014afbd1e6.jpg",
    category: "Holiday-Shop",
    shipping: "FREE"
)


product41 = Product.create!(
    name: "Peter Pan Artwork",
    description: "Creative Peter Pan artwork for those who love and cherish the classic disney cartoon",
    price: "$50.00",
    store_name: "NozProductions", 
    image_name: "/images/peterpan.jpg",
    category: "Art-Collectibles",
    shipping: "FREE"
)


product42 = Product.create!(
    name: "Mick Jagger Artwork",
    description: "Mick Jagger Painting to hang on your wall for those classic rock and Rolling Stones lover",
    price: "$50.00",
    store_name: "NozProductions", 
    image_name: "/images/jagger.jpg",
    category: "Art-Collectibles",
    shipping: "FREE"
)


product43 = Product.create!(
    name: "Cozy Chair and Welcome Mat Set",
    description: "Cozy Chair and Welcome Mat to aid to a comfortable yet rich way of living",
    price: "$150.00",
    store_name: "LivingComfort", 
    image_name: "https://media3.s-nbcnews.com/j/newscms/2020_11/1548376/cozy-home-today-main-200313_58fcbcf280383a99e90d9d236fd9cfa6.fit-760w.jpg",
    category: "Home-Living",
    shipping: "PAID"
)


product44 = Product.create!(
    name: "Customizable inflatable toys",
    description: "Personalize an inflatable toy with your face in it",
    price: "$45.00",
    store_name: "ToyTricks", 
    image_name: "https://cdn.trendhunterstatic.com/thumbs/customized-inflatables.jpeg",
    category: "Toys-Entertainment",
    shipping: "FREE"
)


product45 = Product.create!(
    name: "Coldplay Lego Figures",
    description: "Ever want a band to not only visit your town, but also your lego world? Have Coldplay be that band!",
    price: "$35.00",
    store_name: "SimonSings", 
    image_name: "https://i.pinimg.com/originals/45/2a/03/452a03ace3a16780b0a5c3f7a371a9af.jpg",
    category: "Toys-Entertainment",
    shipping: "FREEE"
)


product46 = Product.create!(
    name: "Grohl Action Figure",
    description: "Everlong Grohl Action Figure For Foo Fighter Fans",
    price: "$12.00",
    store_name: "SimonSings", 
    image_name: "https://preview.redd.it/0agrnvbaahs51.jpg?width=3024&format=pjpg&auto=webp&s=c7224e74297a0ff39e0432956cc7565db074db5e",
    category: "Toys-Entertainment",
    shipping: "FREE"
)


product47 = Product.create!(
    name: "Korn's First Ever Vinyl",
    description: "For all you OG Korn fans, heres the VERY first vinyl for Korn to release. Are you ready?!!!!!",
    price: "$55.00",
    store_name: "ReadyRiseMerch", 
    image_name: "https://cdn.shopify.com/s/files/1/0105/4542/products/korn_1200x.jpg?v=1571263853",
    category: "Toys-Entertainment",
    shipping: "PAID"
)


product48 = Product.create!(
    name: "Breakfast Club's Judd Nelson Sketch",
    description: "Detailed sketch of Judd Nelsons character John Bender in The Breakfast Club",
    price: "$50.00",
    store_name: "NozProductions", 
    image_name: "/images/breakfast.jpg",
    category: "Art-Collectibles",
    shipping: "FREE"
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


