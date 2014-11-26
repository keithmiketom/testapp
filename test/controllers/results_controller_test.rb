require 'test_helper'

class ResultsControllerTest < ActionController::TestCase
  test "should get survey" do
    get :survey
    assert_response :success
  end

  test "should get test" do
    get :test
    assert_response :success
  end

  test "should get individual" do
    get :individual
    assert_response :success
  end

end
