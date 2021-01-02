class AddPublishedToDivebars < ActiveRecord::Migration[6.1]
  def change
    add_column :divebars, :published, :boolean
  end
end
