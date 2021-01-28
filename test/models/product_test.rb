# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  price       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  store_name  :string
#  image_name  :string
#  category    :string
#  shipping    :string
#
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
