class ItemsController < ApplicationController

  def index
    items = Item.all.to_json(only: [:name, :price])
    render json: items
  end

  def create
    item = Item.new(item_params)

    if item.save
      render json: { message: 'success' }
    else
      render json: item.errors.messages, status: :bad_request
    end
  end

  private

    def item_params
      params.require(:item).permit(:name, :price)
    end

end
