class CreateCartedItems < ActiveRecord::Migration[5.2]
  def change
    create_table :carted_items do |t|
      t.integer :cart_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end
    add_index :carted_items, :cart_id
    add_index :carted_items, :product_id

  end
end
