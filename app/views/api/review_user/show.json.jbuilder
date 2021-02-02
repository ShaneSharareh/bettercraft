json.set! @review_user.id do
    json.extract! @review_user, :id, :username, :email
end
