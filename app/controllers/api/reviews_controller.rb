class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create]
    def index
        product = Product.find_by(id:params[:product_id])
        @reviews = product.reviews
        render :index
    end

    def create
        @review = Review.new(reviews_params)
        @review.reviewer_id = current_user.id 
        if @review.save 
            render :show
        else 
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update 
        @review = Review.find_by(id: params[:id])
        if @review.update(reviews_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 400
        end

    end


    def destroy
        @review = Review.find_by(id: params[:id])
        product = Product.find_by(id: @review.product_id)
       
        if @review && @review.destroy
            @reviews = product.reviews
            render :index
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end
    
private 
    def reviews_params
        params.require(:review).permit(:product_id, :reviewer_id, :body)
    end
end
