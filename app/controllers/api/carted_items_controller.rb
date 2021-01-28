class Api::CartedItemsController < ApplicationController
       
    def create 
       @carted_item = CartedItem.create(carted_items_params);
       puts "cuurent user: #{current_user.cart}"
       @carted_item.cart_id = current_user.cart.id
       if @carted_item.save!
         puts "save successfully"
         render '/api/carted_items/show'
       else
         puts "save unsuccessful"
         render json: @carted_item.errors.full_messages, status: 422

       end 
   end

    def index
         carted_items = CartedItem.where(cart_id: current_user.cart.id)
         
         @products = Cart.find_by(id: current_user.cart.id).cart_products
        #  carted_items.each do |carted_item|
        #     @products.push(Product.find_by(id: carted_item.product_id))

        #  end
       
         render '/api/carted_items/index'
    end

    def show
      @product = Cart.find_by(id: current_user.cart.id).cart_products.find_by(id: [:carted_item][:product_id])
    end

    # def destroy 
    #     @carted_item = CartedItem.find(params[:id]);
    #     if @carted_item.destroy 

    #     end
    # end

     def carted_items_params
        params.require(:cartedItem).permit(:product_id)
     end
   end

