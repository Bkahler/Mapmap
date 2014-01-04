Mapmap::Application.routes.draw do
   root to: 'maps#index'
  resources :maps
end
