class AddAdminAndNameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :username, :string, null: false
    add_column :users, :admin, :boolean, default: false
  end
end
