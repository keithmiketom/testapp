json.array!(@tests) do |test|
  json.extract! test, :id, :question, :answera, :answerb, :answerc, :answerd
  json.url test_url(test, format: :json)
end
