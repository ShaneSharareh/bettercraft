class CreateCarts1 < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false
      t.integer :quantity
      t.timestamps
    end
    add_index :carts, :user_id
  end
end
