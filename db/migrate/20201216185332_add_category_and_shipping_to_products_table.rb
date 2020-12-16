class AddCategoryAndShippingToProductsTable < ActiveRecord::Migration[5.2]
  def change
      add_column :products, :category, :string
      add_column :products, :shipping, :string
  end
end
