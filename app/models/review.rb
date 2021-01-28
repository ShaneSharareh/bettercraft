# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  product_id  :integer          not null
#  reviewer_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
#  t.integer :product_id, null: false
#       t.integer :reviewer_id, null: false
#       t.text :body, null: false
#       t.timestamps

class Review < ApplicationRecord
    validates :product_id, :reviewer_id, :body, presence: true
    belongs_to :product, 
        foreign_key: :product_id, 
        class_name: :Product

    belongs_to :reviewer, 
        foreign_key: :reviewer_id, 
        class_name: :User
end
