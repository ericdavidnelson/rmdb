require "test_helper"

class DivebarsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @divebar = divebars(:one)
  end

  test "should get index" do
    get divebars_url, as: :json
    assert_response :success
  end

  test "should create divebar" do
    assert_difference('Divebar.count') do
      post divebars_url, params: { divebar: { description: @divebar.description, location: @divebar.location, submitted_by: @divebar.submitted_by, title: @divebar.title } }, as: :json
    end

    assert_response 201
  end

  test "should show divebar" do
    get divebar_url(@divebar), as: :json
    assert_response :success
  end

  test "should update divebar" do
    patch divebar_url(@divebar), params: { divebar: { description: @divebar.description, location: @divebar.location, submitted_by: @divebar.submitted_by, title: @divebar.title } }, as: :json
    assert_response 200
  end

  test "should destroy divebar" do
    assert_difference('Divebar.count', -1) do
      delete divebar_url(@divebar), as: :json
    end

    assert_response 204
  end
end
