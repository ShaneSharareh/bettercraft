Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users do 
      #resources :carts, only: [:show]
    end
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do 
      #resources :carted_items, only: [:create]
    end
    # resources :carted_items, only: [:index, :destroy]

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

end
