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
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 400
        end

    end


    def destroy
        @review = Review.find_by(id: params[:id])
       
        if @review.destroy
            render :index
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def reviews_params
        params.require(:review).permit(:product_id, :reviewer_id, :body)
    end
end
