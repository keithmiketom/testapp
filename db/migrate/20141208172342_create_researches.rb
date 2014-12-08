class CreateResearches < ActiveRecord::Migration
  def change
    create_table :researches do |t|
      t.string :type
      t.string :question
      t.string :subquestion
      t.string :data
      t.string :range

      t.timestamps
    end
  end
end
