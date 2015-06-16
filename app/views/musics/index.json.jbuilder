json.array!(@musics) do |music|
  json.extract! music, :id, :title, :description, :musician, :imageUrl, :videoUrl, :color
  json.url music_url(music, format: :json)
end
