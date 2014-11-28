class AddLocationToDetails < ActiveRecord::Migration
  def change
    add_column :details, :location, :string
  end
end
