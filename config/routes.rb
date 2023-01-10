Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users do 
    end
    resources :carts, only: [:destroy]
    resource :session, only: [:create, :destroy]
    resources :carted_items, only: [:create, :index, :show, :destroy, :update]
    resources :products, only: [:index, :show] do 
    resources :reviews, only: [:index]
    end

    resources :reviews, only: [:create, :update, :destroy]
    resources :review_user,only: [:show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

end

get '*path', to: "static_pages#frontend_index"
