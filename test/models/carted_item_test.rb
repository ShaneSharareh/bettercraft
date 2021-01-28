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
require 'test_helper'

class CartedItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
