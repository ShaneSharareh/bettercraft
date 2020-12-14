# id	integer	not null, indexed, primary key
# name	string	not null, indexed,
# description	text	not null
# price	string	not null
# seller_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null
class Product < ApplicationRecord
    validates :name, :description, :price, :store_name, :image_name, presence: true
end
