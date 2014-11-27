json.array!(@learns) do |learn|
  json.extract! learn, :id, :title, :image, :site, :description, :free
  json.url learn_url(learn, format: :json)
end
