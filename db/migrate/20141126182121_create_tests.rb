class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :question
      t.string :answera
      t.string :answerb
      t.string :answerc
      t.string :answerd

      t.timestamps
    end
  end
end
