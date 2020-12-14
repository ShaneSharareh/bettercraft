class Cart < ApplicationRecord
    validates :user_id, :quantity, presence: true
end
