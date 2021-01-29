Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users do 
    end
    # resources :carts, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :carted_items, only: [:create, :index, :show, :destroy]
    resources :products, only: [:index, :show] do 
    resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create, :update, :destroy]

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

end
