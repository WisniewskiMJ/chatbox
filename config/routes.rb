Rails.application.routes.draw do
  root 'messages#index'
  devise_for :users
  resources :messages, only: [:index, :create]

  mount ActionCable.server, at: '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
