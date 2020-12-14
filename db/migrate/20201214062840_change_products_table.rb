class ChangeProductsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :seller_id, :integer
    add_column :products, :store_name, :string
  end
end
