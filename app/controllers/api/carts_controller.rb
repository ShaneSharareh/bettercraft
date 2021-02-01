class Api::CartsController < ApplicationController
#  def create
#         @cart = Cart.new()
#         @cart.user_id = current_user.id 
#         if @cart.save 
#             render :show
#         else 
#             render json: @cart.errors.full_messages, status: 401
#         end
#     end

    def destroy
        CartedItem.where(cart_id:current_user.cart.id).delete_all
        @carted_items = Cart.find_by(id: current_user.cart.id).cart_items
        render '/api/carted_items/index'
    end

end
