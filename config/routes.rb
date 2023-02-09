Rails.application.routes.draw do
  get 'intro/index'
  get 'pass_setting/index'
  get 'pass_forget/index'
  get 'sign_up/index'
  get 'sign_in/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
