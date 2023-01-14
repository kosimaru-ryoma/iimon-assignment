class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name, limit: 30, null: false
      t.integer :price, null: false

      t.timestamps
    end
    add_index :items, :name, unique: true
  end
end
