class AddVoteValueColumn < ActiveRecord::Migration[5.1]
  def up
    add_column :votes, :value, :integer, null: false
  end

  def down
    remove_column :votes, :value
  end
end
