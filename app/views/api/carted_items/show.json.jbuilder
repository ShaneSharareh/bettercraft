# json.partial! "api/carted_items/carted_item",carted_item: @carted_item
json.set! @carted_item.id do 
    json.extract! @carted_item, :id, :product_id, :cart_id, :price, :quantity
end
