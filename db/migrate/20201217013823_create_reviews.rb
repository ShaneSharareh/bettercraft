class CreateReviews < ActiveRecord::Migration[5.2]
#   id	integer	not null, primary key
# product_id	integer	not null, indexed, foreign key
# reviewer_id	integer	not null, indexed, foreign key
# body	text	not null
# created_at	datetime	not null
# updated_at	datetime	not null
  def change
    create_table :reviews do |t|
      t.integer :product_id, null: false
      t.integer :reviewer_id, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :reviews, :product_id
    add_index :reviews, :reviewer_id
  end
end
