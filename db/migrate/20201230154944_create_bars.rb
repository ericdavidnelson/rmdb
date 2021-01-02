class CreateBars < ActiveRecord::Migration[6.1]
  def change
    create_table :bars do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :submitted_by

      t.timestamps
    end
  end
end
