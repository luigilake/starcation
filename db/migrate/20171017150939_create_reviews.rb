class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body, null:false
      t.integer :votes, default: 0
      t.string :photo
      t.integer :rating, default: 0

      t.belongs_to :user
      t.belongs_to :celestial

      t.timestamps null:false
    end
  end
end
