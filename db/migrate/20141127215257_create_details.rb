class CreateDetails < ActiveRecord::Migration
  def change
    create_table :details do |t|
      t.string :name
      t.integer :age
      t.string :email
      t.integer :lenghtteach
      t.string :profession
      t.integer :ictlevel
      t.boolean :research

      t.timestamps
    end
  end
end
