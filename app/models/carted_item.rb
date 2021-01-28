# == Schema Information
#
# Table name: carted_items
#
#  id         :bigint           not null, primary key
#  cart_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quantity   :integer
#
class CartedItem < ApplicationRecord
    validates :cart_id, :product_id, presence: true

    belongs_to :cart, 
        foreign_key: :cart_id, 
        class_name: :Cart

    belongs_to :product, 
        foreign_key: :product_id, 
        class_name: :Product

end
