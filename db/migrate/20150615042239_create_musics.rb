class CreateMusics < ActiveRecord::Migration
  def change
    create_table :musics do |t|
      t.string :title
      t.text :description
      t.string :musician
      t.string :imageUrl
      t.string :videoUrl
      t.integer :color

      t.timestamps
    end
  end
end
