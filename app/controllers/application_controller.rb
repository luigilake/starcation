class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  

  before_action :configure_permitted_parameters, if: :devise_controller?

 private

 # def configure_permitted_parameters
 #   devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :username])
 # end


  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name, :last_name, :username, :email, :password,
      :password_confirmation, :remember_me, :avatar, :avatar_cache, :remove_avatar) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name, :last_name, :username, :email, :password,
      :password_confirmation, :current_password, :avatar, :avatar_cache, :remove_avatar) }
  end
end
