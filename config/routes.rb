Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :todos, only: [:index, :create, :update, :destroy, :show]
  end
end
