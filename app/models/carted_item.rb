class CartedItem < ApplicationRecord
    validates :cart_id, :product_id, :quantity, presence: true

    belongs_to :cart, 
        foreign_key: :cart_id, 
        class_name: :Cart

    belongs_to :product, 
        foreign_key: :product_id, 
        class_name: :Product

end
