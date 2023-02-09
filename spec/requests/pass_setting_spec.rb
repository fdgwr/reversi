require 'rails_helper'

RSpec.describe "PassSettings", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/pass_setting/index"
      expect(response).to have_http_status(:success)
    end
  end

end
