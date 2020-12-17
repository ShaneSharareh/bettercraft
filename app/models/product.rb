# id	integer	not null, indexed, primary key
# name	string	not null, indexed,
# description	text	not null
# price	string	not null
# seller_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null

# add_column :products, :category, :string
#       add_column :products, :shipping, :string
class Product < ApplicationRecord
    validates :name, :description, :price, :store_name, :image_name, :category, presence: true
    has_one :carted_item, 
        foreign_key: :product_id, 
        class_name: :CartedItem
    
    has_many :reviews, 
        foreign_key: :product_id,
        class_name: :Review
end
