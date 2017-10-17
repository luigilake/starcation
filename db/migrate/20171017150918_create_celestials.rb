class CreateCelestials < ActiveRecord::Migration[5.1]
  def change
    create_table :celestials do |t|
      t.string :name, null: false
      t.string :photo
      t.integer :distance, null:false
      t.string :type, null:false
      t.integer :size, null:false

      t.belongs_to :user

      t.timestamps
    end
    add_index :celestials, :name, unique: true
  end
end
