class UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    redirect_to(root_url, status: :see_other) unless current_user?(@user)
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      redirect_to @user
    else
      render 'new', status: :bad_request
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end

end
