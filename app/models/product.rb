# id	integer	not null, indexed, primary key
# name	string	not null, indexed,
# description	text	not null
# price	string	not null
# seller_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null
class Product < ApplicationRecord
    validates :name, :description, :price, :seller_id, presence: true
    
belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User
end
