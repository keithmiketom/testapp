json.array!(@details) do |detail|
  json.extract! detail, :id, :name, :age, :email, :lenghtteach, :profession, :ictlevel, :research
  json.url detail_url(detail, format: :json)
end
