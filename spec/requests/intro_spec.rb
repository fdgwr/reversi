require 'rails_helper'

RSpec.describe "Intros", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/intro/index"
      expect(response).to have_http_status(:success)
    end
  end

end
