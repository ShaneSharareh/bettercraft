class AddColToCartedItem < ActiveRecord::Migration[5.2]
  def change
    add_column :carted_items, :price, :string
  end
end
