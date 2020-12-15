class RemoveColFromCart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :quantity
    add_column :carted_items, :quantity, :integer
  end
end
