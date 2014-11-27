class CreateLearns < ActiveRecord::Migration
  def change
    create_table :learns do |t|
      t.string :title
      t.string :image
      t.string :site
      t.text :description
      t.boolean :free

      t.timestamps
    end
  end
end
