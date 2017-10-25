class RemoveVotes < ActiveRecord::Migration[5.1]
  def up
    remove_column :reviews, :votes
  end

  def down
    add_column :reviews, :votes, :integer, default: 0
  end
end
