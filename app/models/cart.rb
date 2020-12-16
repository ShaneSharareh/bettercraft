class Cart < ApplicationRecord
    validates :user_id, presence: true
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :Cart


end
