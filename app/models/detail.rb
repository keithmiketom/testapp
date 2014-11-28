class Detail < ActiveRecord::Base
  
  
  validates_uniqueness_of :email
  
  PROFESSIONS = [ "Art Teacher", "Other Teacher", "IT Professional", "Student", "Other"]
  
  TEACHLENGTH = [ "0-5 years (NQT)", "5-10 years", "10-15 years", "15-20 years", "20-25 years", "25 years +"]
  
  LOCATION = ["Dublin", "Leinster", "Munster", "Connaught", "Ulster", "Northern Ireland", "UK", "Australia", "USA", "Canada", "Other"]
  
  PROFICIENCY =[ "1 - Basic Understanding", "2 - General Understanding", "3 - Ablility to use program like Photoshop", "4 - Some Understanding of Code", "5 - Advanced Understanding"]
end
