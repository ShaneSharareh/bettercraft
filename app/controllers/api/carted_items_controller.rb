class Api::CartedItemsController < ApplicationController
       
    def create 
       
     if CartedItem.find_by(product_id:carted_items_params["product_id"])
        puts "error handled"  
        render json: ["Item Already Added To Cart!"], status: 404
          
     else
        @carted_item = CartedItem.new(carted_items_params);
        #  puts "current user: #{current_user.cart}"
        @carted_item.cart_id = current_user.cart.id
        @carted_item.quantity = 1


        if @carted_item.save!
          puts "save successfully"
          puts "Price: #{@carted_item.price}"
          
          @carted_items = Cart.find_by(id: current_user.cart.id).cart_items

          render '/api/carted_items/index'
        else
          puts "save unsuccessful"
        
          render json: @carted_item.errors.full_messages, status: 422

        end
    end
   end

    def index
         @carted_items = Cart.find_by(id: current_user.cart.id).cart_items
         puts "cart items #{@carted_items}"
        # @products = Cart.find_by(id: current_user.cart.id).cart_products
        #  carted_items.each do |carted_item|
        #     @products.push(Product.find_by(id: carted_item.product_id))

        #  end
       
         render '/api/carted_items/index'
    end

    def show
       @cartedItem = CartItems.find_by(id: current_user.cart.id).cart_products.find_by(id: params[:id])
      
        render '/api/carted_items/show'
    end

    def update
      @carted_item = CartedItem.find_by(id: params[:id])
      if @carted_item && @carted_item.update(quantity:(carted_items_update_quant_params["quantity"]).to_i)
        puts "Updated #{params[:quantity]}"
        @carted_items = Cart.find_by(id: current_user.cart.id).cart_items

         render '/api/carted_items/index'
      else     
        render json: ['Item not could not be edited'], status: :not_found
      end
    end




    def destroy 

        @carted_item =  CartedItem.find_by(cart_id: current_user.cart.id ,product_id:params[:id])
        if @carted_item && @carted_item.destroy 
         @carted_items = Cart.find_by(id: current_user.cart.id).cart_items

          render '/api/carted_items/index'
        else
          puts "Delete not working..."#render json: ["not working"]

        end
    end

     def carted_items_params
        params.require(:cartedItem).permit(:product_id, :price)
     end

     def carted_items_update_quant_params
        params.require(:cartedItem).permit(:quantity)
     end

   end

