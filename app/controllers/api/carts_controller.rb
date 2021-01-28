# class Api::CartsController < ApplicationController
#  def create
#         @cart = Cart.new()
#         @cart.user_id = current_user.id 
#         if @cart.save 
#             render :show
#         else 
#             render json: @cart.errors.full_messages, status: 401
#         end
#     end


# end
