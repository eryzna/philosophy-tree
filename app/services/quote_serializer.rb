class QuoteSerializer

    def initialize(quote_object)
        @quote = quote_object
    end
     
    def to_serialized_json
       @quote.to_json(
            :except => [:updated_at, :created_at])
           # :include => {
               # :year => {:only => [:value]}},
    end

end