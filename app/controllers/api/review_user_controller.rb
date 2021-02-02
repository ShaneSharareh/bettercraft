class Api::ReviewUserController < ApplicationController
     def show
        @review_user = User.find_by(id:[params[:id]])
        puts "#{@review_user.username}"
        render "api/review_user/show"
     end
end
