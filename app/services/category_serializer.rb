class CategorySerializer

    def initialize(category_object)
        @category = category_object
    end
     
    def to_serialized_json
       @category.to_json( :include => {
            :quotes => {:only => [:content, :author]}},
            :except => [:updated_at, :created_at])
           # 
    end

end
