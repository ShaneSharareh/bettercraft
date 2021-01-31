class Api::CartedItemsController < ApplicationController
       
    def create 
       @carted_item = CartedItem.create(carted_items_params);
       puts "cuurent user: #{current_user.cart}"
       @carted_item.cart_id = current_user.cart.id
       if @carted_item.save!
         puts "save successfully"
         render '/api/carted_items/index'
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
      # @cartedItem = CartItems.find_by(id: current_user.cart.id).cart_products.find_by(id: params[:id])
      
      #  render '/api/carted_items/show'
    end

    def update
      # @carted_item = CartedItem.find_by(cart_id: current_user.cart.id, product_id: params[:id])
      # if @carted_item.update( quantity: params[:quantity])
      #   puts "Updated #{params[:quantity]}"
      #    @products = Cart.find_by(id: current_user.cart.id).cart_products
      #    render '/api/carted_items/index'
      # else     
      #   render json: ['Item not could not be edited'], status: :not_found
      # end
    end




    def destroy 

        @carted_item =  CartedItem.find_by(cart_id: current_user.cart.id ,product_id:params[:id])
        if @carted_item && @carted_item.destroy 
          @products = Cart.find_by(id: current_user.cart.id).cart_products

          render '/api/carted_items/index'
        else
          puts "Delete not working..."#render json: ["not working"]

        end
    end

     def carted_items_params
        params.require(:cartedItem).permit(:product_id)
     end

     def carted_items_update_quant_params
        params.require(:cartedItem).permit(:quantity)
     end

   end

