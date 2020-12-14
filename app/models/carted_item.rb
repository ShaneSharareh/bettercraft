class CartedItem < ApplicationRecord
    validates :cart_id, :product_id, presence: true
end
