if @carted_items 
    @carted_items.each do |carted_item| 
    json.set! carted_item.product_id do 
        json.partial! "carted_item", carted_item: carted_item
    end
end