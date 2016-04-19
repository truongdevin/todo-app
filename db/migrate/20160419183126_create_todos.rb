class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false, index: true
      t.string :body, null: false
      t.boolean :done

      t.timestamps null: false
    end
  end
end
