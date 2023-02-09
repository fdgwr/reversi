require 'rails_helper'

RSpec.describe "PassForgets", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/pass_forget/index"
      expect(response).to have_http_status(:success)
    end
  end

end
