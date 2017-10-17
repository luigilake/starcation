Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'

  get '*path', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :celestials do
        resources :reviews, except: [:show]
      end
    end
  end

end
