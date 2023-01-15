class PostsController < ApplicationController

  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: :destroy

  def index
    @post = Post.new
    @posts = Post.all.includes(:user)
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to posts_url
    else
      @posts = Post.all.includes(:user)
      render 'index', status: :bad_request
    end
  end

  def destroy
    @post.destroy
    flash[:danger] = "コメントを削除しました"
    if request.referrer.nil?
      redirect_to root_url, status: :see_other
    else
      redirect_to request.referrer, status: :see_other
    end
  end

  private

    def post_params
      params.require(:post).permit(:content)
    end

    def correct_user
      @post = current_user.posts.find_by(id: params[:id])
      redirect_to root_url, status: :see_other if @post.nil?
    end

end
