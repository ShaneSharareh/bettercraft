class Api::CartsController < ApplicationController
    def show
            cart = Cart.find_by(id: params[:id], user_id: params[:user_id])
            @products = Product.find_by(id: cart.carted_items.product_id)
            render :json => @products

    end
end
