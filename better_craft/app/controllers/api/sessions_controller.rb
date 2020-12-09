class Api::SessionsController < ApplicationController
    def new 
        render :new
    end
    def create
        @user = User.find_by_credentials(params[:user][:username],params[:user][:email],params[:user][:password])
    
        if @user.nil?
            flash.now[:errors] = ['Invalid username and/or password']
            render :new
        else
             login(@user)
             redirect_to user_url(@user)
        end  
    end

    def destroy
        logout 
        redirect_to new_user_url
    end
end
