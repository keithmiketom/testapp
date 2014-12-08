json.array!(@researches) do |research|
  json.extract! research, :id, :type, :question, :subquestion, :data, :range
  json.url research_url(research, format: :json)
end
